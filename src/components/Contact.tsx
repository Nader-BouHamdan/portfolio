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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  
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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simulate form submission - replace with actual API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Here you would typically send the data to your backend
      console.log('Form submitted:', formData);
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding section-alt" aria-labelledby="contact-heading">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-4xl mx-auto mb-12"
        >
          <h2 id="contact-heading" className="heading-lg mb-4 text-gradient">Get in Touch</h2>
          <p className="text-lg text-[var(--text-light)]">
            I&apos;m always open to discussing new projects, creative ideas or opportunities to be part of your visions.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="card p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-xl bg-[var(--primary)]/10 border border-[var(--primary)]/20" aria-hidden="true">
                  <EnvelopeIcon className="h-6 w-6 text-[var(--primary)]" />
                </div>
                <div>
                  <h3 className="font-semibold text-[var(--text)]">Email</h3>
                  <p className="text-[var(--text-light)]">
                    <a href="mailto:nader.bouhamdan@gmail.com" className="hover:text-[var(--primary)] transition-colors duration-200" aria-label="Send email to nader.bouhamdan@gmail.com">
                      nader.bouhamdan@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="card p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-xl bg-[var(--primary)]/10 border border-[var(--primary)]/20" aria-hidden="true">
                  <PhoneIcon className="h-6 w-6 text-[var(--primary)]" />
                </div>
                <div>
                  <h3 className="font-semibold text-[var(--text)]">Phone</h3>
                  <p className="text-[var(--text-light)]">
                    <a href="tel:+17473658464" className="hover:text-[var(--primary)] transition-colors duration-200" aria-label="Call +1 (747) 365-8464">
                      +1 (747) 365-8464
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="card p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-xl bg-[var(--primary)]/10 border border-[var(--primary)]/20" aria-hidden="true">
                  <MapPinIcon className="h-6 w-6 text-[var(--primary)]" />
                </div>
                <div>
                  <h3 className="font-semibold text-[var(--text)]">Location</h3>
                  <p className="text-[var(--text-light)]">
                    San Francisco, CA, USA
                  </p>
                </div>
              </div>
            </div>

            <div className="card p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-xl bg-[var(--primary)]/10 border border-[var(--primary)]/20" aria-hidden="true">
                  <LanguageIcon className="h-6 w-6 text-[var(--primary)]" />
                </div>
                <div>
                  <h3 className="font-semibold text-[var(--text)]">Languages</h3>
                  <p className="text-[var(--text-light)]">
                    English, Arabic, French
                  </p>
                </div>
              </div>
            </div>

            <div className="card p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-xl bg-[var(--primary)]/10 border border-[var(--primary)]/20" aria-hidden="true">
                  <UserIcon className="h-6 w-6 text-[var(--primary)]" />
                </div>
                <div>
                  <h3 className="font-semibold text-[var(--text)]">Social Media</h3>
                  <div className="flex gap-4 mt-2">
                    <a
                      href="https://github.com/Nader-BouHamdan"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[var(--text-light)] hover:text-[var(--primary)] transition-colors duration-200 p-2 rounded-lg hover:bg-[var(--hover-bg)]"
                      aria-label="Visit GitHub profile"
                    >
                      <FaGithub className="h-5 w-5" />
                    </a>
                    <a
                      href="https://linkedin.com/in/nader-bou-hamdan"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[var(--text-light)] hover:text-[var(--primary)] transition-colors duration-200 p-2 rounded-lg hover:bg-[var(--hover-bg)]"
                      aria-label="Visit LinkedIn profile"
                    >
                      <FaLinkedin className="h-5 w-5" />
                    </a>
                    <a
                      href="https://instagram.com/nader.bouhamdan"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[var(--text-light)] hover:text-[var(--primary)] transition-colors duration-200 p-2 rounded-lg hover:bg-[var(--hover-bg)]"
                      aria-label="Visit Instagram profile"
                    >
                      <FaInstagram className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="card p-8"
          >
            <h3 className="heading-sm mb-6 text-[var(--text)]">Send me a message</h3>
            
            {/* Form Status Messages */}
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-800" role="alert">
                <p>Thank you! Your message has been sent successfully. I&apos;ll get back to you soon.</p>
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-800" role="alert">
                <p>Sorry, there was an error sending your message. Please try again.</p>
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[var(--text)] mb-2">
                  Name <span className="text-red-500" aria-label="required">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-[var(--card-border)] rounded-lg bg-[var(--card-bg)] text-[var(--text)] placeholder-[var(--text-muted)] transition-colors duration-200 focus:border-[var(--primary)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/20"
                  placeholder="Your name"
                  required
                  aria-required="true"
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[var(--text)] mb-2">
                  Email <span className="text-red-500" aria-label="required">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-[var(--card-border)] rounded-lg bg-[var(--card-bg)] text-[var(--text)] placeholder-[var(--text-muted)] transition-colors duration-200 focus:border-[var(--primary)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/20"
                  placeholder="your.email@example.com"
                  required
                  aria-required="true"
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[var(--text)] mb-2">
                  Message <span className="text-red-500" aria-label="required">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 border border-[var(--card-border)] rounded-lg bg-[var(--card-bg)] text-[var(--text)] placeholder-[var(--text-muted)] transition-colors duration-200 focus:border-[var(--primary)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/20 resize-none"
                  placeholder="Your message..."
                  required
                  aria-required="true"
                  disabled={isSubmitting}
                />
              </div>

              <button
                type="submit"
                className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={isSubmitting}
                aria-label={isSubmitting ? "Sending message..." : "Send message"}
              >
                {isSubmitting ? (
                  <>
                    <span>Sending...</span>
                    <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 