"use client"

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const ACima = () => {
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
            CIMA & Student Council
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
                src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/cima-pic.png`}
                alt="Trilanka speaking at Freshers Eve as CIMA Student Council President"
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
                Meantime I was studying <span className="text-white font-medium">CIMA</span> (Chartered Institute of Management Accountants), 
                I was appointed <span className="text-white font-medium">President of the Student Council</span> at the certificate level.
              </p>
              <p>
                In that role I was responsible for organizing and running all council events—from Freshers&apos; Eve to formal proceedings—and 
                keeping everything on track. It wasn&apos;t only about education; it was about <span className="text-white font-medium">leadership</span>, 
                <span className="text-white font-medium"> event management</span>, and <span className="text-white font-medium">coordination</span> with members and stakeholders.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 mt-12">
              <div className="bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-sm">
                <h3 className="text-white font-medium mb-3 text-lg">CIMA</h3>
                <p className="text-gray-400 text-sm font-light">Certificate Level</p>
              </div>
              <div className="bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-sm">
                <h3 className="text-white font-medium mb-3 text-lg">Student Council</h3>
                <p className="text-gray-400 text-sm font-light">President</p>
              </div>
              <div className="bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-sm">
                <h3 className="text-white font-medium mb-3 text-lg">Events</h3>
                <p className="text-gray-400 text-sm font-light">Organized & Led</p>
              </div>
              <div className="bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-sm">
                <h3 className="text-white font-medium mb-3 text-lg">Proceedings</h3>
                <p className="text-gray-400 text-sm font-light">Kept on Track</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default ACima
