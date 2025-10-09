"use client"

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image';

const Aunique = () => {
  return (
    <div className="py-24 px-6 sm:px-8 lg:px-12 xl:px-16">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-light text-white mb-8 tracking-tight">
            I Love to Learn
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <div className="relative bg-white/5 rounded-3xl border border-white/10 backdrop-blur-sm overflow-hidden">
              <Image 
                src="./win.jpg" 
                alt="Trilanka winning drone competition" 
                className="w-auto h-auto max-w-full"
                width={500}
                height={400}
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="order-1 lg:order-2 space-y-8"
          >
            <div className="space-y-6 text-xl text-gray-300 leading-relaxed font-light">
              <p>
                I am a <span className="text-white font-medium">quick learner</span>, especially when it comes to tech! 
                I recently won a major drone competition, all thanks to a project where I had to develop an AI model to control drones.
              </p>
              <p>
                I jumped right into learning the technology, and it paid off! Honestly, I think the reason I pick up new skills so fast 
                is simple... <span className="text-white font-medium">I love what I do!</span>
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 mt-12">
              <div className="bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-sm">
                <h3 className="text-white font-medium mb-3 text-lg">AI/ML</h3>
                <p className="text-gray-400 text-sm font-light">Machine Learning & Deep Learning</p>
              </div>
              <div className="bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-sm">
                <h3 className="text-white font-medium mb-3 text-lg">Web Dev</h3>
                <p className="text-gray-400 text-sm font-light">Full Stack Development</p>
              </div>
              <div className="bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-sm">
                <h3 className="text-white font-medium mb-3 text-lg">Robotics</h3>
                <p className="text-gray-400 text-sm font-light">Drone & Automation</p>
              </div>
              <div className="bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-sm">
                <h3 className="text-white font-medium mb-3 text-lg">Problem Solving</h3>
                <p className="text-gray-400 text-sm font-light">Creative Solutions</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Aunique
