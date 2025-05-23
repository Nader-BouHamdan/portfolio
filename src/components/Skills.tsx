'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const skills = [
  { name: 'Python', level: 90 },
  { name: 'C++', level: 60 },
  { name: 'Solidworks', level: 80 },
  { name: 'MATLAB', level: 80 },
  { name: 'Linux', level: 60 },
  { name: 'Angular', level: 70 },
];

const projects = [
  'DermaDetect, FYP (MATLAB, OpenCV, Solidworks)',
  'Wine Capsule Dispenser (Solidworks, Mechanical System Design)',
  'Automatic Bartender, B.O.T.Y (MATLAB, Solidworks, Arduino)',
  'Robotic Sorting Arm (Solidworks, OpenCV, Arduino, Raspberry pi)',
  'Finance Management System (JAVA, Spring Boot, Angular, SQL)',
  'Smart Grid (Logic Unit Design)',
  'HR Management System (JAVA, SQL)',
  'Robotic Exoskeleton (LabView, Arduino)',
  'Industrial Robot Arm (Solidworks / Simulation)',
];

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="skills" className="section-padding section-alt">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="heading-lg mb-4 text-gradient">Skills & Projects</h2>
          <p className="text-[var(--text-light)]">
            My technical expertise and notable projects
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Technical Skills */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-[var(--text)]">Technical Skills</h3>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-[var(--text)]">{skill.name}</span>
                      <span className="text-[var(--text-light)]">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-[var(--card-border)] rounded-full">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        className="h-full bg-[var(--primary)] rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-6 text-[var(--text)]">Development Skills</h3>
              <p className="text-[var(--text-light)]">
                I'm familiar & work on a daily basis with Python, Linux, and ROS2.
                My expertise spans across robotics, automation, and software development,
                with a focus on creating efficient and innovative solutions.
              </p>
            </div>
          </motion.div>

          {/* Projects */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-semibold mb-6 text-[var(--text)]">Notable Projects</h3>
            <ul className="space-y-4">
              {projects.map((project, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="flex items-start"
                >
                  <span className="text-[var(--primary)] mr-2">•</span>
                  <span className="text-[var(--text-light)]">
                    {project}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 