"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { StickyScroll } from './ui/sticky-scroll-reveal';
import { FaUsers, FaCrown, FaHandsHelping, FaProjectDiagram, FaTrophy, FaLightbulb } from 'react-icons/fa';
import { TextGenerateEffect } from './ui/TextGenerateEffect';
import Image from 'next/image';

const Leadership = () => {
  const leadershipContent = [
    {
      id: 1,
      title: 'IEEE UoP Presidency',
      description: `Served as President of IEEE University of Peradeniya, leading one of the most active student chapters in Sri Lanka. 
      Orchestrated major technical events, workshops, and competitions that brought together hundreds of engineering students. 
      Built strong partnerships with industry leaders and academic institutions.`,
      content: (
        <div className="w-full h-full bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-lg overflow-hidden flex items-center justify-center">
          <FaCrown className="text-8xl text-yellow-400" />
        </div>
      ),
    },
    {
      id: 2,
      title: 'Project Leadership',
      description: `Led over 15 major projects as chairperson throughout my undergraduate career. From organizing hackathons to 
      managing community outreach programs, I've consistently delivered results while fostering collaborative environments. 
      Each project taught me valuable lessons about team dynamics and project management.`,
      content: (
        <div className="w-full h-full bg-gradient-to-br from-green-500/10 to-blue-500/10 rounded-lg overflow-hidden flex items-center justify-center">
          <FaProjectDiagram className="text-8xl text-green-400" />
        </div>
      ),
    },
    {
      id: 3,
      title: 'Volunteer Excellence',
      description: `Passionate volunteer throughout my undergrad, dedicating countless hours to community service and student welfare. 
      What I discovered through these experiences is that one of my greatest strengths is working with people. 
      I thrive in collaborative environments and excel at bringing diverse teams together toward common goals.`,
      content: (
        <div className="w-full h-full bg-gradient-to-br from-pink-500/10 to-orange-500/10 rounded-lg overflow-hidden flex items-center justify-center">
          <FaHandsHelping className="text-8xl text-pink-400" />
        </div>
      ),
    },
    {
      id: 4,
      title: 'Team Building',
      description: `A leader to count on - I believe in empowering others and creating environments where everyone can thrive. 
      Through my leadership roles, I've mentored dozens of students, helping them develop both technical and soft skills. 
      My approach focuses on collaboration, innovation, and creating lasting impact in everything we do.`,
      content: (
        <div className="w-full h-full bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-lg overflow-hidden flex items-center justify-center">
          <FaUsers className="text-8xl text-purple-400" />
        </div>
      ),
    }
  ];

  return (
    <div className="border-b border-neutral-800 pb-40">
      {/* Header Section */}
      <motion.div 
        className="text-center mb-20"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <motion.div
          className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-full"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <FaCrown className="text-blue-400" />
          <span className="text-blue-400 font-medium">Leadership Experience</span>
        </motion.div>

        <TextGenerateEffect
          words="A leader to count on"
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
        />

        <motion.p 
          className="text-lg md:text-xl text-neutral-300 max-w-4xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          I was a passionate volunteer throughout my undergrad, leading over 15 projects as chairperson and serving as the 
          president of IEEE UoP. What I discovered through these experiences is that one of my greatest strengths is working with people.
        </motion.p>
      </motion.div>

      {/* Leadership Stats */}
      <motion.div 
        className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-20"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
        {[
          { label: 'Projects Led', value: '15+', icon: <FaProjectDiagram className="text-3xl text-blue-400" /> },
          { label: 'IEEE Presidency', value: '1 Year', icon: <FaCrown className="text-3xl text-yellow-400" /> },
          { label: 'Volunteer Hours', value: '500+', icon: <FaHandsHelping className="text-3xl text-green-400" /> },
          { label: 'Team Members', value: '100+', icon: <FaUsers className="text-3xl text-purple-400" /> }
        ].map((stat, index) => (
          <motion.div
            key={stat.label}
            className="text-center p-6 bg-gradient-to-br from-neutral-800/50 to-neutral-900/50 rounded-lg border border-neutral-700/50"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="mb-3">{stat.icon}</div>
            <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
            <div className="text-sm text-neutral-400">{stat.label}</div>
          </motion.div>
        ))}
      </motion.div>

      {/* Sticky Scroll Content */}
      <div className="max-w-6xl mx-auto">
        <StickyScroll content={leadershipContent} />
      </div>

      {/* Bottom Quote */}
      <motion.div 
        className="text-center mt-20"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        viewport={{ once: true }}
      >
        <blockquote className="text-xl md:text-2xl text-neutral-300 italic max-w-3xl mx-auto">
          "True leadership is not about being in charge, it's about taking care of those in your charge."
        </blockquote>
        <cite className="text-blue-400 font-semibold mt-4 block">— Trilanka</cite>
      </motion.div>
    </div>
  );
};

export default Leadership;