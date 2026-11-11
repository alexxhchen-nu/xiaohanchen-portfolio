import { build } from 'esbuild';
import fs from 'fs';

const file = Object.fromEntries(
  ['.png', '.jpg', '.webp', '.avif', '.gif', '.svg', '.mp4', '.webm', '.mov', '.glb', '.bin'].map((e) => [e, 'file'])
);

await build({
  entryPoints: ['entry.tsx'],
  outdir: 'dist',
  bundle: true,
  jsx: 'automatic',
  platform: 'browser',
  format: 'iife',
  loader: file,
  define: { 'process.env.NODE_ENV': '"production"' },
});

fs.cpSync('assets', 'dist/assets', { recursive: true });
fs.writeFileSync(
  'dist/index.html',
  '<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>Xiaohan (Alex) Chen — Data Journalist, Medill School of Journalism</title><link rel="stylesheet" href="./entry.css"></head><body><div id="root"></div><script src="./entry.js"></script></body></html>'
);
