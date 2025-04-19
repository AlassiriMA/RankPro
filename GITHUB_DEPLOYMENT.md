# Deploying to GitHub Pages

This guide will walk you through the process of deploying the RankPro landing page to GitHub Pages.

## Prerequisites

1. A GitHub account
2. Git installed on your local machine
3. Node.js and npm installed

## Step 1: Prepare Your Repository

1. Create a new GitHub repository for your project
2. Clone the repository to your local machine:

```bash
git clone https://github.com/yourusername/your-repo-name.git
cd your-repo-name
```

3. Copy all your project files into this directory

## Step 2: Configure for GitHub Pages

1. Install the gh-pages package:

```bash
npm install --save-dev gh-pages
```

2. Create (or modify) a `.env` file to set the base URL path for GitHub Pages:

```
# For GitHub Pages deployment
VITE_BASE_URL=/your-repo-name/
```

3. Update your Vite config by manually adding a `base` configuration in `vite.config.ts`:

```typescript
export default defineConfig({
  // Other config...
  base: process.env.VITE_BASE_URL || '/',
  // Rest of your configuration...
});
```

4. For routing to work properly with GitHub Pages, update your client-side routes to be aware of the base path.

## Step 3: Set Up Deployment Scripts

Create a file called `deploy.js` in your project root:

```javascript
// deploy.js
import { exec } from 'child_process';
import fs from 'fs';
import path from 'path';

// Build the application
console.log('Building application...');
exec('npm run build', (error, stdout, stderr) => {
  if (error) {
    console.error(`Build error: ${error}`);
    return;
  }
  console.log(stdout);
  
  // Create a deploy directory
  const deployDir = path.resolve('deploy');
  if (!fs.existsSync(deployDir)) {
    fs.mkdirSync(deployDir);
  }
  
  // Copy dist/public to deploy
  console.log('Copying build files to deploy directory...');
  fs.cpSync(path.resolve('dist/public'), deployDir, { recursive: true });
  
  // Add an empty .nojekyll file to tell GitHub to not treat this as a Jekyll site
  fs.writeFileSync(path.join(deployDir, '.nojekyll'), '');
  
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
```

## Step 4: Deploy to GitHub Pages

1. Add and commit your changes:

```bash
git add .
git commit -m "Prepare for GitHub Pages deployment"
git push origin main
```

2. Run the deployment script:

```bash
node deploy.js
```

3. The site will be deployed to GitHub Pages and will be available at:
   `https://yourusername.github.io/your-repo-name/`

## Step 5: Configure GitHub Pages Settings

1. Go to your GitHub repository settings
2. Navigate to "Pages" in the left sidebar
3. Under "Source", select "Deploy from a branch"
4. Select the "gh-pages" branch and "/ (root)" folder
5. Click "Save"

## Troubleshooting

If you encounter any issues, consider the following:

1. **404 errors for assets**: Ensure all your asset paths use relative URLs or are prefixed with the base URL.

2. **Routing issues**: If using client-side routing, you might need to configure your router to work with GitHub Pages. Consider using hash-based routing for simpler deployment.

3. **Custom domain**: If you want to use a custom domain, add a CNAME file to your deploy directory with your domain name.

## Updating Your Deployment

Whenever you make changes to your project:

1. Commit and push your changes to GitHub
2. Run the deployment script again:

```bash
node deploy.js
```

Your changes will be deployed to GitHub Pages automatically.