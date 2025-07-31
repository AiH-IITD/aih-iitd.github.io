# GitHub Pages Deployment Guide

This guide will help you deploy your AI Healthcare Lab website to GitHub Pages.

## Prerequisites

- A GitHub repository
- Node.js and npm installed locally

## Quick Deployment

1. **Build the static site locally:**
   ```bash
   npm install
   npm run build
   ```

2. **Test locally:**
   ```bash
   cd out
   python3 -m http.server 8000
   ```
   Then visit `http://localhost:8000` to verify everything works.

3. **Deploy to GitHub Pages:**

   **Option A: Manual Deployment**
   - Push your code to GitHub
   - Go to your repository Settings → Pages
   - Set source to "Deploy from a branch"
   - Select "main" branch and "/docs" folder
   - Copy the contents of the `out` folder to a `docs` folder in your repository

   **Option B: Automatic Deployment (Recommended)**
   - The GitHub Actions workflow (`.github/workflows/deploy.yml`) will automatically deploy when you push to main
   - Go to your repository Settings → Pages
   - Set source to "Deploy from a branch"
   - Select "gh-pages" branch and "/ (root)" folder

## Configuration

### Repository Name

If your repository is not named "aih", update the `assetPrefix` in `next.config.ts`:

```typescript
assetPrefix: process.env.NODE_ENV === 'production' ? '/your-repo-name/' : '',
```

### Custom Domain (Optional)

If you have a custom domain:
1. Add a `CNAME` file in the `public` folder with your domain
2. Configure your domain's DNS settings
3. Update the `assetPrefix` to `''` in `next.config.ts`

## Troubleshooting

### CSS Not Loading
- Ensure the `assetPrefix` is correctly set in `next.config.ts`
- Check that the CSS file exists in the `out/_next/static/css/` folder

### Routing Issues
- Make sure `trailingSlash: true` is set in `next.config.ts`
- Verify that all pages have `index.html` files in their respective folders

### Build Errors
- Run `npm install` to ensure all dependencies are installed
- Check that all imports are correct
- Ensure no server-side code is being used (static export only)

## File Structure

After building, your `out` folder should contain:
```
out/
├── index.html
├── _next/
│   ├── static/
│   │   ├── css/
│   │   ├── chunks/
│   │   └── media/
│   └── ...
├── team/
│   └── index.html
├── news/
│   └── index.html
├── gallery/
│   └── index.html
├── publications/
│   └── index.html
├── research/
│   └── index.html
└── images/
    └── logo.png
```

## Support

If you encounter issues:
1. Check the build output for errors
2. Verify all static files are generated correctly
3. Test locally before deploying
4. Check GitHub Actions logs if using automatic deployment 