"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const DroneProject = () => {
  const developmentPhases = [
    {
      number: "1️⃣",
      title: "Frame Design & Structural Engineering",
      description: "Designed and fabricated custom drone chassis with lightweight yet rigid materials. Every joint and mount was custom-made to optimize weight distribution and minimize unnecessary mass."
    },
    {
      number: "2️⃣", 
      title: "Electronics Integration & Control Systems",
      description: "Integrated Pixhawk flight controller, IMU sensors, GPS modules, and ESCs. Implemented vibration-damping mounts and carefully balanced propellers to minimize vibration effects."
    },
    {
      number: "3️⃣",
      title: "Power Management & Battery Optimization", 
      description: "Analyzed current draws under different flight conditions and experimented with various Li-Po configurations to find optimal trade-offs between flight time, payload, and maneuverability."
    },
    {
      number: "4️⃣",
      title: "Software & Flight Control Tuning",
      description: "Tuned PID loops, set flight modes, and configured autonomous flight paths using ArduPilot and Pixhawk firmware. Developed Arduino-based auxiliary modules for component testing."
    }
  ];

  const challenges = [
    {
      problem: "Vibration Issues",
      solution: "Introduced damping mechanisms and balanced rotors"
    },
    {
      problem: "Battery Limitations", 
      solution: "Experimented with capacity vs. weight trade-offs to maximize flight time"
    },
    {
      problem: "Controller Instability",
      solution: "Fine-tuned PID parameters and adjusted sensor placements"
    },
    {
      problem: "Frame Rigidity",
      solution: "Iterated multiple frame designs for optimal strength-to-weight"
    }
  ];

  const technologies = [
    { name: "Pixhawk", category: "Flight Controller" },
    { name: "ArduPilot", category: "Flight Software" },
    { name: "Arduino", category: "Microcontroller" },
    { name: "Mission Planner", category: "Ground Control" },
    { name: "IMU Sensors", category: "Navigation" },
    { name: "GPS Modules", category: "Positioning" },
    { name: "Li-Po Batteries", category: "Power System" },
    { name: "Brushless Motors", category: "Propulsion" },
    { name: "ESCs", category: "Motor Control" }
  ];

  return (
    <main className="relative bg-black-100 min-h-screen overflow-hidden">
      {/* Simple Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors">
              <span>←</span>
              <span>Back to Portfolio</span>
            </Link>
            <div className="flex items-center gap-6">
              <Link href="/portfolio/" className="text-white/70 hover:text-white transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-white/70 hover:text-white transition-colors">
                About
              </Link>
              <Link href="/blog" className="text-white/70 hover:text-white transition-colors">
                Blog
              </Link>
              <Link href="/contact" className="text-white/70 hover:text-white transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-10 md:-left-32 md:-top-20 h-screen w-screen bg-gradient-to-r from-green-500/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -right-10 md:-right-32 md:-bottom-20 h-screen w-screen bg-gradient-to-l from-teal-500/20 to-transparent rounded-full blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full">
            <span className="text-2xl">🛸</span>
            <span className="text-green-400 font-medium">Robotics Project</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Drone Project — From <span className="text-green-400">Hobby to National Champion</span>
          </h1>
          
          <p className="text-xl text-white-200 max-w-4xl mx-auto leading-relaxed">
            A four-year engineering journey from basic electronics to winning {`Sri Lanka's`} most prestigious drone competition.
          </p>
        </motion.div>

        {/* Project Overview */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6">🚀 Project Overview</h2>
            <div className="prose prose-invert max-w-none">
              <p className="text-white-200 leading-relaxed mb-4">
                This project represents one of my most ambitious and transformative engineering journeys. What began as a simple idea during my early undergraduate days — to build a drone using the limited resources I had — evolved over four years into a fully functional, competition-grade UAV.
              </p>
              <p className="text-white-200 leading-relaxed">
                By the end of this journey, my team and I secured first place in {`Sri Lanka's`} most prestigious drone competition, a milestone that marked both technical mastery and relentless perseverance.
              </p>
            </div>
          </div>
        </motion.div>

        {/* The Beginning */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6">🧭 The Beginning</h2>
            <div className="prose prose-invert max-w-none">
              <p className="text-white-200 leading-relaxed mb-4">
                When I started, I had only a basic understanding of electronics and control systems, along with a strong curiosity to build something that could actually fly. With a few QBS components and a lot of determination, I set out to design and build my own drone completely from scratch.
              </p>
              <p className="text-white-200 leading-relaxed">
                I began by learning the fundamentals of flight dynamics, thrust-to-weight ratios, and power management. I explored Arduino platforms to understand low-level control, then gradually moved to ArduPilot and Pixhawk flight controllers as the project evolved in complexity.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Development Journey */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center">🛠 Engineering & Development Journey</h2>
          <div className="space-y-6">
            {developmentPhases.map((phase, index) => (
              <motion.div
                key={phase.title}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                whileHover={{ y: -2 }}
              >
                <div className="border-l-4 border-green-500/50 pl-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-2xl">{phase.number}</div>
                    <h3 className="text-xl font-semibold text-white">{phase.title}</h3>
                  </div>
                  <p className="text-white-200 leading-relaxed">{phase.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Challenges & Problem-Solving */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center">🧪 Challenges & Problem-Solving</h2>
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8">
            <p className="text-white-200 leading-relaxed mb-6">
              This was not a linear journey. I faced numerous setbacks — from unstable flights caused by sensor noise, to insufficient thrust due to weight miscalculations. Each challenge forced me to learn, iterate, and engineer better solutions:
            </p>
            <div className="space-y-6">
              {challenges.map((challenge, index) => (
                <motion.div
                  key={challenge.problem}
                  className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 1.2 + index * 0.1 }}
                  whileHover={{ y: -2 }}
                >
                  <div className="border-l-4 border-orange-500/50 pl-6">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="text-orange-400 text-lg">⚠️</div>
                      <h4 className="text-white font-semibold">{challenge.problem}</h4>
                    </div>
                    <p className="text-white-200 text-sm leading-relaxed ml-8">→ {challenge.solution}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            <p className="text-white-200 leading-relaxed mt-6">
              These challenges became valuable opportunities to sharpen my debugging, data analysis, and mechanical fabrication skills.
            </p>
          </div>
        </motion.div>

        {/* Achievements */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <div className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 border border-yellow-500/20 rounded-3xl p-8 text-center">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-yellow-500/10 border border-yellow-500/20 rounded-full">
              <span className="text-2xl">🏆</span>
              <span className="text-yellow-400 font-medium">National Achievement</span>
            </div>
            <h2 className="text-2xl font-bold text-white mb-4">🏆 Achievements</h2>
            <p className="text-white-200 leading-relaxed text-lg">
              After four years of continuous development, my drone achieved stable flight, autonomous navigation, and excellent performance metrics. This culminated in winning {`Sri Lanka's`} highest-level drone competition, a recognition of both engineering excellence and perseverance.
            </p>
          </div>
        </motion.div>

        {/* Technologies & Tools */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center">🧰 Technologies & Tools Used</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-4 text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 1.6 + index * 0.05 }}
                whileHover={{ scale: 1.05, y: -2 }}
              >
                <h4 className="text-white font-semibold text-sm mb-1">{tech.name}</h4>
                <p className="text-white-200 text-xs">{tech.category}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills Highlighted */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.6 }}
        >
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6">🎯 Skills Developed</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Technical Skills</h3>
                <ul className="space-y-2 text-white-200">
                  <li>• Control systems & PID tuning</li>
                  <li>• Mechanical design & fabrication</li>
                  <li>• Electronics integration</li>
                  <li>• Power optimization</li>
                  <li>• Vibration analysis</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Engineering Skills</h3>
                <ul className="space-y-2 text-white-200">
                  <li>• Flight dynamics understanding</li>
                  <li>• Autonomous navigation</li>
                  <li>• Sensor calibration</li>
                  <li>• System integration</li>
                  <li>• Competition preparation</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Gallery */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.8 }}
        >
          <h2 className="text-3xl font-bold text-white mb-8">📸 Competition Gallery</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div
              className="relative group"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 2.0 }}
              whileHover={{ y: -5 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-teal-500/20 rounded-3xl blur-lg group-hover:blur-xl transition-all duration-300"></div>
              <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-4 overflow-hidden">
                <img 
                  src="./drone1.jpg" 
                  alt="Drone competition - Team preparation and testing" 
                  className="w-full h-auto rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-sm rounded-xl p-3">
                  <p className="text-white text-sm font-medium">Team Preparation & Testing</p>
                  <p className="text-white/70 text-xs">Sky of Icarus Techno 2023</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="relative group"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 2.2 }}
              whileHover={{ y: -5 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-teal-500/20 rounded-3xl blur-lg group-hover:blur-xl transition-all duration-300"></div>
              <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-4 overflow-hidden">
                <img 
                  src="./drone2.jpg" 
                  alt="Drone competition - Precision flight through hoops" 
                  className="w-full h-auto rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-sm rounded-xl p-3">
                  <p className="text-white text-sm font-medium">Precision Flight Challenge</p>
                  <p className="text-white/70 text-xs">Sky of Icarus Techno 2023</p>
                </div>
              </div>
            </motion.div>
          </div>
          
          <motion.div
            className="mt-8 inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2.4 }}
          >
            <span className="text-green-400">🏆</span>
            <span className="text-green-400 font-medium">National Championship Moments</span>
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
};

export default DroneProject;
