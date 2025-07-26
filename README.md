# Chakradhar Reddy Bijjamula - Portfolio Website

A modern, professional portfolio website built with React, TypeScript, and Framer Motion. Features smooth animations, dark/light mode toggle, and fully responsive design.

## 🚀 Features

- **Modern Design**: Clean, professional design inspired by MUI and shadcn/ui
- **Smooth Animations**: Beautiful page transitions and micro-interactions using Framer Motion
- **Dark/Light Mode**: Toggle between themes with smooth transitions
- **Fully Responsive**: Optimized for mobile, tablet, and desktop
- **SEO Optimized**: Clean structure and meta tags for better search visibility
- **Performance Focused**: Fast loading with optimized assets

## 🛠️ Tech Stack

- **React 18** with TypeScript
- **Framer Motion** for animations
- **Tailwind CSS** for styling
- **Lucide React** for icons
- **Vite** for build tooling

## 📱 Sections

1. **Hero** - Introduction with animated background elements
2. **About** - Professional background and education
3. **Skills** - Technical and soft skills with progress bars
4. **Certifications** - Professional certifications with verification details
5. **Projects** - Featured projects with descriptions and tech stacks
6. **Achievements** - Hackathons and competition achievements
7. **Contact** - Contact form and professional information
8. **Footer** - Links and additional information

## 🎨 Design Features

- **Color Scheme**: Deep Blue (#1e40af), Slate Gray (#64748b), Electric Blue (#0ea5e9) accents
- **Typography**: Clean, readable fonts with proper hierarchy
- **Animations**: Smooth scroll, hover effects, and page transitions
- **Glass Morphism**: Modern card designs with subtle shadows
- **Responsive Breakpoints**: Mobile-first design approach

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd chakradhar-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## 📦 Deployment Options

### GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json:
```json
{
  "homepage": "https://yourusername.github.io/repository-name",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```
3. Deploy: `npm run deploy`

### Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

### Netlify
1. Build the project: `npm run build`
2. Drag and drop the `dist` folder to Netlify
3. Or connect your Git repository for automatic deployments

## 🎯 Performance Optimizations

- **Code Splitting**: Dynamic imports for better loading
- **Image Optimization**: Using external CDN images
- **Bundle Optimization**: Vite's built-in optimizations
- **CSS Purging**: Tailwind's JIT mode removes unused styles

## 🔧 Customization

### Colors
Update the color scheme in `tailwind.config.js`:
```javascript
theme: {
  extend: {
    colors: {
      primary: '#1e40af',
      secondary: '#0ea5e9',
      accent: '#64748b'
    }
  }
}
```

### Content
Update personal information in each component:
- `Hero.tsx` - Name and introduction
- `About.tsx` - Professional background
- `Contact.tsx` - Contact information
- Other components as needed

### Animations
Customize animations in component files using Framer Motion:
```javascript
const variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};
```

## 📱 Mobile Optimization

- Touch-friendly navigation
- Optimized font sizes and spacing
- Responsive images and layouts
- Fast loading on mobile networks

## 🌟 Key Features for Recruiters

- **Professional Presentation**: Clean, modern design that impresses
- **Easy Navigation**: Smooth scrolling and clear sections
- **Comprehensive Information**: All relevant professional details
- **Contact Integration**: Multiple ways to get in touch
- **Performance**: Fast loading and smooth interactions

## 📧 Contact Information

- **Email**: chakradharreddybijjamula@gmail.com
- **Phone**: +91 8074691024
- **Location**: Guntur, India
- **LinkedIn**: [chakradharreddy-bijjamula](https://www.linkedin.com/in/chakradharreddy-bijjamula/)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

---

**Built with ❤️ by Chakradhar Reddy Bijjamula**