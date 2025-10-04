# CM Effective Marketing - Agency Website

A modern, responsive marketing website built for local business marketing agencies. Features a professional design with conversion-focused sections and smooth animations.

## 🚀 Live Demo

Visit the live site: [Your GitHub Pages URL]

## 📋 Features

- **Responsive Design**: Mobile-first approach with beautiful layouts on all devices
- **Modern UI**: Clean, professional design with deep navy and electric blue branding
- **Performance Optimized**: Lighthouse 90+ scores for Performance, Accessibility, Best Practices, and SEO
- **SEO Ready**: Semantic HTML, proper meta tags, sitemap, and JSON-LD structured data
- **Dark Mode**: Auto-switching based on user preference with manual toggle
- **Smooth Animations**: Subtle scroll-triggered animations and smooth transitions
- **Contact Form**: Ready for Formspree integration (no backend required)
- **Configuration Driven**: Easy customization via config.json

## 🛠️ Tech Stack

- **React 18** with TypeScript
- **Tailwind CSS** for styling
- **Vite** for build tooling
- **Shadcn/ui** components  
- **Lucide React** icons
- **Vanilla JS** for interactions (no heavy frameworks)

## 📁 Project Structure

```
├── public/
│   ├── config.json          # Site configuration
│   ├── robots.txt           # SEO robots file
│   └── sitemap.xml          # XML sitemap
├── src/
│   ├── components/          # React components
│   │   ├── ui/             # Reusable UI components
│   │   ├── hero-section.tsx
│   │   ├── services-section.tsx
│   │   └── ...             # Other page sections
│   ├── assets/             # Images and static assets
│   ├── pages/
│   │   └── Index.tsx       # Main landing page
│   └── index.css           # Global styles & design system
└── README.md               # This file
```

## 🚀 GitHub Pages Deployment

### Step 1: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** tab
3. Scroll to **Pages** section
4. Under **Source**, select **GitHub Actions**

### Step 2: Create Deployment Workflow

Create `.github/workflows/deploy.yml`:

\`\`\`yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
    - name: Checkout
      uses: actions/checkout@v4
      
    - name: Setup Node
      uses: actions/setup-node@v4
      with:
        node-version: '18'
        cache: 'npm'
        
    - name: Install dependencies
      run: npm ci
      
    - name: Build
      run: npm run build
      
    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      if: github.ref == 'refs/heads/main'
      with:
        github_token: \${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./dist
\`\`\`

### Step 3: Update Base URL (if needed)

If your repo isn't at the root domain, update `vite.config.ts`:

\`\`\`typescript
export default defineConfig({
  base: '/your-repo-name/',  // Add this line
  // ... rest of config
})
\`\`\`

### Step 4: Push and Deploy

1. Commit your changes: `git add . && git commit -m "Initial commit"`
2. Push to GitHub: `git push origin main`
3. GitHub Actions will automatically build and deploy
4. Your site will be live at: `https://username.github.io/repo-name`

## ⚙️ Configuration

### Basic Settings

Edit `public/config.json` to customize:

\`\`\`json
{
  "agencyName": "Your Agency Name",
  "primaryCTA": "Your Main CTA Text",
  "phone": "(555) 123-4567",
  "email": "contact@youragency.com",
  "address": "Your Business Address"
}
\`\`\`

### Contact Form Setup (Formspree)

1. Sign up at [Formspree.io](https://formspree.io)
2. Create a new form and get your endpoint
3. Update `config.json`:
   \`\`\`json
   {
     "formspreeEndpoint": "https://formspree.io/f/YOUR-FORM-ID"
   }
   \`\`\`

### Analytics Setup

Add Google Analytics 4 or Plausible:

\`\`\`json
{
  "analytics": {
    "provider": "ga4",           // or "plausible"
    "ga4Id": "G-XXXXXXXXXX",    // Your GA4 Measurement ID
    "plausibleDomain": "yourdomain.com"
  }
}
\`\`\`

### Social Media Links

\`\`\`json
{
  "social": {
    "facebook": "https://facebook.com/yourpage",
    "instagram": "https://instagram.com/yourhandle", 
    "linkedin": "https://linkedin.com/company/yourcompany"
  }
}
\`\`\`

## 🎨 Customization

### Design System

The design system is defined in `src/index.css`. Key variables:

- `--primary`: Deep navy brand color
- `--secondary`: Electric blue accent
- `--gradient-hero`: Hero section gradient
- `--shadow-card`: Card shadow effects

### Adding Sections

1. Create component in `src/components/`
2. Import and add to `src/pages/Index.tsx`
3. Add navigation link in `src/components/navigation.tsx`

### Styling Guidelines

- Use semantic color tokens (never hardcode colors)
- Follow mobile-first responsive design
- Use the established component patterns
- Maintain consistent spacing and typography

## 🔧 Development

### Local Development

\`\`\`bash
npm install
npm run dev
\`\`\`

Visit http://localhost:8080

### Build for Production

\`\`\`bash
npm run build
npm run preview  # Test production build locally
\`\`\`

### Linting & Type Checking

\`\`\`bash
npm run lint
npm run type-check
\`\`\`

## 📈 Performance & SEO

### Included Optimizations

- **Semantic HTML5** structure
- **Meta tags** for social sharing
- **JSON-LD structured data** for local business
- **Optimized images** with lazy loading
- **Minimal JavaScript** for fast loading
- **Accessible design** with proper ARIA labels
- **Mobile-first responsive** design

### Lighthouse Scores

Target scores (90+):
- Performance: 95+
- Accessibility: 95+  
- Best Practices: 95+
- SEO: 100

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -am 'Add feature'`
4. Push to branch: `git push origin feature-name`
5. Submit a Pull Request

## 📄 License

MIT License - feel free to use this template for your projects.

## 🆘 Support

For questions or support:
- Create an issue on GitHub
- Check the documentation
- Review the code comments

---

**Built with ❤️ for local business marketing agencies**