#!/bin/bash

# Create a temporary build script that includes polyfills
cat > temp-build.mjs << 'EOL'
// Crypto polyfill
if (typeof global.crypto === 'undefined') {
  global.crypto = {
    getRandomValues: function(buffer) {
      for (let i = 0; i < buffer.length; i++) {
        buffer[i] = Math.floor(Math.random() * 256);
      }
      return buffer;
    }
  };
}

// Run the actual build
import { execSync } from 'child_process';
try {
  console.log('Building application with crypto polyfill...');
  execSync('npx vite build', { stdio: 'inherit' });
  execSync('npx esbuild server/index.ts --platform=node --packages=external --bundle --format=esm --outdir=dist', { stdio: 'inherit' });
  console.log('✓ Build completed successfully!');
} catch (error) {
  console.error('× Build failed:', error.message);
  process.exit(1);
}
EOL

# Run our temporary build script
echo "Starting build with custom polyfill..."
node temp-build.mjs

# Check if build was successful
if [ $? -eq 0 ]; then
  echo "✓ Build successful!"
  
  # Copy important files to the dist/public directory
  echo "Copying deployment files..."
  cp .nojekyll dist/public/
  cp CNAME dist/public/
  
  # Clean up
  rm temp-build.mjs
  
  echo "Build artifacts are ready in dist/public/"
else
  echo "× Build failed. Please check the error messages above."
  rm temp-build.mjs 2>/dev/null || true
  exit 1
fi