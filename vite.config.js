import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig({
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#0b0b0b",
        card: "#121212",
        border: "#2a2a2a",
        accent: "#facc15",
      },
    },
  },
  plugins: [react(), tailwindcss()],
})
