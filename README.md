# Jess's Mobile Bar - Premium Mobile Bartending Services

A modern, responsive website for Jess's Mobile Bar, a premium mobile bartending service operating in Los Angeles, Orange County, and the Inland Empire.

## 🌟 Features

- **Modern Design**: Clean, professional interface with purple gradient branding
- **Responsive Layout**: Optimized for all devices and screen sizes
- **Contact Form**: Integrated contact form with validation
- **Service Showcase**: Professional presentation of bartending services
- **Gallery**: Authentic photos of cocktails and events
- **Testimonials**: Customer reviews and feedback
- **Service Areas**: Coverage map for Los Angeles, Orange County, and Inland Empire

## 🛠️ Tech Stack

- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS with shadcn/ui components
- **Build Tool**: Vite
- **Routing**: Wouter for lightweight client-side routing
- **Forms**: React Hook Form with Zod validation
- **Icons**: Lucide React
- **Fonts**: Google Fonts (Playfair Display, Inter)

## 🚀 Getting Started

### Prerequisites

- Node.js 18 or higher
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/odphineguy/jess-mobile-bar-2.git
   cd jess-mobile-bar-2
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## 📁 Project Structure

```
jess-mobile-bar-2/
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── pages/         # Page components
│   │   ├── hooks/         # Custom React hooks
│   │   └── lib/           # Utility functions
│   └── index.html         # HTML template
├── attached_assets/        # Images and media files
├── .github/workflows/     # GitHub Actions workflows
└── dist/                  # Build output (generated)
```

## 🎨 Customization

### Colors
The site uses a purple gradient color scheme that can be customized in the Tailwind configuration.

### Content
- Update service information in the components
- Replace images in the `attached_assets` directory
- Modify contact information and service areas

## 🌐 Deployment

This project is configured for GitHub Pages deployment. The site will automatically deploy when changes are pushed to the main branch.

### Manual Deployment

1. Build the project:
   ```bash
   npm run build
   ```

2. Deploy the `dist` folder to your hosting provider

## 📞 Contact

For questions about the website or to request changes, please contact the development team.

## 📄 License

This project is licensed under the MIT License.
