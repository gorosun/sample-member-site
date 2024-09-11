/// <reference types="vitest" />
import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  build: {
    sourcemap: false, // ソースマップの生成を無効化
  },
  test: {
    globals: true,
    environment: 'happy-dom',
    setupFiles: ['./vitest-setup.ts'],
    include: ['src/**/*.test.{js,ts,jsx,tsx}', 'src/**/*.spec.{js,ts,jsx,tsx}'], // テストファイルのパスを指定
    exclude: [
      '**/node_modules/**',
      '**/dist/**',
      '**/cypress/**',
      '**/.{idea,git,cache,output,temp}/**',
      '**/{karma,rollup,webpack,vite,vitest,jest,ava,babel,nyc,cypress,tsup,build,eslint,prettier}.config.*',
    ],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
    },
  },
});
