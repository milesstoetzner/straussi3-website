import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// BASE_PATH overrides the public base path when the site is served from a sub-path (e.g. "/straussi3-website/").
// Locally the site is served from "/".
export default defineConfig({
  base: process.env.BASE_PATH ?? '/',
  plugins: [react()],
})
