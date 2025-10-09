"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { FaHome, FaBlog, FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { CardSpotlight } from "@/components/ui/card-spotlight";

const Contact = () => {

  const contactInfo = [
    {
      icon: <FaEnvelope className="text-2xl" />,
      title: "Email",
      value: "tstrilanka@gmail.com",
      link: "mailto:tstrilanka@gmail.com",
      color: "from-blue-500/20 to-cyan-500/20"
    },
    {
      icon: <FaPhone className="text-2xl" />,
      title: "Phone",
      value: "+94 71 764 9512",
      link: "tel:+94717649512",
      color: "from-green-500/20 to-emerald-500/20"
    },
    {
      icon: <FaMapMarkerAlt className="text-2xl" />,
      title: "Location",
      value: "Colombo, Sri Lanka",
      link: "#",
      color: "from-orange-500/20 to-red-500/20"
    }
  ];

  const socialLinks = [
    {
      icon: <FaLinkedin className="text-xl" />,
      name: "LinkedIn",
      url: "https://linkedin.com/in/trilanka",
      color: "hover:from-blue-500/20 hover:to-blue-600/20"
    },
    {
      icon: <FaGithub className="text-xl" />,
      name: "GitHub",
      url: "https://github.com/trilanka",
      color: "hover:from-gray-500/20 hover:to-gray-600/20"
    },
    {
      icon: <FaTwitter className="text-xl" />,
      name: "Twitter",
      url: "https://twitter.com/trilanka",
      color: "hover:from-sky-500/20 hover:to-sky-600/20"
    }
  ];

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
        <div className="absolute -top-40 -left-10 md:-left-32 md:-top-20 h-screen w-screen bg-gradient-to-r from-purple/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -right-10 md:-right-32 md:-bottom-20 h-screen w-screen bg-gradient-to-l from-pink-300/20 to-transparent rounded-full blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        {/* Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            {`Let's`} <span className="text-purple">Connect</span>
          </h1>
          <p className="text-xl text-white-200 max-w-3xl mx-auto leading-relaxed">
            Ready to collaborate on something amazing? {`I'd`} love to hear about your project and discuss how we can work together.
          </p>
        </motion.div>

        {/* Apple-style Contact Cards */}
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {contactInfo.map((info, index) => (
              <motion.a
                key={info.title}
                href={info.link}
                className="group"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 h-full hover:bg-white/10 hover:border-white/20 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-purple/10">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-white/10 to-white/5 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <div className="text-white/80 group-hover:text-white transition-colors">
                        {info.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">{info.title}</h3>
                    <p className="text-white/60 group-hover:text-white/80 transition-colors text-sm leading-relaxed">
                      {info.value}
                    </p>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Social Links - Apple Style */}
          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h3 className="text-2xl font-semibold text-white mb-8">Connect with me</h3>
            <div className="flex justify-center space-x-6">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl flex items-center justify-center hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="text-white/70 hover:text-white transition-colors">
                    {social.icon}
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Apple-style Response Promise */}
          <motion.div
            className="mt-16 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-8 text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Quick Response</h3>
              <p className="text-white/70 leading-relaxed">
                I typically respond to messages within 24 hours. For urgent matters, feel free to reach out via phone.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
