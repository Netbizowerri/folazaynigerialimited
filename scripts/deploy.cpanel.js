import { execSync } from 'child_process';
import { existsSync, mkdirSync, copyFileSync, readdirSync, statSync, rmSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const DIST = join(ROOT, 'dist');
const DEPLOY = join(ROOT, 'deploy');

console.log('Building project...');
execSync('npm run build', { cwd: ROOT, stdio: 'inherit' });

if (!existsSync(DIST)) {
  console.error('Build failed: dist/ not found');
  process.exit(1);
}

if (existsSync(DEPLOY)) rmSync(DEPLOY, { recursive: true });
mkdirSync(DEPLOY);

function copyRecursive(src, dest) {
  if (!existsSync(src)) return;
  const entries = readdirSync(src, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = join(src, entry.name);
    const destPath = join(dest, entry.name);
    if (entry.isDirectory()) {
      mkdirSync(destPath, { recursive: true });
      copyRecursive(srcPath, destPath);
    } else {
      copyFileSync(srcPath, destPath);
    }
  }
}

copyRecursive(DIST, DEPLOY);

console.log(`\nDeployment package ready at: ${DEPLOY}`);
console.log('Upload the contents of the "deploy" folder to your cPanel public_html/ directory via File Manager or FTP.');
console.log('Ensure the .htaccess file is included (it handles SPA routing).');
