import React from 'react';
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { FaHome, FaBlog, FaUser } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import Link from 'next/link';

// Sample blog posts data - you can replace this with a CMS or markdown files later
const blogPosts = [
  {
    id: 1,
    title: "Getting Started with Next.js 14: A Complete Guide",
    excerpt: "Learn the fundamentals of Next.js 14 and how to build modern web applications with the latest features and improvements.",
    date: "2024-01-15",
    readTime: "5 min read",
    category: "Web Development",
    tags: ["Next.js", "React", "JavaScript", "Web Development"]
  },
  {
    id: 2,
    title: "Building Responsive UIs with Tailwind CSS",
    excerpt: "Master the art of creating beautiful, responsive user interfaces using Tailwind CSS utility classes and best practices.",
    date: "2024-01-10",
    readTime: "7 min read",
    category: "CSS",
    tags: ["Tailwind CSS", "CSS", "Responsive Design", "UI/UX"]
  },
  {
    id: 3,
    title: "Understanding React Hooks: useState and useEffect",
    excerpt: "Deep dive into React hooks, focusing on useState and useEffect, with practical examples and common use cases.",
    date: "2024-01-05",
    readTime: "6 min read",
    category: "React",
    tags: ["React", "Hooks", "JavaScript", "Frontend"]
  },
  {
    id: 4,
    title: "TypeScript Best Practices for React Developers",
    excerpt: "Essential TypeScript patterns and practices that every React developer should know to write more maintainable code.",
    date: "2024-01-01",
    readTime: "8 min read",
    category: "TypeScript",
    tags: ["TypeScript", "React", "Best Practices", "Code Quality"]
  }
];

export default function BlogPage() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 min-h-screen">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={[
          {name: 'Home', link: '/', icon: <FaHome />},
          {name: 'About', link: '/about', icon: <FaUser />},
          {name: 'Blog', link: '/blog', icon: <FaBlog />}
        ]} />
        
        {/* Header Section */}
        <div className="pt-32 pb-20">
          <div className="flex items-center gap-4 mb-8">
            <Link href="/" className="flex items-center gap-2 text-white-200 hover:text-purple transition-colors">
              <FaArrowLeft className="text-lg" />
              Back to Portfolio
            </Link>
          </div>
          
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
            <article 
              key={post.id}
              className="bg-black-200 rounded-2xl p-6 border border-neutral-800 hover:border-purple/50 transition-all duration-300 hover:transform hover:scale-105"
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
                <button className="text-purple hover:text-purple/80 font-medium transition-colors">
                  Read More →
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Coming Soon Section */}
        <div className="text-center py-20">
          <div className="bg-black-200 rounded-2xl p-8 border border-neutral-800 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              More Content Coming Soon!
            </h3>
            <p className="text-white-200 mb-6">
              I&apos;m constantly working on new tutorials, insights, and technical deep-dives. 
              Stay tuned for more content covering advanced React patterns, performance optimization, 
              and real-world project experiences.
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              <span className="bg-neutral-800 text-white-200 px-3 py-1 rounded-full text-sm">
                React Advanced Patterns
              </span>
              <span className="bg-neutral-800 text-white-200 px-3 py-1 rounded-full text-sm">
                Performance Optimization
              </span>
              <span className="bg-neutral-800 text-white-200 px-3 py-1 rounded-full text-sm">
                Project Case Studies
              </span>
              <span className="bg-neutral-800 text-white-200 px-3 py-1 rounded-full text-sm">
                Career Insights
              </span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

