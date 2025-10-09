"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/utils/cn";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const FloatingNav = ({
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
  const pathname = usePathname();

  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      // Show navigation with a slight delay and smooth transition
      if (scrollYProgress.get() > 0.02) {
        setVisible(true); // Show when scrolled down
      } else {
        setVisible(true); // Show when at top
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 0,
          y: -100,
          scale: 0.8,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
          scale: visible ? 1 : 0.8,
        }}
        transition={{
          duration: 0.4,
          ease: "easeOut",
          type: "spring",
          stiffness: 100,
          damping: 15,
        }}
        whileHover={{
          scale: 1.02,
          transition: { duration: 0.2 }
        }}
        className={cn(
          "flex max-w-fit fixed top-10 inset-x-0 mx-auto border border-white/20 rounded-full backdrop-blur-xl bg-white/10 shadow-2xl shadow-black/20 z-[5000] pr-2 pl-8 py-2 items-center justify-center space-x-4",
          className
        )}
      >
        {/* Animated background layers */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-white/5 via-transparent to-white/5 rounded-full"
          animate={{
            background: [
              "linear-gradient(90deg, rgba(255,255,255,0.05) 0%, transparent 50%, rgba(255,255,255,0.05) 100%)",
              "linear-gradient(90deg, rgba(255,255,255,0.08) 0%, transparent 50%, rgba(255,255,255,0.08) 100%)",
              "linear-gradient(90deg, rgba(255,255,255,0.05) 0%, transparent 50%, rgba(255,255,255,0.05) 100%)"
            ]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute inset-0 bg-gradient-to-b from-purple/10 via-transparent to-pink-300/10 rounded-full"
          animate={{
            background: [
              "linear-gradient(180deg, rgba(147,51,234,0.1) 0%, transparent 50%, rgba(236,72,153,0.1) 100%)",
              "linear-gradient(180deg, rgba(147,51,234,0.15) 0%, transparent 50%, rgba(236,72,153,0.15) 100%)",
              "linear-gradient(180deg, rgba(147,51,234,0.1) 0%, transparent 50%, rgba(236,72,153,0.1) 100%)"
            ]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {navItems.map((navItem: any, idx: number) => {
          const isActive = pathname === navItem.link;
          return (
            <motion.div
              key={`link=${idx}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <Link
                href={navItem.link}
                className={cn(
                  "relative items-center flex space-x-1 transition-all duration-300 px-3 py-2 rounded-full",
                  isActive 
                    ? "text-white bg-white/20 border border-white/30" 
                    : "text-white/80 hover:text-white hover:bg-white/10"
                )}
              >
                <span className="block sm:hidden">{navItem.icon}</span>
                <span className="hidden sm:block text-sm">{navItem.name}</span>
                {isActive && (
                  <motion.span 
                    className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-purple to-transparent h-px"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  />
                )}
              </Link>
            </motion.div>
          );
        })}
      </motion.div>
    </AnimatePresence>
  );
};
