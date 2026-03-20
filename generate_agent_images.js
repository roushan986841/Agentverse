import { Jimp } from 'jimp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const agents = [
  { name: 'Camellia', file: 'Camellia.png', hueShift: 45 },
  { name: 'CampaignPerformance', file: 'CampaignPerformance.png', hueShift: 90 },
  { name: 'HCP360Insight', file: 'HCP360Insight.png', hueShift: 135 },
  { name: 'CampaignStrategy', file: 'CampaignStrategy.png', hueShift: 180 },
  { name: 'RequirementGathering', file: 'RequirementGathering.png', hueShift: 225 },
  { name: 'EmailSegregator', file: 'EmailSegregator.png', hueShift: 270 }
];

function rgbToHsl(r, g, b) {
  r /= 255; g /= 255; b /= 255;
  const max = Math.max(r, g, b), min = Math.min(r, g, b);
  let h, s, l = (max + min) / 2;

  if (max === min) {
    h = s = 0; // achromatic
  } else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break;
      case g: h = (b - r) / d + 2; break;
      case b: h = (r - g) / d + 4; break;
    }
    h /= 6;
  }
  return [h * 360, s, l];
}

function hslToRgb(h, s, l) {
  h /= 360;
  let r, g, b;

  if (s === 0) {
    r = g = b = l; // achromatic
  } else {
    const hue2rgb = (p, q, t) => {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1/6) return p + (q - p) * 6 * t;
      if (t < 1/2) return q;
      if (t < 2/3) return p + (q - p) * (2/3 - t) * 6;
      return p;
    };

    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;
    r = hue2rgb(p, q, h + 1/3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1/3);
  }

  return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
}

async function generate() {
  try {
    const sourcePath = path.join(__dirname, 'public', 'Flow Planner.png');
    if (!fs.existsSync(sourcePath)) {
      console.error('Source image not found:', sourcePath);
      return;
    }

    const image = await Jimp.read(sourcePath);

    // Process the original image first to update the skin tone
    const originalClone = image.clone();
    originalClone.scan(0, 0, originalClone.bitmap.width, originalClone.bitmap.height, function(x, y, idx) {
      const r = this.bitmap.data[idx + 0];
      const g = this.bitmap.data[idx + 1];
      const b = this.bitmap.data[idx + 2];
      const a = this.bitmap.data[idx + 3];
      
      if (a > 0) {
        let [h, s, l] = rgbToHsl(r, g, b);
        
        // Target skin pixels
        if (h >= 5 && h <= 40 && s > 0.1 && s <= 0.79 && l > 0.22 && l < 0.8) {
          // Increase lightness
          l = Math.min(0.95, l + 0.35);
          // Decrease saturation
          s = Math.max(0.1, s * 0.5);
          // Shift hue slightly towards 20 (more pink/peach)
          h = 20;
          
          const [newR, newG, newB] = hslToRgb(h, s, l);
          this.bitmap.data[idx + 0] = newR;
          this.bitmap.data[idx + 1] = newG;
          this.bitmap.data[idx + 2] = newB;
        }
      }
    });
    await originalClone.write(sourcePath);
    console.log('Updated Flow Planner.png with new skin tone');

    // Now process the agents based on the updated original image
    for (const agent of agents) {
      const clone = originalClone.clone();
      
      clone.scan(0, 0, clone.bitmap.width, clone.bitmap.height, function(x, y, idx) {
        const r = this.bitmap.data[idx + 0];
        const g = this.bitmap.data[idx + 1];
        const b = this.bitmap.data[idx + 2];
        const a = this.bitmap.data[idx + 3];
        
        if (a > 0) {
          let [h, s, l] = rgbToHsl(r, g, b);
          
          // Shift hue if saturation is > 0.79 (costume)
          // Skin tones have saturation <= 0.78
          if (s > 0.79) {
            h = (h + agent.hueShift) % 360;
            const [newR, newG, newB] = hslToRgb(h, s, l);
            this.bitmap.data[idx + 0] = newR;
            this.bitmap.data[idx + 1] = newG;
            this.bitmap.data[idx + 2] = newB;
          }
        }
      });
      
      const outPath = path.join(__dirname, 'public', agent.file);
      await clone.write(outPath);
      console.log(`Generated ${agent.file}`);
    }
    console.log('All images generated successfully!');
  } catch (err) {
    console.error('Error generating images:', err);
  }
}

generate();
