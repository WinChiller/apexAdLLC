// Simplified build script with better error handling
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Print debugging information
console.log('Starting build process...');
console.log('Node version:', process.version);
console.log('Current directory:', process.cwd());
console.log('Directory contents:', fs.readdirSync('.'));

try {
  // Set environment variables
  process.env.CI = 'false';
  process.env.NODE_OPTIONS = '--max-old-space-size=8192';
  
  // Clean cache directory if it exists
  const cacheDir = path.join(__dirname, 'apexad-website', 'node_modules', '.cache');
  if (fs.existsSync(cacheDir)) {
    console.log('Cleaning cache directory...');
    try {
      fs.rmSync(cacheDir, { recursive: true, force: true });
    } catch (err) {
      console.log('Warning: Failed to clean cache directory:', err.message);
      // Continue despite cache cleaning failure
    }
  }

  // Change to apexad-website directory
  const websiteDir = path.join(__dirname, 'apexad-website');
  console.log('Changing to directory:', websiteDir);
  process.chdir(websiteDir);
  console.log('Now in directory:', process.cwd());
  console.log('Directory contents:', fs.readdirSync('.'));

  // Install dependencies
  console.log('Installing dependencies...');
  execSync('npm install --legacy-peer-deps --no-audit', { 
    stdio: 'inherit',
    env: { 
      ...process.env, 
      CI: 'false',
      NODE_OPTIONS: '--max-old-space-size=8192'
    }
  });

  // Build the project
  console.log('Building project...');
  execSync('npm run build', { 
    stdio: 'inherit',
    env: { 
      ...process.env, 
      CI: 'false',
      NODE_OPTIONS: '--max-old-space-size=8192'
    }
  });

  console.log('Build completed successfully!');
  process.exit(0);
} catch (error) {
  console.error('Build failed with error:', error.message);
  
  // Try to gather more information about the error
  if (error.stderr) {
    console.error('Standard error output:', error.stderr.toString());
  }
  if (error.stdout) {
    console.error('Standard output:', error.stdout.toString());
  }
  
  process.exit(1);
} 