// import { defineConfig } from "vite";
// import vue from "@vitejs/plugin-vue";
// import path from "path";

// export default defineConfig({
//   base: "/Taste",
//   plugins: [vue()],
//   resolve: {
//     alias: {
//       "@": path.resolve(__dirname, "./src"),
//     },
//   },
// });

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

export default defineConfig({
  base: "/Taste",
  plugins: [vue()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    sourcemap: true,
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "./src/index.html"),
        // about: path.resolve(__dirname, "./src/about.html"),
        // contact: path.resolve(__dirname, "./src/contact.html"),
        // Додайте більше сторінок, як потрібно
      },
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return "vendor";
          }
        },
        entryFileNames: ({ name }) => {
          return name === "index"
            ? "js/[name].[hash].js"
            : "js/[name]/[name].[hash].js";
        },
      },
    },
    outDir: "../dist",
    chunkSizeWarningLimit: 500,
  },
});
