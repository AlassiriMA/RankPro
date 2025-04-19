#!/bin/bash

# Set environment variables to fix crypto.getRandomValues error
export NODE_OPTIONS="--experimental-global-webcrypto"

# Build the application
echo "Building with NODE_OPTIONS=$NODE_OPTIONS..."
npm run build

# Check if build was successful
if [ $? -eq 0 ]; then
  echo "✓ Build successful!"
  
  # Copy important files to the dist/public directory
  echo "Copying deployment files..."
  cp .nojekyll dist/public/
  cp CNAME dist/public/
  
  echo "Build artifacts are ready in dist/public/"
else
  echo "× Build failed. Please check the error messages above."
  exit 1
fi