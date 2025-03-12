"use client"
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import WaveDivider from '../../components/WaveDivider';
import ParticlesBackground from '../../components/ParticlesBackground';

export default function Projects() {
  const [darkMode, setDarkMode] = useState(true);

  // Match dark mode with home page on initial load
  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode !== null) {
      setDarkMode(savedMode === 'true');
    }
  }, []);

  // Save dark mode preference
  useEffect(() => {
    localStorage.setItem('darkMode', darkMode);
    // Add a class to the document body to maintain consistent dark mode
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  return (
    <>
      <ParticlesBackground darkMode={darkMode} />
      <main className={`min-h-screen relative ${
        darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'
      }`}>
        {/* Dark Mode Toggle */}
        <motion.button 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          onClick={() => setDarkMode(!darkMode)} 
          className={`fixed top-6 right-6 p-3 rounded-full z-50 shadow-lg transition-all duration-300 ${
            darkMode 
            ? 'bg-gray-800 hover:bg-gray-700 text-yellow-400' 
            : 'bg-white hover:bg-gray-100 text-gray-800'
          }`}
          aria-label="Toggle dark mode"
        >
          <motion.div
            animate={{ rotate: darkMode ? 180 : 0 }}
            transition={{ duration: 0.5 }}
          >
            {darkMode ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </motion.div>
        </motion.button>

        {/* Header */}
        <header className={`py-8 px-4 md:px-8 lg:px-16 ${darkMode ? 'bg-gray-900' : 'bg-white shadow-sm'}`}>
          <div className="max-w-6xl mx-auto flex justify-between items-center">
            <Link href="/" className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Priyanshu Chaurasia</Link>
            <nav>
              <ul className="flex space-x-6">
                <li><Link href="/" className={`${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-all`}>Home</Link></li>
                <li><Link href="/projects" className={`${darkMode ? 'text-blue-400' : 'text-blue-600'} font-medium`}>Projects</Link></li>
                <li><Link href="/contact" className={`${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-all`}>Contact</Link></li>
              </ul>
            </nav>
          </div>
        </header>

        {/* Projects Hero */}
        <section className="py-16 px-4 md:px-8 lg:px-16">
          <div className="max-w-6xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className={`text-4xl md:text-5xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-4`}
            >
              My Projects
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} max-w-2xl mx-auto`}
            >
              A collection of projects I&apos;ve built to showcase my technical skills and problem-solving abilities.
            </motion.p>
          </div>
        </section>

        <WaveDivider color={darkMode ? "#1f2937" : "#f3f4f6"} />

        {/* Projects Grid */}
        <section className={`py-16 px-4 md:px-8 lg:px-16 ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* TaskTrackr Project */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className={`backdrop-blur-lg p-8 rounded-lg shadow-xl hover:shadow-blue-500/20 transition-all duration-300 ${
                  darkMode 
                  ? 'bg-gray-700/70 border border-gray-600' 
                  : 'bg-white/70 border border-gray-200'
                }`}
              >
                <h3 className={`text-2xl font-semibold ${darkMode ? 'text-white' : 'text-gray-900'} mb-2`}>TaskTrackr</h3>
                <p className={`${darkMode ? 'text-blue-400' : 'text-blue-600'} mb-4`}>TODO App with Authentication</p>
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-4`}>
                  A comprehensive task management application with user authentication, allowing users to create, edit, and delete tasks efficiently.
                  The app provides a seamless experience for managing daily activities and tracking progress.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className={`${darkMode ? 'bg-blue-900 text-blue-300' : 'bg-blue-100 text-blue-800'} px-3 py-1 rounded-full text-sm`}>React</span>
                  <span className={`${darkMode ? 'bg-blue-900 text-blue-300' : 'bg-blue-100 text-blue-800'} px-3 py-1 rounded-full text-sm`}>Tailwind CSS</span>
                  <span className={`${darkMode ? 'bg-blue-900 text-blue-300' : 'bg-blue-100 text-blue-800'} px-3 py-1 rounded-full text-sm`}>Node.js</span>
                  <span className={`${darkMode ? 'bg-blue-900 text-blue-300' : 'bg-blue-100 text-blue-800'} px-3 py-1 rounded-full text-sm`}>Express</span>
                  <span className={`${darkMode ? 'bg-blue-900 text-blue-300' : 'bg-blue-100 text-blue-800'} px-3 py-1 rounded-full text-sm`}>MongoDB</span>
                </div>
                <h4 className={`text-lg font-medium ${darkMode ? 'text-white' : 'text-gray-900'} mb-2`}>Key Features:</h4>
                <ul className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} space-y-2 mb-6`}>
                  <li>• User authentication and authorization</li>
                  <li>• Create, read, update, and delete tasks</li>
                  <li>• Task categorization and priority levels</li>
                  <li>• Responsive design for all devices</li>
                </ul>
                <div className="flex gap-4 relative z-10">
                  <a 
                    href="https://task-trackr-indol.vercel.app/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition-all hover:scale-105"
                  >
                    View Demo
                  </a>
                  <a 
                    href="https://github.com/Priyanshu-sde/TaskTrackr" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className={`bg-transparent hover:bg-blue-800 ${darkMode ? 'text-blue-400 border-blue-500' : 'text-blue-600 border-blue-600'} font-semibold hover:text-white py-2 px-4 border hover:border-transparent rounded transition-all hover:scale-105`}
                  >
                    Source Code
                  </a>
                </div>
              </motion.div>

              {/* Portfolio Website Project */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className={`backdrop-blur-lg p-8 rounded-lg shadow-xl hover:shadow-blue-500/20 transition-all duration-300 ${
                  darkMode 
                  ? 'bg-gray-700/70 border border-gray-600' 
                  : 'bg-white/70 border border-gray-200'
                }`}
              >
                <h3 className={`text-2xl font-semibold ${darkMode ? 'text-white' : 'text-gray-900'} mb-2`}>Portfolio Website</h3>
                <p className={`${darkMode ? 'text-blue-400' : 'text-blue-600'} mb-4`}>Personal Developer Portfolio</p>
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-4`}>
                  A modern, responsive portfolio website built with Next.js and Tailwind CSS to showcase my projects, skills, and experience. The site features smooth animations and a clean, professional design.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className={`${darkMode ? 'bg-blue-900 text-blue-300' : 'bg-blue-100 text-blue-800'} px-3 py-1 rounded-full text-sm`}>Next.js</span>
                  <span className={`${darkMode ? 'bg-blue-900 text-blue-300' : 'bg-blue-100 text-blue-800'} px-3 py-1 rounded-full text-sm`}>Tailwind CSS</span>
                  <span className={`${darkMode ? 'bg-blue-900 text-blue-300' : 'bg-blue-100 text-blue-800'} px-3 py-1 rounded-full text-sm`}>React</span>
                  <span className={`${darkMode ? 'bg-blue-900 text-blue-300' : 'bg-blue-100 text-blue-800'} px-3 py-1 rounded-full text-sm`}>JavaScript</span>
                </div>
                <h4 className={`text-lg font-medium ${darkMode ? 'text-white' : 'text-gray-900'} mb-2`}>Key Features:</h4>
                <ul className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} space-y-2 mb-6`}>
                  <li>• Responsive design for all screen sizes</li>
                  <li>• Modern UI with smooth transitions</li>
                  <li>• Project showcase with detailed descriptions</li>
                  <li>• Contact form and social media links</li>
                </ul>
                <div className="flex gap-4">
                  <a href="/" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition-all hover:scale-105">View Live</a>
                  <a href="https://github.com/Priyanshu-sde/portfolio" className={`bg-transparent hover:bg-blue-800 ${darkMode ? 'text-blue-400 border-blue-500' : 'text-blue-600 border-blue-600'} font-semibold hover:text-white py-2 px-4 border hover:border-transparent rounded transition-all hover:scale-105`}>Source Code</a>
                </div>
              </motion.div>

              {/* Future Project 1 */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className={`backdrop-blur-lg p-8 rounded-lg shadow-xl border-dashed ${
                  darkMode 
                  ? 'bg-gray-700/70 border border-gray-500' 
                  : 'bg-white/70 border border-gray-300'
                }`}
              >
                <h3 className={`text-2xl font-semibold ${darkMode ? 'text-white' : 'text-gray-900'} mb-2`}>Coming Soon</h3>
                <p className={`${darkMode ? 'text-blue-400' : 'text-blue-600'} mb-4`}>E-Commerce Platform</p>
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-4`}>
                  A full-featured e-commerce platform with product listings, shopping cart, user authentication, and payment integration.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className={`${darkMode ? 'bg-blue-900 text-blue-300' : 'bg-blue-100 text-blue-800'} px-3 py-1 rounded-full text-sm`}>React</span>
                  <span className={`${darkMode ? 'bg-blue-900 text-blue-300' : 'bg-blue-100 text-blue-800'} px-3 py-1 rounded-full text-sm`}>Node.js</span>
                  <span className={`${darkMode ? 'bg-blue-900 text-blue-300' : 'bg-blue-100 text-blue-800'} px-3 py-1 rounded-full text-sm`}>Express</span>
                  <span className={`${darkMode ? 'bg-blue-900 text-blue-300' : 'bg-blue-100 text-blue-800'} px-3 py-1 rounded-full text-sm`}>MongoDB</span>
                  <span className={`${darkMode ? 'bg-blue-900 text-blue-300' : 'bg-blue-100 text-blue-800'} px-3 py-1 rounded-full text-sm`}>Stripe</span>
                </div>
                <div className="flex justify-center">
                  <span className={`${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>In Development</span>
                </div>
              </motion.div>

              {/* Future Project 2 */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className={`backdrop-blur-lg p-8 rounded-lg shadow-xl border-dashed ${
                  darkMode 
                  ? 'bg-gray-700/70 border border-gray-500' 
                  : 'bg-white/70 border border-gray-300'
                }`}
              >
                <h3 className={`text-2xl font-semibold ${darkMode ? 'text-white' : 'text-gray-900'} mb-2`}>Coming Soon</h3>
                <p className={`${darkMode ? 'text-blue-400' : 'text-blue-600'} mb-4`}>DSA Visualizer</p>
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-4`}>
                  An interactive web application to visualize data structures and algorithms, helping students understand complex concepts.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className={`${darkMode ? 'bg-blue-900 text-blue-300' : 'bg-blue-100 text-blue-800'} px-3 py-1 rounded-full text-sm`}>React</span>
                  <span className={`${darkMode ? 'bg-blue-900 text-blue-300' : 'bg-blue-100 text-blue-800'} px-3 py-1 rounded-full text-sm`}>JavaScript</span>
                  <span className={`${darkMode ? 'bg-blue-900 text-blue-300' : 'bg-blue-100 text-blue-800'} px-3 py-1 rounded-full text-sm`}>Canvas API</span>
                  <span className={`${darkMode ? 'bg-blue-900 text-blue-300' : 'bg-blue-100 text-blue-800'} px-3 py-1 rounded-full text-sm`}>Tailwind CSS</span>
                </div>
                <div className="flex justify-center">
                  <span className={`${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>In Planning</span>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <WaveDivider color={darkMode ? "#3b82f6" : "#3b82f6"} flip={true} />

        {/* Call to Action */}
        <section className="py-16 px-4 md:px-8 lg:px-16 bg-blue-600">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-white mb-6"
            >
              Interested in Collaborating?
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-blue-100 mb-8"
            >
              I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Link href="/contact" className="bg-white hover:bg-gray-100 text-blue-800 font-semibold py-3 px-8 rounded-lg transition-all hover:scale-105 inline-block">
                Let&apos;s Connect
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className={`py-8 px-4 ${darkMode ? 'bg-gray-900 border-t border-gray-800' : 'bg-white border-t border-gray-200'}`}>
          <div className="max-w-6xl mx-auto text-center">
            <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              © 2025 Priyanshu Chaurasia. All rights reserved. | <a href="https://priyanshu.online" className={`hover:${darkMode ? 'text-blue-400' : 'text-blue-600'} transition-colors`}>priyanshu.online</a>
            </p>
          </div>
        </footer>
      </main>
    </>
  );
}