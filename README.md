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

## 🚀 Deployment to GitHub Pages with Jekyll

This project is configured for easy deployment to GitHub Pages using Jekyll integration for seamless custom domain support.

### Prerequisites

1. A GitHub account
2. Git installed on your local machine
3. Node.js installed locally

### Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and sign in to your account
2. Click on the "+" icon in the top right corner and select "New repository"
3. Name your repository (e.g., "rankpro-landing")
4. Choose to make it public or private
5. Click "Create repository"

### Step 2: Build and Deploy

#### Option 1: Using the Provided Script (Recommended)

This project includes a `build.sh` script that handles the build process and addresses the common crypto.getRandomValues error that can occur during builds:

> **Note:** The build script includes a crypto polyfill that resolves the error `TypeError: crypto.getRandomValues is not a function` which can happen in some Node.js environments. For detailed information about this solution, see [CRYPTO_POLYFILL.md](./CRYPTO_POLYFILL.md).

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

4. Run the build script:

```bash
./build.sh
```

5. Deploy to GitHub Pages using the deploy.js script:

```bash
node deploy.js
```

#### Option 2: Using GitHub Actions (Automated)

This project is set up with GitHub Actions workflow in `.github/workflows/deploy.yml` for automated deployment:

> **Note:** The GitHub Actions workflow has been configured to use Node.js 18 and includes verification steps to ensure all required files are properly generated before deployment.

1. Push your code to GitHub:

```bash
git add .
git commit -m "Update site"
git push
```

2. GitHub Actions will automatically:
   - Build your site using the enhanced build script (with crypto polyfill)
   - Verify the build artifacts 
   - Deploy it to the gh-pages branch
   - Preserve your custom domain settings

### Step 3: Setting Up a Custom Domain

1. Make sure the CNAME file contains your domain:
```
landingpage.alassiri.nl
```

2. In your GitHub repository:
   - Go to Settings > Pages
   - Under "Custom domain", enter your domain name
   - Click "Save"
   - Ensure "Enforce HTTPS" is checked

3. Add these DNS records with your domain registrar:
   - Type: A, Name: @, Value: 185.199.108.153
   - Type: A, Name: @, Value: 185.199.109.153
   - Type: A, Name: @, Value: 185.199.110.153
   - Type: A, Name: @, Value: 185.199.111.153
   - Type: CNAME, Name: www, Value: yourusername.github.io.

### Step 4: Verify Your Deployment

After deployment, your site will be available at:
- Custom domain: `https://landingpage.alassiri.nl/`
- Default GitHub Pages URL: `https://yourusername.github.io/repository-name/`

## 🔄 Updating Your Site

1. Make your changes to the code
2. Test locally:

```bash
npm run dev
```

3. Build and verify changes:

```bash
./build.sh
```

4. Commit and push your changes:

```bash
git add .
git commit -m "Update site content"
git push
```

5. If using GitHub Actions, the site will deploy automatically.
   If not, redeploy manually:

```bash
node deploy.js
```

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgements

- [Unsplash](https://unsplash.com/) for stock images
- [Lucide Icons](https://lucide.dev/) for beautiful icons
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework