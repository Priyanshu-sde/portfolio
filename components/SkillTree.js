import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SiCplusplus, SiTypescript, SiJavascript, SiNodedotjs, SiReact, SiTailwindcss, SiPostgresql, SiRedis, SiDocker, SiAmazonaws } from 'react-icons/si';
import { FaServer, FaCodeBranch, FaHdd, FaBrain } from 'react-icons/fa';

const skillsData = {
  "Languages": [
    { name: "C++", icon: <SiCplusplus /> },
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "JavaScript", icon: <SiJavascript /> },
  ],
  "Backend": [
    { name: "Node.js", icon: <SiNodedotjs /> },
    { name: "PostgreSQL", icon: <SiPostgresql /> },
    { name: "Redis", icon: <SiRedis /> },
    { name: "JWT", icon: <FaCodeBranch /> },
  ],
  "Frontend": [
    { name: "React", icon: <SiReact /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  ],
  "Infrastructure & DevOps": [
    { name: "AWS", icon: <SiAmazonaws /> },
    { name: "CI/CD", icon: <FaServer /> },
    { name: "Docker", icon: <SiDocker /> },
  ],
  "Systems": [
    { name: "DSA", icon: <FaBrain /> },
    { name: "DBMS", icon: <FaHdd /> },
    { name: "OS", icon: <FaServer /> },
    { name: "Design Patterns", icon: <FaCodeBranch /> }
  ],
};

const SkillCategory = ({ title, skills, isOpen, onClick }) => {
  const variants = {
    open: { opacity: 1, height: 'auto' },
    closed: { opacity: 0, height: 0 },
  };

  return (
    <div className="mb-4 border border-green-800 rounded-lg overflow-hidden">
      <button
        onClick={onClick}
        className="w-full text-left p-4 bg-gray-800 hover:bg-gray-700 transition-colors flex justify-between items-center"
      >
        <h3 className="text-2xl font-semibold text-green-400">{title}</h3>
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 15.5L6 9.5L7.4 8.09999L12 12.7L16.6 8.09999L18 9.5L12 15.5Z" fill="currentColor"/>
          </svg>
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={variants}
            initial="closed"
            animate="open"
            exit="closed"
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="p-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 bg-gray-900"
          >
            {skills.map(skill => (
              <motion.div 
                key={skill.name}
                className="flex flex-col items-center justify-center p-4 bg-gray-800 rounded-lg gap-2 text-center"
                whileHover={{ scale: 1.05, backgroundColor: '#1F2937' }}
              >
                <div className="text-4xl text-green-500">{skill.icon}</div>
                <p className="text-gray-300 font-medium">{skill.name}</p>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function SkillTree() {
  const [openCategory, setOpenCategory] = useState(Object.keys(skillsData)[0]);

  const handleCategoryClick = (category) => {
    setOpenCategory(openCategory === category ? null : category);
  };

  return (
    <section id="skills" className="py-20 px-4 bg-black text-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-green-400">Chapter 2: Tech Arsenal</h2>
        <div>
          {Object.entries(skillsData).map(([category, skills]) => (
            <SkillCategory
              key={category}
              title={category}
              skills={skills}
              isOpen={openCategory === category}
              onClick={() => handleCategoryClick(category)}
            />
          ))}
        </div>
      </div>
    </section>
  );
} 