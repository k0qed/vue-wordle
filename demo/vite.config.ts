import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      // Required: Game.vue uses $ref/$computed reactivity transform syntax
      reactivityTransform: true
    })
  ],
  resolve: {
    alias: {
      '@k0qed/vue-wordle': resolve(__dirname, '../src/index.ts')
    }
  }
})
