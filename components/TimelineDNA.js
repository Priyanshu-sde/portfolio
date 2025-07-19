import { motion } from 'framer-motion';
import { FaCode, FaTrophy, FaUsers, FaTools } from 'react-icons/fa';

const timelineEvents = [
  {
    icon: <FaCode />,
    title: 'Forging the Foundation',
    description: 'Mastering Data Structures & Algorithms, laying the groundwork for scalable and efficient solutions.',
  },
  {
    icon: <FaTrophy />,
    title: 'First Victories',
    description: "Winning hackathons like 'Hack the Web', proving my skills and thriving under pressure.",
  },
  {
    icon: <FaUsers />,
    title: 'Sharing the Knowledge',
    description: 'Mentoring over 100 juniors, fostering a community of growth and paying it forward.',
  },
  {
    icon: <FaTools />,
    title: 'From Theory to Impact',
    description: 'Building production-grade tools, translating theoretical knowledge into real-world impact.',
  },
];

const QuoteBlock = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.7 }}
    className="bg-gray-800 p-8 rounded-lg my-16 text-center italic"
  >
    <p className="text-2xl text-gray-300">
      “Every abstraction I build exists to save someone else's time.”
    </p>
  </motion.div>
);

export default function TimelineDNA() {
  return (
    <section id="about" className="py-20 px-4 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Chapter 1: Developer DNA</h2>
        
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 -ml-0.5 w-1 bg-gray-700 h-full"></div>
          
          {timelineEvents.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`mb-12 flex items-center w-full ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}
            >
              <div className="w-1/2">
                <div className={`p-6 rounded-lg shadow-lg bg-gray-800 mx-4`}>
                  <h3 className="text-xl font-semibold text-green-400 mb-2">{event.title}</h3>
                  <p className="text-gray-300">{event.description}</p>
                </div>
              </div>
              <div className="w-1/2 flex justify-center">
                 <div className="z-10 bg-green-500 text-black rounded-full h-16 w-16 flex items-center justify-center text-3xl">
                   {event.icon}
                 </div>
              </div>
            </motion.div>
          ))}
        </div>

        <QuoteBlock />
      </div>
    </section>
  );
} 