"use client"
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import ParticlesBackground from '../components/ParticlesBackground';
import WaveDivider from '../components/WaveDivider';

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');
  const [darkMode, setDarkMode] = useState(true);
  const [hoveredSection, setHoveredSection] = useState(null);
  
  const sections = ['home', 'about', 'skills', 'experience', 'projects-preview', 'contact'];
  
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
        
        {/* Floating Navigation */}
        <motion.nav 
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="fixed left-8 top-1/2 transform -translate-y-1/2 z-50 h-[70vh]"
        >
          <ul className="flex flex-col h-full relative items-start">
            {/* Scrolling Indicator - This is the only indicator we need */}
            <motion.div 
              className={`absolute left-0.5 w-3 h-3 rounded-full ${
                darkMode ? 'bg-blue-500' : 'bg-blue-600'
              }`}
              animate={{ 
                top: `${(sections.indexOf(activeSection) / (sections.length - 1)) * 100}%`,
              }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />

            {sections.map((section) => (
              <li key={section} className="flex items-center py-3">
                <button 
                  onClick={() => scrollToSection(section)} 
                  className={`flex items-center group relative pl-4 pr-4 py-2 transition-all duration-300 hover:scale-110 ${
                    activeSection === section
                    ? darkMode 
                      ? 'text-blue-400 font-medium scale-110'
                      : 'text-blue-600 font-medium scale-110'
                    : darkMode
                      ? 'text-gray-400 hover:text-gray-200'
                      : 'text-gray-600 hover:text-gray-800'
                  }`}
                  onMouseEnter={() => setHoveredSection(section)}
                  onMouseLeave={() => setHoveredSection(null)}
                >
                  <span className="capitalize">
                    {section.replace('-preview', '').replace('-', ' ')}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </motion.nav>

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
                I'm a Bachelor of Technology student in Information Technology at KNIT Sultanpur, passionate about web development and competitive programming. 
                With a strong foundation in backend development and problem-solving, I'm constantly exploring new technologies and contributing to open-source projects. 
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
                { name: 'C/C++', logo: '/path/to/c-logo.png' },
                { name: 'HTML', logo: '/path/to/html-logo.png' },
                { name: 'CSS', logo: '/path/to/css-logo.png' },
                { name: 'JavaScript', logo: '/path/to/js-logo.png' },
                { name: 'Express.js', logo: '/path/to/express-logo.png' },
                { name: 'MongoDB', logo: '/path/to/mongodb-logo.png' },
                { name: 'Git', logo: '/path/to/git-logo.png' },
                { name: 'GitHub', logo: '/path/to/github-logo.png' },
              ].map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`flex flex-col items-center p-6 rounded-lg ${
                    darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-white hover:bg-gray-50'
                  } transition-all duration-300 hover:scale-105 shadow-md`}
                >
                  <img src={skill.logo} alt={skill.name} className="h-16 w-16 mb-4" />
                  <p className={`text-lg font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>{skill.name}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Coding Profiles Section - Horizontal with scrolling numbers */}
        <section id="coding-profiles" className={`py-16 px-4 md:px-8 lg:px-16 ${
          darkMode ? 'bg-gray-900' : 'bg-white'
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
                href="https://www.codechef.com/users/your_username" 
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
                href="https://codeforces.com/profile/your_username" 
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
                  <span className={`px-3 py-1 rounded-full ${darkMode ? 'bg-green-900 text-green-300' : 'bg-green-100 text-green-800'}`}>
                    Pupil
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
                href="https://leetcode.com/your_username/" 
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
            
            <div className="flex justify-center gap-8 mt-12">
              <motion.a 
                href="https://github.com/Priyanshu-sde" 
                target="_blank" 
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className={`flex items-center gap-3 p-4 rounded-lg ${
                  darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'
                } transition-all duration-300 hover:scale-105`}
              >
                <svg className={`h-8 w-8 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
                <span className={`text-lg font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>GitHub</span>
              </motion.a>
              
              <motion.a 
                href="https://linkedin.com/in/priyanshu-chaurasia" 
                target="_blank" 
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
                className={`flex items-center gap-3 p-4 rounded-lg ${
                  darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'
                } transition-all duration-300 hover:scale-105`}
              >
                <svg className={`h-8 w-8 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
                <span className={`text-lg font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>LinkedIn</span>
              </motion.a>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-16 px-4 md:px-8 lg:px-16 bg-gray-900">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8">Experience & Responsibilities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-white mb-4">Executive Member</h3>
                <p className="text-blue-400 mb-2">Programming and Tech Skills Club, KNIT</p>
                <p className="text-gray-400 mb-4">2025 - Present</p>
                <ul className="text-gray-300 space-y-2">
                  <li>• Conducted coding workshops and mentorship sessions</li>
                  <li>• Organized competitive programming contests</li>
                  <li>• Facilitated open-source contribution events</li>
                </ul>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-white mb-4">Positions of Responsibility</h3>
                <ul className="text-gray-300 space-y-2">
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
        <section id="projects-preview" className="py-16 px-4 md:px-8 lg:px-16 bg-gray-800">
          <div className="max-w-6xl mx-auto">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold text-white">Featured Project</h2>
              <Link href="/projects" className="text-blue-400 hover:text-blue-300">View all projects →</Link>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg">
              <h3 className="text-2xl font-semibold text-white mb-2">TaskTrackr</h3>
              <p className="text-gray-300 mb-4">TODO App with Authentication</p>
              <p className="text-gray-400 mb-4">
                A task management application with user authentication, allowing users to create, edit, and delete tasks efficiently.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-blue-900 text-blue-300 px-3 py-1 rounded-full text-sm">React</span>
                <span className="bg-blue-900 text-blue-300 px-3 py-1 rounded-full text-sm">Tailwind CSS</span>
                <span className="bg-blue-900 text-blue-300 px-3 py-1 rounded-full text-sm">Node.js</span>
                <span className="bg-blue-900 text-blue-300 px-3 py-1 rounded-full text-sm">Express</span>
                <span className="bg-blue-900 text-blue-300 px-3 py-1 rounded-full text-sm">MongoDB</span>
              </div>
              <div className="flex gap-4">
                <a href="#" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition-all">View Demo</a>
                <a href="#" className="bg-transparent hover:bg-gray-600 text-gray-300 font-semibold hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent rounded transition-all">Source Code</a>
              </div>
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section id="achievements" className="py-16 px-4 md:px-8 lg:px-16 bg-gray-900">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8">Achievements</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-r from-blue-900 to-blue-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-white mb-4">Hack the Web</h3>
                <p className="text-gray-300">Winner in Round 1 of the Open Source event organized by college</p>
              </div>
              <div className="bg-gradient-to-r from-blue-900 to-blue-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-white mb-4">Competitive Programming</h3>
                <p className="text-gray-300">Strong performance across multiple platforms showcasing problem-solving skills</p>
              </div>
              <div className="bg-gradient-to-r from-blue-900 to-blue-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-white mb-4">Technical Skills</h3>
                <p className="text-gray-300">Proficient in multiple programming languages and web development technologies</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 px-4 md:px-8 lg:px-16 bg-gray-800">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Get In Touch</h2>
            <p className="text-gray-300 mb-8">I&apos;m currently looking for new opportunities to grow and learn. Feel free to reach out if you want to connect!</p>
            <div className="flex justify-center gap-4 mb-8">
              <a href="mailto:priyanshu.sde@gmail.com" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all">
                Email Me
              </a>
              <a href="tel:7068451653" className="bg-transparent hover:bg-blue-800 text-blue-400 font-semibold hover:text-white py-3 px-6 border border-blue-500 hover:border-transparent rounded-lg transition-all">
                Call Me
              </a>
            </div>
            <div className="flex justify-center gap-6">
              <a href="https://github.com/Priyanshu-sde" className={`${
                darkMode 
                ? 'text-blue-400 hover:text-blue-300' 
                : 'text-blue-600 hover:text-blue-700'
              } transition-colors hover:underline`}>
                <span className="sr-only">GitHub</span>
                <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="https://linkedin.com/in/priyanshu-chaurasia" className={`${
                darkMode 
                ? 'text-blue-400 hover:text-blue-300' 
                : 'text-blue-600 hover:text-blue-700'
              } transition-colors hover:underline`}>
                <span className="sr-only">LinkedIn</span>
                <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-4 bg-gray-900 border-t border-gray-800">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center mb-8">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="mb-6 md:mb-0"
              >
                <h3 className="text-2xl font-bold text-white mb-2">Priyanshu Chaurasia</h3>
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
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="https://linkedin.com/in/priyanshu-chaurasia" className={`${
                  darkMode 
                  ? 'text-blue-400 hover:text-blue-300' 
                  : 'text-blue-600 hover:text-blue-700'
                } transition-colors hover:underline`}>
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
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
                © 2025 Priyanshu Chaurasia. All rights reserved.
              </motion.p>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
