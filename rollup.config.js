import path from 'path'
import svelte from 'rollup-plugin-svelte'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import replace from '@rollup/plugin-replace'

import del from 'rollup-plugin-delete'

import livereload from 'rollup-plugin-livereload'
import { terser } from 'rollup-plugin-terser'

import svg from 'rollup-plugin-svelte-svg'

import replacement from 'rollup-plugin-module-replacement'

import sveltePreprocess from 'svelte-preprocess'

import { config } from 'dotenv'

const production = !process.env.ROLLUP_WATCH

const customResolver = resolve({
  extensions: ['.js', '.svelte']
})

const projectRootDir = path.resolve(__dirname)

function serve() {
  let server

  function toExit() {
    if (server) server.kill(0)
  }

  return {
    writeBundle() {
      if (server) return
      server = require('child_process').spawn(
        'npm',
        ['run', 'start', '--', '--dev'],
        {
          stdio: ['ignore', 'inherit', 'inherit'],
          shell: true,
        }
      )

      process.on('SIGTERM', toExit)
      process.on('exit', toExit)
    },
  }
}

export default {
  input: 'src/main.js',
  output: {
    format: 'es',
    dir: 'public/build/',
  },
  // output: {
  //   sourcemap: !production,
  //   format: 'iife',
  //   name: 'app',
  //   file: 'public/build/bundle.js',
  // },
  plugins: [
    svelte({
      preprocess: sveltePreprocess({
        postcss: true,
      }),
      // enable run-time checks when not in production
      dev: !production,
      // we'll extract any component CSS out into
      // a separate file - better for performance
      css: (css) => {
        css.write('public/build/bundle.css', !production)
      }
    }),
    svg(),
    replacement({
        entries: [
          {
            find: 'components',
            replacement: path.resolve(projectRootDir, 'src/components')
          },
          {
            find: 'assets',
            replacement: path.resolve(projectRootDir, 'src/assets')
          },
          {
            find: 'services',
            replacement: path.resolve(projectRootDir, 'src/services')
          },
          {
            find: 'utils',
            replacement: path.resolve(projectRootDir, 'src/utils')
          },
        ],
        customResolver
    }),
    // If you have external dependencies installed from
    // npm, you'll most likely need these plugins. In
    // some cases you'll need additional configuration -
    // consult the documentation for details:
    // https://github.com/rollup/plugins/tree/master/packages/commonjs
    resolve({
      browser: true,
      dedupe: ['svelte'],
      extensions: ['.js', '.svelte']
    }),

    replace({
      __bobo: JSON.stringify({
        env: {
          isProd: production,
          ...config().parsed
        }
      })
    }),

    commonjs(),

    // In dev mode, call `npm run start` once
    // the bundle has been generated
    !production && serve(),

    // Watch the `public` directory and refresh the
    // browser on changes when not in production
    !production && livereload('public'),

    // If we're building for production (npm run build
    // instead of npm run dev), minify
    production && terser({
      compress: {
        unused: false,
        collapse_vars: false,
      }
    }),
    production && del({
      targets: 'public/build/*'
    }),
  ],
  watch: {
    clearScreen: false,
  },
}
