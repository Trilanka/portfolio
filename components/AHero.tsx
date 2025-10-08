"use client"

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image';

const AHero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-7xl w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight">
              Hi, I&apos;m{' '}
              <span className="text-purple bg-gradient-to-r from-purple to-pink-300 bg-clip-text text-transparent">
                Trilanka
              </span>
            </h1>
            
            <div className="space-y-4 text-lg sm:text-xl text-white-200 leading-relaxed">
              <p>
                A recent graduate from the <span className="text-purple font-semibold">University of Peradeniya</span>, 
                specialized in Electrical and Electronic Engineering.
              </p>
              <p>
                I have a strong focus on <span className="text-purple font-semibold">Software Engineering</span> and 
                <span className="text-purple font-semibold"> AI/ML/DL development</span>.
              </p>
              <p>
                I&apos;m now looking for an opportunity with an employer where I can grow and expand my career in the tech industry.
              </p>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <button className="px-8 py-3 bg-purple text-white rounded-full font-semibold hover:bg-purple/80 transition-colors">
                View My Work
              </button>
              <button className="px-8 py-3 border border-purple text-purple rounded-full font-semibold hover:bg-purple hover:text-white transition-colors">
                Download CV
              </button>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative w-80 h-80 sm:w-96 sm:h-96 bg-black-200 rounded-2xl border-2 border-purple/30 shadow-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-purple to-pink-300 rounded-2xl blur-3xl opacity-20"></div>
              <Image 
                src="./profile.png" 
                alt="Trilanka Beddegama" 
                className="relative w-full h-full object-contain p-2"
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
