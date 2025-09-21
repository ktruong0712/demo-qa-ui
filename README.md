# VibeCode QA - Next.js QA Testing Platform

A modern, responsive QA testing platform built with Next.js, Tailwind CSS, and Framer Motion. Features a clean, soft-gradient design inspired by modern SaaS platforms.

## 🎨 Design Features

- **Soft Gradient Background**: Beautiful blue-to-mint gradient (`#C7E0F8` → `#B2E0E3`)
- **Custom Color Palette**: Carefully selected colors for optimal user experience
- **Smooth Animations**: Framer Motion powered animations throughout
- **Responsive Design**: Works perfectly on all device sizes
- **Glass Morphism**: Modern UI effects with backdrop blur

## 🚀 Tech Stack

- **Next.js 14** (App Router)
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **Recharts** for data visualization
- **Lucide React** for icons

## 📁 Project Structure

```
src/
├── app/
│   ├── dashboard/
│   │   └── page.tsx          # Dashboard page
│   ├── services/
│   │   └── page.tsx          # Services page
│   ├── help/
│   │   └── page.tsx          # Help page
│   ├── pricing/
│   │   └── page.tsx          # Pricing page
│   ├── globals.css           # Global styles
│   ├── layout.tsx            # Root layout
│   └── page.tsx              # Home page
├── components/
│   ├── Navigation.tsx        # Navigation component
│   ├── HeroSection.tsx       # Hero section
│   ├── FeatureGrid.tsx       # Feature cards grid
│   └── Dashboard.tsx         # Dashboard component
└── ...
```

## 🎯 Features

### Landing Page
- Hero section with gradient background and circuit pattern
- Feature highlights with 6 QA services
- Smooth scroll animations
- Responsive design

### Dashboard
- Project management sidebar
- Interactive charts and metrics
- Service tabs for different QA types
- Create project modal
- Real-time data visualization

### Services
- Comprehensive QA service overview
- Automated Testing, Bug Reports, Regression Testing
- Cross-Browser, Performance, and Security Testing
- Interactive service cards

### Additional Pages
- Help & Documentation
- Pricing plans
- Responsive navigation

## 🛠️ Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd vibe-code-qa
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎨 Customization

### Colors
The color palette is defined in `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    blue: "#5A8DEE",
    indigo: "#3B5FF2",
  },
  accent: {
    mint: "#A8E0C8",
    aqua: "#D3F0EE",
  },
  gradient: {
    start: "#C7E0F8",
    end: "#B2E0E3",
  },
  // ... more colors
}
```

### Animations
Animations are configured in the Tailwind config and use Framer Motion for complex interactions.

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Mobile devices (320px+)
- Tablets (768px+)
- Desktop (1024px+)
- Large screens (1280px+)

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms
The app can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## 📊 Sample Data

The dashboard includes sample data for:
- Test execution trends
- Coverage metrics
- Project statistics
- Bug reports

## 🔧 Development

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Code Structure
- Components are located in `src/components/`
- Pages are in `src/app/`
- Styles are in `src/app/globals.css`
- Tailwind config is in `tailwind.config.ts`

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request


---
