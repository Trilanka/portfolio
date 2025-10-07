"use client"

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image';

const Alead = () => {
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
            A <span className="text-purple">Leader</span> to Count On
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple to-pink-300 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="space-y-4 text-lg text-white-200 leading-relaxed">
              <p>
                I was a <span className="text-purple font-semibold">passionate volunteer</span> throughout my undergrad, 
                leading over <span className="text-purple font-semibold">15 projects</span> as chairperson and serving as the 
                <span className="text-purple font-semibold"> president of IEEE UoP</span>.
              </p>
              <p>
                What I discovered through these experiences is that one of my greatest strengths is 
                <span className="text-purple font-semibold"> working with people</span> and building strong teams.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              <div className="bg-black-200 p-6 rounded-xl border border-neutral-800">
                <div className="text-3xl font-bold text-purple mb-2">15+</div>
                <h3 className="text-white font-semibold mb-2">Projects Led</h3>
                <p className="text-white-200 text-sm">Successfully managed and delivered</p>
              </div>
              <div className="bg-black-200 p-6 rounded-xl border border-neutral-800">
                <div className="text-3xl font-bold text-purple mb-2">IEEE</div>
                <h3 className="text-white font-semibold mb-2">President</h3>
                <p className="text-white-200 text-sm">University of Peradeniya Chapter</p>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-semibold text-white mb-4">Leadership Skills</h3>
              <div className="flex flex-wrap gap-2">
                {['Team Management', 'Project Planning', 'Public Speaking', 'Event Organization', 'Mentoring', 'Strategic Thinking'].map((skill, index) => (
                  <span key={index} className="bg-purple/20 text-purple px-3 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative w-80 h-80 sm:w-96 sm:h-96 bg-black-200 rounded-2xl border-2 border-purple/30 shadow-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-purple to-pink-300 rounded-2xl blur-3xl opacity-20"></div>
              <Image 
                src="/lead.jpg" 
                alt="Trilanka in leadership role" 
                className="relative w-full h-full object-contain p-2"
                width={400}
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
