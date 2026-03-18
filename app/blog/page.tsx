import React from 'react';
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { FaHome, FaUser, FaEnvelope, FaBlog } from "react-icons/fa";
import Link from 'next/link';

const blogPosts = [
  {
    id: 1,
    slug: "scalable-sql-schema-realtime-chat",
    title: "Designing a Scalable SQL Schema for a Real-Time Chat Application",
    excerpt:
      "Building a real-time chat system sounds simple at first—users send messages, and others receive them. But once you start thinking about delivery guarantees, read receipts, group chats, and scalability, the data model becomes significantly more complex.",
    date: "2025-03-18",
    readTime: "9 min read",
    category: "Backend",
    tags: ["PostgreSQL", "SQL", "Schema Design", "Real-Time", "Chat"],
  },
];

export default function BlogPage() {
  return (
    <main className="relative bg-white min-h-screen overflow-hidden text-neutral-900">
      <div className="max-w-5xl w-full mx-auto sm:px-10 px-5">
        <FloatingNav
          variant="light"
          navItems={[
            { name: "Home", link: "/", icon: <FaHome /> },
            { name: "Blog", link: "/blog", icon: <FaBlog /> },
            { name: "About", link: "/about", icon: <FaUser /> },
            { name: "Contact", link: "/contact", icon: <FaEnvelope /> },
          ]}
        />

        {/* Header Section */}
        <div className="pt-32 pb-10">
          <div className="text-left mb-10">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-neutral-900 mb-4">
              Tech blog
            </h1>
            <p className="text-base md:text-lg text-neutral-600 max-w-2xl">
              Longer-form write‑ups about the work I do, the systems I help build, and what I learn along the way.
            </p>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 pb-20">
          {blogPosts.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className="block rounded-2xl border border-neutral-200 bg-white p-6 hover:border-neutral-300 hover:shadow-md transition-all duration-300"
            >
              <span className="inline-block bg-neutral-100 text-neutral-700 px-3 py-1 rounded-full text-sm font-medium mb-4">
                {post.category}
              </span>
              <h2 className="text-xl font-semibold text-neutral-900 mb-2 line-clamp-2">
                {post.title}
              </h2>
              <p className="text-neutral-600 text-sm mb-4 line-clamp-3">
                {post.excerpt}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.slice(0, 3).map((tag, index) => (
                  <span
                    key={index}
                    className="text-xs bg-neutral-100 text-neutral-600 px-2 py-0.5 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex items-center justify-between text-xs text-neutral-500">
                <span>{post.date}</span>
                <span>{post.readTime}</span>
              </div>
              <span className="mt-3 inline-block text-sm font-medium text-neutral-900">
                Read more →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}

