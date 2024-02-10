import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import gltf from 'vite-plugin-gltf'

export default defineConfig({
  plugins: [react(), gltf()],
  base: '/7DS-website-front/',
})
