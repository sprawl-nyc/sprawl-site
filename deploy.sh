#!/bin/bash

echo "Building the project..."
npm run build

echo "Deploying to GitHub Pages..."
npm run deploy

echo "Deployment complete! Your site should be available at https://sprawl.nyc"
echo "Note: It may take a few minutes for the changes to propagate." 