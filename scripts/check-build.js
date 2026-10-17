// Sanity checks for the built site in build/: the core pages exist, no
// templates leaked through, and every internal href/src resolves to a file.
const fs = require('fs');
const path = require('path');

const BUILD_DIR = path.resolve(__dirname, '..', 'build');
const REQUIRED = ['index.html', '404.html', 'app.css', 'blog/index.html', 'projects/index.html', 'resume/index.html'];

function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name);
    return entry.isDirectory() ? walk(full) : [full];
  });
}

function isInternal(url) {
  return url && !/^([a-z][a-z0-9+.-]*:|\/\/|#)/i.test(url);
}

function resolves(fromFile, url) {
  const clean = decodeURIComponent(url.split(/[?#]/)[0]);
  if (!clean) return true;
  const target = clean.startsWith('/')
    ? path.join(BUILD_DIR, clean)
    : path.join(path.dirname(fromFile), clean);
  if (!target.startsWith(BUILD_DIR)) return false;
  if (fs.existsSync(target) && fs.statSync(target).isFile()) return true;
  return fs.existsSync(path.join(target, 'index.html'));
}

const errors = [];
const files = walk(BUILD_DIR);

for (const file of REQUIRED) {
  if (!fs.existsSync(path.join(BUILD_DIR, file))) errors.push(`missing ${file}`);
}

for (const file of files.filter((f) => /\.(pug|jade)$/.test(f))) {
  errors.push(`template left in build: ${path.relative(BUILD_DIR, file)}`);
}

const htmlFiles = files.filter((f) => f.endsWith('.html'));
let links = 0;
for (const file of htmlFiles) {
  const html = fs.readFileSync(file, 'utf8');
  for (const [, url] of html.matchAll(/\s(?:href|src)="([^"]*)"/g)) {
    if (!isInternal(url)) continue;
    links += 1;
    if (!resolves(file, url)) errors.push(`${path.relative(BUILD_DIR, file)}: broken link ${url}`);
  }
}

if (errors.length) {
  console.error(errors.join('\n'));
  process.exit(1);
}
console.log(`ok: ${htmlFiles.length} pages, ${links} internal links`);
