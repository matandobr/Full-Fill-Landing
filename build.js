import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { build } from 'vite';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function buildForProduction() {
  try {
    // Build client
    await build({
      root: __dirname,
      build: {
        outDir: 'dist',
        rollupOptions: {
          input: {
            main: path.resolve(__dirname, 'index.html'),
          },
        },
      },
    });

    // Build server
    await build({
      root: __dirname,
      build: {
        ssr: true,
        outDir: 'dist-server',
        rollupOptions: {
          input: 'src/entry-server.tsx',
          output: {
            format: 'esm',
          },
        },
      },
    });

    console.log('Build completed successfully!');
  } catch (error) {
    console.error('Build failed:', error);
    process.exit(1);
  }
}

buildForProduction(); 