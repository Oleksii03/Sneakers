import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import Components from "unplugin-vue-components/vite";

export default defineConfig({
  base: "/Taste",
  plugins: [
    vue(),
    Components({
      dirs: ["src/components", "src/pages", "src/layout/"], // Додаємо папку 'src/pages' для пошуку компонентів
      deep: true, // Шукати вкладені компоненти
      extensions: ["vue"], // Розширення файлів компонентів
      dts: "src/components.d.ts",
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@assets": "${folder}/src/assets",
      "@mixins": "${folder}/src/mixins",
      "@components": "${folder}/src/components",
      "@pages": "${folder}/src/pages",
    },
  },
  build: {
    sourcemap: true,
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "index.html"),
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
        entryFileNames: "js/[name].[hash].js",
      },
    },
    outDir: "./dist",
  },
});
