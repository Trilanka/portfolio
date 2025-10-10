"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FloatingNav } from '@/components/ui/FloatingNavbar';
import { FaHome, FaUser, FaBlog, FaEnvelope } from 'react-icons/fa';

const TrafficSignRecognition = () => {
  return (
    <main className="relative bg-black-100 min-h-screen overflow-hidden">
      {/* Navigation */}
      <FloatingNav navItems={[
        {name: 'Home', link: '/', icon: <FaHome />},
        {name: 'About', link: '/about', icon: <FaUser />},
        {name: 'Blog', link: '/blog', icon: <FaBlog />},
        {name: 'Contact', link: '/contact', icon: <FaEnvelope />}
      ]} />

      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-10 md:-left-32 md:-top-20 h-screen w-screen bg-gradient-to-r from-blue-500/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -right-10 md:-right-32 md:-bottom-20 h-screen w-screen bg-gradient-to-l from-purple-500/20 to-transparent rounded-full blur-3xl"></div>
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
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full">
            <span className="text-2xl">🚦</span>
            <span className="text-blue-400 font-medium">AI/ML Project</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Real-Time Traffic Sign Recognition for <span className="text-blue-400">ADAS</span>
          </h1>
          
          <p className="text-xl text-white-200 max-w-4xl mx-auto leading-relaxed">
            Advanced AI system for real-time traffic sign detection using YOLOv8, deployed on NVIDIA Jetson AGX Xavier for autonomous driving applications.
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
            <h2 className="text-2xl font-bold text-white mb-6">Project Overview</h2>
            <div className="prose prose-invert max-w-none">
              <p className="text-white-200 leading-relaxed mb-4">
                Road accidents are overwhelmingly caused by human error, with traffic violations accounting for 65% of incidents. 
                In an era where autonomous and assisted driving technologies are becoming crucial, I developed a system that helps 
                drivers detect and interpret traffic signs in real-time, enhancing situational awareness and reducing the likelihood of accidents.
              </p>
              <p className="text-white-200 leading-relaxed">
                The challenge was not just developing a high-accuracy model but ensuring it could run efficiently on embedded hardware 
                in real-world conditions, including night-time, fog, rain, and other extreme scenarios.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Key Challenges */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Key Challenges</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.6 }}
              whileHover={{ y: -5 }}
            >
              <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <div className="text-blue-400 text-2xl">👁️</div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Real-time Detection</h3>
              <p className="text-white-200 text-sm leading-relaxed">
                Achieving real-time performance on embedded hardware while maintaining high accuracy
              </p>
            </motion.div>

            <motion.div
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.7 }}
              whileHover={{ y: -5 }}
            >
              <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <div className="text-blue-400 text-2xl">💻</div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Hardware Optimization</h3>
              <p className="text-white-200 text-sm leading-relaxed">
                Optimizing YOLOv8 model for NVIDIA Jetson AGX Xavier deployment
              </p>
            </motion.div>

            <motion.div
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.8 }}
              whileHover={{ y: -5 }}
            >
              <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <div className="text-blue-400 text-2xl">⚙️</div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Environmental Robustness</h3>
              <p className="text-white-200 text-sm leading-relaxed">
                Ensuring reliable detection under night, rain, fog, and extreme conditions
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* The Journey */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6">The Development Journey</h2>
            <div className="space-y-6">
              <div className="border-l-4 border-blue-500/50 pl-6">
                <h3 className="text-lg font-semibold text-white mb-2">Dataset Creation & Model Training</h3>
                <p className="text-white-200 leading-relaxed">
                  Built a custom traffic sign dataset of over 1,500 images, combining self-collected photographs and public datasets. 
                  During training, I realized that traffic sign classes with symmetric appearances (like left/right bends) were often 
                  misclassified due to automatic image flipping. To address this, I carefully tuned the YOLOv8 model, turning off 
                  augmentation methods that caused confusion, and balanced the number of images per class to improve overall accuracy.
                </p>
              </div>
              
              <div className="border-l-4 border-purple-500/50 pl-6">
                <h3 className="text-lg font-semibold text-white mb-2">Hardware Optimization</h3>
                <p className="text-white-200 leading-relaxed">
                  Deploying the model on a standard PC worked, but achieving real-time performance on an embedded platform required 
                  optimizations. I integrated the model onto an NVIDIA Jetson AGX Xavier and implemented CUDA-based parallel processing, 
                  which significantly increased the inference speed from a low 5 FPS to real-time performance suitable for vehicles.
                </p>
              </div>
              
              <div className="border-l-4 border-green-500/50 pl-6">
                <h3 className="text-lg font-semibold text-white mb-2">Environmental Robustness</h3>
                <p className="text-white-200 leading-relaxed">
                  To make the system robust under extreme environmental conditions, I experimented with image preprocessing and enhancement 
                  techniques. Rather than retraining the model for night-time or foggy images, I enhanced the input frames so that the 
                  existing trained YOLOv8 model could reliably detect traffic signs under low-light, rainy, or misty conditions.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Technologies Used */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Technologies & Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { name: "YOLOv8", category: "Deep Learning" },
              { name: "PyTorch", category: "Framework" },
              { name: "CUDA", category: "Parallel Processing" },
              { name: "OpenCV", category: "Computer Vision" },
              { name: "NVIDIA Jetson AGX Xavier", category: "Embedded Hardware" },
              { name: "K-Fold Cross-Validation", category: "Model Evaluation" }
            ].map((tech, index) => (
              <motion.div
                key={tech.name}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-4 text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 1.0 + index * 0.05 }}
                whileHover={{ scale: 1.05 }}
              >
                <h4 className="text-white font-semibold text-sm mb-1">{tech.name}</h4>
                <p className="text-white-200 text-xs">{tech.category}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Outcomes */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Key Outcomes</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-2xl p-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 1.2 }}
              whileHover={{ y: -5 }}
            >
              <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <div className="text-green-400 text-xl">🚀</div>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Real-time Performance</h3>
              <p className="text-white-200 text-sm leading-relaxed">
                Achieved real-time inference suitable for vehicle deployment
              </p>
            </motion.div>

            <motion.div
              className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-2xl p-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 1.3 }}
              whileHover={{ y: -5 }}
            >
              <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <div className="text-green-400 text-xl">✅</div>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">High Accuracy</h3>
              <p className="text-white-200 text-sm leading-relaxed">
                Reliable traffic sign recognition across diverse conditions
              </p>
            </motion.div>

            <motion.div
              className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-2xl p-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 1.4 }}
              whileHover={{ y: -5 }}
            >
              <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <div className="text-green-400 text-xl">💻</div>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Embedded Deployment</h3>
              <p className="text-white-200 text-sm leading-relaxed">
                Successfully deployed on edge device with power optimization
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Certificate Recognition */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Recognition & Awards</h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 border border-yellow-500/20 rounded-3xl p-8">
              <div className="text-center mb-6">
                <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-yellow-500/10 border border-yellow-500/20 rounded-full">
                  <span className="text-2xl">🏆</span>
                  <span className="text-yellow-400 font-medium">Academic Recognition</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">PURSE 2024 Certificate</h3>
                <p className="text-white-200">
                  Peradeniya University International Research Sessions and Exposition
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                  <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Paper Presentation</h4>
                    <p className="text-white-200 text-sm leading-relaxed">
                      {`"Traffic Sign Detection and Recognition for Next-Generation Advanced Driver Assistance Systems for Smart Transportation"`}
                    </p>
                  </div>
                  
                  <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Event Details</h4>
                    <p className="text-white-200 text-sm">
                      <span className="text-yellow-400">📅</span> 28th & 29th August 2024<br/>
                      <span className="text-yellow-400">🏛️</span> University of Peradeniya<br/>
                      <span className="text-yellow-400">🎓</span> International Research Conference
                    </p>
                  </div>
                </div>
                
                <div className="flex justify-center">
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-300"></div>
                    <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-4 overflow-hidden">
                      <img 
                        src="./certificate.png" 
                        alt="PURSE 2024 Certificate - Traffic Sign Detection Research" 
                        className="w-full h-auto rounded-xl shadow-2xl hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Impact Statement */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
        >
          <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-3xl p-8 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-4">Project Impact</h2>
            <p className="text-white-200 leading-relaxed text-lg">
              This project demonstrates full end-to-end embedded AI expertise: from dataset creation and model development 
              to optimization, deployment, testing, and hardware integration. The system successfully recognizes traffic signs 
              under diverse conditions and provides a robust, low-latency pipeline capable of supporting Advanced Driver 
              Assistance Systems (ADAS) applications.
            </p>
          </div>
        </motion.div>
      </div>
    </main>
  );
};

export default TrafficSignRecognition;