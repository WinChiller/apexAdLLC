// Cross-platform build script
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const os = require('os');

// Set environment variables in a cross-platform way
process.env.CI = 'false';
process.env.NODE_OPTIONS = '--max-old-space-size=4096';

// Clean cache directory if it exists
const cacheDir = path.join(__dirname, 'apexad-website', 'node_modules', '.cache');
try {
  if (fs.existsSync(cacheDir)) {
    console.log('Cleaning cache directory...');
    fs.rmSync(cacheDir, { recursive: true, force: true });
  }
} catch (err) {
  console.log('Warning: Failed to clean cache directory:', err.message);
}

// Change to apexad-website directory
process.chdir(path.join(__dirname, 'apexad-website'));
console.log('Working directory:', process.cwd());

// Install dependencies
console.log('Installing dependencies...');
execSync('npm install --legacy-peer-deps', { stdio: 'inherit' });

// Run build
console.log('Building project...');
execSync('npm run build', { stdio: 'inherit', env: { ...process.env, CI: 'false' } });

console.log('Build complete!'); 