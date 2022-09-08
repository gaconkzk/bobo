import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import unocss from 'unocss/vite'
import presetUno from '@unocss/preset-uno'
import presetWebFonts from '@unocss/preset-web-fonts'
import { presetScrollbar } from 'unocss-preset-scrollbar'
import transformerDirective from '@unocss/transformer-directives'
import { transformerVariantGroup } from 'unocss'
import { extractorSvelte } from '@unocss/core'

import { resolve } from 'path'

const hexToRGBA = (hex: string, opacity: number): string => {
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)

  return `rgba(${r},${g},${b},${opacity})`
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    unocss({
      extractors: [extractorSvelte],
      presets: [
        presetUno(),
        presetWebFonts({
          provider: 'google',
          fonts: {
            sans: 'Spectral',
            mono: ['Fira Code', 'Fira Mono:400,700'],
          },
        }),
        presetScrollbar({
          scrollbarThumbColor: '#fbfb2240',
          scrollbarTrackColor: '#00000000',
          numberToUnit: (v) => `${v / 16}rem`,
        }),
      ],
      transformers: [transformerDirective(), transformerVariantGroup()],
      rules: [
        [
          /^glm-(\w+-\d+)-(blur-\d+(px)?)-(opacity-\d+)?$/,
          (matcher, { theme }) => {
            const [, coded_color, code_blur, code_blur_px, code_opacity, ..._] =
              matcher
            // const rcolor = theme.color[color]
            const [tcolor, tweight] = coded_color.split('-')
            const color = theme.colors[tcolor][tweight]
            const [, tblur] = code_blur.split('-')
            const blur = code_blur_px ? tblur : tblur + 'rem'
            const [, topacity] = code_opacity.split('-')
            const opacity = parseInt(topacity) / 100

            const rgbaColor = hexToRGBA(color, opacity)

            return {
              background: rgbaColor,
              'box-shadow': '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
              'backdrop-filter': `blur( ${blur} )`,
            }
          },
        ],
      ],
      shortcuts: {
        'a-highlight':
          'z1 relative text-light-800 no-underline ' +
          'before:(content-none absolute -z1 top-0 bottom-2px -left-2px -right-2px bg-red-400 origin-bottom-center transform-scale-y-8 transition-all duration-100 ease-in-out) ' +
          'hover:before:(bg-red-400 opacity-75 transform-scale-y-100)',
      },
    }),
    svelte(),
  ],
  resolve: {
    alias: {
      $components: resolve(__dirname, 'src/components'),
      $services: resolve(__dirname, 'src/services'),
      $layouts: resolve(__dirname, 'src/layouts'),
      $utils: resolve(__dirname, 'src/utils'),
      $assets: resolve(__dirname, 'src/assets'),
    },
  },
  envPrefix: 'BOBO_',
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          // if (id.includes('phaser')) {
          //   return 'phaser'
          // }
          if (id.includes('node_modules')) {
            return 'vendor'
          }
        },
      },
    },
    chunkSizeWarningLimit: 2048,
  },
  optimizeDeps: {
    include: ['pixi.js'],
  },
})
