#!/bin/bash

# GitHub Pages Deployment Script for AI Healthcare Lab

echo "🚀 Starting GitHub Pages deployment..."

# Build the static site
echo "📦 Building static site..."
npm run build

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "✅ Build completed successfully!"
    
    # Create a simple server to test locally (optional)
    echo "🌐 To test locally, you can run:"
    echo "   cd out && python3 -m http.server 8000"
    echo "   Then visit: http://localhost:8000"
    echo ""
    echo "📁 Static files are ready in the 'out' folder"
    echo ""
    echo "🔧 To deploy to GitHub Pages:"
    echo "   1. Push your code to GitHub"
    echo "   2. Go to your repository settings"
    echo "   3. Enable GitHub Pages"
    echo "   4. Set source to 'Deploy from a branch'"
    echo "   5. Select 'main' branch and '/docs' folder"
    echo "   6. Or use GitHub Actions for automatic deployment"
    echo ""
    echo "📝 Note: Make sure to update the assetPrefix in next.config.ts"
    echo "   if your repository name is different from 'aih'"
    
else
    echo "❌ Build failed! Please check the errors above."
    exit 1
fi 