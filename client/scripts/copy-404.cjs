const fs = require('fs');
try {
  fs.copyFileSync('dist/index.html', 'dist/404.html');
  console.log('Created dist/404.html for SPA fallback');
} catch (e) {
  console.error('Could not create 404.html:', e);
}