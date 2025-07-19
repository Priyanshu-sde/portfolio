import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { FaTrophy, FaMedal, FaStar, FaCode } from 'react-icons/fa';

const feats = [
  {
    icon: <FaTrophy className="text-yellow-400" />,
    label: 'Hackathon Wins',
    value: 3,
  },
  {
    icon: <FaMedal className="text-green-400" />,
    label: 'CP Max Rating',
    value: 1850,
  },
  {
    icon: <FaCode className="text-purple-400" />,
    label: 'DSA Problems Solved',
    value: 500,
  },
  {
    icon: <FaStar className="text-blue-400" />,
    label: 'Open Source PRs',
    value: 25,
  },
];

export default function FeatsTrophyShelf() {
  return (
    <section id="achievements" className="py-20 px-4 bg-black text-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-green-400">Chapter 5: The Feats</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {feats.map((feat, idx) => (
            <motion.div
              key={feat.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="flex flex-col items-center bg-gray-900 border border-green-900/80 rounded-lg p-8 shadow-lg min-w-[180px]"
            >
              <div className="text-5xl mb-4">{feat.icon}</div>
              <div className="text-3xl font-bold text-green-400 mb-2">
                <CountUp end={feat.value} duration={2} />
                {feat.label === 'CP Max Rating' ? '' : '+'}
              </div>
              <div className="text-gray-300 text-lg font-mono text-center">{feat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
