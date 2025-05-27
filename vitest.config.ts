import { defineConfig } from 'vitest/config';
import path from 'path';

export default defineConfig({
  test: {
    globals: true,
    environment: 'node',
    include: ['tests/**/*.test.ts'],
  },
  resolve: {
    alias: {
      application: path.resolve(__dirname, 'src/application'),
      domain: path.resolve(__dirname, 'src/domain'),
      infrastructure: path.resolve(__dirname, 'src/infrastructure'),
      interfaces: path.resolve(__dirname, 'src/interfaces'),
    },
  },
});
