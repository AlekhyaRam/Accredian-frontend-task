import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
    server: {
        proxy: {
            "/api": {
                target: "https://friendly-liger-3116b5.netlify.app/",
            },
        },
    },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
