import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaBullseye, FaLightbulb, FaTools, FaChartLine } from 'react-icons/fa';

const projectsData = [
  {
    title: 'GitDrip: Version Control Automation',
    problem: 'Manual versioning and releases were slow and error-prone, hindering team velocity.',
    approach: 'Developed a scalable automation script to manage versioning, changelogs, and releases using Git hooks and CI/CD pipelines.',
    stack: ['Node.js', 'Bash', 'GitHub Actions'],
    impact: 'Reduced release time by 90% and eliminated human error in versioning.',
    github: 'https://github.com/Priyanshu-sde',
    live: '#',
  },
  {
    title: 'SkyDeploy: Real-Time CI/CD Platform',
    problem: 'Developers lacked visibility into real-time deployment status, causing delays and confusion.',
    approach: 'Built a real-time dashboard using WebSockets to monitor CI/CD pipelines, providing instant status updates and logs.',
    stack: ['React', 'Node.js', 'WebSockets', 'Docker'],
    impact: 'Increased deployment visibility by 100%, enabling teams to resolve issues 3x faster.',
    github: 'https://github.com/Priyanshu-sde',
    live: '#',
  },
  {
    title: 'Secure Online Examination System',
    problem: 'Needed a secure, scalable backend to handle 1000+ concurrent users for online exams without cheating.',
    approach: 'Designed a robust backend with secure JWT authentication, real-time proctoring features, and optimized database queries for high concurrency.',
    stack: ['Node.js', 'PostgreSQL', 'Redis', 'JWT'],
    impact: 'Successfully handled 1,000+ concurrent users with zero downtime and prevented common cheating vectors.',
    github: 'https://github.com/Priyanshu-sde',
    live: '#',
  },
];

const ProjectCard = ({ project, index }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: index * 0.2 } },
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="bg-slate-900/50 rounded-lg overflow-hidden border border-green-900/80 shadow-lg"
    >
      <div className="p-6">
        <h3 className="text-2xl font-bold text-green-400 mb-4">{project.title}</h3>
        
        <div className="mb-4">
          <h4 className="flex items-center gap-2 text-lg font-semibold text-gray-300 mb-2"><FaBullseye /> Problem</h4>
          <p className="text-gray-400">{project.problem}</p>
        </div>
        
        <div className="mb-4">
          <h4 className="flex items-center gap-2 text-lg font-semibold text-gray-300 mb-2"><FaLightbulb /> Approach</h4>
          <p className="text-gray-400">{project.approach}</p>
        </div>
        
        <div className="mb-4">
          <h4 className="flex items-center gap-2 text-lg font-semibold text-gray-300 mb-2"><FaChartLine /> Impact</h4>
          <p className="text-gray-400">{project.impact}</p>
        </div>
        
        <div className="mb-6">
          <h4 className="flex items-center gap-2 text-lg font-semibold text-gray-300 mb-2"><FaTools /> Stack</h4>
          <div className="flex flex-wrap gap-2">
            {project.stack.map(tech => (
              <span key={tech} className="bg-gray-700 text-green-400 text-sm font-mono px-2 py-1 rounded">
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-4">
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-300 hover:text-green-400 transition-colors">
            <FaGithub /> GitHub
          </a>
          <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-300 hover:text-green-400 transition-colors">
            <FaExternalLinkAlt /> Live Demo
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default function ProjectCaseStudy() {
  return (
    <section id="projects" className="py-20 px-4 bg-black text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-green-400">Chapter 3: Battle Logs</h2>
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
          {projectsData.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
} 