import { cp, mkdir, rm, stat } from 'node:fs/promises';
import { join } from 'node:path';

const root = process.cwd();
const output = join(root, 'dist');
await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });
for (const name of ['index.html', 'styles.css', 'script.js', 'favicon.svg', 'hero-workspace.webp', 'cases', 'projetos']) {
  await cp(join(root, name), join(output, name), { recursive: true });
}
for (const name of ['index.html', 'projetos/aura/index.html', 'projetos/koen/index.html', 'projetos/mateus/index.html']) {
  await stat(join(output, name));
}
console.log('Static production build complete: dist/');
