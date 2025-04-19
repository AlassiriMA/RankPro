# RankPro - SEO SaaS Landing Page

A modern, SEO-optimized static landing page for an SEO SaaS business with professional design and complete metadata implementation.

![RankPro Landing Page](./screenshots/rankpro-landing-page.png)

## 🚀 Features

- **Modern UI Design** - Professional and clean design with modern UI components
- **Fully Responsive** - Works on all devices from mobile to desktop
- **SEO Optimized** - Comprehensive meta tags and structured data (JSON-LD)
- **Performance Optimized** - Lazy loading, CSS animations, and optimized asset loading
- **Accessibility** - Semantic HTML and ARIA attributes for better accessibility
- **Interactive Elements** - Smooth animations and hover effects

## 🛠️ Built With

- React + TypeScript
- Tailwind CSS for styling
- Lucide React for icons
- Intersection Observer API for scroll animations

## 📋 Page Sections

1. **Header** - Responsive navigation with mobile menu
2. **Hero Section** - Main banner with CTA and image
3. **Features Section** - Key product features with icons
4. **Dashboard Preview** - Visualization of the product
5. **Benefits Section** - Product benefits highlight
6. **Metrics Section** - Important statistics and numbers
7. **Testimonials Section** - Customer reviews and social proof
8. **Pricing Section** - Pricing plans and options
9. **CTA Section** - Final call-to-action
10. **Footer** - Links and copyright information

## 🔧 SEO Implementation

- **Meta Tags** - Title, description, and keywords
- **Open Graph** - Social media sharing optimization
- **Twitter Cards** - Twitter-specific meta tags
- **Schema.org** - JSON-LD structured data for:
  - SoftwareApplication
  - Organization
  - FAQPage

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints for:
  - Small devices (mobile)
  - Medium devices (tablets)
  - Large devices (desktops)
  - Extra large devices (large desktops)

## 🚀 Deployment to GitHub Pages

### Prerequisites

1. A GitHub account
2. Git installed on your local machine

### Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and sign in to your account
2. Click on the "+" icon in the top right corner and select "New repository"
3. Name your repository (e.g., "rankpro-landing")
4. Choose to make it public or private
5. Click "Create repository"

### Step 2: Prepare for Deployment

1. Add the following to your `package.json` file:

```json
{
  "homepage": "https://yourusername.github.io/repository-name",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

2. Install the GitHub Pages package:

```bash
npm install --save-dev gh-pages
```

3. Configure the Vite build output directory in `vite.config.ts`:

```typescript
export default defineConfig({
  // ... other config
  build: {
    outDir: 'dist',
  },
});
```

### Step 3: Deploy to GitHub Pages

1. Initialize Git in your project (if not already done):

```bash
git init
git add .
git commit -m "Initial commit"
```

2. Add your GitHub repository as a remote:

```bash
git remote add origin https://github.com/yourusername/repository-name.git
```

3. Push your code to GitHub:

```bash
git push -u origin main
```

4. Deploy to GitHub Pages:

```bash
npm run deploy
```

5. Your site will be available at: `https://yourusername.github.io/repository-name`

## 🔄 Updating Your Site

1. Make your changes to the code
2. Build and test locally:

```bash
npm run build
npm run preview
```

3. Commit and push your changes:

```bash
git add .
git commit -m "Update site content"
git push
```

4. Redeploy to GitHub Pages:

```bash
npm run deploy
```

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgements

- [Unsplash](https://unsplash.com/) for stock images
- [Lucide Icons](https://lucide.dev/) for beautiful icons
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework