import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import rollupNodePolyFill from "rollup-plugin-node-polyfills";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    esbuildOptions: {
      define: {
        global: "globalThis", //<-- AWS SDK
      },
    },
  },
  build: {
    outDir: "./build",
    chunkSizeWarningLimit: 2048,
    assetsInlineLimit: 2048, // 2kb
    rollupOptions: {
      plugins: [
        // Enable rollup polyfills plugin
        // used during production bundling
        rollupNodePolyFill({
          sourceMap: false,
        }),
      ],
    },
  },
  resolve: {
    alias: {
      "@src": `${path.resolve(__dirname, "src")}/`,
      "./runtimeConfig": "./runtimeConfig.browser",
    },
  },
  server: {
    port: 3000,
  },
});
