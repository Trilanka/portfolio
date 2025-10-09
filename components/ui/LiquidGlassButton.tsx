"use client"

import React from 'react'
import { motion } from 'framer-motion'

interface LiquidGlassButtonProps {
  children: React.ReactNode
  onClick?: () => void
  className?: string
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
}

const LiquidGlassButton: React.FC<LiquidGlassButtonProps> = ({
  children,
  onClick,
  className = '',
  variant = 'primary',
  size = 'md',
  disabled = false
}) => {
  const baseClasses = `
    relative overflow-hidden rounded-2xl font-semibold transition-all duration-300
    backdrop-blur-md border border-white/20
    active:scale-95 transform-gpu
    ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
  `

  const variantClasses = {
    primary: `
      bg-gradient-to-r from-purple/20 to-pink-300/20
      text-white shadow-lg shadow-purple/25
      hover:from-purple/30 hover:to-pink-300/30
      hover:shadow-xl hover:shadow-purple/40
    `,
    secondary: `
      bg-white/10 text-white
      hover:bg-white/20
      hover:shadow-lg hover:shadow-white/10
    `,
    ghost: `
      bg-transparent text-white/80
      hover:bg-white/10 hover:text-white
    `
  }

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  }

  return (
    <motion.button
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      {/* Liquid glass background effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
      
      {/* Shimmer effect */}
      <div className="absolute inset-0 -top-2 -left-2 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 transform -skew-x-12" />
      
      {/* Content */}
      <span className="relative z-10">{children}</span>
    </motion.button>
  )
}

export default LiquidGlassButton




