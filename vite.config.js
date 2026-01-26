import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
// https://vite.dev/config/
export default defineConfig({
    plugins: [
        vue(),
    ],
    resolve: {
        alias: {
            '@': new URL('./src', import.meta.url).pathname,
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
        include: ['vue'],
    },
    // Environment variables
    envPrefix: 'VITE_',
});
