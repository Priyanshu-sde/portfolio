// File: app/projects/page.js - Projects Page
import Link from 'next/link';

export default function Projects() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      {/* Header */}
      <header className="py-8 px-4 md:px-8 lg:px-16 bg-gray-900">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Link href="/" className="text-white text-2xl font-bold">Priyanshu Chaurasia</Link>
          <nav>
            <ul className="flex space-x-6">
              <li><Link href="/" className="text-gray-300 hover:text-white transition-all">Home</Link></li>
              <li><Link href="/projects" className="text-blue-400 font-medium">Projects</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-white transition-all">Contact</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Projects Hero */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-gray-900">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">My Projects</h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            A collection of projects I&apos;ve built to showcase my technical skills and problem-solving abilities.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* TaskTrackr Project */}
            <div className="bg-gray-700 p-6 rounded-lg">
              <h3 className="text-2xl font-semibold text-white mb-2">TaskTrackr</h3>
              <p className="text-blue-400 mb-4">TODO App with Authentication</p>
              <p className="text-gray-300 mb-4">
                A comprehensive task management application with user authentication, allowing users to create, edit, and delete tasks efficiently.
                The app provides a seamless experience for managing daily activities and tracking progress.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-blue-900 text-blue-300 px-3 py-1 rounded-full text-sm">React</span>
                <span className="bg-blue-900 text-blue-300 px-3 py-1 rounded-full text-sm">Tailwind CSS</span>
                <span className="bg-blue-900 text-blue-300 px-3 py-1 rounded-full text-sm">Node.js</span>
                <span className="bg-blue-900 text-blue-300 px-3 py-1 rounded-full text-sm">Express</span>
                <span className="bg-blue-900 text-blue-300 px-3 py-1 rounded-full text-sm">MongoDB</span>
              </div>
              <h4 className="text-lg font-medium text-white mb-2">Key Features:</h4>
              <ul className="text-gray-300 space-y-2 mb-6">
                <li>• User authentication and authorization</li>
                <li>• Create, read, update, and delete tasks</li>
                <li>• Task categorization and priority levels</li>
                <li>• Responsive design for all devices</li>
              </ul>
              <div className="flex gap-4">
                <a href="#" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition-all">View Demo</a>
                <a href="#" className="bg-transparent hover:bg-gray-600 text-gray-300 font-semibold hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent rounded transition-all">Source Code</a>
              </div>
            </div>

            {/* Portfolio Website Project */}
            <div className="bg-gray-700 p-6 rounded-lg">
              <h3 className="text-2xl font-semibold text-white mb-2">Portfolio Website</h3>
              <p className="text-blue-400 mb-4">Personal Developer Portfolio</p>
              <p className="text-gray-300 mb-4">
                A modern, responsive portfolio website built with Next.js and Tailwind CSS to showcase my projects, skills, and experience. The site features smooth animations and a clean, professional design.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-blue-900 text-blue-300 px-3 py-1 rounded-full text-sm">Next.js</span>
                <span className="bg-blue-900 text-blue-300 px-3 py-1 rounded-full text-sm">Tailwind CSS</span>
                <span className="bg-blue-900 text-blue-300 px-3 py-1 rounded-full text-sm">React</span>
                <span className="bg-blue-900 text-blue-300 px-3 py-1 rounded-full text-sm">JavaScript</span>
              </div>
              <h4 className="text-lg font-medium text-white mb-2">Key Features:</h4>
              <ul className="text-gray-300 space-y-2 mb-6">
                <li>• Responsive design for all screen sizes</li>
                <li>• Modern UI with smooth transitions</li>
                <li>• Project showcase with detailed descriptions</li>
                <li>• Contact form and social media links</li>
              </ul>
              <div className="flex gap-4">
                <a href="#" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition-all">View Live</a>
                <a href="#" className="bg-transparent hover:bg-gray-600 text-gray-300 font-semibold hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent rounded transition-all">Source Code</a>
              </div>
            </div>

            {/* Future Project 1 */}
            <div className="bg-gray-700 p-6 rounded-lg border border-dashed border-gray-500">
              <h3 className="text-2xl font-semibold text-white mb-2">Coming Soon</h3>
              <p className="text-blue-400 mb-4">E-Commerce Platform</p>
              <p className="text-gray-300 mb-4">
                A full-featured e-commerce platform with product listings, shopping cart, user authentication, and payment integration.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-blue-900 text-blue-300 px-3 py-1 rounded-full text-sm">React</span>
                <span className="bg-blue-900 text-blue-300 px-3 py-1 rounded-full text-sm">Node.js</span>
                <span className="bg-blue-900 text-blue-300 px-3 py-1 rounded-full text-sm">Express</span>
                <span className="bg-blue-900 text-blue-300 px-3 py-1 rounded-full text-sm">MongoDB</span>
                <span className="bg-blue-900 text-blue-300 px-3 py-1 rounded-full text-sm">Stripe</span>
              </div>
              <div className="flex justify-center">
                <span className="text-gray-400">In Development</span>
              </div>
            </div>

            {/* Future Project 2 */}
            <div className="bg-gray-700 p-6 rounded-lg border border-dashed border-gray-500">
              <h3 className="text-2xl font-semibold text-white mb-2">Coming Soon</h3>
              <p className="text-blue-400 mb-4">DSA Visualizer</p>
              <p className="text-gray-300 mb-4">
                An interactive web application to visualize data structures and algorithms, helping students understand complex concepts.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-blue-900 text-blue-300 px-3 py-1 rounded-full text-sm">React</span>
                <span className="bg-blue-900 text-blue-300 px-3 py-1 rounded-full text-sm">JavaScript</span>
                <span className="bg-blue-900 text-blue-300 px-3 py-1 rounded-full text-sm">Canvas API</span>
                <span className="bg-blue-900 text-blue-300 px-3 py-1 rounded-full text-sm">Tailwind CSS</span>
              </div>
              <div className="flex justify-center">
                <span className="text-gray-400">In Planning</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-blue-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Interested in Collaborating?</h2>
          <p className="text-blue-100 mb-8">
            I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          <Link href="/contact" className="bg-white hover:bg-gray-100 text-blue-800 font-semibold py-3 px-8 rounded-lg transition-all">
            Let&apos;s Connect
          </Link>
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