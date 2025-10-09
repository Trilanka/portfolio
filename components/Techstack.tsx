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
    <div className="py-24 px-6 sm:px-8 lg:px-12 xl:px-16">
      <div className="max-w-6xl mx-auto">
        <motion.h1 
          className="text-5xl sm:text-6xl lg:text-7xl font-light text-white mb-20 text-center tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Technology Stack
        </motion.h1>

        {/* Tech Stack Grid */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {techStack.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1, ease: "easeOut" }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredTech(tech.name)}
              onMouseLeave={() => setHoveredTech(null)}
              className="group cursor-pointer"
            >
              <div className="bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-sm hover:bg-white/8 transition-all duration-300 text-center h-full">
                <motion.div
                  className="text-white mb-4 flex justify-center"
                  whileHover={{ 
                    scale: 1.1,
                    transition: { duration: 0.2 }
                  }}
                >
                  {tech.icon}
                </motion.div>
                
                <h3 className="text-white font-medium mb-2 text-sm">
                  {tech.name}
                </h3>

                {/* Tooltip */}
                <motion.div
                  className="absolute -top-16 left-1/2 transform -translate-x-1/2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-3 py-2 text-xs text-white whitespace-nowrap opacity-0 pointer-events-none z-50"
                  animate={{ 
                    opacity: hoveredTech === tech.name ? 1 : 0,
                    y: hoveredTech === tech.name ? 0 : 10
                  }}
                  transition={{ duration: 0.2 }}
                >
                  {tech.description}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div 
          className="grid grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {[
            { label: 'Technologies', value: '8+', icon: '⚡' },
            { label: 'Years Experience', value: '2+', icon: '🚀' },
            { label: 'Projects Built', value: '5+', icon: '💻' }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-sm"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.6 + index * 0.1, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <div className="text-3xl mb-3">{stat.icon}</div>
              <div className="text-2xl font-light text-white mb-2">{stat.value}</div>
              <div className="text-sm text-gray-400 font-light">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default Techstack
