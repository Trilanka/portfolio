"use client"

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

interface NavItem {
  name: string
  link: string
  icon?: React.ReactNode
}

interface LiquidGlassNavProps {
  navItems: NavItem[]
  className?: string
}

const LiquidGlassNav: React.FC<LiquidGlassNavProps> = ({
  navItems,
  className = ''
}) => {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`
        fixed top-4 left-1/2 transform -translate-x-1/2 z-50
        backdrop-blur-2xl bg-white/10 border border-white/20
        rounded-2xl shadow-2xl shadow-black/20
        px-6 py-3
        ${className}
      `}
    >
      <div className="flex items-center space-x-2">
        {navItems.map((item, index) => (
          <Link
            key={item.name}
            href={item.link}
            className="relative"
            onMouseEnter={() => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(-1)}
          >
            <motion.div
              className={`
                relative px-4 py-2 rounded-xl transition-all duration-300
                flex items-center space-x-2 text-white/80
                hover:text-white
              `}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Active background */}
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    layoutId="activeBackground"
                    className="absolute inset-0 bg-white/20 rounded-xl backdrop-blur-sm"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  />
                )}
              </AnimatePresence>

              {/* Icon */}
              {item.icon && (
                <span className="relative z-10 text-lg">
                  {item.icon}
                </span>
              )}

              {/* Text */}
              <span className="relative z-10 font-medium">
                {item.name}
              </span>

              {/* Liquid glass effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-xl" />
            </motion.div>
          </Link>
        ))}
      </div>

      {/* Liquid glass background layers */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-transparent to-white/5 rounded-2xl" />
      <div className="absolute inset-0 bg-gradient-to-b from-purple/10 via-transparent to-pink-300/10 rounded-2xl" />
    </motion.nav>
  )
}

export default LiquidGlassNav

