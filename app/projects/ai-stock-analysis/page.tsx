"use client";

import React from 'react';
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { FaHome, FaUser, FaEnvelope, FaArrowLeft, FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function AIStockAnalysisProject() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 min-h-screen">
      <div className="max-w-6xl w-full">
        <FloatingNav navItems={[
          {name: 'Home', link: '/portfolio/', icon: <FaHome />},
          {name: 'About', link: '/about', icon: <FaUser />},
          {name: 'Contact', link: '/contact', icon: <FaEnvelope />}
        ]} />
        
        {/* Back Button */}
        <div className="pt-32 pb-8">
          <Link 
            href="/portfolio/"
            className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors"
          >
            <FaArrowLeft />
            Back to Portfolio
          </Link>
        </div>

        {/* Project Header */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="text-6xl">📈</span>
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-4">
                AI-Powered Stock Market Analysis System
              </h1>
              <div className="flex items-center gap-4">
                <span className="px-4 py-2 bg-emerald-500/20 text-emerald-400 rounded-full text-sm font-medium border border-emerald-500/30">
                  AI/ML
                </span>
                <span className="px-4 py-2 bg-blue-500/20 text-blue-400 rounded-full text-sm font-medium border border-blue-500/30">
                  Financial Technology
                </span>
                <span className="px-4 py-2 bg-purple-500/20 text-purple-400 rounded-full text-sm font-medium border border-purple-500/30">
                  Real-time Analytics
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Project Overview */}
        <motion.section 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h2 className="text-3xl font-light text-white mb-6 flex items-center gap-3">
            🧭 Project Overview
          </h2>
          <div className="bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-sm">
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              This project involved the development of an AI-driven Stock Market Analysis System specifically targeting the Colombo Stock Exchange (CSE). The system was designed for a startup company and focused on real-time sentiment analysis, LLM-based reasoning, and interactive insights to support smarter investment decisions.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              By continuously gathering and analyzing data from multiple sources — including financial APIs, news feeds, and web scraping pipelines — the system predicts market sentiment trends for top-listed companies and provides an intelligent chat interface for users to interact with the data in real time.
            </p>
          </div>
        </motion.section>

        {/* Motivation */}
        <motion.section 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-3xl font-light text-white mb-6 flex items-center gap-3">
            💡 Motivation
          </h2>
          <div className="bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-sm">
            <p className="text-gray-300 text-lg leading-relaxed">
              The Colombo Stock Exchange lacks sophisticated AI tools that can interpret news sentiment and provide context-aware predictions. This project aimed to bridge that gap by creating a comprehensive, real-time analysis platform that could ingest massive volumes of unstructured information, extract meaningful signals, and deliver them through a conversational interface.
            </p>
          </div>
        </motion.section>

        {/* System Architecture */}
        <motion.section 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h2 className="text-3xl font-light text-white mb-6 flex items-center gap-3">
            🧠 System Architecture & Workflow
          </h2>
          
          <div className="space-y-8">
            {/* Data Gathering */}
            <div className="bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-sm">
              <h3 className="text-xl font-medium text-white mb-4 flex items-center gap-2">
                1️⃣ Data Gathering & Real-Time Pipelines
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-4">
                The foundation of the system is a continuous real-time data collection process. I built automated pipelines to:
              </p>
              <ul className="text-gray-300 space-y-2 ml-6">
                <li>• Fetch stock market data through Structured Exchange APIs</li>
                <li>• Scrape and parse news headlines and articles from trusted financial news sources</li>
                <li>• Normalize and preprocess text data for downstream analysis</li>
              </ul>
              <p className="text-gray-300 text-lg leading-relaxed mt-4">
                This constant flow of data ensures the system always reflects the latest market conditions.
              </p>
            </div>

            {/* Vector Database */}
            <div className="bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-sm">
              <h3 className="text-xl font-medium text-white mb-4 flex items-center gap-2">
                2️⃣ Vector Database & Knowledge Structuring
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-4">
                Once gathered, all textual data is embedded and stored in a vector database. This enables highly efficient semantic search and contextual retrieval, allowing the system to easily associate a piece of news with the correct company, sector, or market category.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                Vector search also enables fine-grained filtering and linking between data points — crucial for delivering accurate and relevant insights during chat interactions.
              </p>
            </div>

            {/* LLM Integration */}
            <div className="bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-sm">
              <h3 className="text-xl font-medium text-white mb-4 flex items-center gap-2">
                3️⃣ LLM Integration: Reasoning & Chatbot
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-4">
                A central part of the project is the Large Language Model (LLM), which plays two roles:
              </p>
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-medium text-white mb-2 flex items-center gap-2">
                    🧮 Reasoning Engine
                  </h4>
                  <p className="text-gray-300 leading-relaxed">
                    The LLM analyzes the sentiment of incoming news articles, classifies them by company, and provides predictions about likely market movements (e.g., positive or negative sentiment trends for S&P and S&L 20 companies).
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-white mb-2 flex items-center gap-2">
                    💬 Conversational Chatbot
                  </h4>
                  <p className="text-gray-300 leading-relaxed">
                    Using RAG (Retrieval-Augmented Generation) and Graph Editor training, the chatbot allows users to query the system naturally. It retrieves relevant market data and generates intelligent, context-aware answers in real time.
                  </p>
                </div>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed mt-4">
                This dual-mode design makes the system both analytically powerful and user-friendly.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Tech Stack */}
        <motion.section 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-3xl font-light text-white mb-6 flex items-center gap-3">
            ⚙️ Tech Stack & Tools
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-sm">
              <h3 className="text-lg font-medium text-white mb-4">Data Collection</h3>
              <p className="text-gray-300">Financial APIs, Web Scraping, Real-Time Pipelines</p>
            </div>
            <div className="bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-sm">
              <h3 className="text-lg font-medium text-white mb-4">AI & NLP</h3>
              <p className="text-gray-300">LLM (RAG Graph Editor), Sentiment Analysis, Embeddings</p>
            </div>
            <div className="bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-sm">
              <h3 className="text-lg font-medium text-white mb-4">Databases</h3>
              <p className="text-gray-300">Vector Database for semantic search and knowledge retrieval</p>
            </div>
            <div className="bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-sm">
              <h3 className="text-lg font-medium text-white mb-4">Backend</h3>
              <p className="text-gray-300">Python, API integrations</p>
            </div>
            <div className="bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-sm">
              <h3 className="text-lg font-medium text-white mb-4">Frontend</h3>
              <p className="text-gray-300">Interactive chatbot interface for querying insights</p>
            </div>
            <div className="bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-sm">
              <h3 className="text-lg font-medium text-white mb-4">Deployment</h3>
              <p className="text-gray-300">Real-time pipeline to support continuous updates</p>
            </div>
          </div>
        </motion.section>

        {/* Key Capabilities */}
        <motion.section 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h2 className="text-3xl font-light text-white mb-6 flex items-center gap-3">
            🧠 Key Capabilities
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">📊</span>
                <h3 className="text-lg font-medium text-white">Real-time Sentiment Tracking</h3>
              </div>
              <p className="text-gray-300">Continuous monitoring of sentiment for CSE companies</p>
            </div>
            <div className="bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">🧭</span>
                <h3 className="text-lg font-medium text-white">Intelligent Chatbot</h3>
              </div>
              <p className="text-gray-300">Natural language interface for exploring market data</p>
            </div>
            <div className="bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">🤖</span>
                <h3 className="text-lg font-medium text-white">AI-based Reasoning</h3>
              </div>
              <p className="text-gray-300">Predict trends based on news sentiment analysis</p>
            </div>
            <div className="bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">🔍</span>
                <h3 className="text-lg font-medium text-white">Vector Search</h3>
              </div>
              <p className="text-gray-300">Accurately link data to companies/sectors</p>
            </div>
            <div className="bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-sm md:col-span-2">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">⚡</span>
                <h3 className="text-lg font-medium text-white">Continuous Data Ingestion</h3>
              </div>
              <p className="text-gray-300">Real-time updates for up-to-date insights</p>
            </div>
          </div>
        </motion.section>

        {/* Impact & Applications */}
        <motion.section 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h2 className="text-3xl font-light text-white mb-6 flex items-center gap-3">
            🏆 Impact & Applications
          </h2>
          <div className="bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-sm">
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              This system provides investors and analysts with real-time, AI-generated insights, allowing them to understand market sentiment and potential movements faster than traditional methods. For the startup, this platform formed the basis of a data-driven investment support tool, giving them a competitive edge in the Sri Lankan financial market.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-400 mb-2">Real-time</div>
                <p className="text-gray-300 text-sm">Continuous market monitoring</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">AI-Powered</div>
                <p className="text-gray-300 text-sm">Intelligent sentiment analysis</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">Competitive Edge</div>
                <p className="text-gray-300 text-sm">Data-driven investment insights</p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Reflection */}
        <motion.section 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <h2 className="text-3xl font-light text-white mb-6 flex items-center gap-3">
            ✨ Reflection
          </h2>
          <div className="bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-sm">
            <p className="text-gray-300 text-lg leading-relaxed">
              This project brought together AI, data engineering, and financial analytics into a single cohesive platform. It strengthened my skills in LLM fine-tuning, RAG architectures, and real-time data systems, while also demonstrating my ability to build production-oriented AI solutions for real business use cases.
            </p>
          </div>
        </motion.section>

        {/* Back to Portfolio */}
        <motion.div 
          className="text-center pb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Link 
            href="/portfolio/"
            className="inline-flex items-center gap-2 bg-purple/20 text-purple px-6 py-3 rounded-full hover:bg-purple/30 transition-colors"
          >
            <FaArrowLeft />
            Back to Portfolio
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
