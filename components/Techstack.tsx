"use client";

import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { RiReactjsLine } from 'react-icons/ri';
import { TbBrandNextjs, TbBrandDocker } from 'react-icons/tb';
import { SiMongodb, SiAmazon, SiTypescript, SiTailwindcss, SiExpress } from 'react-icons/si';
import { FaNodeJs, FaAws, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { BiLogoPostgresql } from 'react-icons/bi';
import { CardSpotlight } from './ui/card-spotlight';

interface TechItem {
  name: string;
  icon: React.ReactNode;
  description: string;
  color: string;
}

const techStack: TechItem[] = [
  {
    name: 'React',
    icon: <RiReactjsLine className='text-6xl' />,
    description: 'Modern UI library for building interactive user interfaces',
    color: 'text-cyan-400'
  },
  {
    name: 'Next.js',
    icon: <TbBrandNextjs className='text-6xl' />,
    description: 'Full-stack React framework with SSR and static generation',
    color: 'text-white'
  },
  {
    name: 'TypeScript',
    icon: <SiTypescript className='text-6xl' />,
    description: 'Strongly typed JavaScript for better development experience',
    color: 'text-blue-500'
  },
  {
    name: 'Tailwind CSS',
    icon: <SiTailwindcss className='text-6xl' />,
    description: 'Utility-first CSS framework for rapid UI development',
    color: 'text-cyan-500'
  },
  {
    name: 'Node.js',
    icon: <FaNodeJs className='text-6xl' />,
    description: 'JavaScript runtime for server-side development',
    color: 'text-green-500'
  },
  {
    name: 'Express.js',
    icon: <SiExpress className='text-6xl' />,
    description: 'Fast, unopinionated web framework for Node.js',
    color: 'text-gray-300'
  },
  {
    name: 'MongoDB',
    icon: <SiMongodb className='text-6xl' />,
    description: 'NoSQL document database for modern applications',
    color: 'text-green-500'
  },
  {
    name: 'PostgreSQL',
    icon: <BiLogoPostgresql className='text-6xl' />,
    description: 'Advanced open-source relational database',
    color: 'text-sky-700'
  },
  {
    name: 'AWS',
    icon: <SiAmazon className='text-6xl' />,
    description: 'Amazon Web Services cloud computing platform',
    color: 'text-orange-500'
  },
  {
    name: 'Docker',
    icon: <TbBrandDocker className='text-6xl' />,
    description: 'Containerization platform for application deployment',
    color: 'text-blue-400'
  }
];

const Techstack = () => {
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -200,
        behavior: 'smooth'
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 200,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className='border-b border-neutral-800 pb-40'>
      <motion.h1 
        className="heading py-40"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        My Technology <span className="text-purple">Stack</span>
      </motion.h1>

      {/* Horizontal Scrollable Tech Stack */}
      <motion.div 
        className="relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        {/* Scroll buttons - only visible on non-touch devices */}
        <motion.button
          onClick={scrollLeft}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 hidden md:flex items-center justify-center w-10 h-10 bg-black-200/80 backdrop-blur-sm border border-white/20 rounded-full text-white hover:bg-white/10 transition-all duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaChevronLeft className="text-sm" />
        </motion.button>

        <motion.button
          onClick={scrollRight}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 hidden md:flex items-center justify-center w-10 h-10 bg-black-200/80 backdrop-blur-sm border border-white/20 rounded-full text-white hover:bg-white/10 transition-all duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaChevronRight className="text-sm" />
        </motion.button>

        {/* Gradient overlays for scroll indication */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-black-100 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-black-100 to-transparent z-10 pointer-events-none"></div>
        
        {/* Scrollable container */}
        <div ref={scrollContainerRef} className="overflow-x-auto scrollbar-hide pb-4">
          <div className="flex gap-6 px-8" style={{ width: 'max-content' }}>
            {techStack.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                onMouseEnter={() => setHoveredTech(tech.name)}
                onMouseLeave={() => setHoveredTech(null)}
                className="flex-shrink-0"
              >
                <CardSpotlight className="h-40 w-32 cursor-pointer group">
                  <div className="flex flex-col items-center justify-center h-full p-4 relative">
                    <motion.div
                      className={`${tech.color} transition-all duration-300`}
                      whileHover={{ 
                        scale: 1.1,
                        rotate: [0, -5, 5, 0],
                        transition: { duration: 0.3 }
                      }}
                    >
                      {tech.icon}
                    </motion.div>
                    
                    <motion.p 
                      className="text-xs text-neutral-400 mt-3 text-center font-medium"
                      initial={{ opacity: 0.7 }}
                      whileHover={{ opacity: 1 }}
                    >
                      {tech.name}
                    </motion.p>

                    {/* Tooltip */}
                    <motion.div
                      className="absolute -top-20 left-1/2 transform -translate-x-1/2 bg-neutral-900/95 backdrop-blur-sm border border-neutral-700 rounded-lg px-3 py-2 text-xs text-white whitespace-nowrap opacity-0 pointer-events-none z-50"
                      animate={{ 
                        opacity: hoveredTech === tech.name ? 1 : 0,
                        y: hoveredTech === tech.name ? 0 : 10
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      {tech.description}
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-neutral-700"></div>
                    </motion.div>
                  </div>
                </CardSpotlight>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Stats Section */}
      <motion.div 
        className="mt-20 grid grid-cols-3 gap-8 max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
        {[
          { label: 'Technologies', value: '8+', icon: '⚡' },
          { label: 'Years Experience', value: '2+', icon: '🚀' },
          { label: 'Projects Built', value: '5+', icon: '💻' }
        ].map((stat, index) => (
          <motion.div
            key={stat.label}
            className="text-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="text-3xl mb-2">{stat.icon}</div>
            <div className="text-2xl font-bold text-purple mb-1">{stat.value}</div>
            <div className="text-sm text-neutral-400">{stat.label}</div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export default Techstack
