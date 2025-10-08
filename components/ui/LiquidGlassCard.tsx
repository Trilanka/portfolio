"use client"

import React from 'react'
import { motion } from 'framer-motion'

interface LiquidGlassCardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
  glow?: boolean
}

const LiquidGlassCard: React.FC<LiquidGlassCardProps> = ({
  children,
  className = '',
  hover = true,
  glow = false
}) => {
  return (
    <motion.div
      className={`
        relative overflow-hidden rounded-3xl
        backdrop-blur-xl bg-white/10 border border-white/20
        shadow-lg shadow-black/10
        ${glow ? 'shadow-purple/20' : ''}
        ${hover ? 'hover:bg-white/15 hover:border-white/30' : ''}
        transition-all duration-500
        ${className}
      `}
      whileHover={hover ? { 
        scale: 1.02, 
        y: -5,
        boxShadow: glow ? '0 25px 50px -12px rgba(147, 51, 234, 0.25)' : '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
      } : {}}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      {/* Liquid glass background layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-white/5" />
      <div className="absolute inset-0 bg-gradient-to-tl from-purple/10 via-transparent to-pink-300/10" />
      
      {/* Shimmer effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-700 transform -skew-x-12" />
      
      {/* Content */}
      <div className="relative z-10 p-6">
        {children}
      </div>
    </motion.div>
  )
}

export default LiquidGlassCard

