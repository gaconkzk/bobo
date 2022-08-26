import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import unocss from 'unocss/vite'

import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [unocss(), svelte()],
  resolve: {
    alias: {
      $components: resolve(__dirname, 'src/components'),
      $services: resolve(__dirname, 'src/services'),
      $layouts: resolve(__dirname, 'src/layouts'),
      $utils: resolve(__dirname, 'src/utils'),
    },
  },
  envPrefix: 'BOBO_',
})
