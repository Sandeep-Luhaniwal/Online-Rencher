// vite.config.js
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        gallery: resolve(__dirname, "gallery.html"),
        faq: resolve(__dirname, "faq.html"),
        individual: resolve(__dirname, "individual.html"),
        impressum: resolve(__dirname, "impressum.html"),
        dataProtection: resolve(__dirname, "dataProtection.html"),
        terms: resolve(__dirname, "terms.html"),
      },
    },
  },
});
