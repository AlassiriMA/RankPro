// deploy.js
import { exec } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get directory name in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Build the application
console.log('Building application...');
exec('npm run build', (error, stdout, stderr) => {
  if (error) {
    console.error(`Build error: ${error}`);
    return;
  }
  console.log(stdout);
  
  // Create a deploy directory
  const deployDir = path.resolve(__dirname, 'deploy');
  if (!fs.existsSync(deployDir)) {
    fs.mkdirSync(deployDir);
  } else {
    // Clear the directory
    fs.rmSync(deployDir, { recursive: true, force: true });
    fs.mkdirSync(deployDir);
  }
  
  // Copy dist/public to deploy
  console.log('Copying build files to deploy directory...');
  fs.cpSync(path.resolve(__dirname, 'dist/public'), deployDir, { recursive: true });
  
  // Add an empty .nojekyll file to tell GitHub to not treat this as a Jekyll site
  fs.writeFileSync(path.join(deployDir, '.nojekyll'), '');
  
  // Create a simple index.html redirect if needed for SPA routing
  const indexPath = path.join(deployDir, 'index.html');
  if (fs.existsSync(indexPath)) {
    const content = fs.readFileSync(indexPath, 'utf8');
    
    // Add a 404.html that's identical to index.html for SPA routing
    fs.writeFileSync(path.join(deployDir, '404.html'), content);
  }
  
  // Deploy to GitHub Pages
  console.log('Deploying to GitHub Pages...');
  exec('npx gh-pages -d deploy', (error, stdout, stderr) => {
    if (error) {
      console.error(`Deployment error: ${error}`);
      return;
    }
    console.log('Deployment successful!');
    console.log(stdout);
  });
});