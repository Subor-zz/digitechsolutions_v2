const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputPath = path.join(__dirname, '../public/logo-transparent.png');
const outputDir = path.join(__dirname, '../public');

async function generateFavicons() {
  try {
    // Generate favicon.png (32x32 for modern browsers)
    await sharp(inputPath)
      .resize(32, 32, { fit: 'cover', background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .png()
      .toFile(path.join(outputDir, 'favicon-32x32.png'));

    // Generate favicon.png (16x16 for legacy browsers)
    await sharp(inputPath)
      .resize(16, 16, { fit: 'cover', background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .png()
      .toFile(path.join(outputDir, 'favicon-16x16.png'));

    // Generate favicon.png (as generic favicon.png)
    await sharp(inputPath)
      .resize(32, 32, { fit: 'cover', background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .png()
      .toFile(path.join(outputDir, 'favicon.png'));

    // Generate apple-touch-icon.png (180x180 for iOS)
    await sharp(inputPath)
      .resize(180, 180, { fit: 'cover', background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .png()
      .toFile(path.join(outputDir, 'apple-touch-icon.png'));

    // Generate icon.png (192x192 for PWA)
    await sharp(inputPath)
      .resize(192, 192, { fit: 'cover', background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .png()
      .toFile(path.join(outputDir, 'icon-192.png'));

    // Generate icon.png (512x512 for PWA)
    await sharp(inputPath)
      .resize(512, 512, { fit: 'cover', background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .png()
      .toFile(path.join(outputDir, 'icon-512.png'));

    console.log('✅ Favicons generated successfully!');
    console.log('  - favicon-32x32.png');
    console.log('  - favicon-16x16.png');
    console.log('  - favicon.png');
    console.log('  - apple-touch-icon.png');
    console.log('  - icon-192.png');
    console.log('  - icon-512.png');
  } catch (error) {
    console.error('Error generating favicons:', error);
    process.exit(1);
  }
}

generateFavicons();
