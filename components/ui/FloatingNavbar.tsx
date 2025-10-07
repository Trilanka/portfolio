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

  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      // Show navigation when at the top (first 5% of scroll) or when scrolling up
      if (scrollYProgress.get() < 0.05) {
        setVisible(true); // Show when at top
      } else {
        if (direction < 0) {
          setVisible(true); // Show when scrolling up
        } else {
          setVisible(false); // Hide when scrolling down
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex max-w-fit fixed top-10 inset-x-0 mx-auto border border-white/20 rounded-full backdrop-blur-xl bg-white/10 shadow-2xl shadow-black/20 z-[5000] pr-2 pl-8 py-2 items-center justify-center space-x-4",
          className
        )}
      >
        {/* Liquid glass background layers */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-transparent to-white/5 rounded-full" />
        <div className="absolute inset-0 bg-gradient-to-b from-purple/10 via-transparent to-pink-300/10 rounded-full" />
        
        {navItems.map((navItem: any, idx: number) => (
          <Link
            key={`link=${idx}`}
            href={navItem.link}
            className={cn(
              "relative text-white/80 items-center flex space-x-1 hover:text-white transition-colors duration-300 px-3 py-2 rounded-full hover:bg-white/10"
            )}
          >
            <span className="block sm:hidden">{navItem.icon}</span>
            <span className="hidden sm:block text-sm">{navItem.name}</span>
          </Link>
        ))}
        <button className="border text-sm font-medium relative border-white/20 text-white px-4 py-2 rounded-full backdrop-blur-sm bg-white/10 hover:bg-white/20 transition-all duration-300">
          <span>Contact</span>
          <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-purple to-transparent h-px" />
        </button>
      </motion.div>
    </AnimatePresence>
  );
};
