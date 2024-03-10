import { defineConfig } from "vite";

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
    build: {
      outDir: "dist",
      lib: {
        entry: ["./src/main.js"],
        formats: ["es"],
      },
    },
  };
});
