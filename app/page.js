
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center px-4 md:px-8 lg:px-16">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Priyanshu Chaurasia</h1>
          <h2 className="text-xl md:text-2xl text-blue-400 mb-8">IT Student & Web Developer</h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Bachelor of Technology in Information Technology student at KNIT Sultanpur with a passion for web development, 
            competitive programming, and open source contributions.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/projects" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all">
              View Projects
            </Link>
            <Link href="/contact" className="bg-transparent hover:bg-blue-800 text-blue-400 font-semibold hover:text-white py-3 px-6 border border-blue-500 hover:border-transparent rounded-lg transition-all">
              Contact Me
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 md:px-8 lg:px-16 bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8">About Me</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-700 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-4">Education</h3>
              <p className="text-gray-300 mb-2">Kamla Nehru Institute of Technology, Sultanpur</p>
              <p className="text-gray-400 mb-2">B.Tech in Information Technology</p>
              <p className="text-gray-400 mb-2">Expected 2027</p>
              <p className="text-gray-400">CGPA: 7.14/10</p>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-4">Skills</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• Languages: C, C++, HTML, CSS, JavaScript</li>
                <li>• Developer Tools: VS Code, Git, GitHub, Postman</li>
                <li>• Frameworks: Express</li>
                <li>• Databases: MongoDB</li>
                <li>• Soft Skills: Communication, Leadership</li>
              </ul>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-4">Coding Profiles</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• Codechef: 3 star (1618)</li>
                <li>• Codeforces: 1129</li>
                <li>• Leetcode: 1532</li>
                <li>• Github: <a href="https://github.com/Priyanshu-sde" className="text-blue-400 hover:underline">Priyanshu-sde</a></li>
                <li>• LinkedIn: <a href="https://linkedin.com/in/priyanshu-chaurasia" className="text-blue-400 hover:underline">Priyanshu Chaurasia</a></li>
              </ul>
            </div>
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
            <a href="https://github.com/Priyanshu-sde" className="text-gray-400 hover:text-white transition-all">
              <span className="sr-only">GitHub</span>
              <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="https://linkedin.com/in/priyanshu-chaurasia" className="text-gray-400 hover:text-white transition-all">
              <span className="sr-only">LinkedIn</span>
              <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-gray-900 border-t border-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">© 2025 Priyanshu Chaurasia. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
