#!/bin/bash

# Exit on error
set -e

echo "Building the project..."
npm run build

echo "Copying index.html to 404.html for GitHub Pages SPA support..."
cp dist/index.html dist/404.html

echo "Pushing to GitHub Pages..."
git add .
git commit -m "Deploy to GitHub Pages"
git push

echo "Done. Make sure GitHub Pages is configured to use /docs or gh-pages branch."