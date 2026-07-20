import { cpSync, mkdirSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');

const src = resolve(root, 'src/icons/svg');
const dest = resolve(root, 'dist/icons/svg');

mkdirSync(dest, { recursive: true });
cpSync(src, dest, { recursive: true });

console.log(`  ✓ Copied icon SVGs to dist/icons/svg/`);
