"use client"

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image';

const Aunique = () => {
  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            I <span className="text-purple">Love to Learn</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple to-pink-300 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <div className="relative w-full h-80 sm:h-96 bg-black-200 rounded-2xl border-2 border-purple/30 shadow-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-purple to-pink-300 rounded-2xl blur-3xl opacity-20"></div>
              <Image 
                src="/win.jpg" 
                alt="Trilanka winning drone competition" 
                className="relative w-full h-full object-contain p-2"
                width={500}
                height={400}
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2 space-y-6"
          >
            <div className="space-y-4 text-lg text-white-200 leading-relaxed">
              <p>
                I am a <span className="text-purple font-semibold">quick learner</span>, especially when it comes to tech! 
                I recently won a major drone competition, all thanks to a project where I had to develop an AI model to control drones.
              </p>
              <p>
                I jumped right into learning the technology, and it paid off! Honestly, I think the reason I pick up new skills so fast 
                is simple... <span className="text-purple font-semibold">I love what I do!</span>
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="bg-black-200 p-4 rounded-xl border border-neutral-800">
                <h3 className="text-purple font-semibold mb-2">AI/ML</h3>
                <p className="text-white-200 text-sm">Machine Learning & Deep Learning</p>
              </div>
              <div className="bg-black-200 p-4 rounded-xl border border-neutral-800">
                <h3 className="text-purple font-semibold mb-2">Web Dev</h3>
                <p className="text-white-200 text-sm">Full Stack Development</p>
              </div>
              <div className="bg-black-200 p-4 rounded-xl border border-neutral-800">
                <h3 className="text-purple font-semibold mb-2">Robotics</h3>
                <p className="text-white-200 text-sm">Drone & Automation</p>
              </div>
              <div className="bg-black-200 p-4 rounded-xl border border-neutral-800">
                <h3 className="text-purple font-semibold mb-2">Problem Solving</h3>
                <p className="text-white-200 text-sm">Creative Solutions</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Aunique
