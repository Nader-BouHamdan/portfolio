'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-20 lg:pt-24 overflow-hidden" aria-labelledby="hero-heading">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--background)] via-[var(--background-alt)] to-[var(--background)]" aria-hidden="true" />
      
      {/* Subtle floating elements */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <motion.div
          className="absolute top-20 left-10 w-16 h-16 bg-gradient-to-br from-[var(--primary)]/10 to-[var(--secondary)]/10 rounded-full blur-xl"
          animate={{
            x: [0, 20, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-[var(--secondary)]/10 to-[var(--accent)]/10 rounded-full blur-xl"
          animate={{
            x: [0, -30, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>

      {/* Mouse-following gradient */}
      <motion.div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          background: `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, var(--primary-light) 0%, transparent 50%)`
        }}
        aria-hidden="true"
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-6"
            >
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-[var(--primary)]/10 to-[var(--secondary)]/10 
                              text-[var(--primary)] rounded-full text-sm font-medium border border-[var(--primary)]/20">
                Mechatronics Engineer
              </span>
            </motion.div>

            <motion.h1
              id="hero-heading"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="heading-xl mb-6"
            >
              <span className="gradient-text-animate">Hello, I&apos;m Nader</span>
              <br />
              <span className="text-[var(--text)]">Bou Hamdan</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-lg text-[var(--text-light)] mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed"
            >
              A passionate Mechatronics Engineer building intelligent systems and cutting-edge technologies. 
              Specializing in robotics, automation, and software development.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <a 
                href="/assets/Nader Hamdan.pdf" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-primary"
                aria-label="Download Nader's CV (opens in new tab)"
              >
                <span>Download CV</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </a>
              <a 
                href="#contact" 
                className="btn-secondary"
                aria-label="Go to contact section"
              >
                <span>Get In Touch</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </a>
            </motion.div>
          </motion.div>

          {/* Right content - Hero image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="relative flex justify-center lg:justify-end"
          >
            {/* Image container with proper constraints */}
            <div className="relative w-full max-w-md lg:max-w-lg">
              {/* Background decoration */}
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/15 via-[var(--secondary)]/15 to-[var(--accent)]/15 rounded-3xl transform rotate-3 blur-xl" aria-hidden="true" />
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/10 via-[var(--secondary)]/10 to-[var(--accent)]/10 rounded-3xl transform -rotate-2 blur-lg" aria-hidden="true" />
              
              {/* Main image container */}
              <div className="hero-image">
                <Image
                  src="/assets/ProfilePic.jpeg"
                  alt="Nader Bou Hamdan - Mechatronics Engineer"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 400px"
                  className="object-cover"
                  priority
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)]/20 via-transparent to-transparent" aria-hidden="true" />
              </div>

              {/* Floating tech icons */}
              <motion.div
                className="absolute -top-4 -right-4 w-14 h-14 bg-[var(--card-bg)] rounded-2xl shadow-lg border border-[var(--card-border)] flex items-center justify-center"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                aria-hidden="true"
              >
                <svg className="w-7 h-7 text-[var(--primary)]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -left-4 w-12 h-12 bg-[var(--card-bg)] rounded-xl shadow-lg border border-[var(--card-border)] flex items-center justify-center"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                aria-hidden="true"
              >
                <svg className="w-6 h-6 text-[var(--secondary)]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Stats section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
          role="region"
          aria-label="Professional statistics"
        >
          {[
            { number: '10+', label: 'Projects Completed', icon: '🚀' },
            { number: '40+', label: 'Students Taught', icon: '👨‍🏫' },
            { number: '5+', label: 'Years Experience', icon: '⚡' },
            { number: '100%', label: 'Client Satisfaction', icon: '⭐' },
          ].map((stat, index) => (
            <motion.div 
              key={index} 
              className="glass-card p-6 text-center hover-lift"
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
            >
              <div className="text-2xl mb-2" aria-hidden="true">
                {stat.icon}
              </div>
              <div className="text-2xl font-bold text-gradient-primary mb-2">
                {stat.number}
              </div>
              <div className="text-[var(--text-light)] text-sm font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        aria-hidden="true"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-[var(--text-light)] rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-3 bg-[var(--primary)] rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
} 