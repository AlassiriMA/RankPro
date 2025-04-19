// deploy.js - Simple deployment script for GitHub Pages
import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

// Set NODE_OPTIONS to avoid the crypto.getRandomValues error
process.env.NODE_OPTIONS = '--experimental-global-webcrypto';

try {
  // Build the application
  console.log('Building application...');
  execSync('./build.sh', { stdio: 'inherit' });
  
  // Ensure dist/public directory exists
  const publicDir = path.resolve('dist/public');
  if (!fs.existsSync(publicDir)) {
    console.error('Error: Build directory not found!');
    process.exit(1);
  }
  
  // Copy necessary files for GitHub Pages
  console.log('Preparing for GitHub Pages...');
  
  // Copy .nojekyll to the public directory
  fs.copyFileSync('.nojekyll', path.join(publicDir, '.nojekyll'));
  
  // Copy CNAME to the public directory
  fs.copyFileSync('CNAME', path.join(publicDir, 'CNAME'));
  
  // Deploy using gh-pages
  console.log('Deploying to GitHub Pages...');
  execSync('npx gh-pages -d dist/public', { stdio: 'inherit' });
  
  console.log('✓ Deployment successful!');
  console.log('Your site will be available at: https://landingpage.alassiri.nl');
} catch (error) {
  console.error('Deployment failed:', error.message);
  process.exit(1);
}