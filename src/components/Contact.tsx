'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  LanguageIcon,
  UserIcon,
} from '@heroicons/react/24/outline';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="section-padding section-alt">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="heading-lg mb-4 text-gradient">Get in Touch</h2>
          <p className="text-[var(--text-light)]">
            I&apos;m always open to discussing new projects, creative ideas or opportunities to be part of your visions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="flex items-start gap-4">
              <EnvelopeIcon className="h-6 w-6 text-[var(--primary)] mt-1" />
              <div>
                <h3 className="font-semibold mb-1 text-[var(--text)]">Email</h3>
                <p className="text-[var(--text-light)]">
                  <a href="mailto:nader.bouhamdan@gmail.com" className="hover:text-[var(--primary)] transition-colors duration-200">
                    nader.bouhamdan@gmail.com
                  </a>
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <PhoneIcon className="h-6 w-6 text-[var(--primary)] mt-1" />
              <div>
                <h3 className="font-semibold mb-1 text-[var(--text)]">Phone</h3>
                <p className="text-[var(--text-light)]">
                  +1 (747) 365-8464
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <MapPinIcon className="h-6 w-6 text-[var(--primary)] mt-1" />
              <div>
                <h3 className="font-semibold mb-1 text-[var(--text)]">Location</h3>
                <p className="text-[var(--text-light)]">
                  San Francisco, CA, USA
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <LanguageIcon className="h-6 w-6 text-[var(--primary)] mt-1" />
              <div>
                <h3 className="font-semibold mb-1 text-[var(--text)]">Languages</h3>
                <p className="text-[var(--text-light)]">
                  English, Arabic, French
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <UserIcon className="h-6 w-6 text-[var(--primary)] mt-1" />
              <div>
                <h3 className="font-semibold mb-1 text-[var(--text)]">Social</h3>
                <div className="flex gap-4 mt-2">
                  <a
                    href="https://github.com/Nader-BouHamdan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--text-light)] hover:text-[var(--primary)] transition-colors duration-200"
                  >
                    <FaGithub className="h-6 w-6" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/naderbouhamdan/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--text-light)] hover:text-[var(--primary)] transition-colors duration-200"
                  >
                    <FaLinkedin className="h-6 w-6" />
                  </a>
                  <a
                    href="https://www.instagram.com/naderbh_/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--text-light)] hover:text-[var(--primary)] transition-colors duration-200"
                  >
                    <FaInstagram className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            action="https://formspree.io/f/xldgqppj"
            method="POST"
            onSubmit={(e) => {
              e.preventDefault();
              const form = e.target as HTMLFormElement;
              fetch(form.action, {
                method: 'POST',
                body: new FormData(form),
                headers: {
                  'Accept': 'application/json'
                }
              })
              .then(() => {
                form.reset();
                alert('Message sent successfully!');
              })
              .catch((error) => {
                console.error('Error:', error);
                alert('There was a problem sending your message. Please try again.');
              });
            }}
            className="space-y-6"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-[var(--text)] mb-1"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-lg border border-[var(--card-border)] 
                         focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent 
                         bg-[var(--card-bg)] text-[var(--text)]"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-[var(--text)] mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-lg border border-[var(--card-border)] 
                         focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent 
                         bg-[var(--card-bg)] text-[var(--text)]"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-[var(--text)] mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-4 py-2 rounded-lg border border-[var(--card-border)] 
                         focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent 
                         bg-[var(--card-bg)] text-[var(--text)]"
              />
            </div>

            <button
              type="submit"
              className={`btn-primary w-full hover-lift`}
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
} 