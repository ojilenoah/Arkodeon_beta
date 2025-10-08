# Next.js Course Platform

## Overview
This is a Next.js 15 course platform with a modern UI built with React 19, TypeScript, and Tailwind CSS. The app features a course interface with a header, sidebar, and accordion navigation.

## Recent Changes
**October 7, 2025** - Migrated from Vercel to Replit
- Updated package.json scripts to bind to port 5000 and host 0.0.0.0 for Replit compatibility
- Configured workflow to run the Next.js development server
- Set up deployment configuration for Autoscale deployment
- Removed turbopack flag for compatibility

## Project Architecture
- **Framework**: Next.js 15.5.4 with App Router
- **UI Library**: React 19.1.0
- **Styling**: Tailwind CSS 4
- **Language**: TypeScript
- **Package Manager**: npm

### Project Structure
```
├── src/
│   ├── app/           # Next.js App Router pages
│   │   ├── layout.tsx # Root layout
│   │   ├── page.tsx   # Home page
│   │   └── globals.css
│   └── components/    # React components
│       ├── Header.tsx
│       ├── Sidebar.tsx
│       └── ContinueAccordion.tsx
├── public/           # Static assets
└── package.json
```

## Development
- **Dev Server**: Runs on port 5000 with host 0.0.0.0
- **Build Command**: `npm run build`
- **Start Command**: `npm run start`

## Deployment
- **Target**: Autoscale (serverless)
- **Build**: `npm run build`
- **Start**: `npm run start -p 5000 -H 0.0.0.0`
