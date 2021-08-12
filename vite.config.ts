import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh';
import typescript from '@rollup/plugin-typescript'
import resolve from '@rollup/plugin-node-resolve';
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    minify: false,
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'core-design-system',
      fileName: format => `index.${format}.js`
    },
    rollupOptions: {
      external: ['react'],
      output: {
        globals: {
          react: 'React'
        },
        sourcemap: true
      }
    }
  },
  plugins: [
    reactRefresh(),
    typescript(),
    resolve()
  ]
})
