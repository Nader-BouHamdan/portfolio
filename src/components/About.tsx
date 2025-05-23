'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="section-padding section-alt">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="heading-lg mb-4 text-gradient">About Me</h2>
          <p className="text-[var(--text-light)]">
            Get to know more about my background and what drives me
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-6 text-center"
          >
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-[var(--text)]">I&apos;m Nader Bou Hamdan</h3>
              <p className="text-[var(--text-light)] mb-6">
                I have graduated with a Bachelor&apos;s Degree in Mechatronics Engineering, and I am seeking an entry-level opportunity 
                with an esteemed organization where I can utilize my skills & enhance learning in the field of work for Intelligent 
                Systems and Technologies.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 text-[var(--text)]">Why Work With Me</h3>
              <p className="text-[var(--text-light)]">
                I&apos;m a driven Mechatronics Engineer looking to leverage my technical skills and cooperative spirit to successfully 
                complete innovating projects. With expertise in robotics, automation, and software development, I bring a unique 
                perspective to every challenge.
              </p>
            </div>

            <div className="pt-4">
              <a
                href="/assets/Nader Hamdan.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary hover-lift inline-block"
              >
                Download CV
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 