// eslint-disable-next-line import/no-extraneous-dependencies
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const featuresImages = path.resolve(__dirname, '../public/images/features');

fs.readdirSync(featuresImages)
  .forEach((image) => {
    if (!image.includes('-small')) {
      sharp(`${featuresImages}/${image}`)
        .resize(480)
        .toFile(path.resolve(__dirname, `${featuresImages}/${image.split('.')
          .slice(0, -1)
          .join('.')}-small.jpg`));
    }
  });

const hero = path.resolve(__dirname, '../public/images/heros/hero-image_2.jpg');
const heroDestination = path.resolve(__dirname, '../public/images/heros');

sharp(hero).resize(768).toFile(`${heroDestination}/hero-image_2-small.jpg`);
