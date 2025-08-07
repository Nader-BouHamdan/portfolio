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
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--background)] via-[var(--background-alt)] to-[var(--background)]" />
      
      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-[var(--primary)]/20 to-[var(--secondary)]/20 rounded-full blur-xl"
          animate={{
            x: [0, 30, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-40 right-20 w-32 h-32 bg-gradient-to-br from-[var(--secondary)]/20 to-[var(--accent)]/20 rounded-full blur-xl"
          animate={{
            x: [0, -40, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        <motion.div
          className="absolute bottom-40 left-1/4 w-16 h-16 bg-gradient-to-br from-[var(--accent)]/20 to-[var(--primary)]/20 rounded-full blur-xl"
          animate={{
            x: [0, 20, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
        />
      </div>

      {/* Mouse-following gradient */}
      <motion.div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, var(--primary-light) 0%, transparent 50%)`
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-6"
            >
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-[var(--primary)]/10 to-[var(--secondary)]/10 
                              text-[var(--primary)] rounded-full text-sm font-medium border border-[var(--primary)]/20">
                Mechatronics Engineer
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="heading-xl mb-6"
            >
              <span className="gradient-text-animate">Hello, I'm Nader</span>
              <br />
              <span className="text-[var(--text)]">Bou Hamdan</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-xl text-[var(--text-light)] mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed"
            >
              A passionate Mechatronics Engineer building intelligent systems and cutting-edge technologies. 
              Specializing in robotics, automation, and software development.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <a 
                href="/assets/Nader Hamdan.pdf" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-primary group"
              >
                <span className="flex items-center gap-2">
                  Download CV
                  <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </span>
              </a>
              <a 
                href="#contact" 
                className="btn-secondary group"
              >
                <span className="flex items-center gap-2">
                  Get In Touch
                  <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </span>
              </a>
            </motion.div>
          </motion.div>

          {/* Right content - Hero image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            className="relative h-[500px] lg:h-[600px] w-full max-w-lg mx-auto"
          >
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/20 via-[var(--secondary)]/20 to-[var(--accent)]/20 rounded-3xl transform rotate-6 blur-xl" />
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/10 via-[var(--secondary)]/10 to-[var(--accent)]/10 rounded-3xl transform -rotate-3 blur-lg" />
            
            {/* Main image container */}
            <div className="relative h-full w-full rounded-3xl overflow-hidden shadow-2xl border border-[var(--card-border)]/50">
              <Image
                src="/assets/ProfilePic.jpeg"
                alt="Nader Bou Hamdan"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover rounded-3xl"
                priority
              />
              
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)]/20 via-transparent to-transparent" />
            </div>

            {/* Floating tech icons */}
            <motion.div
              className="absolute -top-4 -right-4 w-16 h-16 bg-[var(--card-bg)] rounded-2xl shadow-lg border border-[var(--card-border)] flex items-center justify-center"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <svg className="w-8 h-8 text-[var(--primary)]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
              </svg>
            </motion.div>

            <motion.div
              className="absolute -bottom-4 -left-4 w-12 h-12 bg-[var(--card-bg)] rounded-xl shadow-lg border border-[var(--card-border)] flex items-center justify-center"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            >
              <svg className="w-6 h-6 text-[var(--secondary)]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20"
        >
          {[
            { number: '10+', label: 'Projects Completed', icon: '🚀' },
            { number: '40+', label: 'Students Taught', icon: '👨‍🏫' },
            { number: '5+', label: 'Years Experience', icon: '⚡' },
            { number: '100%', label: 'Client Satisfaction', icon: '⭐' },
          ].map((stat, index) => (
            <motion.div 
              key={index} 
              className="glass-card p-6 text-center hover-lift group"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
            >
              <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-gradient-primary mb-2">
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
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
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