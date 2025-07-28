# AGENT.md - Development Guide

## Commands

- **Build**: `npm run build` - Production build with Next.js
- **Dev**: `npm run dev` - Development server with Turbopack
- **Lint**: `npm run lint` - ESLint check
- **Format**: `npm run format` - Auto-format with Prettier
- **Type Check**: `npm run type-check` - TypeScript validation
- **Test**: `npx playwright test` - Run all E2E tests
- **Test Single**: `npx playwright test <test-name>` - Run specific test

## Architecture

Next.js 15 portfolio site with App Router. Structure:
- `/app/` - Pages with file-based routing (about, contact, projects, skills)
- `/components/` - Reusable UI (layout, sections, ui)
- `/tests/` - Playwright E2E tests
- `/public/` - Static assets
- `/types/` - TypeScript definitions

## Code Style

- **Formatting**: Prettier (2 spaces, semicolons, double quotes, 100 char width)
- **Linting**: ESLint + TypeScript rules, Next.js Core Web Vitals
- **Components**: TypeScript interfaces, "use client" for interactivity
- **Imports**: Next.js (Image, Link), React hooks, utilities last
- **CSS**: Tailwind with custom colors/animations, semantic class names
- **Files**: PascalCase components, camelCase utilities, kebab-case pages

## Notes

Portfolio showcases AI/ML projects with video thumbnails and interactive cards. Has Task Master integration via CLAUDE.md.
