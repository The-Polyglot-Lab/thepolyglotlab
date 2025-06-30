import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [
      "dc74-2a00-23c4-346-4601-8d73-ac77-364-6a34.ngrok-free.app" // 👈 your ngrok URL
    ]
  },
})
