import { defineConfig } from "vite";
import { libInjectCss } from "vite-plugin-lib-inject-css";

export default defineConfig(({ mode }) => {
  if (mode === "widget") {
    return {
      build: {
        outDir: "jupyter_widget/dist",
        lib: {
          entry: ["./src/widget.js"],
          formats: ["es"],
        },
      },
    };
  }

  return {
    plugins: [libInjectCss()],
    build: {
      outDir: "dist",
      lib: {
        entry: ["./src/bzvisualizer/main.js"],
        formats: ["es"],
      },
    },
  };
});
