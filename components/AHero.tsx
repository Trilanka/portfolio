"use client"

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image';

const AHero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 sm:px-8 lg:px-12 xl:px-16 py-24">
      <div className="max-w-6xl w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light text-white mb-8 leading-tight tracking-tight">
              Hi, I&apos;m{' '}
              <span className="text-white font-medium">
                Trilanka
              </span>
            </h1>
            
            <div className="space-y-6 text-xl text-gray-300 leading-relaxed font-light">
              <p>
                A recent graduate from the <span className="text-white font-medium">University of Peradeniya</span>, 
                specialized in Electrical and Electronic Engineering.
              </p>
              <p>
                I have a strong focus on <span className="text-white font-medium">Software Engineering</span> and 
                <span className="text-white font-medium"> AI/ML/DL development</span>.
              </p>
              <p>
                I&apos;m now looking for an opportunity with an employer where I can grow and expand my career in the tech industry.
              </p>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="mt-12 flex justify-center lg:justify-start"
            >
              <a 
                href="./Trilanka_Beddegama_CV.pdf" 
                download="Trilanka_Beddegama_CV.pdf"
                className="px-8 py-4 border border-white/20 text-white rounded-full font-medium hover:bg-white/10 transition-colors duration-300 inline-flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download CV
              </a>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative bg-white/5 rounded-3xl border border-white/10 backdrop-blur-sm overflow-hidden">
              <Image 
                src="./docs/profile.png" 
                alt="Trilanka Beddegama" 
                className="w-auto h-auto max-w-full"
                width={400}
                height={400}
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default AHero
