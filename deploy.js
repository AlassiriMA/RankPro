// deploy.js - Deployment script for GitHub Pages
import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

// Ensure we have crypto.getRandomValues
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

try {
  // Run our build script
  console.log('Building application using build.sh...');
  execSync('chmod +x ./build.sh && ./build.sh', { stdio: 'inherit' });
  
  // Ensure dist/public directory exists
  const publicDir = path.resolve('dist/public');
  if (!fs.existsSync(publicDir)) {
    console.error('Error: Build directory not found!');
    process.exit(1);
  }
  
  // Verify key files exist in the dist/public directory
  console.log('Verifying build output...');
  const requiredFiles = ['index.html', 'assets'];
  for (const file of requiredFiles) {
    if (!fs.existsSync(path.join(publicDir, file))) {
      console.error(`Error: Required file/directory '${file}' not found in build output!`);
      process.exit(1);
    }
  }
  
  // Ensure GitHub Pages specific files exist
  console.log('Ensuring GitHub Pages files exist...');
  if (!fs.existsSync(path.join(publicDir, '.nojekyll'))) {
    console.log('Creating .nojekyll file in dist/public...');
    fs.writeFileSync(path.join(publicDir, '.nojekyll'), '');
  }
  
  if (!fs.existsSync(path.join(publicDir, 'CNAME'))) {
    console.log('Copying CNAME to dist/public...');
    fs.copyFileSync('CNAME', path.join(publicDir, 'CNAME'));
  }
  
  // Deploy using gh-pages
  console.log('Deploying to GitHub Pages...');
  execSync('npx gh-pages -d dist/public', { stdio: 'inherit' });
  
  console.log('✓ Deployment successful!');
  console.log('Your site will be available at: https://landingpage.alassiri.nl');
} catch (error) {
  console.error('Deployment failed:', error.message);
  process.exit(1);
}