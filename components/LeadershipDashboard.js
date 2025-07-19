import { motion } from 'framer-motion';
import { FaChalkboardTeacher, FaUserFriends, FaProjectDiagram, FaQuoteLeft } from 'react-icons/fa';

const stats = [
  {
    icon: <FaChalkboardTeacher className="text-green-400" />,
    label: 'Workshops Led',
    value: 8,
  },
  {
    icon: <FaUserFriends className="text-green-400" />,
    label: 'Juniors Mentored',
    value: 120,
  },
  {
    icon: <FaProjectDiagram className="text-green-400" />,
    label: 'Internal Projects Co-Managed',
    value: 5,
  },
];

const clubQuote = {
  text: '“Priyanshu is the go-to mentor for juniors. His guidance helped me land my first internship!”',
  author: '— Club Member',
};

export default function LeadershipDashboard() {
  return (
    <section id="experience" className="py-20 px-4 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-green-400">Chapter 4: Squad Leadership</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="bg-black/80 border border-green-900/80 rounded-lg p-8 flex flex-col items-center shadow-lg"
            >
              <div className="text-4xl mb-4">{stat.icon}</div>
              <div className="text-3xl font-bold text-green-400 mb-2">{stat.value}+</div>
              <div className="text-gray-300 text-lg font-mono text-center">{stat.label}</div>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="bg-slate-900/70 border-l-4 border-green-400 p-8 rounded-lg flex items-center gap-4"
        >
          <FaQuoteLeft className="text-green-400 text-3xl" />
          <div>
            <p className="text-xl text-gray-200 italic mb-2">{clubQuote.text}</p>
            <span className="text-green-400 font-mono">{clubQuote.author}</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 