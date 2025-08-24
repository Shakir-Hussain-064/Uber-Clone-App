import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: '0.0.0.0',
    port: 5173, // change if needed
    strictPort: true, // fail instead of picking a random port
    watch: {
      usePolling: true, // fixes WSL2/Docker/VM environments
    },
    hmr: {
      clientPort: 5173, // force browser to connect correctly
    },
  },
})
