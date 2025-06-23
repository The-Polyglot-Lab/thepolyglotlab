import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [
      "671a-2a00-23c4-346-4601-2937-6b6-b3a4-cea0.ngrok-free.app" // 👈 your ngrok URL
    ]
  },
})
