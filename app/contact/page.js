"use client"
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import WaveDivider from '../../components/WaveDivider';
import ParticlesBackground from '../../components/ParticlesBackground';

export default function Contact() {
  const [darkMode, setDarkMode] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

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
  }, [darkMode]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle form submission
    console.log('Form submitted:', formData);
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    // Show success message (in a real app)
    alert('Message sent successfully!');
  };

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
                <li><Link href="/projects" className={`${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-all`}>Projects</Link></li>
                <li><Link href="/contact" className={`${darkMode ? 'text-blue-400' : 'text-blue-600'} font-medium`}>Contact</Link></li>
              </ul>
            </nav>
          </div>
        </header>

        {/* Contact Hero */}
        <section className="py-16 px-4 md:px-8 lg:px-16">
          <div className="max-w-6xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className={`text-4xl md:text-5xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-4`}
            >
              Get In Touch
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} max-w-2xl mx-auto`}
            >
              I&apos;m currently looking for new opportunities to grow and learn. Feel free to reach out if you want to collaborate or just say hello!
            </motion.p>
          </div>
        </section>

        <WaveDivider color={darkMode ? "#1f2937" : "#f3f4f6"} />

        {/* Contact Form */}
        <section className={`py-16 px-4 md:px-8 lg:px-16 ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
          <div className="max-w-3xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className={`backdrop-blur-lg p-8 rounded-lg shadow-xl ${
                darkMode 
                ? 'bg-gray-700/70 border border-gray-600' 
                : 'bg-white/70 border border-gray-200'
              }`}
            >
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label
                    htmlFor="name"
                    className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-1`}
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      darkMode 
                      ? 'bg-gray-800 border border-gray-600 text-white' 
                      : 'bg-gray-50 border border-gray-300 text-gray-900'
                    }`}
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-1`}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      darkMode 
                      ? 'bg-gray-800 border border-gray-600 text-white' 
                      : 'bg-gray-50 border border-gray-300 text-gray-900'
                    }`}
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-1`}
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      darkMode 
                      ? 'bg-gray-800 border border-gray-600 text-white' 
                      : 'bg-gray-50 border border-gray-300 text-gray-900'
                    }`}
                    placeholder="What is this about?"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-1`}
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      darkMode 
                      ? 'bg-gray-800 border border-gray-600 text-white' 
                      : 'bg-gray-50 border border-gray-300 text-gray-900'
                    }`}
                    placeholder="Your message..."
                    required
                  ></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all hover:scale-105"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </section>

        {/* Contact Details */}
        <section className={`py-16 px-4 md:px-8 lg:px-16 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className={`backdrop-blur-lg p-6 rounded-lg shadow-xl hover:shadow-blue-500/20 transition-all duration-300 ${
                  darkMode 
                  ? 'bg-gray-800/70 border border-gray-700' 
                  : 'bg-white/70 border border-gray-200'
                } text-center`}
              >
                <div className="flex justify-center mb-4">
                  <svg
                    className={`h-8 w-8 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-gray-900'} mb-2`}>Email</h3>
                <a
                  href="mailto:priyanshu.sde@gmail.com"
                  className={`${darkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'} transition-all`}
                >
                  priyanshu.sde@gmail.com
                </a>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className={`backdrop-blur-lg p-6 rounded-lg shadow-xl hover:shadow-blue-500/20 transition-all duration-300 ${
                  darkMode 
                  ? 'bg-gray-800/70 border border-gray-700' 
                  : 'bg-white/70 border border-gray-200'
                } text-center`}
              >
                <div className="flex justify-center mb-4">
                  <svg
                    className={`h-8 w-8 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <h3 className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-gray-900'} mb-2`}>Phone</h3>
                <a
                  href="tel:7068451653"
                  className={`${darkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'} transition-all`}
                >
                  +91 7068451653
                </a>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className={`backdrop-blur-lg p-6 rounded-lg shadow-xl hover:shadow-blue-500/20 transition-all duration-300 ${
                  darkMode 
                  ? 'bg-gray-800/70 border border-gray-700' 
                  : 'bg-white/70 border border-gray-200'
                } text-center`}
              >
                <div className="flex justify-center mb-4">
                  <svg
                    className={`h-8 w-8 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                    />
                  </svg>
                </div>
                <h3 className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-gray-900'} mb-2`}>Social</h3>
                <div className="flex justify-center space-x-4">
                  <a
                    href="https://github.com/Priyanshu-sde"
                    className={`${darkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'} transition-all`}
                  >
                    <svg
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                  <a
                    href="https://linkedin.com/in/priyanshu-chaurasia"
                    className={`${darkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'} transition-all`}
                  >
                    <svg
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <WaveDivider color={darkMode ? "#1f2937" : "#f3f4f6"} flip={true} />

        {/* Location Section */}
        <section className={`py-16 px-4 md:px-8 lg:px-16 ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
          <div className="max-w-6xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className={`backdrop-blur-lg p-8 rounded-lg shadow-xl ${
                darkMode 
                ? 'bg-gray-700/70 border border-gray-600' 
                : 'bg-white/70 border border-gray-200'
              }`}
            >
              <h3 className={`text-2xl font-semibold ${darkMode ? 'text-white' : 'text-gray-900'} mb-6 text-center`}>
                My Location
              </h3>
              <div className={`aspect-video w-full rounded-lg flex items-center justify-center ${
                darkMode ? 'bg-gray-800' : 'bg-gray-100'
              }`}>
                <div className="text-center">
                  <svg
                    className={`h-16 w-16 mx-auto mb-4 ${darkMode ? 'text-gray-600' : 'text-gray-400'}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
                    Kamla Nehru Institute of Technology
                  </p>
                  <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
                    Sultanpur, Uttar Pradesh, India
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className={`py-16 px-4 md:px-8 lg:px-16 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
          <div className="max-w-4xl mx-auto">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-8 text-center`}
            >
              Frequently Asked Questions
            </motion.h2>
            <div className="space-y-6">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className={`backdrop-blur-lg p-6 rounded-lg shadow-xl ${
                  darkMode 
                  ? 'bg-gray-800/70 border border-gray-700' 
                  : 'bg-white/70 border border-gray-200'
                }`}
              >
                <h3 className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-gray-900'} mb-2`}>
                  Are you available for freelance work?
                </h3>
                <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
                  Yes, I&apos;m open to freelance opportunities, particularly in web
                  development and related fields. Feel free to contact me with
                  project details.
                </p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className={`backdrop-blur-lg p-6 rounded-lg shadow-xl ${
                  darkMode 
                  ? 'bg-gray-800/70 border border-gray-700' 
                  : 'bg-white/70 border border-gray-200'
                }`}
              >
                <h3 className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-gray-900'} mb-2`}>
                  What technologies do you work with?
                </h3>
                <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
                  I primarily work with React, JavaScript, Node.js, and MongoDB
                  for web development. I&apos;m also proficient in C/C++ for DSA and
                  competitive programming.
                </p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className={`backdrop-blur-lg p-6 rounded-lg shadow-xl ${
                  darkMode 
                  ? 'bg-gray-800/70 border border-gray-700' 
                  : 'bg-white/70 border border-gray-200'
                }`}
              >
                <h3 className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-gray-900'} mb-2`}>
                  Do you take on remote projects?
                </h3>
                <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
                  Absolutely! I&apos;m comfortable working remotely and have the tools
                  and discipline to collaborate effectively from anywhere.
                </p>
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
              Ready to Work Together?
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-blue-100 mb-8"
            >
              Let&apos;s turn your ideas into reality. I&apos;m just a message away!
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <a href="mailto:priyanshu.sde@gmail.com" className="bg-white hover:bg-gray-100 text-blue-800 font-semibold py-3 px-8 rounded-lg transition-all hover:scale-105 inline-block">
                Email Me Now
              </a>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className={`py-12 px-4 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="mb-4 md:mb-0"
              >
                <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} text-sm`}>
                  © 2025 Priyanshu Chaurasia. All rights reserved.
                </p>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="flex space-x-6"
              >
                <a href="https://github.com/priyanshu-sde" target="_blank" rel="noopener noreferrer" 
                  className={`${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>
                  <span className="sr-only">GitHub</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="https://www.linkedin.com/in/priyanshu-chaurasia/" target="_blank" rel="noopener noreferrer"
                  className={`${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
              </motion.div>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
