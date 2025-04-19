# Deploying to GitHub Pages with Jekyll

This guide will walk you through deploying RankPro to GitHub Pages using Jekyll for simplified deployment.

## Prerequisites

1. A GitHub account
2. Git installed on your local machine
3. Node.js and npm installed
4. Ruby and Jekyll (optional for local testing)

## Step 1: Prepare Your Repository

1. Create a new GitHub repository for your project
2. Clone the repository to your local machine:

```bash
git clone https://github.com/yourusername/your-repo-name.git
cd your-repo-name
```

3. Copy all your project files into this directory

## Step 2: Configure for Jekyll on GitHub Pages

GitHub Pages automatically uses Jekyll to build your site. We've already added the required configuration files:

1. `_config.yml` - Jekyll configuration
2. `.nojekyll` - An empty file to ensure GitHub respects files starting with underscores
3. `Gemfile` - Ruby dependencies for local Jekyll testing

### Understanding the Jekyll Configuration

The `_config.yml` file includes:

```yaml
# Site settings
title: RankPro - AI-Powered SEO Platform
description: Optimize your website's SEO with RankPro
baseurl: "" # the subpath of your site, e.g. /blog
url: "" # the base hostname & protocol for your site

# Build settings
source: dist/public  # Important: This tells Jekyll to use our Vite output as source
destination: _site
```

## Step 3: Build Your Site

1. Build the React application:

```bash
npm run build
```

This will create the `dist/public` directory with your built assets, which Jekyll will use as its source.

## Step 4: Deploy to GitHub Pages

### Option 1: Using GitHub Actions (Recommended)

1. Create a `.github/workflows` directory in your repository:

```bash
mkdir -p .github/workflows
```

2. Create a deployment workflow file `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  workflow_dispatch:

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v3
        
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: 16
          
      - name: Install dependencies
        run: npm ci
        
      - name: Build
        run: npm run build
        
      - name: Deploy
        uses: JamesIves/github-pages-deploy-action@v4
        with:
          folder: dist/public # The folder the action should deploy
          branch: gh-pages # The branch the action should deploy to
```

3. Commit and push these changes:

```bash
git add .
git commit -m "Add GitHub Actions workflow for deployment"
git push origin main
```

GitHub Actions will automatically build and deploy your site.

### Option 2: Manual Deployment

1. If you prefer to deploy manually, you can use the gh-pages package:

```bash
npm install --save-dev gh-pages
```

2. Add these scripts to your package.json (you'll need to ask your instructor for this change):

```json
"predeploy": "npm run build",
"deploy": "gh-pages -d dist/public"
```

3. Then deploy with:

```bash
npm run deploy
```

## Step 5: Configure GitHub Pages Settings

1. Go to your GitHub repository settings
2. Navigate to "Pages" in the left sidebar
3. Under "Source", select "Deploy from a branch"
4. Select the "gh-pages" branch and "/ (root)" folder
5. Click "Save"

## GitHub Actions Deployment (Detailed)

GitHub Actions will:
1. Trigger when you push to main
2. Check out your code
3. Set up Node.js
4. Install dependencies
5. Build your site
6. Deploy to the gh-pages branch

## Verify Your Deployment

After deployment, your site will be available at:
`https://yourusername.github.io/your-repo-name/`

## Local Testing with Jekyll (Optional)

If you want to test the Jekyll build locally:

1. Install Ruby and Jekyll
2. Run:

```bash
bundle install
bundle exec jekyll build
bundle exec jekyll serve
```

This will serve your site locally at `http://localhost:4000`.