import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: 'docs'
  },
  plugins: [react()],
  base: '/paallaire.github.io/gsap'
})

// https://paallaire.github.io/gsap/assets/index-def32344.js
// https://paallaire.github.io/gsap/assets/index-def32344.js

