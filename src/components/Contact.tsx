'use client';

import { useState } from 'react';
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
        <div ref={ref} className="max-w-4xl mx-auto mb-12 text-left">
          <h2 id="contact-heading" className="heading-lg mb-4 text-gradient">Get in Touch</h2>
          <p className="text-lg text-[var(--text-light)]">
            I&apos;m always open to discussing new projects, creative ideas or opportunities to be part of your visions.
          </p>
        </div>

        <div className="card p-6 max-w-3xl mx-auto">
          <h3 className="text-[var(--text)] font-semibold mb-4">Send a message</h3>

          {submitStatus === 'success' && (
            <div className="mb-3 p-3 bg-green-50 border border-green-200 rounded text-green-800" role="alert">
              <p>Thanks! I will get back to you soon.</p>
            </div>
          )}
          {submitStatus === 'error' && (
            <div className="mb-3 p-3 bg-red-50 border border-red-200 rounded text-red-800" role="alert">
              <p>Sorry, something went wrong. Please try again.</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-3" noValidate>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-[var(--card-border)] rounded bg-[var(--card-bg)] text-[var(--text)] placeholder-[var(--text-muted)] focus:border-[var(--primary)] focus:outline-none"
              placeholder="Your name"
              required
              aria-required="true"
              disabled={isSubmitting}
            />
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-[var(--card-border)] rounded bg-[var(--card-bg)] text-[var(--text)] placeholder-[var(--text-muted)] focus:border-[var(--primary)] focus:outline-none"
              placeholder="your.email@example.com"
              required
              aria-required="true"
              disabled={isSubmitting}
            />
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="md:col-span-2 w-full px-3 py-2 border border-[var(--card-border)] rounded bg-[var(--card-bg)] text-[var(--text)] placeholder-[var(--text-muted)] focus:border-[var(--primary)] focus:outline-none resize-none"
              placeholder="Your message"
              required
              aria-required="true"
              disabled={isSubmitting}
            />
            <button
              type="submit"
              className="btn-primary md:col-span-2 justify-center disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={isSubmitting}
              aria-label={isSubmitting ? "Sending message..." : "Send message"}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>

          <div className="mt-6 border-t pt-4">
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3">
                <EnvelopeIcon className="h-5 w-5 text-[var(--primary)]" />
                <a href="mailto:nader.bouhamdan@gmail.com" className="text-[var(--text-light)] hover:text-[var(--primary)]">nader.bouhamdan@gmail.com</a>
              </li>
              <li className="flex items-center gap-3">
                <PhoneIcon className="h-5 w-5 text-[var(--primary)]" />
                <a href="tel:+17473658464" className="text-[var(--text-light)] hover:text-[var(--primary)]">+1 (747) 365-8464</a>
              </li>
              <li className="flex items-center gap-3">
                <MapPinIcon className="h-5 w-5 text-[var(--primary)]" />
                <span className="text-[var(--text-light)]">San Francisco, CA, USA</span>
              </li>
              <li className="flex items-center gap-3">
                <LanguageIcon className="h-5 w-5 text-[var(--primary)]" />
                <span className="text-[var(--text-light)]">English, Arabic, French</span>
              </li>
              <li className="flex items-center gap-4">
                <UserIcon className="h-5 w-5 text-[var(--primary)]" />
                <div className="flex gap-3">
                  <a href="https://github.com/Nader-BouHamdan" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-[var(--text-light)] hover:text-[var(--primary)]"><FaGithub className="h-5 w-5" /></a>
                  <a href="https://linkedin.com/in/nader-bou-hamdan" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-[var(--text-light)] hover:text-[var(--primary)]"><FaLinkedin className="h-5 w-5" /></a>
                  <a href="https://instagram.com/nader.bouhamdan" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-[var(--text-light)] hover:text-[var(--primary)]"><FaInstagram className="h-5 w-5" /></a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
} 