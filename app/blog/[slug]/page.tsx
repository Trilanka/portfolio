import React from 'react';
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { FaHome, FaBlog, FaUser, FaArrowLeft } from "react-icons/fa";
import Link from 'next/link';
import { notFound } from 'next/navigation';

// Blog posts data - same as in the main blog page
const blogPosts = [
  {
    id: 1,
    slug: "building-portfolio-nextjs-14",
    title: "Building My Portfolio with Next.js 14: A Complete Developer's Journey",
    excerpt: "A deep dive into creating this portfolio website using Next.js 14, TypeScript, and custom UI components. Learn about the architecture decisions and modern development practices I used.",
    content: `# Building My Portfolio with Next.js 14: A Complete Developer's Journey

*"From zero to hero: How I built a stunning portfolio that landed me multiple job interviews"*

## The Challenge

Picture this: You're a developer with amazing projects, but your portfolio looks like it's from 2010. Sound familiar? That was me 3 months ago. I had incredible projects but no way to showcase them properly.

The Problem: My old portfolio was:
- Slow and clunky
- Not mobile-friendly  
- Boring design
- No interactive elements
- Poor SEO

The Goal: Create a portfolio that would make recruiters say "WOW!" and developers ask "How did you build this?"

## The Roadmap: From Idea to Launch

### Phase 1: Planning & Research (Week 1)
What I did:
- Analyzed 50+ developer portfolios
- Created a feature wishlist
- Designed wireframes in Figma
- Set performance benchmarks

Key Insight: Most portfolios fail because they focus on features, not user experience.

### Phase 2: Tech Stack Decision (Week 1)
The Battle of Frameworks:
- React vs Vue vs Svelte
- Next.js vs Gatsby vs Vite
- Tailwind vs Styled Components vs CSS Modules

My Decision Matrix:
| Framework | Performance | Learning Curve | Job Market | Final Score |
|-----------|-------------|----------------|------------|-------------|
| Next.js 14 | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | Winner! |
| Gatsby | ⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐ | |
| Vite | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐ | |

Why Next.js 14 Won:
- App Router = 40% faster builds
- Built-in mobile optimization
- SEO out of the box
- Industry standard (everyone's hiring for it!)

### Phase 3: Architecture Design (Week 2)

Understanding Component Architecture
Think of your portfolio like a house. You need a solid foundation (layout), rooms (pages), and furniture (components). Here's how I organized mine:

Portfolio Architecture:
- Foundation (app/)
  - layout.tsx (The house blueprint)
  - page.tsx (The main living room)
  - blog/ (The library room)
    - page.tsx (Book catalog)
    - [slug]/ (Individual books)
  - about/ (The personal room)

- Furniture (components/)
  - Hero.tsx (Welcome mat)
  - Projects.tsx (Showcase cabinet)
  - Techstack.tsx (Skills display)
  - ui/ (Reusable furniture)
    - FloatingNavbar.tsx (Smart doorbell)
    - BentoGrid.tsx (Organized shelves)
    - MagicButton.tsx (Interactive light switch)

The Component Hierarchy Explained

Let me break down why this structure works:

1. Separation of Concerns
- Pages handle routing and data fetching
- Components handle UI and interactions
- UI components are reusable across pages

2. Scalability Pattern
Page Component (Smart):
- Fetches data
- Handles routing
- Composes UI components

UI Component (Dumb):
- Receives props
- Renders UI
- Handles interactions

3. Real Example from My Portfolio

Smart Component (page.tsx):
export default function HomePage() {
  const projects = fetchProjects(); // Data fetching
  
  return (
    <div>
      <Hero />                    {/* Reusable UI */}
      <Projects data={projects} /> {/* Data passed down */}
      <Techstack />               {/* Reusable UI */}
    </div>
  );
}

Dumb Component (Projects.tsx):
interface ProjectsProps {
  data: Project[];
}

export function Projects({ data }: ProjectsProps) {
  return (
    <div className="projects-grid">
      {data.map(project => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}

Pro Tip: Start with the folder structure first. It saves you 10+ hours of refactoring later!

### Phase 4: The Build Process (Weeks 3-4)

Day 1-2: Setting Up the Foundation
# The magic commands that started it all
npx create-next-app@latest portfolio --typescript --tailwind --app
cd portfolio
npm install framer-motion lucide-react

Day 3-5: Building the Hero Section
The Challenge: Make visitors stay longer than 3 seconds
The Solution: Interactive animations + compelling copy

The hero that converts visitors into contacts:
const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center"
    >
      <h1 className="text-6xl font-bold mb-4">
        Hi, I'm <span className="text-purple">Trilanka</span>
      </h1>
      <p className="text-xl text-gray-300 mb-8">
        I build digital experiences that users love
      </p>
      <MagicButton />
    </motion.div>
  );
};

Day 6-8: Project Showcase
The Problem: How do you make a project gallery not boring?
The Solution: Interactive cards with hover effects

Day 9-10: Blog System
The Innovation: Instead of just showing projects, I decided to teach others how I built them.

### Phase 5: Performance Optimization (Week 5)
The Numbers Game:
- Target: < 2s load time
- Target: > 90 Lighthouse score
- Target: < 100KB initial bundle

Optimization Techniques:
1. Image Optimization: Next.js Image component = 60% smaller files
2. Code Splitting: Lazy load components = 40% faster initial load
3. Font Optimization: Self-hosted fonts = 200ms faster rendering
4. Bundle Analysis: Removed unused code = 30% smaller bundle

Results:
- Load time: 1.2s (Target: <2s) ✅
- Lighthouse: 96/100 (Target: >90) ✅
- Bundle size: 85KB (Target: <100KB) ✅

## The Design Philosophy

### Color Psychology
- Black Background: Professional, reduces eye strain
- Purple Accents: Creative, innovative, stands out
- White Text: High contrast, excellent readability

### Typography Strategy
- Headings: Bold, attention-grabbing
- Body Text: Clean, scannable
- Code: Monospace, developer-friendly

### Animation Principles
- Purpose: Every animation serves a function
- Performance: 60fps or nothing
- Accessibility: Respects reduced motion preferences

## The Launch Strategy

### Pre-Launch (Week 6)
1. Beta Testing: 10 developers tested the site
2. Performance Audit: Fixed 15 performance issues
3. Content Review: Professional copywriter reviewed all text
4. SEO Setup: Meta tags, structured data, sitemap

### Launch Day
1. Social Media: Posted on LinkedIn, Twitter, GitHub
2. Developer Communities: Shared on Reddit, Dev.to
3. Personal Network: Emailed to 50+ contacts
4. Portfolio Sites: Submitted to Awwwards, CSS Design Awards

### Post-Launch Results
- Traffic: 500% increase in visitors
- Job Inquiries: 12 companies reached out
- Conversion Rate: 8% of visitors contacted me
- Feedback: 4.9/5 average rating

## Key Lessons Learned

### What Worked
1. Start with user research - Don't assume what looks good
2. Mobile-first approach - 60% of traffic is mobile
3. Performance matters - Fast sites get more opportunities
4. Document your process - People love behind-the-scenes content

### What Didn't Work
1. Over-engineering - Simple solutions often work better
2. Ignoring accessibility - Lost potential users
3. No analytics - Couldn't optimize what I couldn't measure
4. Skipping testing - Bugs in production hurt credibility

## The Tech Stack Breakdown

### Frontend
- Next.js 14: React framework with App Router
- TypeScript: Type safety and better DX
- Tailwind CSS: Utility-first styling
- Framer Motion: Smooth animations

### Development
- ESLint + Prettier: Code quality
- Husky: Git hooks for quality
- Vercel: Deployment and hosting

### Analytics
- Google Analytics: Traffic insights
- Hotjar: User behavior analysis
- Lighthouse CI: Performance monitoring

## The ROI: Was It Worth It?

### Time Investment
- Total Time: 6 weeks (part-time)
- Hours: ~120 hours
- Cost: $0 (used free tools)

### Returns
- Job Interviews: 12 companies
- Freelance Clients: 5 new projects
- Speaking Opportunities: 3 conference talks
- Network Growth: 500+ new connections

ROI: 1000%+ return on time investment

## What's Next?

### Phase 2 Features (Coming Soon)
- Video Case Studies: Deep dives into complex projects
- Interactive Demos: Play with my code live
- Analytics Dashboard: Real-time portfolio metrics
- Multi-language Support: Reach global audience

### The Learning Never Stops
- New Technologies: Exploring Web3, AI integration
- Design Trends: Staying ahead of the curve
- Performance: Always optimizing for speed
- Community: Teaching others what I learn

## Learning Roadmap: From Beginner to Portfolio Master

### Phase 1: Foundation (Weeks 1-2)
Learning Goals:
- Understand React basics
  - Components and props
  - State and hooks
  - Event handling
- Master CSS fundamentals
  - Flexbox and Grid
  - Responsive design
  - CSS animations
- Set up development environment
  - Node.js and npm
  - VS Code extensions
  - Git and GitHub

### Phase 2: Next.js Mastery (Weeks 3-4)
Next.js Learning Path:
- App Router concepts
  - File-based routing
  - Layouts and pages
  - Server vs Client components
- Styling approaches
  - Tailwind CSS basics
  - Component styling
  - Responsive utilities
- Performance optimization
  - Image optimization
  - Code splitting
  - Bundle analysis

### Phase 3: Animation & Interaction (Weeks 5-6)
Animation Learning Journey:
- Framer Motion basics
  - Motion components
  - Variants and transitions
  - Gesture handling
- UX principles
  - User psychology
  - Attention patterns
  - Accessibility
- Performance considerations
  - GPU acceleration
  - Reduced motion
  - Mobile optimization

### Phase 4: Advanced Concepts (Weeks 7-8)
Advanced Portfolio Features:
- Analytics integration
  - Google Analytics
  - User behavior tracking
  - Performance monitoring
- SEO optimization
  - Meta tags
  - Structured data
  - Site maps
- Deployment strategies
  - Static site generation
  - CDN configuration
  - Domain setup

### Recommended Resources

Books:
- "React: Up & Running" by Stoyan Stefanov
- "Designing with Web Standards" by Jeffrey Zeldman
- "Don't Make Me Think" by Steve Krug

Online Courses:
- Next.js Official Tutorial
- Framer Motion Documentation
- Tailwind CSS Interactive Tutorial

Tools & Extensions:
- React Developer Tools
- Lighthouse (Performance)
- Figma (Design)

### Practice Projects

Beginner Level:
1. Static Portfolio: HTML, CSS, JavaScript
2. React Components: Reusable UI elements
3. Responsive Layout: Mobile-first design

Intermediate Level:
1. Next.js Blog: Dynamic routing
2. Animation Library: Framer Motion practice
3. Performance Audit: Optimization techniques

Advanced Level:
1. Full Portfolio: Complete with animations
2. CMS Integration: Content management
3. Analytics Dashboard: User insights

## Final Thoughts

Building this portfolio wasn't just about showcasing my work—it was about creating a digital experience that tells my story. Every animation, every color choice, every line of code was intentional.

### Key Takeaways
- Start Simple: Don't over-engineer from day one
- Learn by Building: Theory without practice is useless
- Measure Everything: Data drives better decisions
- Iterate Constantly: Your first version won't be perfect

The biggest lesson: Your portfolio is your digital first impression. Make it count.

### What's Next?
Want to build your own? I'm creating a complete video course that covers:
- Step-by-step tutorials
- Interactive code examples
- Real performance data
- Live coding sessions

Follow along and build something amazing!

---

*P.S. - If you found this helpful, I'd love to connect! Drop me a message and let's build something incredible together.*`,
    date: "2024-12-19",
    readTime: "12 min read",
    category: "Portfolio Development",
    tags: ["Next.js", "TypeScript", "Portfolio", "Career"]
  },
  {
    id: 2,
    slug: "interactive-ui-components-framer-motion",
    title: "Creating Interactive UI Components with Framer Motion",
    excerpt: "How I built the floating navigation, animated hero sections, and interactive project cards using Framer Motion and custom CSS animations for a modern user experience.",
    content: `# Creating Interactive UI Components with Framer Motion

Animation is crucial for creating engaging user experiences. In my portfolio, I used Framer Motion to bring life to static components and guide user attention.

## The Floating Navigation

The floating navigation bar is one of the most interactive elements. It features:
- Smooth slide-in animation on page load
- Hover effects with scale transformations
- Active state indicators
- Responsive behavior for mobile devices

## Hero Section Animations

The hero section uses several animation techniques:
- Staggered text animations for the main heading
- Parallax effects for background elements
- Smooth transitions between different states
- Loading animations for better perceived performance

## Project Card Interactions

Each project card includes:
- Hover effects with scale and shadow changes
- Smooth transitions between states
- Interactive elements that respond to user input
- Loading states for images and content

## Performance Considerations

While animations enhance UX, they can impact performance:
- Used transform and opacity for GPU acceleration
- Implemented will-change for elements that will animate
- Reduced motion for users with accessibility preferences
- Optimized animation timing for smooth 60fps performance

## Code Examples

Here's how I implemented the floating navigation animation:

const navVariants = {
  hidden: { y: -100, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

The result is a portfolio that feels alive and responsive to user interactions while maintaining excellent performance.`,
    date: "2024-12-18",
    readTime: "6 min read",
    category: "UI/UX",
    tags: ["Framer Motion", "Animations", "CSS", "Interactive Design"]
  },
  {
    id: 3,
    slug: "responsive-design-patterns-react",
    title: "Responsive Design Patterns in Modern React Applications",
    excerpt: "Exploring responsive design techniques used in this portfolio, from mobile-first approach to complex grid layouts and adaptive typography using Tailwind CSS.",
    content: `# Responsive Design Patterns in Modern React Applications

Creating a responsive portfolio requires careful planning and implementation. Here's how I approached responsive design for my portfolio.

## Mobile-First Approach

I started with mobile design and progressively enhanced for larger screens:
- Base styles target mobile devices (320px+)
- Breakpoints: sm: (640px), md: (768px), lg: (1024px), xl: (1280px)
- Content prioritization for smaller screens

## Grid Layouts

### Project Grid
- Mobile: Single column
- Tablet: 2 columns
- Desktop: 3 columns
- Uses CSS Grid with grid-template-columns and responsive classes

### Blog Grid
- Responsive grid that adapts to content
- Consistent spacing across all breakpoints
- Proper image aspect ratios maintained

## Typography Scaling

Responsive typography using Tailwind's type scale:
- Base font sizes for mobile
- Scaled up for larger screens
- Line height adjustments for readability
- Proper contrast ratios maintained

## Component Responsiveness

Each component includes responsive considerations:
- Navigation collapses on mobile
- Hero section adapts text size and spacing
- Cards stack properly on small screens
- Images scale appropriately

## Testing Strategy

I tested across multiple devices and browsers:
- Chrome DevTools device simulation
- Real device testing on iOS and Android
- Cross-browser compatibility checks
- Performance testing on slower connections

The result is a portfolio that works beautifully on any device, from mobile phones to large desktop monitors.`,
    date: "2024-12-17",
    readTime: "7 min read",
    category: "Responsive Design",
    tags: ["Tailwind CSS", "Responsive Design", "Mobile-First", "CSS Grid"]
  },
  {
    id: 4,
    slug: "component-architecture-state-management",
    title: "Component Architecture and State Management in Next.js",
    excerpt: "Breaking down the component structure of this portfolio, including custom hooks, context providers, and how I organized the codebase for maintainability and scalability.",
    content: `# Component Architecture and State Management in Next.js

A well-structured codebase is essential for maintainability and scalability. Here's how I organized my portfolio's architecture.

## Folder Structure

/app
  /blog
    /[slug]
      page.tsx
    page.tsx
  /about
    page.tsx
  layout.tsx
  page.tsx
/components
  /ui
    FloatingNavbar.tsx
    BentoGrid.tsx
    ...
  Hero.tsx
  Projects.tsx
  ...

## Component Organization

### Page Components
- Located in /app directory
- Use Next.js 14 App Router
- Handle routing and data fetching
- Minimal logic, mostly composition

### UI Components
- Reusable components in /components/ui
- Pure components with props interface
- No side effects or business logic
- Highly testable

### Feature Components
- Domain-specific components in /components
- Contain business logic
- Connect to data sources
- Handle user interactions

## State Management

For this portfolio, I used:
- Local State: React's useState for component-specific state
- Context: For theme and global state
- URL State: For navigation and routing
- No External Libraries: Keeping dependencies minimal

## Custom Hooks

Created reusable hooks for common patterns:
- useLocalStorage for persisting user preferences
- useIntersectionObserver for scroll-based animations
- useMediaQuery for responsive behavior

## TypeScript Integration

Strong typing throughout:
- Interface definitions for all props
- Generic types for reusable components
- Strict type checking enabled
- Better IDE support and error catching

## Performance Considerations

- Code splitting at route level
- Lazy loading for heavy components
- Memoization for expensive calculations
- Optimized re-renders with proper dependencies

This architecture makes the codebase easy to understand, maintain, and extend as the portfolio grows.`,
    date: "2024-12-16",
    readTime: "9 min read",
    category: "Architecture",
    tags: ["Component Architecture", "State Management", "Next.js", "Code Organization"]
  },
  {
    id: 5,
    slug: "performance-optimization-portfolio",
    title: "Performance Optimization Techniques for Portfolio Websites",
    excerpt: "Implementing lazy loading, image optimization, and bundle splitting to ensure fast loading times and smooth user experience across all devices and network conditions.",
    content: `# Performance Optimization Techniques for Portfolio Websites

Performance is crucial for user experience and SEO. Here's how I optimized my portfolio for speed and efficiency.

## Image Optimization

### Next.js Image Component
- Automatic WebP conversion
- Responsive image sizing
- Lazy loading by default
- Proper aspect ratios maintained

### Image Strategies
- Use appropriate formats (WebP, AVIF when supported)
- Optimize file sizes without quality loss
- Implement proper alt text for accessibility
- Consider using CDN for global delivery

## Code Splitting

### Route-Based Splitting
- Each page loads only necessary code
- Automatic code splitting with Next.js
- Dynamic imports for heavy components
- Reduced initial bundle size

### Component-Level Splitting
- Lazy load non-critical components
- Use React.lazy() for dynamic imports
- Implement loading states
- Fallback components for better UX

## Bundle Optimization

### Tree Shaking
- Remove unused code from bundles
- Use ES modules for better tree shaking
- Avoid importing entire libraries
- Use specific imports when possible

### Dependency Management
- Regular dependency updates
- Remove unused packages
- Use lighter alternatives when available
- Audit bundle size regularly

## Caching Strategies

### Static Generation
- Pre-render pages at build time
- Serve static files from CDN
- Instant page loads
- Reduced server load

### Browser Caching
- Proper cache headers
- Versioned assets for cache busting
- Service worker for offline functionality
- Optimized cache policies

## Performance Monitoring

### Core Web Vitals
- Largest Contentful Paint (LCP)
- First Input Delay (FID)
- Cumulative Layout Shift (CLS)
- Regular performance audits

### Tools Used
- Lighthouse for performance scoring
- WebPageTest for detailed analysis
- Chrome DevTools for debugging
- Real User Monitoring (RUM)

The result is a portfolio that loads quickly and provides a smooth experience across all devices and network conditions.`,
    date: "2024-12-15",
    readTime: "5 min read",
    category: "Performance",
    tags: ["Performance", "Optimization", "Lazy Loading", "Bundle Splitting"]
  },
  {
    id: 6,
    slug: "deploying-nextjs-portfolio-static",
    title: "Deploying a Next.js Portfolio with Static Site Generation",
    excerpt: "Step-by-step guide to deploying this portfolio using Next.js static export, including build optimization, asset management, and hosting considerations.",
    content: `# Deploying a Next.js Portfolio with Static Site Generation

Deploying a portfolio requires careful consideration of hosting options, build processes, and performance optimization.

## Static Site Generation (SSG)

### Why SSG for Portfolio?
- Fast loading times
- Better SEO performance
- Reduced server costs
- Higher reliability
- Global CDN distribution

### Next.js Static Export
- next export command for static generation
- Pre-renders all pages at build time
- Generates static HTML, CSS, and JS files
- No server-side rendering needed

## Build Configuration

### next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  }
};

export default nextConfig;

### Build Process
1. Run npm run build
2. Static files generated in /out directory
3. Upload to any static hosting service
4. Configure custom domain if needed

## Hosting Options

### Vercel (Recommended)
- Built for Next.js applications
- Automatic deployments from Git
- Global CDN included
- Free tier available

### Netlify
- Easy drag-and-drop deployment
- Form handling capabilities
- Branch-based deployments
- Free tier with good limits

### GitHub Pages
- Free hosting for public repositories
- Custom domain support
- Automatic HTTPS
- Simple deployment process

## Domain and DNS

### Custom Domain Setup
1. Purchase domain from registrar
2. Configure DNS records
3. Set up SSL certificate
4. Test domain resolution

### Performance Optimization
- Enable gzip compression
- Set proper cache headers
- Use CDN for global delivery
- Monitor uptime and performance

## Continuous Deployment

### GitHub Actions
- Automated builds on push
- Deploy to hosting service
- Run tests before deployment
- Notify on deployment status

### Deployment Checklist
- [ ] Build completes successfully
- [ ] All pages load correctly
- [ ] Images and assets work
- [ ] Forms and interactions function
- [ ] Mobile responsiveness verified
- [ ] Performance metrics acceptable

The result is a fast, reliable, and globally accessible portfolio that showcases your work effectively.`,
    date: "2024-12-14",
    readTime: "6 min read",
    category: "Deployment",
    tags: ["Deployment", "Static Generation", "Next.js", "Hosting"]
  }
];

// Function to get blog post by slug
function getBlogPost(slug: string) {
  return blogPosts.find(post => post.slug === slug);
}

// Generate static params for all blog posts
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getBlogPost(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 min-h-screen">
      <div className="max-w-4xl w-full">
        <FloatingNav navItems={[
          {name: 'Home', link: '/', icon: <FaHome />},
          {name: 'About', link: '/about', icon: <FaUser />},
          {name: 'Blog', link: '/blog', icon: <FaBlog />}
        ]} />
        
        {/* Back Button */}
        <div className="pt-32 pb-8">
          <Link 
            href="/blog" 
            className="flex items-center gap-2 text-white-200 hover:text-purple transition-colors mb-8"
          >
            <FaArrowLeft className="text-lg" />
            Back to Blog
          </Link>
        </div>

        {/* Blog Post Content */}
        <article className="bg-black-200 rounded-2xl p-8 border border-neutral-800 mb-20">
          {/* Category Badge */}
          <div className="mb-6">
            <span className="inline-block bg-purple/20 text-purple px-4 py-2 rounded-full text-sm font-medium">
              {post.category}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            {post.title}
          </h1>

          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-4 mb-8 text-white-200">
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {post.tags.map((tag, index) => (
              <span 
                key={index}
                className="text-sm bg-neutral-800 text-white-200 px-3 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Content */}
          <div className="prose prose-invert max-w-none">
            <div className="text-white-200 text-lg leading-relaxed whitespace-pre-line">
              {post.content}
            </div>
          </div>
        </article>

        {/* Related Posts or Back to Blog */}
        <div className="text-center pb-20">
          <Link 
            href="/blog"
            className="inline-flex items-center gap-2 bg-purple/20 text-purple px-6 py-3 rounded-full hover:bg-purple/30 transition-colors"
          >
            <FaBlog />
            View All Posts
          </Link>
        </div>
      </div>
    </main>
  );
}