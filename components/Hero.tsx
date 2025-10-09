"use client";

import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="relative h-screen flex items-center justify-center px-6 sm:px-8 lg:px-12 xl:px-16 overflow-hidden">
      {/* Light Beam Effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Main light beam from top center */}
        <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-gradient-to-b from-white/8 via-white/4 to-transparent rounded-full blur-3xl"></div>
        
        {/* Secondary light beam from top right */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-white/6 via-white/3 to-transparent rounded-full blur-3xl"></div>
        
        {/* Accent light beam from bottom left */}
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-tr from-white/5 via-white/2 to-transparent rounded-full blur-3xl"></div>
        
        {/* Subtle radial gradient overlay */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/10"></div>
      </div>

      <div className="relative z-10 max-w-6xl w-full">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-12"
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light text-white mb-8 leading-tight tracking-tight">
              Software Engineer
            </h1>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-300 mb-16 leading-tight tracking-tight">
              AI/ML Developer • Electronics Engineer
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="max-w-3xl mx-auto mb-16"
          >
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-light">
              Hi! I&apos;m Trilanka, an Application Engineer passionate about creating technology that makes a difference, based in Colombo, Sri Lanka.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          >
            <a href="about">
              <button className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full font-medium hover:bg-gray-100 transition-colors duration-300">
                Learn More About Me
                <FaArrowRight className="text-sm" />
              </button>
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
