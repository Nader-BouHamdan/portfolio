'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 section-alt">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--background)] via-[var(--card-bg)] to-[var(--background)] -z-10" />

      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center md:text-left"
          >
            <h1 className="heading-xl mb-6">
              <span className="text-gradient">Hello, I&apos;m Nader Bou Hamdan</span>
            </h1>
            <p className="text-lg text-[var(--text)] mb-8 max-w-lg mx-auto md:mx-0">
              A Mechatronics Engineer passionate about building intelligent systems and technologies.
              Seeking opportunities to leverage my skills in robotics, automation, and software development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a 
                href="/assets/Nader Hamdan.pdf" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-primary hover-lift"
              >
                Download CV
              </a>
              <a 
                href="#contact" 
                className="px-6 py-3 rounded-lg border border-[var(--card-border)] hover:border-[var(--primary)] 
                         text-[var(--text)] hover:text-[var(--primary)] transition-all duration-200 
                         hover:shadow-md hover-lift"
              >
                Contact Me
              </a>
            </div>
          </motion.div>

          {/* Right content - Hero image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative h-[400px] md:h-[500px] hover-lift"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary-light)]/10 to-[var(--primary)]/10 rounded-2xl transform rotate-3" />
            <Image
              src="/assets/ProfilePic.jpeg"
              alt="Nader Bou Hamdan"
              fill
              className="object-contain rounded-2xl shadow-lg"
              priority
            />
          </motion.div>
        </div>

        {/* Stats section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16"
        >
          {[
            // { number: '6+', label: 'Years Experience' },
            { number: '10+', label: 'Projects' },
            { number: '40+', label: 'Students Taught' },
            // { number: '3+', label: 'Programming Languages' },
          ].map((stat, index) => (
            <motion.div 
              key={index} 
              className="card p-6 text-center hover-lift"
              whileHover={{ scale: 1.02 }}
            >
              <div className="text-3xl font-bold text-gradient mb-2">
                {stat.number}
              </div>
              <div className="text-[var(--text)]">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 