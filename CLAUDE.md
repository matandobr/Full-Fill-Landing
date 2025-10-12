# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Vite + React + TypeScript landing page with an integrated WordPress blog. The project uses shadcn/ui components, Tailwind CSS, and is configured for deployment on Lovable platform.

## Development Commands

```bash
# Install dependencies
npm i

# Start development server (runs on http://[::]:8081)
npm run dev

# Build for production
npm run build

# Build for development (useful for debugging)
npm run build:dev

# Lint code
npm run lint

# Preview production build
npm run preview
```

## Architecture

### Routing Structure
- Uses React Router v6 with client-side routing
- Main route: `/` (Index landing page)
- Blog routes: `/blog` (blog list) and `/blog/:id` (individual posts)
- 404 handling: `*` catch-all route renders NotFound page
- **IMPORTANT**: Add all custom routes ABOVE the catch-all `*` route in App.tsx:28

### Directory Structure

```
src/
├── pages/           # Top-level page components
│   ├── Index.tsx    # Main landing page (assembles landing components)
│   ├── Blog.tsx     # Blog listing page
│   ├── BlogPost.tsx # Individual blog post page
│   └── NotFound.tsx # 404 page
├── components/
│   ├── landing/     # Landing page sections (Hero, Features, FAQ, etc.)
│   ├── analytics/   # GoogleAnalytics, MicrosoftClarity
│   └── ui/          # shadcn/ui components
├── services/        # External service integrations
│   └── blogService.ts # WordPress REST API client
├── hooks/           # Custom React hooks (use-mobile, use-toast)
└── lib/             # Utilities (cn() for className merging)
```

### Component Architecture

**Landing Page Pattern**: The Index page (`src/pages/Index.tsx`) is a composition of section components:
- Header (navigation)
- Hero (main banner)
- HowItWorks (process steps)
- PricingSection (pricing cards)
- FAQ (accordion-style questions)
- ContactForm (lead capture)
- Footer

Each section is a self-contained component in `src/components/landing/`.

### Blog Integration

The blog is powered by WordPress REST API at `https://www.blog.full-fill.ai/wp-json/wp/v2`:
- `blogService.ts` handles all API communication
- Posts include embedded featured media via `_embed` parameter
- Blog posts support routing by ID (`/blog/:id`)
- Images fallback to `/blog-placeholder.jpg` if no featured image

### Styling System

**Theme & Colors**:
- **Brand Primary**: `#5E5ADB` (purple/indigo) - used for CTAs, links, and accents
- **Brand Primary Hover**: `#4A46C7` (darker purple)
- **Dark Purple Text**: `#151357` - used for headings and important text
- **Body Text**: `#222834` - standard paragraph text
- **Subtle Borders**: `#EDEDFC` - light borders on cards and dividers
- **Background**: White (`#FFFFFF`) with light sections using the muted variables

**CSS Variables** (defined in src/index.css):
- HSL-based semantic color system using CSS custom properties
- Variables like `--primary`, `--secondary`, `--muted`, etc. map to HSL values
- Dark mode variants defined but not actively used in landing pages
- Access via Tailwind: `bg-primary`, `text-foreground`, `border-border`, etc.

**Typography**:
- **Custom Font**: "Helvetica Neue Condensed" (loaded via @font-face in index.css:5-10)
  - Used in logo/brand elements: `font-['Helvetica_Neue_Condensed']`
- **Heading Pattern**: Large bold text in `#151357` (dark purple)
- **Brand Accent Pattern**: Use `text-[#5E5ADB]` for highlighted text within headings
- **Body Text**: Text-xl or text-lg in `#222834` with `leading-7` or `leading-relaxed`

**Component Styling Patterns**:
- **Always use `cn()` utility** from `@/lib/utils` when merging conditional classes
- **Inline hex colors preferred** for brand colors instead of Tailwind theme tokens
- **Shadow patterns**:
  - Cards: `shadow-[0px_2px_12px_0px_rgba(20,20,43,0.08)]`
  - Buttons: `shadow-[0px_1px_1px_0px_rgba(0,0,0,0.10),0px_0px_0px_1px_#5E5ADB]`
- **Border radius**: Generally `rounded-md` or `rounded-xl` for cards

**Responsive Spacing**:
- **Desktop horizontal padding**: `px-[120px]` for sections
- **Mobile horizontal padding**: `px-4` or `px-5`
- **Section vertical padding**: `py-[50px]` desktop, `py-[10px]` mobile
- **Responsive patterns**: Use `max-md:` prefix for mobile overrides

**Button Patterns**:
- **Primary CTA**:
  - Background: `bg-[#5E5ADB]`
  - Hover: `hover:bg-[#4A46C7]`
  - Text: White
  - Size: `min-h-[50px] px-6 py-[15px] text-lg`
- **Outline/Secondary**:
  - Border: `border-[#5E5ADB]`
  - Text: `text-[#5E5ADB]`
  - Hover: `hover:bg-[#5E5ADB] hover:text-white`
- **Mobile adjustments**: Add `max-md:text-base max-md:px-4`

**Layout Conventions**:
- Max container width: `max-w-[1400px]` for content sections
- Flexbox-first approach with `flex gap-[value]` patterns
- Responsive: `max-md:flex-col` to stack on mobile
- Icons from `lucide-react` sized at `w-4 h-4` or `w-5 h-5`

### Analytics & Tracking

Both Google Analytics and Microsoft Clarity are configured as wrapper components in App.tsx. Cookie consent is handled via CookieConsent component rendered globally.

## Key Configuration Files

- `vite.config.ts`: Dev server runs on port 8080, includes lovable-tagger plugin for development
- `components.json`: shadcn/ui configuration with `@` alias and custom theme
- Path resolution: `@` alias resolves to `./src` (configured in vite.config.ts:18-20)

## WordPress Blog URL

The WordPress blog API base URL is hardcoded in `src/services/blogService.ts:29`. Update this if the blog URL changes.
