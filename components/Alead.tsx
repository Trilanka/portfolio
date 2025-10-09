"use client"

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image';

const Alead = () => {
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
            A leader to count on
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="order-2 lg:order-1 space-y-8"
          >
            <div className="space-y-6 text-xl text-gray-300 leading-relaxed font-light">
              <p>
                I was a <span className="text-white font-medium">passionate volunteer</span> throughout my undergrad, 
                leading over 15 projects as chairperson and serving as the president of IEEE UoP.
              </p>
              <p>
                What I discovered through these experiences is that one of my greatest strengths is 
                <span className="text-white font-medium"> working with people</span>.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 mt-12">
              <div className="bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-sm">
                <h3 className="text-white font-medium mb-3 text-lg">15+ Projects</h3>
                <p className="text-gray-400 text-sm font-light">Led as Chairperson</p>
              </div>
              <div className="bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-sm">
                <h3 className="text-white font-medium mb-3 text-lg">IEEE RAS UoP</h3>
                <p className="text-gray-400 text-sm font-light">President (former)</p>
              </div>
              <div className="bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-sm">
                <h3 className="text-white font-medium mb-3 text-lg">500+ Hours</h3>
                <p className="text-gray-400 text-sm font-light">Volunteer Work</p>
              </div>
              <div className="bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-sm">
                <h3 className="text-white font-medium mb-3 text-lg">30+ Members</h3>
                <p className="text-gray-400 text-sm font-light">Team Leadership</p>
              </div>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <div className="relative bg-white/5 rounded-3xl border border-white/10 backdrop-blur-sm overflow-hidden">
              <Image 
                src="./lead.jpg" 
                alt="Leadership experience" 
                className="w-auto h-auto max-w-full"
                width={500}
                height={400}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
export default Alead
