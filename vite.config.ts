import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  base: '/',
  server: {
    port: 3000,
    host: true,
    hmr: {
      overlay: false
    },
    proxy: {
      '/api': 'http://localhost:4000'
    }
  },
  assetsInclude: ['**/*.html'],
  build: {
    outDir: 'dist',
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          // Split vendor libraries into separate chunks
          'react-vendor': ['react', 'react-dom'],
          // Split UI components into separate chunks
          'ui-vendor': ['@radix-ui/react-slider', 'clsx', 'tailwind-merge', 'class-variance-authority'],
          // Split components by functionality
          'components-interactive': [
            './src/components/GrowthEngines.tsx',
            './src/components/PricingTeaser.tsx'
          ],
          'components-content': [
            './src/components/WhyChoose.tsx', 
            './src/components/Philosophy.tsx',
            './src/components/HowItWorks.tsx'
          ]
        }
      }
    },
    chunkSizeWarningLimit: 1000
  }
}) 