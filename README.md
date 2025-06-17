# Sprawl.nyc

A static React site for sprawl.nyc featuring ASCII art with a dark purple theme.

## Features

- Dark purple gradient background
- ASCII art display using Unifont
- Responsive design
- Glowing text animation
- Optimized for GitHub Pages deployment

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment to GitHub Pages

1. Install the gh-pages dependency:
```bash
npm install gh-pages --save-dev
```

2. Deploy to GitHub Pages:
```bash
npm run deploy
```

This will build the project and deploy it to the `gh-pages` branch, making it available at https://sprawl.nyc

## Customization

To change the ASCII art, edit the content in the `<pre>` tag in `src/App.jsx`.

The site uses the Unifont font located at `public/unifont.woff` for the ASCII art display.
