// vite.config.js
import { resolve } from "node:path";
import { defineConfig } from "vite";

const __dirname = new URL(".", import.meta.url).pathname;
const main = resolve(__dirname, "index.html");
const resume = resolve(__dirname, "resume/index.html");
console.log(main, resume);

export default defineConfig({
  build: {
    sourcemap: true,
    rollupOptions: {
      input: {
        main,
        resume,
      },
    },
  },
});
