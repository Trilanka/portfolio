"use client";
import React, { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/utils/cn";
import Link from "next/link";

export const ImprovedNavbar = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Track scroll position for header visibility
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Floating nav logic - show when scrolling up, hide when scrolling down
  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      let direction = current - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        setVisible(false);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <>
      {/* Header Navigation - Always visible at top */}
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={cn(
          "fixed top-0 left-0 right-0 z-[5000] backdrop-blur-2xl bg-white/10 border-b border-white/20 shadow-2xl shadow-black/20",
          className
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo/Brand */}
            <Link href="/" className="flex items-center space-x-2 group">
              <motion.div 
                className="w-8 h-8 bg-gradient-to-r from-purple to-pink-300 rounded-lg flex items-center justify-center backdrop-blur-sm border border-white/20"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <span className="text-white font-bold text-sm">T</span>
              </motion.div>
              <span className="text-white font-semibold hidden sm:block group-hover:text-purple transition-colors">Trilanka</span>
            </Link>

            {/* Navigation Items */}
            <nav className="hidden md:flex items-center space-x-2">
              {navItems.map((navItem, idx) => (
                <Link
                  key={`header-link-${idx}`}
                  href={navItem.link}
                  className={cn(
                    "relative text-white/80 hover:text-white transition-all duration-300 flex items-center space-x-2 group px-4 py-2 rounded-xl hover:bg-white/10 backdrop-blur-sm"
                  )}
                >
                  <motion.span 
                    className="text-lg"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    {navItem.icon}
                  </motion.span>
                  <span className="text-sm font-medium">{navItem.name}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
                </Link>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button className="text-white/80 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Floating Navigation - Shows when scrolling up */}
      <AnimatePresence mode="wait">
        {visible && (
          <motion.div
            initial={{
              opacity: 0,
              y: -100,
              scale: 0.8,
            }}
            animate={{
              y: 0,
              opacity: 1,
              scale: 1,
            }}
            exit={{
              y: -100,
              opacity: 0,
              scale: 0.8,
            }}
            transition={{
              duration: 0.3,
              ease: "easeOut",
            }}
            className={cn(
              "flex max-w-fit fixed top-20 inset-x-0 mx-auto border border-white/20 rounded-2xl bg-white/10 backdrop-blur-2xl shadow-2xl shadow-black/20 z-[4999] px-6 py-3 items-center justify-center space-x-6",
              className
            )}
          >
            {/* Liquid glass background layers */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-transparent to-white/5 rounded-2xl" />
            <div className="absolute inset-0 bg-gradient-to-b from-purple/10 via-transparent to-pink-300/10 rounded-2xl" />
            
            {navItems.map((navItem, idx) => (
              <Link
                key={`floating-link-${idx}`}
                href={navItem.link}
                className={cn(
                  "relative text-white/80 hover:text-white transition-all duration-300 flex items-center space-x-2 group px-3 py-2 rounded-xl hover:bg-white/10"
                )}
              >
                <span className="text-lg group-hover:scale-110 transition-transform duration-200">
                  {navItem.icon}
                </span>
                <span className="text-sm font-medium hidden sm:block">
                  {navItem.name}
                </span>
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Spacer to prevent content from going under fixed header */}
      <div className="h-16"></div>
    </>
  );
};
