# Smart Computer Frontend

A professional, responsive frontend website for Smart Computer, a small computer shop in Shevgaon offering new and refurbished laptops, desktops, and accessories.

## 🚀 Features

- **Responsive Design**: Mobile-first design that works on all devices
- **Product Catalog**: Browse new and refurbished products with filtering and search
- **Contact Form**: Client-side form validation with mailto integration
- **Modern UI**: Clean, professional design with Tailwind CSS and Framer Motion animations
- **Accessibility**: Semantic HTML, ARIA labels, and keyboard navigation support
- **Performance**: Lazy-loaded images, optimized bundle with Vite

## 🛠️ Tech Stack

- **React 18** with Vite
- **Tailwind CSS** for styling
- **React Router** for navigation
- **Framer Motion** for animations
- **Heroicons** for icons
- **ESLint** and **Prettier** for code quality

## 📋 Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

## 🚀 Getting Started

1. **Clone the repository** (if applicable) or ensure you're in the project directory.

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser** and navigate to `http://localhost:5173` (or the port shown in the terminal).

## 📜 Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint for code quality checks
- `npm run format` - Format code with Prettier

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header.jsx       # Site header with navigation
│   ├── Footer.jsx       # Site footer with contact info
│   ├── Hero.jsx         # Hero section for homepage
│   ├── ProductCard.jsx  # Product display card
│   └── ContactForm.jsx  # Contact form component
├── pages/               # Page components
│   ├── Home.jsx         # Homepage
│   ├── Products.jsx     # Products listing page
│   └── Contact.jsx      # Contact page
├── data/
│   └── products.js      # Sample product data
├── App.jsx              # Main app component with routing
├── main.jsx             # App entry point
└── index.css            # Global styles and Tailwind imports
```

## 🎨 Customization

### Business Information
Update the following files with your specific business details:

- **Owner name**: Change in `src/pages/Contact.jsx`
- **Address**: Update in `src/components/Footer.jsx` and `src/pages/Contact.jsx`
- **Phone**: Modify in `src/components/Header.jsx`, `src/components/Footer.jsx`, and `src/pages/Contact.jsx`
- **Email**: Update in `src/components/Footer.jsx`, `src/pages/Contact.jsx`, and `src/components/ProductCard.jsx`

### Products
Edit `src/data/products.js` to add, remove, or modify products. Each product should have:
- `id`: Unique identifier
- `name`: Product name
- `category`: Laptop, Desktop, or Accessories
- `specs`: Brief specifications
- `price`: Price in rupees
- `condition`: "New" or "Second-hand"
- `image`: Path to product image (place images in `public/images/`)

### Styling
- Colors are defined in `tailwind.config.js`
- Global styles in `src/index.css`
- Component-specific styles use Tailwind classes

## 🖼️ Images

Place product and hero images in the `public/images/` directory. The following placeholders are referenced:

- `hero-placeholder.jpg` - Hero section image
- `laptop-new-1.jpg`, `desktop-new-1.jpg`, `accessory-new-1.jpg` - New product images
- `laptop-used-1.jpg`, `desktop-used-1.jpg`, `accessory-used-1.jpg` - Second-hand product images
- `og-image.jpg` - Open Graph image for social sharing

## 🌐 Deployment

### Vercel/Netlify (Recommended)

1. Push your code to a Git repository (GitHub, GitLab, etc.)
2. Connect your repository to Vercel or Netlify
3. Set the build settings:
   - **Build Command**: `npm run build`
   - **Publish Directory**: `dist`
4. Deploy!

### Manual Deployment

1. Build the project:
   ```bash
   npm run build
   ```

2. The `dist` folder contains the production-ready files. Upload this folder to your web hosting provider.

## 📱 PWA Features

The site includes basic PWA configuration:
- Web app manifest (`manifest.json`)
- Favicon placeholder
- Service worker ready (can be added with `vite-plugin-pwa`)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run `npm run lint` and `npm run format`
5. Test your changes
6. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Support

For questions or support, contact:
- **Email**: smartcomputershevgaon@gmail.com
- **Phone**: 9922340054
- **Address**: Miri Road, near Mansi Hospital, Shevgaon, Ahilyanagar

---

Built with ❤️ for Smart Computer
