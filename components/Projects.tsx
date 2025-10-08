"use client";

import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight, FaExternalLinkAlt } from "react-icons/fa";
import { CardSpotlight } from "./ui/card-spotlight";

interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  gradient: string;
  icon: string;
}

const projects: Project[] = [
  {
    id: "stock-analysis",
    title: "Agentic Solution for Colombo Stock Market Analysis",
    description: "AI-powered financial analysis platform using machine learning algorithms to analyze market trends and provide intelligent investment insights.",
    category: "AI/ML",
    gradient: "from-blue-500/20 to-purple-600/20",
    icon: "📈"
  },
  {
    id: "drone-project",
    title: "Drone Project",
    description: "Advanced drone control system with AI integration for autonomous flight, object detection, and real-time data processing capabilities.",
    category: "Robotics",
    gradient: "from-green-500/20 to-teal-600/20",
    icon: "🚁"
  },
  {
    id: "travel-infrastructure",
    title: "Travel Infrastructure Project",
    description: "Comprehensive travel management platform with booking systems, route optimization, and real-time tracking for enhanced user experience.",
    category: "Full-Stack",
    gradient: "from-orange-500/20 to-red-600/20",
    icon: "✈️"
  },
  {
    id: "portfolio",
    title: "Personal Portfolio",
    description: "Modern, responsive portfolio website showcasing technical skills and projects with interactive animations and smooth user experience.",
    category: "Frontend",
    gradient: "from-purple-500/20 to-pink-600/20",
    icon: "💼"
  }
];

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -400,
        behavior: 'smooth'
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 400,
        behavior: 'smooth'
      });
    }
  };

  const handleProjectClick = (projectId: string) => {
    // TODO: Navigate to project detail page
    console.log(`Navigate to project: ${projectId}`);
  };

  return (
    <div className="py-20 border-b border-neutral-800">
      <motion.h1 
        className="heading py-20"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Recent <span className="text-purple">Projects</span>
      </motion.h1>

      {/* Horizontal Scrollable Projects */}
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
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 hidden md:flex items-center justify-center w-12 h-12 bg-black-200/80 backdrop-blur-sm border border-white/20 rounded-full text-white hover:bg-white/10 transition-all duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaChevronLeft className="text-sm" />
        </motion.button>

        <motion.button
          onClick={scrollRight}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 hidden md:flex items-center justify-center w-12 h-12 bg-black-200/80 backdrop-blur-sm border border-white/20 rounded-full text-white hover:bg-white/10 transition-all duration-300"
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
          <div className="flex gap-8 px-8" style={{ width: 'max-content' }}>
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
                className="flex-shrink-0"
              >
                <CardSpotlight className="h-96 w-80 cursor-pointer group">
                  <div 
                    className={`h-full w-full p-6 rounded-2xl bg-gradient-to-br ${project.gradient} border border-white/10 relative overflow-hidden`}
                    onClick={() => handleProjectClick(project.id)}
                  >
                    {/* Background pattern */}
                    <div className="absolute inset-0 opacity-5">
                      <div className="absolute top-4 right-4 text-6xl">{project.icon}</div>
                    </div>
                    
                    {/* Content */}
                    <div className="relative z-10 h-full flex flex-col">
                      {/* Category badge */}
                      <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-xs font-medium text-white/80 mb-4 w-fit">
                        {project.category}
                      </div>
                      
                      {/* Title */}
                      <h3 className="text-xl font-bold text-white mb-3 leading-tight">
                        {project.title}
                      </h3>
                      
                      {/* Description */}
                      <p className="text-white/70 text-sm leading-relaxed flex-grow">
                        {project.description}
                      </p>
                      
                      {/* Action button */}
                      <motion.div 
                        className="mt-6 flex items-center justify-between"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ 
                          opacity: hoveredProject === project.id ? 1 : 0,
                          y: hoveredProject === project.id ? 0 : 10
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        <span className="text-white/60 text-sm font-medium">View Details</span>
                        <FaExternalLinkAlt className="text-white/60 text-sm" />
                      </motion.div>
                    </div>
                    
                    {/* Hover overlay */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: hoveredProject === project.id ? 1 : 0 }}
                      transition={{ duration: 0.2 }}
                    />
                  </div>
                </CardSpotlight>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Projects;
