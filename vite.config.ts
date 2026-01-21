import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          // Enable custom elements
          isCustomElement: (tag: string) => tag.startsWith('iconify-'),
        },
      },
    }),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    // Generate source maps for production debugging
    sourcemap: true,
    // Optimize chunk splitting
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['vue'],
          ui: ['@headlessui/vue'],
        },
      },
    },
    // Enable CSS code splitting
    cssCodeSplit: true,
    // Minify with esbuild for better performance
    minify: 'esbuild',
  },
  server: {
    // Enable HMR with overlay
    hmr: {
      overlay: true,
    },
    // CORS for development
    cors: true,
  },
  optimizeDeps: {
    // Pre-bundle dependencies for faster dev server
    include: ['vue', 'pinia'],
  },
  // Environment variables
  envPrefix: 'VITE_',
})
