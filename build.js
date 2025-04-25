// Enhanced build script with robust error handling and cross-platform compatibility
const { spawnSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Log build start with timestamp
console.log('\n=== BUILD PROCESS STARTED ===');
console.log(`Time: ${new Date().toISOString()}`);
console.log(`Node version: ${process.version}`);
console.log(`Platform: ${process.platform}`);
console.log(`Current directory: ${process.cwd()}`);

// Environment variables for build process
process.env.CI = 'false';
process.env.SKIP_PREFLIGHT_CHECK = 'true';
process.env.GENERATE_SOURCEMAP = 'false';
process.env.NODE_OPTIONS = '--max-old-space-size=8192';

/**
 * Run a command with detailed logging and error handling
 * @param {string} command - The command to run
 * @param {string[]} args - Arguments for the command
 * @param {Object} options - Options for spawn
 * @returns {boolean} - Success status
 */
function runCommand(command, args, options = {}) {
  console.log(`\n▶ Running: ${command} ${args.join(' ')}`);
  
  const result = spawnSync(command, args, {
    stdio: 'inherit',
    shell: true,
    env: { ...process.env },
    ...options
  });
  
  if (result.error) {
    console.error(`❌ Command failed with error: ${result.error.message}`);
    return false;
  }
  
  if (result.status !== 0) {
    console.error(`❌ Command exited with code: ${result.status}`);
    return false;
  }
  
  console.log(`✅ Command completed successfully`);
  return true;
}

try {
  // Clean cache directory if it exists
  const websiteDir = path.join(__dirname, 'apexad-website');
  const cacheDir = path.join(websiteDir, 'node_modules', '.cache');
  
  if (fs.existsSync(cacheDir)) {
    console.log('\n🧹 Cleaning cache directory...');
    try {
      fs.rmSync(cacheDir, { recursive: true, force: true });
      console.log('✅ Cache cleaned successfully');
    } catch (err) {
      console.log(`⚠️ Warning: Failed to clean cache: ${err.message}`);
      // Continue despite cache cleaning failure
    }
  }

  // Change to website directory
  console.log(`\n📁 Changing to directory: ${websiteDir}`);
  process.chdir(websiteDir);
  console.log(`✅ Now in: ${process.cwd()}`);
  
  // List directory contents
  const dirContents = fs.readdirSync('.');
  console.log('\n📋 Directory contents:');
  dirContents.forEach(item => console.log(`  - ${item}`));

  // Install dependencies
  console.log('\n📦 Installing dependencies...');
  if (!runCommand('npm', ['install', '--legacy-peer-deps', '--no-audit'])) {
    throw new Error('Failed to install dependencies');
  }

  // Build the project
  console.log('\n🔨 Building project...');
  if (!runCommand('npm', ['run', 'build'])) {
    throw new Error('Failed to build project');
  }

  // Verify build output exists
  const buildDir = path.join(process.cwd(), 'build');
  if (!fs.existsSync(buildDir)) {
    throw new Error('Build directory not found after build');
  }
  
  const buildContents = fs.readdirSync(buildDir);
  if (buildContents.length === 0) {
    throw new Error('Build directory is empty after build');
  }
  
  console.log('\n📋 Build directory contents:');
  buildContents.forEach(item => console.log(`  - ${item}`));

  console.log('\n✅ BUILD COMPLETED SUCCESSFULLY!');
  process.exit(0);
} catch (error) {
  console.error(`\n❌ BUILD FAILED: ${error.message}`);
  process.exit(1);
} 