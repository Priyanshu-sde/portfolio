import { useState } from 'react';
import { motion } from 'framer-motion';

export default function ContactCLI() {
  const [form, setForm] = useState({ name: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Here you would integrate with Formspree or Resend
  };

  return (
    <section id="contact" className="py-20 px-4 bg-gray-900 text-white">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-green-400">Final Chapter: Connect With Me</h2>
        <motion.form
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          onSubmit={handleSubmit}
          className="bg-black/80 border border-green-900/80 rounded-lg p-8 shadow-lg flex flex-col gap-6 font-mono"
        >
          <div className="text-green-400 text-lg mb-2">{'>'} connect --name [your-name] --message "Hi Priyanshu, I loved your work!"</div>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
            className="bg-gray-800 border border-green-700 rounded px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            required
            className="bg-gray-800 border border-green-700 rounded px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-green-400 min-h-[100px]"
          />
          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded transition-colors"
            disabled={submitted}
          >
            {submitted ? 'Message Sent!' : 'Send'}
          </button>
        </motion.form>
        {/* Placeholder for future AI CLI assistant */}
      </div>
    </section>
  );
} 