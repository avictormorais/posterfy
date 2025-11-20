import { readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const distPath = join(__dirname, '..', 'dist');
const versionPath = join(distPath, 'version.json');

const buildTime = Date.now().toString();
const versionContent = {
  version: buildTime
};

writeFileSync(versionPath, JSON.stringify(versionContent, null, 2));
console.log(`Version file created with timestamp: ${buildTime}`);
