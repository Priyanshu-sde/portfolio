"use client"
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState, useMemo } from 'react';
import { TypeAnimation } from 'react-type-animation';
import ParticlesBackground from '../components/ParticlesBackground';
import WaveDivider from '../components/WaveDivider';

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');
  const [darkMode, setDarkMode] = useState(true);
  const [hoveredSection, setHoveredSection] = useState(null);
  
  const sections = useMemo(() => ['home', 'about', 'skills', 'experience', 'projects-preview', 'contact'], []);
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);
  
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      document.body.classList.add('dark');
      document.body.style.backgroundColor = '#111827'; // dark gray-900
    } else {
      document.documentElement.classList.remove('dark');
      document.body.classList.remove('dark');
      document.body.style.backgroundColor = '#ffffff'; // white
    }
  }, [darkMode]);
  
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };
  
  return (
    <>
      <main className={`min-h-screen relative overflow-hidden ${
        darkMode 
        ? 'bg-gradient-to-b from-gray-900 to-gray-800 text-white' 
        : 'bg-gradient-to-b from-white to-gray-100 text-gray-900'
      }`}>
        <ParticlesBackground />
        
        <header className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-lg ${
          darkMode ? 'bg-gray-900/80 border-b border-gray-800' : 'bg-white/80 border-b border-gray-200'
        }`}>
          <div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-4 md:px-8">
            <Link href="/" className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Priyanshu Chaurasia
            </Link>
            
            <div className="flex items-center gap-6">
              <nav>
                <ul className="flex space-x-6">
                  {sections.map((section) => (
                    <li key={section}>
                      <button 
                        onClick={() => scrollToSection(section)} 
                        className={`transition-all duration-300 ${
                          activeSection === section
                          ? darkMode 
                            ? 'text-blue-400 font-medium' 
                            : 'text-blue-600 font-medium'
                          : darkMode
                            ? 'text-gray-400 hover:text-gray-200'
                            : 'text-gray-600 hover:text-gray-800'
                        }`}
                      >
                        <span className="capitalize">
                          {section.replace('-preview', '').replace('-', ' ')}
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>
              
              <button 
                onClick={() => setDarkMode(!darkMode)} 
                className={`p-2 rounded-full transition-all duration-300 ${
                  darkMode 
                  ? 'bg-gray-800 hover:bg-gray-700 text-yellow-400' 
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                }`}
                aria-label="Toggle dark mode"
              >
                {darkMode ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </header>

        <div className="pt-20"></div>

        {/* Hero Section */}
        <section id="home" className="min-h-screen flex flex-col justify-center items-center px-4 md:px-8 lg:px-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <TypeAnimation
              sequence={[
                'Priyanshu Chaurasia',
                2000,
                'Backend Developer',
                2000,
                'Competitive Programmer',
                2000,
                'Tech Enthusiast',
                2000,
              ]}
              wrapper="h1"
              speed={50}
              repeat={Infinity}
              className={`text-4xl md:text-6xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}
            />
            <h2 className={`text-xl md:text-2xl ${darkMode ? 'text-blue-400' : 'text-blue-600'} mb-8`}>
              IT Student & Web Developer
            </h2>
            <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} max-w-2xl mx-auto mb-8`}>
              Bachelor of Technology in Information Technology student at KNIT Sultanpur with a passion for web development, 
              competitive programming, and open source contributions.
            </p>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <Link href="/projects" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all hover:scale-105 transform duration-300">
                View Projects
              </Link>
              <Link href="/contact" className="bg-transparent hover:bg-blue-800 text-blue-400 font-semibold hover:text-white py-3 px-6 border border-blue-500 hover:border-transparent rounded-lg transition-all hover:scale-105 transform duration-300">
                Contact Me
              </Link>
            </motion.div>
          </motion.div>
        </section>

        {/* About Section - Simplified to just a paragraph */}
        <WaveDivider color="#1f2937" />
        <section id="about" className={`py-16 px-4 md:px-8 lg:px-16 ${
          darkMode ? 'bg-gray-800' : 'bg-gray-100'
        }`}>
          <div className="max-w-6xl mx-auto">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-8`}
            >
              About Me
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className={`backdrop-blur-lg p-8 rounded-lg shadow-xl ${
                darkMode 
                ? 'bg-gray-700/70 border border-gray-600' 
                : 'bg-white/70 border border-gray-200'
              }`}
            >
              <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} text-lg leading-relaxed`}>
                I&apos;m a Bachelor of Technology student in Information Technology at KNIT Sultanpur, passionate about web development and competitive programming. 
                With a strong foundation in backend development and problem-solving, I&apos;m constantly exploring new technologies and contributing to open-source projects. 
                My goal is to create efficient, scalable solutions while continuously expanding my technical expertise.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Education Section - Moved from About */}
        <section id="education" className={`py-16 px-4 md:px-8 lg:px-16 ${
          darkMode ? 'bg-gray-900' : 'bg-white'
        }`}>
          <div className="max-w-6xl mx-auto">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-8`}
            >
              Education
            </motion.h2>
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
              <h3 className={`text-2xl font-semibold ${darkMode ? 'text-white' : 'text-gray-900'} mb-4`}>Kamla Nehru Institute of Technology, Sultanpur</h3>
              <p className={`${darkMode ? 'text-blue-400' : 'text-blue-600'} text-xl mb-4`}>B.Tech in Information Technology</p>
              <div className="flex flex-wrap justify-between items-center">
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-2`}>Expected 2027</p>
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-2`}>CGPA: 7.14/10</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Skills Section with logos */}
        {/* Skills Section with SVG logos instead of images */}
        <WaveDivider color="#111827" flip={true} />
<section id="skills" className={`py-16 px-4 md:px-8 lg:px-16 ${
  darkMode ? 'bg-gray-800' : 'bg-gray-100'
}`}>
  <div className="max-w-6xl mx-auto">
    <motion.h2 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-12`}
    >
      Technical Skills
    </motion.h2>
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {[
        { 
          name: 'C/C++', 
          svg: (
            <svg viewBox="0 0 128 128" className="h-16 w-16">
              <path fill="#659AD3" d="M115.4 30.7L67.1 2.9c-.8-.5-1.9-.7-3.1-.7-1.2 0-2.3.3-3.1.7l-48 27.9c-1.7 1-2.9 3.5-2.9 5.4v55.7c0 1.1.2 2.4 1 3.5l106.8-62c-.6-1.2-1.5-2.1-2.4-2.7z"></path><path fill="#03599C" d="M10.7 95.3c.5.8 1.2 1.5 1.9 1.9l48.2 27.9c.8.5 1.9.7 3.1.7 1.2 0 2.3-.3 3.1-.7l48-27.9c1.7-1 2.9-3.5 2.9-5.4V36.1c0-.9-.1-1.9-.6-2.8l-106.6 62z"></path><path fill="#fff" d="M85.3 76.1C81.1 83.5 73.1 88.5 64 88.5c-13.5 0-24.5-11-24.5-24.5s11-24.5 24.5-24.5c9.1 0 17.1 5 21.3 12.5l13-7.5c-6.8-11.9-19.6-20-34.3-20-21.8 0-39.5 17.7-39.5 39.5s17.7 39.5 39.5 39.5c14.6 0 27.4-8 34.2-19.8l-12.9-7.6z"></path>
            </svg>
          )
        },
        { 
          name: 'HTML', 
          svg: (
            <svg viewBox="0 0 128 128" className="h-16 w-16">
              <path fill="#E44D26" d="M19.037 113.876L9.032 1.661h109.936l-10.016 112.198-45.019 12.48z"></path><path fill="#F16529" d="M64 116.8l36.378-10.086 8.559-95.878H64z"></path><path fill="#EBEBEB" d="M64 52.455H45.788L44.53 38.361H64V24.599H29.489l.33 3.692 3.382 37.927H64zm0 35.743l-.061.017-15.327-4.14-.979-10.975H33.816l1.928 21.609 28.193 7.826.063-.017z"></path><path fill="#fff" d="M63.952 52.455v13.763h16.947l-1.597 17.849-15.35 4.143v14.319l28.215-7.82.207-2.325 3.234-36.233.335-3.696h-3.708zm0-27.856v13.762h33.244l.276-3.092.628-6.978.329-3.692z"></path>
            </svg>
          )
        },
        { 
          name: 'CSS', 
          svg: (
            <svg viewBox="0 0 128 128" className="h-16 w-16">
              <path fill="#1572B6" d="M18.814 114.123L8.76 1.352h110.48l-10.064 112.754-45.243 12.543-45.119-12.526z"></path><path fill="#33A9DC" d="M64.001 117.062l36.559-10.136 8.601-96.354h-45.16v106.49z"></path><path fill="#fff" d="M64.001 51.429h18.302l1.264-14.163H64.001V23.435h34.682l-.332 3.711-3.4 38.114h-30.95V51.429z"></path><path fill="#EBEBEB" d="M64.083 87.349l-.061.018-15.403-4.159-.985-11.031H33.752l1.937 21.717 28.331 7.863.063-.018v-14.39z"></path><path fill="#fff" d="M81.127 64.675l-1.666 18.522-15.426 4.164v14.39l28.354-7.858.208-2.337 2.406-26.881H81.127z"></path><path fill="#EBEBEB" d="M64.048 23.435v13.831H30.64l-.277-3.108-.63-7.012-.331-3.711h34.646zm-.047 27.996v13.831H48.792l-.277-3.108-.631-7.012-.33-3.711h16.447z"></path>
            </svg>
          )
        },
        { 
          name: 'JavaScript', 
          svg: (
            <svg viewBox="0 0 128 128" className="h-16 w-16">
              <path fill="#F0DB4F" d="M1.408 1.408h125.184v125.185H1.408z"></path><path fill="#323330" d="M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981-3.832-1.761-8.104-3.022-9.377-5.926-.452-1.69-.512-2.642-.226-3.665.821-3.32 4.784-4.355 7.925-3.403 2.023.678 3.938 2.237 5.093 4.724 5.402-3.498 5.391-3.475 9.163-5.879-1.381-2.141-2.118-3.129-3.022-4.045-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235-5.926 6.724-4.236 18.492 2.975 23.335 7.104 5.332 17.54 6.545 18.873 11.531 1.297 6.104-4.486 8.08-10.234 7.378-4.236-.881-6.592-3.034-9.139-6.949-4.688 2.713-4.688 2.713-9.508 5.485 1.143 2.499 2.344 3.63 4.26 5.795 9.068 9.198 31.76 8.746 35.83-5.176.165-.478 1.261-3.666.38-8.581zM69.462 58.943H57.753l-.048 30.272c0 6.438.333 12.34-.714 14.149-1.713 3.558-6.152 3.117-8.175 2.427-2.059-1.012-3.106-2.451-4.319-4.485-.333-.584-.583-1.036-.667-1.071l-9.52 5.83c1.583 3.249 3.915 6.069 6.902 7.901 4.462 2.678 10.459 3.499 16.731 2.059 4.082-1.189 7.604-3.652 9.448-7.401 2.666-4.915 2.094-10.864 2.07-17.444.06-10.735.001-21.468.001-32.237z"></path>
            </svg>
          )
        },
        { 
          name: 'Express.js', 
          svg: (
            <svg viewBox="0 0 128 128" className="h-16 w-16">
              <path fill={darkMode ? "#ffffff" : "#000000"} d="M40.53 77.82V50.74H42V55a5.57 5.57 0 00.48-.6 7.28 7.28 0 016.64-4.12c3.35-.1 6.07 1.14 7.67 4.12a13.24 13.24 0 01.32 12.14c-1.49 3.34-5.17 5-9.11 4.39a7.37 7.37 0 01-5.88-3.88v10.77zM42 60.32c.13 1.32.18 2.26.33 3.18.58 3.62 2.72 5.77 6.08 6.16A6.91 6.91 0 0056 65.27a11.77 11.77 0 00-.26-9.68 6.77 6.77 0 00-7.13-3.94 6.59 6.59 0 00-5.89 4.87 33.4 33.4 0 00-.72 3.8zM88.41 64a7.92 7.92 0 01-7.74 7c-6.16.31-9.05-3.78-9.51-8.5a13.62 13.62 0 011.2-7.5 8.37 8.37 0 018.71-4.67 8 8 0 017.1 6.09 41.09 41.09 0 01.69 4.5H72.67c-.3 4.28 2 7.72 5.26 8.55 4.06 1 7.53-.76 8.79-4.62.28-.99.79-1.13 1.69-.85zm-15.74-4.45h14.12c-.09-4.56-2.93-7.86-6.78-7.91-4.36-.07-7.5 3.11-7.34 7.91zM91.39 64.1h1.42a5.69 5.69 0 003.34 4.9 8.73 8.73 0 007.58-.2 3.41 3.41 0 002-3.35 3.09 3.09 0 00-2.08-3.09c-1.56-.58-3.22-.9-4.81-1.41A35.25 35.25 0 0194 59.18c-2.56-1.25-2.72-6.12.18-7.66a10.21 10.21 0 019.76-.15 5.14 5.14 0 012.6 5.24h-1.22c0-.06-.11-.11-.11-.17-.15-3.89-3.41-5.09-6.91-4.75a9.17 9.17 0 00-3 .91 3 3 0 00-1.74 3 3 3 0 002 2.82c1.54.56 3.15.92 4.73 1.36 1.27.35 2.59.58 3.82 1a4.51 4.51 0 013.1 4.07 4.81 4.81 0 01-2.59 5c-3.34 1.89-8.84 1.39-11.29-1a6.67 6.67 0 01-1.94-4.75zM125.21 56.61h-1.33c0-.18-.07-.34-.09-.49a4.35 4.35 0 00-3.54-4.18 8.73 8.73 0 00-5.61.27 3.41 3.41 0 00-2.47 3.25 3.14 3.14 0 002.4 3.16c2 .62 4.05 1 6.08 1.56a17 17 0 011.94.59 5 5 0 01.27 9.31 11.13 11.13 0 01-9 .09 6.24 6.24 0 01-3.76-6.06h1.3a7.29 7.29 0 00.55 2.88 4.93 4.93 0 003.91 2.26 9.19 9.19 0 005.49-.43 3.31 3.31 0 001.8-3.34 3.14 3.14 0 00-2-2.64c-1.31-.47-2.68-.79-4-1.22-1.65-.53-3.36-1-4.94-1.67a4.78 4.78 0 01-2.43-6 5.6 5.6 0 013.32-3.88 11.94 11.94 0 018.87-.09 5.79 5.79 0 013.32 5.13zM61.31 71.52c-3.53 0-6.43-2.81-6.43-6.25s2.9-6.28 6.43-6.28 6.42 2.81 6.42 6.28-2.88 6.25-6.42 6.42 6.25z"></path>
            </svg>
          )
        },
        { 
          name: 'MongoDB', 
          svg: (
            <svg viewBox="0 0 128 128" className="h-16 w-16">
              <path fill="#4FAA41" d="M82.99 49.09c-4.73-20.93-15.89-27.79-17.08-30.41-.95-1.38-.95-1.92-1.33-2.66-1.33 17.94-6.06 25.88-6.06 25.88-.19.53-2.84-2.77.76-18.74-3.42 1.38-12.35 12.18-12.35 12.18l.57 1.17s2.09-1.17 3.04-1.38c-1.14 1.49-3.42 4.47-3.99 12.07-.57 7.71 2.47 12.5 3.42 14.74.76 1.92 3.8 7.71 9.67 10.9 5.87 3.19 5.87 3.72 5.87 3.72s9.29-2.66 12.16-8.13c2.85-5.47 5.3-13.92 5.32-19.34z"></path>
            </svg>
          )
        },
        { 
          name: 'React', 
          svg: (
            <svg viewBox="0 0 128 128" className="h-16 w-16">
              <g fill="#61DAFB"><circle cx="64" cy="64" r="11.4"></circle><path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-9-8.7-17.9-13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zM92.5 14.7c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zM81.3 74c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2.1 2.3-4.2 3.4-6.2zM64 97.8c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.9-.2-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2.1-2.3 4.2-3.4 6.2zM64 30.2c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.9.2 2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.3-1.1-2.1-2.2-4.2-3.4-6.2zM31.7 35c-1.7-10.5-.3-17.9 3.8-20.3 1-.6 2.2-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.6zM7 64c0-4.7 5.7-9.7 15.7-13.4 2-.8 4.2-1.5 6.4-2.1 1.6 5 3.6 10.3 6 15.6-2.4 5.3-4.5 10.5-6 15.5C15.3 75.6 7 69.6 7 64zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3 1.4-6.6 5.2 1.2 10.7 2 16.5 2.5 3.4 4.8 6.9 9.1 10.4 13-7.4 7.3-14.9 12.3-21 12.3-1.3 0-2.5-.3-3.5-.9zM96.3 93c1.7 10.5.3 17.9-3.8 20.3-1 .6-2.2.9-3.5.9-6 0-13.5-4.9-21-12.3 3.5-3.8 7-8.2 10.4-13 5.8-.5 11.3-1.4 16.5-2.5.6 2.3 1 4.5 1.4 6.6zm9-15.6c-2 .8-4.2 1.5-6.4 2.1-1.6-5-3.6-10.3-6-15.6 2.4-5.3 4.5-10.5 6-15.5 13.8 4 22.1 10 22.1 15.6 0 4.7-5.8 9.7-15.7 13.4z"></path></g>
            </svg>
          )
        },
        { 
          name: 'Node.js', 
          svg: (
            <svg viewBox="0 0 128 128" className="h-16 w-16">
              <path fill="#83CD29" d="M112.771 30.334L68.674 4.729c-2.781-1.584-6.402-1.584-9.205 0L14.901 30.334C12.031 31.985 10 35.088 10 38.407v51.142c0 3.319 2.084 6.423 4.954 8.083l11.775 6.688c5.628 2.772 7.617 2.772 10.178 2.772 8.333 0 13.093-5.039 13.093-13.828v-50.49c0-.713-.371-1.774-1.071-1.774h-5.623C42.594 41 41 42.061 41 42.773v50.49c0 3.896-3.524 7.773-10.11 4.48L18.723 90.73c-.424-.23-.723-.693-.693-1.181V38.407c0-.482.555-.966.966-.982 1.213l44.424-25.561c.415-.235 1.025-.235 1.439 0l43.882 25.555c.42.253.272.722.272 1.219v51.142c0 .488.183.963-.232 1.198l-44.086 25.576c-.378.227-.847.227-1.261 0l-11.307-6.749c-.341-.198-.746-.269-1.073-.086-3.146 1.783-3.726 2.02-6.677 3.043-.726.253-1.797.692.41 1.929l14.798 8.754a9.294 9.294 0 004.647 1.246c1.642 0 3.25-.426 4.667-1.246l43.885-25.582c2.87-1.672 4.23-4.764 4.23-8.083V38.407c0-3.319-1.36-6.414-4.229-8.073zM77.91 81.445c-11.726 0-14.309-3.235-15.17-9.066-.1-.628-.633-1.379-1.272-1.272-1.272h-5.731c-.709 0-1.279.86-1.279 1.566 0 7.466 4.059 16.512 23.453 16.512 14.039 0 22.088-5.455 22.088-15.109 0-9.572-6.467-12.084-20.082-13.886-13.762-13.762-1.819-15.16-2.738-15.16-5.962 0-2.658 1.184-6.203 11.374-6.203 9.105 0 12.461 1.954 13.842 8.091.118.577.645.645 1.24.991h5.754c.354 0 .692-.143.94-.396.24-.272.367-.613.335-.979-.891-10.568-7.912-15.493-22.112-15.493-12.631 0-20.166 5.334-20.166 14.275 0 9.698 7.497 12.378 19.622 13.577 14.505 1.422 15.633 3.542 15.633 6.395 0 4.955-3.978 7.066-13.309 7.066z"></path>
            </svg>
          )
        },
        { 
          name: 'Next.js',
          svg: (
            <svg viewBox="0 0 128 128" className="h-16 w-16">
              <path d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64c11.2 0 21.7-2.9 30.8-7.9L48.4 55.3v36.6h-6.8V41.8h6.8l50.5 75.8C116.4 106.2 128 86.5 128 64c0-35.3-28.7-64-64-64zm22.1 84.6l-7.5-11.3V41.8h7.5v42.8z" fill={darkMode ? "#ffffff" : "#000000"}></path>
            </svg>
          )
        },
        { 
          name: 'Tailwind CSS',
          svg: (
            <svg viewBox="0 0 128 128" className="h-16 w-16">
              <path d="M64.004 25.602c-17.067 0-27.73 8.53-32 25.597 6.398-8.531 13.867-11.73 22.398-9.597 4.871 1.214 8.352 4.746 12.207 8.66 6.274 6.367 13.536 13.738 29.395 13.738 17.066 0 27.73-8.531 32-25.597-6.399 8.531-13.867 11.73-22.399 9.597-4.87-1.214-8.347-4.746-12.207-8.66-6.27-6.367-13.53-13.738-29.394-13.738-17.066 0-27.73 8.531-32 25.597-32 17.066 0 27.73 8.531 32 25.597 32 17.066 0 27.73-8.53 32-25.597 32z" fill="#38BDF8"/>
            </svg>
          )
        }
      ].map((skill, index) => (
        <motion.div
          key={skill.name}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
          className={`flex flex-col items-center p-4 rounded-lg ${
            darkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'
          } transition-colors duration-300`}
        >
          {skill.svg}
          <p className={`mt-2 font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            {skill.name}
          </p>
        </motion.div>
      ))}
    </div>
    </div>
  </section>

        {/* Coding Profiles Section - Horizontal with scrolling numbers */}
        <section id="coding-profiles" className={`py-16 px-4 md:px-8 lg:px-16 ${
          darkMode ? 'bg-gray-900' : 'bg-gray-100'
        }`}>
          <div className="max-w-6xl mx-auto">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-12`}
            >
              Coding Profiles
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.a 
                href="https://www.codechef.com/users/priyanshu_sde" 
                target="_blank" 
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className={`backdrop-blur-lg p-6 rounded-lg shadow-xl hover:shadow-blue-500/20 transition-all duration-300 hover:scale-105 ${
                  darkMode 
                  ? 'bg-gray-700/70 border border-gray-600' 
                  : 'bg-white/70 border border-gray-200'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Codechef</h3>
                  <span className={`px-3 py-1 rounded-full ${darkMode ? 'bg-blue-900 text-blue-300' : 'bg-blue-100 text-blue-800'}`}>
                    3 ★
                  </span>
                </div>
                <div className="flex justify-center">
                  <TypeAnimation
                    sequence={['1', '16', '161', '1618']}
                    wrapper="p"
                    speed={10}
                    className={`text-3xl font-bold ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}
                  />
                </div>
              </motion.a>
              
              <motion.a 
                href="https://codeforces.com/profile/Priyanshu_sde" 
                target="_blank" 
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className={`backdrop-blur-lg p-6 rounded-lg shadow-xl hover:shadow-blue-500/20 transition-all duration-300 hover:scale-105 ${
                  darkMode 
                  ? 'bg-gray-700/70 border border-gray-600' 
                  : 'bg-white/70 border border-gray-200'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Codeforces</h3>
                  <span className={`px-3 py-1 rounded-full ${darkMode ? 'bg-gray-500 text-gray-900' : 'bg-gray-500 text-gray-900'}`}>
                    Newbie
                  </span>
                </div>
                <div className="flex justify-center">
                  <TypeAnimation
                    sequence={['1', '11', '112', '1129']}
                    wrapper="p"
                    speed={10}
                    className={`text-3xl font-bold ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}
                  />
                </div>
              </motion.a>
              
              <motion.a 
                href="https://leetcode.com/u/Priyanshu_sde/" 
                target="_blank" 
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className={`backdrop-blur-lg p-6 rounded-lg shadow-xl hover:shadow-blue-500/20 transition-all duration-300 hover:scale-105 ${
                  darkMode 
                  ? 'bg-gray-700/70 border border-gray-600' 
                  : 'bg-white/70 border border-gray-200'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Leetcode</h3>
                </div>
                <div className="flex justify-center">
                  <TypeAnimation
                    sequence={['1', '15', '153', '1532']}
                    wrapper="p"
                    speed={10}
                    className={`text-3xl font-bold ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}
                  />
                </div>
              </motion.a>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className={`py-16 px-4 md:px-8 lg:px-16 ${
          darkMode ? 'bg-gray-900' : 'bg-gray-100'
        }`}>
          <div className="max-w-6xl mx-auto">
            <h2 className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-8`}>Experience & Responsibilities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-lg shadow-lg`}>
                <h3 className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-gray-900'} mb-4`}>Executive Member</h3>
                <p className={`${darkMode ? 'text-blue-400' : 'text-blue-600'} mb-2`}>Programming and Tech Skills Club, KNIT</p>
                <p className={`${darkMode ? 'text-gray-400' : 'text-gray-500'} mb-4`}>2025 - Present</p>
                <ul className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} space-y-2`}>
                  <li>• Conducted coding workshops and mentorship sessions</li>
                  <li>• Organized competitive programming contests</li>
                  <li>• Facilitated open-source contribution events</li>
                </ul>
              </div>
              <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-lg shadow-lg`}>
                <h3 className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-gray-900'} mb-4`}>Positions of Responsibility</h3>
                <ul className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} space-y-2`}>
                  <li>• Video Editing, Inzio&apos;23 (January &apos;24)</li>
                  <li>• Graphic Designing, Anubhuti&apos;24 (March-April &apos;24)</li>
                  <li>• Graphic Designing, Cultural Council (October &apos;24 - present)</li>
                  <li>• Executive Members, PTSC (February &apos;25 - present)</li>
                  <li>• Graphic Designing, Tvran&apos;25 (February-March &apos;24)</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section Preview */}
        <section id="projects-preview" className={`py-16 px-4 md:px-8 lg:px-16 ${
          darkMode ? 'bg-gray-800' : 'bg-white'
        }`}>
          <div className="max-w-6xl mx-auto">
            <div className="flex justify-between items-center mb-8">
              <h2 className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Featured Project</h2>
              <Link href="/projects" className={`${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-500'}`}>View all projects →</Link>
            </div>
            <div className={`${darkMode ? 'bg-gray-700' : 'bg-gray-100'} p-6 rounded-lg shadow-lg`}>
              <h3 className={`text-2xl font-semibold ${darkMode ? 'text-white' : 'text-gray-900'} mb-2`}>TaskTrackr</h3>
              <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-4`}>TODO App with Authentication</p>
              <p className={`${darkMode ? 'text-gray-400' : 'text-gray-500'} mb-4`}>
                A task management application with user authentication, allowing users to create, edit, and delete tasks efficiently.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className={`${darkMode ? 'bg-blue-900 text-blue-300' : 'bg-blue-100 text-blue-800'} px-3 py-1 rounded-full text-sm`}>React</span>
                <span className={`${darkMode ? 'bg-blue-900 text-blue-300' : 'bg-blue-100 text-blue-800'} px-3 py-1 rounded-full text-sm`}>Tailwind CSS</span>
                <span className={`${darkMode ? 'bg-blue-900 text-blue-300' : 'bg-blue-100 text-blue-800'} px-3 py-1 rounded-full text-sm`}>Node.js</span>
                <span className={`${darkMode ? 'bg-blue-900 text-blue-300' : 'bg-blue-100 text-blue-800'} px-3 py-1 rounded-full text-sm`}>Express</span>
                <span className={`${darkMode ? 'bg-blue-900 text-blue-300' : 'bg-blue-100 text-blue-800'} px-3 py-1 rounded-full text-sm`}>MongoDB</span>
              </div>
              <div className="flex gap-4">
                <Link href="https://task-trackr-indol.vercel.app/" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition-all">View Demo</Link>
                <a href="https://github.com/Priyanshu-sde/TaskTrackr" className={`bg-transparent hover:bg-blue-800 ${darkMode ? 'text-gray-300 border-gray-500' : 'text-gray-600 border-gray-400'} font-semibold hover:text-white py-2 px-4 border hover:border-transparent rounded transition-all`}>Source Code</a>
              </div>
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section id="achievements" className={`py-16 px-4 md:px-8 lg:px-16 ${
          darkMode ? 'bg-gray-900' : 'bg-gray-100'
        }`}>
          <div className="max-w-6xl mx-auto">
            <h2 className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-8`}>Achievements</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className={`${darkMode ? 'bg-gradient-to-r from-blue-900 to-blue-800' : 'bg-gradient-to-r from-blue-500 to-blue-600'} p-6 rounded-lg shadow-lg`}>
                <h3 className="text-xl font-semibold text-white mb-4">Hack the Web</h3>
                <p className="text-white opacity-90">Winner in Round 1 of the Open Source event organized by college</p>
              </div>
              <div className={`${darkMode ? 'bg-gradient-to-r from-blue-900 to-blue-800' : 'bg-gradient-to-r from-blue-500 to-blue-600'} p-6 rounded-lg shadow-lg`}>
                <h3 className="text-xl font-semibold text-white mb-4">Competitive Programming</h3>
                <p className="text-white opacity-90">Strong performance across multiple platforms showcasing problem-solving skills</p>
              </div>
              <div className={`${darkMode ? 'bg-gradient-to-r from-blue-900 to-blue-800' : 'bg-gradient-to-r from-blue-500 to-blue-600'} p-6 rounded-lg shadow-lg`}>
                <h3 className="text-xl font-semibold text-white mb-4">Technical Skills</h3>
                <p className="text-white opacity-90">Proficient in multiple programming languages and web development technologies</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className={`py-16 px-4 md:px-8 lg:px-16 ${
          darkMode ? 'bg-gray-800' : 'bg-white'
        }`}>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-6`}>Get In Touch</h2>
            <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-8`}>I&apos;m currently looking for new opportunities to grow and learn. Feel free to reach out if you want to connect!</p>
            <div className="flex justify-center gap-4 mb-8">
              <a href="mailto:priyanshu.sde@gmail.com" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all">
                Email Me
              </a>
              <a href="tel:7068451653" className={`bg-transparent hover:bg-blue-800 ${darkMode ? 'text-blue-400 border-blue-500' : 'text-blue-600 border-blue-600'} font-semibold hover:text-white py-3 px-6 border hover:border-transparent rounded-lg transition-all`}>
                Call Me
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className={`py-12 px-4 ${
          darkMode ? 'bg-gray-900 border-t border-gray-800' : 'bg-white border-t border-gray-200'
        }`}>
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center mb-8">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="mb-6 md:mb-0"
              >
                <h3 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-2`}>Priyanshu Chaurasia</h3>
                <p className="text-gray-400">IT Student & Web Developer</p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex space-x-6"
              >
                <a href="https://github.com/Priyanshu-sde" className={`${
                  darkMode 
                  ? 'text-blue-400 hover:text-blue-300' 
                  : 'text-blue-600 hover:text-blue-700'
                } transition-colors hover:underline`}>
                  <span className="sr-only">GitHub</span>
                  <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.032 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.645 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="https://linkedin.com/in/priyanshu-chaurasia" className={`${
                  darkMode 
                  ? 'text-blue-400 hover:text-blue-300' 
                  : 'text-blue-600 hover:text-blue-700'
                } transition-colors hover:underline`}>
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 3.915-4.428 6.902-4.428h.48c2.76 0 5.088 1.842 6.48 4.428 1.392 2.586 1.392 4.428 0 6.48-1.842 1.392-2.586 1.392-4.428 0-6.48-1.842z" />
                  </svg>
                </a>
                <a href="mailto:priyanshu.sde@gmail.com" className="text-gray-400 hover:text-white transition-all transform hover:scale-110 duration-300">
                  <span className="sr-only">Email</span>
                  <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                </a>
              </motion.div>
            </div>
            
            <div className="border-t border-gray-800 pt-8">
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-gray-400 text-center"
              >
                © 2025 Priyanshu Chaurasia. All rights reserved. | <a href="https://priyanshu.online" className={`hover:${darkMode ? 'text-blue-400' : 'text-blue-600'} transition-colors`}>priyanshu.online</a>
              </motion.p>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
