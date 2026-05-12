import { defineConfig } from 'vite';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

// Standalone vanilla-JS bundle for the cu-motion scroll-reveal runtime.
// Vite IIFE format requires a single entry per build, so each vanilla
// bundle gets its own config (mirrors vite.config.vanilla.ts for videoCard).
// Output goes to dist/vanilla-js/ alongside the other framework-free scripts.
export default defineConfig({
  publicDir: false,
  build: {
    emptyOutDir: false,
    outDir: 'dist/vanilla-js',
    lib: {
      entry: {
        cuMotion: resolve(__dirname, 'src/utils/motion/vanilla.ts'),
      },
      formats: ['iife', 'es'],
      // cuMotion writes window.cuMotion itself; the IIFE global name is
      // required by Vite but unused at runtime.
      name: 'RDSCuMotion',
      fileName: (format, entryName) => {
        if (format === 'iife') return `${entryName}.js`;
        return `${entryName}.mjs`;
      },
    },
    minify: 'esbuild',
  },
});
