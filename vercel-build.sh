#!/bin/bash
set -e

echo "Node version: $(node -v)"
echo "NPM version: $(npm -v)"

cd apexad-website

echo "Installing dependencies..."
npm ci --legacy-peer-deps --prefer-offline --no-audit

echo "Building project..."
export CI=false
export NODE_OPTIONS="--max-old-space-size=4096"
npm run build

echo "Build complete!" 