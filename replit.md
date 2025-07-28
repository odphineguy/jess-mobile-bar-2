# Jess's Mobile Bar - Mobile Bartending Services Website

## Overview

This is a modern React-based website for Jess's Mobile Bar, a premium mobile bartending service operating in Los Angeles, Orange County, and the Inland Empire. The application features a single-page design with smooth scrolling navigation, contact form functionality, and a professional presentation of services.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with shadcn/ui component library
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack React Query for server state management
- **Forms**: React Hook Form with Zod validation
- **Build Tool**: Vite for development and production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **API Style**: RESTful endpoints
- **Data Storage**: In-memory storage (MemStorage class) with provisions for PostgreSQL
- **Session Management**: Ready for connect-pg-simple integration

### Database Architecture
- **ORM**: Drizzle ORM configured for PostgreSQL
- **Schema**: Single `inquiries` table for contact form submissions
- **Migration**: Drizzle-kit for schema management
- **Connection**: Neon Database serverless driver ready for production

## Key Components

### Frontend Components
1. **Landing Page Sections**:
   - Hero section with call-to-action
   - Services showcase
   - Gallery display
   - Service areas coverage
   - Customer testimonials
   - Contact form

2. **UI Components**: Complete shadcn/ui component library including forms, dialogs, cards, and navigation elements

3. **Form Handling**: Contact inquiry form with validation and submission to backend API

### Backend Components
1. **API Routes**:
   - `POST /api/inquiries` - Submit contact form
   - `GET /api/inquiries` - Retrieve all inquiries (admin)

2. **Storage Layer**: Abstracted storage interface supporting both in-memory and database implementations

3. **Development Server**: Vite integration for hot module replacement in development

## Data Flow

1. **User Interaction**: Users fill out contact form on website
2. **Form Validation**: Client-side validation using Zod schemas
3. **API Submission**: Form data sent to Express backend
4. **Data Storage**: Inquiry stored in memory (or database when configured)
5. **Response**: Success/error feedback displayed to user
6. **Admin Access**: Separate endpoint for retrieving all inquiries

## External Dependencies

### Core Dependencies
- **UI Library**: Radix UI primitives with shadcn/ui styling
- **Database**: Neon Database serverless PostgreSQL
- **Validation**: Zod for schema validation
- **Fonts**: Google Fonts (Playfair Display, Inter)
- **Icons**: Lucide React icons

### Development Dependencies
- **Build Tools**: Vite, ESBuild, PostCSS
- **Type Checking**: TypeScript with strict configuration
- **CSS Processing**: Tailwind CSS with autoprefixer

## Deployment Strategy

### Development
- **Server**: Express with Vite middleware for HMR
- **Database**: In-memory storage for quick development
- **Environment**: NODE_ENV=development with tsx for TypeScript execution

### Production
- **Build Process**: 
  1. Vite builds frontend to `dist/public`
  2. ESBuild bundles server to `dist/index.js`
- **Server**: Node.js serving static files and API
- **Database**: PostgreSQL via Neon Database (configured but not yet implemented)
- **Environment**: NODE_ENV=production

### Configuration Notes
- Database URL required in production (`DATABASE_URL` environment variable)
- Drizzle migrations ready to run with `npm run db:push`
- Static file serving configured for production deployment
- REPL.it specific optimizations included for development environment

The application is designed as a professional business website with a clean, modern aesthetic emphasizing the premium nature of the mobile bartending services. The architecture supports easy scaling from development to production with minimal configuration changes.