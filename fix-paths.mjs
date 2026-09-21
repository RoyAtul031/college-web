import fs from 'fs';
import path from 'path';

const distDir = path.resolve('dist');

function processDir(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      processDir(fullPath);
    } else if (/\.(html|js|css)$/.test(entry.name)) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      // Fix href and src attributes pointing to root
      content = content.replace(/(href|src|srcset|data-img)=["']\/([^"']*)["']/g, (match, attr, val) => {
        if (val.startsWith('college-web/') || val.startsWith('/')) {
          return match;
        }
        return `${attr}="/college-web/${val}"`;
      });

      // Fix specific asset paths in JS or data attributes
      const assetPrefixes = ['images/', 'gallery/', 'father.', 'ground.', 'sxc-logo.', 'website-cover.', 'xavathon-logo.', 'favicon.ico', 'style.css'];
      for (const prefix of assetPrefixes) {
        const regex = new RegExp(`(['"])\/${prefix}`, 'g');
        content = content.replace(regex, `$1/college-web/${prefix}`);
      }

      fs.writeFileSync(fullPath, content, 'utf8');
    }
  }
}

if (fs.existsSync(distDir)) {
  processDir(distDir);
  console.log('Successfully adjusted base paths for GitHub Pages (/college-web/) in dist.');
}
