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
    id: "traffic-sign-recognition",
    title: "Real-Time Traffic Sign Recognition for ADAS",
    description: "Advanced AI system for real-time traffic sign detection using YOLOv8, deployed on NVIDIA Jetson AGX Xavier for autonomous driving applications.",
    category: "AI/ML",
    gradient: "from-blue-500/20 to-purple-600/20",
    icon: "🚦"
  },
  {
    id: "stock-analysis",
    title: "Agentic Solution for Colombo Stock Market Analysis",
    description: "AI-powered financial analysis platform using machine learning algorithms to analyze market trends and provide intelligent investment insights.",
    category: "AI/ML",
    gradient: "from-indigo-500/20 to-blue-600/20",
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
    // Navigate to project detail page
    if (projectId === 'traffic-sign-recognition') {
      window.location.href = '/projects/traffic-sign-recognition';
    } else if (projectId === 'drone-project') {
      window.location.href = '/projects/drone-project';
    } else {
      // For other projects, you can add their detail pages later
      console.log(`Navigate to project: ${projectId}`);
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
          Recent Projects
        </motion.h1>

        {/* Projects Grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-2 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1, ease: "easeOut" }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              className="group cursor-pointer"
              onClick={() => handleProjectClick(project.id)}
            >
              <div className="bg-white/5 p-8 rounded-3xl border border-white/10 backdrop-blur-sm hover:bg-white/8 transition-all duration-300 h-full">
                {/* Category badge */}
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm font-medium text-white/80 mb-6">
                  {project.category}
                </div>
                
                {/* Title */}
                <h3 className="text-2xl font-medium text-white mb-4 leading-tight">
                  {project.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-400 text-lg leading-relaxed font-light mb-6">
                  {project.description}
                </p>
                
                {/* Action button */}
                <motion.div 
                  className="flex items-center gap-2 text-white/60"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ 
                    opacity: hoveredProject === project.id ? 1 : 0.6,
                    x: hoveredProject === project.id ? 0 : -10
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="text-sm font-medium">View Details</span>
                  <FaExternalLinkAlt className="text-sm" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
