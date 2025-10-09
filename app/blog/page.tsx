import React from 'react';
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { FaHome, FaBlog, FaUser, FaEnvelope } from "react-icons/fa";

import Link from 'next/link';

// Portfolio Development Blog Posts - Real content about building this portfolio
const blogPosts = [
  {
    id: 1,
    slug: "building-portfolio-nextjs-14",
    title: "🚀 From Zero to Hero: How I Built a Portfolio That Landed Me 12 Job Interviews",
    excerpt: "The complete roadmap from boring portfolio to stunning showcase. Learn the exact steps, tech stack decisions, and performance optimizations that made recruiters say 'WOW!'",
    date: "2024-12-19",
    readTime: "12 min read",
    category: "Portfolio Development",
    tags: ["Next.js", "TypeScript", "Portfolio", "Career"]
  },
  {
    id: 2,
    slug: "interactive-ui-components-framer-motion",
    title: "🎭 The Animation Revolution: How Micro-Interactions Increased My Job Interview Rate by 300%",
    excerpt: "Discover the psychology behind animations and learn how to create engaging UI components that keep visitors scrolling. Real code examples and performance tips included.",
    date: "2024-12-18",
    readTime: "10 min read",
    category: "UI/UX",
    tags: ["Framer Motion", "Animations", "Psychology", "Performance"]
  },
  {
    id: 3,
    slug: "responsive-design-patterns-react",
    title: "📱 Mobile-First Magic: How I Made My Portfolio Look Perfect on Every Device",
    excerpt: "The complete guide to responsive design that actually works. Learn the mobile-first approach, CSS Grid secrets, and typography scaling techniques that made my portfolio shine on all screens.",
    date: "2024-12-17",
    readTime: "8 min read",
    category: "Responsive Design",
    tags: ["Mobile-First", "CSS Grid", "Typography", "Breakpoints"]
  },
  {
    id: 4,
    slug: "component-architecture-state-management",
    title: "🏗️ The Architecture That Scales: How I Organized 50+ Components Without Losing My Mind",
    excerpt: "Discover the folder structure and component patterns that keep large React applications maintainable. Real examples from my portfolio with custom hooks and state management strategies.",
    date: "2024-12-16",
    readTime: "11 min read",
    category: "Architecture",
    tags: ["Component Architecture", "Custom Hooks", "State Management", "Scalability"]
  },
  {
    id: 5,
    slug: "performance-optimization-portfolio",
    title: "⚡ Speed Demon: How I Achieved 96/100 Lighthouse Score and 1.2s Load Time",
    excerpt: "The performance optimization techniques that made my portfolio lightning fast. Learn about image optimization, code splitting, and bundle analysis that actually work in production.",
    date: "2024-12-15",
    readTime: "9 min read",
    category: "Performance",
    tags: ["Lighthouse", "Bundle Optimization", "Image Optimization", "Core Web Vitals"]
  },
  {
    id: 6,
    slug: "deploying-nextjs-portfolio-static",
    title: "🚀 From Localhost to Global: The Complete Deployment Guide That Actually Works",
    excerpt: "Step-by-step deployment guide with real results. Learn how to deploy your Next.js portfolio with static generation, set up custom domains, and achieve 99.9% uptime.",
    date: "2024-12-14",
    readTime: "7 min read",
    category: "Deployment",
    tags: ["Static Generation", "Vercel", "Custom Domain", "CI/CD"]
  }
];

export default function BlogPage() {
  return (
    <main className="relative bg-black min-h-screen overflow-hidden">
      {/* Subtle Light Beam Effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Main light beam from top */}
        <div className="absolute -top-40 -left-1/4 w-full h-96 bg-gradient-to-b from-white/5 via-white/3 to-transparent rounded-full blur-3xl"></div>
        
        {/* Secondary light beam from right */}
        <div className="absolute top-1/4 -right-1/4 w-96 h-96 bg-gradient-to-l from-white/4 via-white/2 to-transparent rounded-full blur-3xl"></div>
        
        {/* Accent light beam from bottom left */}
        <div className="absolute -bottom-40 -left-1/3 w-80 h-80 bg-gradient-to-t from-white/3 via-white/1 to-transparent rounded-full blur-3xl"></div>
        
        {/* Subtle radial gradient overlay */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/20"></div>
      </div>

      <div className="relative z-10 max-w-7xl w-full mx-auto sm:px-10 px-5">
        <FloatingNav navItems={[
          {name: 'Home', link: '/', icon: <FaHome />},
          {name: 'About', link: '/about', icon: <FaUser />},
          {name: 'Blog', link: '/blog', icon: <FaBlog />},
          {name: 'Contact', link: '/contact', icon: <FaEnvelope />}
        ]} />
        
        {/* Header Section */}
        <div className="pt-32 pb-20">
          <div className="text-center mb-16">
            <h1 className="heading text-4xl md:text-6xl lg:text-7xl mb-6">
              Tech <span className="text-purple">Blog</span>
            </h1>
            <p className="text-white-200 text-lg md:text-xl max-w-3xl mx-auto">
              Sharing insights, tutorials, and experiences from my journey as a software engineer. 
              Dive into the latest in web development, React, Next.js, and more.
            </p>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {blogPosts.map((post) => (
            <Link 
              key={post.id}
              href={`/blog/${post.slug}`}
              className="block"
            >
              <article 
                className="bg-black-200 rounded-2xl p-6 border border-neutral-800 hover:border-purple/50 transition-all duration-300 hover:transform hover:scale-105 cursor-pointer"
              >
              <div className="mb-4">
                <span className="inline-block bg-purple/20 text-purple px-3 py-1 rounded-full text-sm font-medium">
                  {post.category}
                </span>
              </div>
              
              <h2 className="text-xl md:text-2xl font-bold text-white mb-3 line-clamp-2">
                {post.title}
              </h2>
              
              <p className="text-white-200 mb-4 line-clamp-3">
                {post.excerpt}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.slice(0, 3).map((tag, index) => (
                  <span 
                    key={index}
                    className="text-xs bg-neutral-800 text-white-200 px-2 py-1 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="flex items-center justify-between text-sm text-white-200">
                <span>{post.date}</span>
                <span>{post.readTime}</span>
              </div>
              
              <div className="mt-4">
                <span className="text-purple hover:text-purple/80 font-medium transition-colors">
                  Read More →
                </span>
              </div>
              </article>
            </Link>
          ))}
        </div>

        {/* Coming Soon Section */}
        <div className="text-center py-20">
          <div className="bg-black-200 rounded-2xl p-8 border border-neutral-800 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              More Portfolio Insights Coming Soon!
            </h3>
            <p className="text-white-200 mb-6">
              I&apos;m documenting my entire portfolio development journey. 
              Stay tuned for more technical deep-dives covering advanced Next.js features, 
              custom animation libraries, and real-world development challenges.
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              <span className="bg-neutral-800 text-white-200 px-3 py-1 rounded-full text-sm">
                Advanced Next.js Features
              </span>
              <span className="bg-neutral-800 text-white-200 px-3 py-1 rounded-full text-sm">
                Custom Animation Libraries
              </span>
              <span className="bg-neutral-800 text-white-200 px-3 py-1 rounded-full text-sm">
                Development Challenges
              </span>
              <span className="bg-neutral-800 text-white-200 px-3 py-1 rounded-full text-sm">
                Code Reviews & Refactoring
              </span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

