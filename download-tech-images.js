const https = require('https');
const fs = require('fs');
const path = require('path');

const images = {
  'tech-workstation.jpg': 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1600&q=85',
  'web-ui-code.jpg': 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1600&q=85',
  'brand-identity.jpg': 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1600&q=85',
  'creative-studio.jpg': 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=85',
  'analytics-growth.jpg': 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=85',
  'cinema-production.jpg': 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1600&q=85',
  'editorial-fashion.jpg': 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1600&q=85',
  'mobile-checkout.jpg': 'https://images.unsplash.com/photo-1556742049-0a67c5574f73?auto=format&fit=crop&w=1600&q=85',
  'digital-tablet-ui.jpg': 'https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=1600&q=85',
  'architectural-studio.jpg': 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1600&q=85',
  'code-terminal.jpg': 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1600&q=85'
};

const targetDir = path.join(__dirname, 'public', 'assets', 'showcase');
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

function downloadImage(name, url) {
  return new Promise((resolve, reject) => {
    const dest = path.join(targetDir, name);
    const file = fs.createWriteStream(dest);
    
    function fetchUrl(currentUrl) {
      https.get(currentUrl, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
        if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
          fetchUrl(res.headers.location);
          return;
        }
        if (res.statusCode !== 200) {
          reject(new Error(`Failed to get '${name}' (status code: ${res.statusCode})`));
          return;
        }
        res.pipe(file);
        file.on('finish', () => {
          file.close();
          const stats = fs.statSync(dest);
          console.log(`Downloaded ${name}: ${stats.size} bytes`);
          resolve();
        });
      }).on('error', (err) => {
        fs.unlink(dest, () => {});
        reject(err);
      });
    }

    fetchUrl(url);
  });
}

async function run() {
  for (const [name, url] of Object.entries(images)) {
    try {
      await downloadImage(name, url);
    } catch (e) {
      console.error(`Error on ${name}:`, e.message);
    }
  }
  console.log('All image downloads complete!');
}

run();
