import { defineConfig } from 'vite'

export default defineConfig({
  slidev: {
    vue: {
      /* vue options */
    },
  },
  resolve: {
    alias: {
      '@templates': new URL('./templates', import.meta.url).pathname,
    },
  },
})
