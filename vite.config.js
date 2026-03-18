import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: command === 'build' ? '/CSE326-website-ca3/' : '/',
  server: {
    open: true
  }
}))
