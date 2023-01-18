import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import EsJS from '@es-js/vite-plugin-esjs'
import EsVue from '@es-js/vite-plugin-esvue'
import { URL, fileURLToPath } from 'node:url'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      include: [/\.vue$/, /\.esvue$/],
    }),
    EsJS(),
    EsVue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
    extensions: [
      '.js',
      '.json',
      '.jsx',
      '.mjs',
      '.ts',
      '.tsx',
      '.vue',
      '.esjs',
      '.esvue',
    ],
  }
})
