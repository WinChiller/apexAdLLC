#!/bin/bash
set -e

echo "Node version: $(node -v)"
echo "NPM version: $(npm -v)"

cd apexad-website

echo "Cleaning cache directories..."
rm -rf node_modules/.cache || true
rm -rf .npm || true

echo "Installing dependencies..."
npm install --legacy-peer-deps --no-audit --prefer-offline

echo "Building project..."
export CI=false
export NODE_OPTIONS="--max-old-space-size=4096"
CI=false npm run build

echo "Build complete!" 