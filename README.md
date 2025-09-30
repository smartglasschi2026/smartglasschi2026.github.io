# CHI 2026 Smart Glass Workshop Website

This is the official website for the CHI 2026 Smart Glass Workshop. Built with React, TypeScript, and Vite, and deployed via GitHub Pages.

## 🚀 Quick Start

### Prerequisites
- Node.js (version 18 or higher)
- npm or yarn package manager

### Installation & Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/smartglasschi2026/smartglasschi2026.github.io.git
   cd smartglasschi2026.github.io
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   The website will be available at `http://localhost:5173`

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 📁 Project Structure

```
src/
├── App.tsx          # Main application component
├── App.css          # Application styles
├── main.tsx         # Application entry point
├── index.css        # Global styles
└── assets/          # Static assets (images, icons, etc.)

public/              # Public assets (copied to dist/)
dist/                # Production build output (auto-generated)
```

## 🛠️ Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build production-ready files
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint to check code quality
- `npm run deploy` - Build and deploy to GitHub Pages

## 🚀 Deployment

The website is automatically deployed to GitHub Pages when you push to the `main` branch. The deployment process:

1. Builds the production files using `vite build`
2. Deploys the `dist/` folder to the `gh-pages` branch
3. GitHub Pages serves the website from the `gh-pages` branch

### Manual Deployment
If you need to deploy manually:
```bash
npm run deploy
```

## 🎨 Customization

### Updating Content
- **Main content**: Edit `src/App.tsx` to modify the website content
- **Organizers**: Update the `organizers` array in `src/App.tsx` to add/edit organizer information
- **Styling**: Update `src/App.css` for custom styles
- **Global styles**: Modify `src/index.css` for site-wide styling

### Adding/Editing Organizers
To update organizer information:
1. Open `src/App.tsx`
2. Find the `organizers` array (around line 4-29)
3. Update the organizer objects with:
   - `name`: Full name of the organizer
   - `institute`: Their institution/affiliation
   - `website`: Their personal website URL
   - `photo`: Path to their photo (place photos in `public/` folder)

Example:
```javascript
{
  name: "Dr. Your Name",
  institute: "Your University",
  website: "https://yourwebsite.com",
  photo: "/your-photo.jpg"
}
```



