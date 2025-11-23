# Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **Hero/About Section**: Eye-catching landing page with introduction and social links
- **Projects Showcase**: Display your projects with descriptions, technologies, and links
- **Skills Section**: Organized display of your technical skills by category
- **Contact Form**: Interactive contact form for visitors to reach out
- **Responsive Design**: Fully responsive across all devices
- **Analytics Integration**: Google Analytics setup for tracking visitor data
- **Smooth Navigation**: Fixed navbar with smooth scrolling to sections

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: React Icons
- **Analytics**: Google Analytics via @next/third-parties
- **Fonts**: Geist Sans & Geist Mono

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.local.example .env.local
```

4. Add your Google Analytics ID to `.env.local`:
```
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

5. Run the development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customization

### Personal Information

Update the following files with your information:

1. **Hero Section** (`components/sections/Hero.tsx`):
   - Your name
   - Tagline/title
   - Bio description
   - Social media links

2. **Projects Data** (`lib/data.ts`):
   - Add your projects with images, descriptions, and links
   - Update technologies used

3. **Skills Data** (`lib/data.ts`):
   - Add/remove skills
   - Organize into categories

4. **Contact Section** (`components/sections/Contact.tsx`):
   - Email address
   - Phone number
   - Location

5. **Metadata** (`app/layout.tsx`):
   - Update title and description for SEO

### Styling

- Colors and styles can be customized in `tailwind.config.ts`
- Global styles are in `app/globals.css`
- Component-specific styles use Tailwind utility classes

### Adding Project Images

Place your project images in the `public/projects` directory and reference them in `lib/data.ts`.

## Building for Production

Build the optimized production bundle:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

## Deployment

This project can be deployed to various platforms:

### Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

### Other Platforms

- **Netlify**: Connect your git repository
- **AWS Amplify**: Follow AWS documentation for Next.js
- **Docker**: Use the included Dockerfile (if added)

## Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx       # Root layout with analytics
│   ├── page.tsx         # Home page
│   └── globals.css      # Global styles
├── components/
│   ├── sections/
│   │   ├── Hero.tsx     # Hero/About section
│   │   ├── Projects.tsx # Projects showcase
│   │   ├── Skills.tsx   # Skills display
│   │   └── Contact.tsx  # Contact form
│   ├── Navbar.tsx       # Navigation component
│   └── Footer.tsx       # Footer component
├── lib/
│   ├── data.ts          # Portfolio data (projects, skills)
│   └── analytics.ts     # Analytics utilities
├── types/
│   └── index.ts         # TypeScript type definitions
└── public/              # Static assets
```

## License

MIT License - feel free to use this template for your own portfolio!

## Support

For issues or questions, please open an issue in the GitHub repository.
