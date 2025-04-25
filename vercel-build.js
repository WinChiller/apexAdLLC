// Simplified script specifically for Vercel
const { execSync } = require('child_process');
const path = require('path');

// Print environment info
console.log('Node version:', process.version);
console.log('Environment:', process.env.VERCEL ? 'Vercel' : 'Local');

// Set build environment variables
process.env.CI = 'false';
process.env.SKIP_PREFLIGHT_CHECK = 'true';
process.env.GENERATE_SOURCEMAP = 'false';

try {
  console.log('Changing to apexad-website directory...');
  process.chdir(path.join(__dirname, 'apexad-website'));
  
  console.log('Installing dependencies...');
  execSync('npm install --no-audit --legacy-peer-deps', {
    stdio: 'inherit',
    env: {
      ...process.env,
      NODE_OPTIONS: '--max-old-space-size=4096'
    }
  });
  
  console.log('Building project...');
  execSync('CI=false npm run build', {
    stdio: 'inherit',
    env: {
      ...process.env,
      NODE_OPTIONS: '--max-old-space-size=4096'
    }
  });
  
  console.log('Build successful!');
} catch (error) {
  console.error('Build error:', error.message);
  process.exit(1);
} 