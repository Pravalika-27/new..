import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: 'https://github.com/Pravalika-27/new...git/',  // 👈 replace with your GitHub repo name
  plugins: [react()],
})
