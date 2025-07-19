import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const socials = [
  {
    href: 'https://github.com/Priyanshu-sde',
    icon: <FaGithub size={28} />,
    label: 'GitHub',
  },
  {
    href: 'https://linkedin.com/in/priyanshu-chaurasia',
    icon: <FaLinkedin size={28} />,
    label: 'LinkedIn',
  },
  {
    href: '/resume.pdf',
    icon: <span className="font-bold text-lg">CV</span>,
    label: 'Resume',
  },
  {
    href: 'https://priyanshu.online',
    icon: <span className="font-bold text-lg">🌐</span>,
    label: 'Portfolio',
  },
];

const bootLines = [
  'booting portfolio...',
  '> Hello, I\'m Priyanshu Chaurasia',
  '"I build scalable systems, mentor future devs, and automate everything possible."',
];

export default function HeroBootSequence() {
  const [displayedLines, setDisplayedLines] = useState([]);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayedLines((lines) => [...lines, bootLines[i]]);
      i++;
      if (i === bootLines.length) clearInterval(interval);
    }, 900);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-black text-green-400 font-mono px-4">
      <div className="w-full max-w-2xl mx-auto mt-24">
        <div className="bg-black/80 rounded-lg shadow-lg p-8 border border-green-700">
          {displayedLines.map((line, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
              className="text-lg md:text-2xl mb-2 whitespace-pre-line"
            >
              {line}
            </motion.div>
          ))}
          {displayedLines.length === bootLines.length && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-6 flex gap-6 justify-center"
            >
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-green-300 transition-colors flex items-center gap-1"
                  aria-label={s.label}
                >
                  {s.icon}
                </a>
              ))}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
} 