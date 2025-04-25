// Cross-platform build script with improved timeout handling
const { execSync, spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

// Set environment variables
process.env.CI = 'false';
process.env.NODE_OPTIONS = '--max-old-space-size=8192'; // Increase memory limit

console.log('Starting build process at:', new Date().toISOString());
console.log('Node version:', process.version);

// Function to execute command with timeout
function execWithTimeout(command, timeoutMs = 300000) { // 5-minute timeout
  console.log(`Running command with ${timeoutMs/1000}s timeout: ${command}`);
  
  return new Promise((resolve, reject) => {
    const parts = command.split(' ');
    const cmd = parts[0];
    const args = parts.slice(1);

    const proc = spawn(cmd, args, { 
      shell: true,
      stdio: 'inherit',
      env: { ...process.env, CI: 'false', FORCE_COLOR: '1' }
    });
    
    // Set timeout
    const timeout = setTimeout(() => {
      console.error(`Command timed out after ${timeoutMs/1000} seconds: ${command}`);
      proc.kill();
      reject(new Error(`Command timed out: ${command}`));
    }, timeoutMs);
    
    proc.on('exit', (code) => {
      clearTimeout(timeout);
      if (code === 0) {
        resolve();
      } else {
        reject(new Error(`Command failed with exit code ${code}: ${command}`));
      }
    });
    
    proc.on('error', (err) => {
      clearTimeout(timeout);
      reject(err);
    });
  });
}

async function build() {
  try {
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

    // Install dependencies with timeout
    console.log('Installing dependencies...');
    await execWithTimeout('npm install --prefer-offline --no-audit --legacy-peer-deps', 600000); // 10 minutes

    // Run build with timeout
    console.log('Building project...');
    await execWithTimeout('npm run build', 600000); // 10 minutes

    console.log('Build completed successfully at:', new Date().toISOString());
    process.exit(0);
  } catch (error) {
    console.error('Build failed:', error.message);
    process.exit(1);
  }
}

// Start the build process
build().catch(err => {
  console.error('Unhandled build error:', err);
  process.exit(1);
}); 