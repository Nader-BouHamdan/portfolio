'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  BriefcaseIcon,
  AcademicCapIcon,
  CodeBracketIcon,
  BuildingOfficeIcon,
  ChartBarIcon,
  RocketLaunchIcon,
} from '@heroicons/react/24/outline';

const experiences = [
  {
    icon: BriefcaseIcon,
    title: 'Black Arrow',
    role: 'Engineering Intern',
    description: 'Developed and successfully closed a sale for an audiovisual ceremony and student attendance system for the top-ranked school in Qatar. Provided technical support for audiovisual setup and maintenance at multiple sites such as Qatar Energy.',
  },
  {
    icon: RocketLaunchIcon,
    title: 'Ascend Solutions',
    role: 'Research Intern',
    description: 'Conducted research on applying Large Language Models to medical topics, enhancing their ability to extract and analyze healthcare-related data. Fine-tuned Hugging Face models as part of research efforts to improve medical insights.',
  },
  {
    icon: AcademicCapIcon,
    title: 'Freelance',
    role: 'Robotics & Coding Tutor',
    description: 'Educated over 40 students, ages 9–15, in developing innovation and teamwork skills through Lego Robotics, Scratch, and JavaScript. Led a summer camp with 30 students in partnership with the top-ranked American university in Lebanon.',
  },
  {
    icon: CodeBracketIcon,
    title: 'ITP Media Group',
    role: 'Full Stack Web Developer',
    description: 'Collaborated on the creation of an employee task management portal, developing the frontend using Angular. Optimized the portal by improving backend performance through algorithm optimization using Node.js and Express.js.',
  },
  {
    icon: BuildingOfficeIcon,
    title: 'LAU Simulation Models',
    role: 'Logistics & Operations',
    description: 'Engaged in preparatory meetings and training sessions, contributing to the logistical organization of high school and middle school conferences and Model United Nations events to award a scholarship.',
  },
  {
    icon: ChartBarIcon,
    title: 'Re-Tech Services',
    role: 'Co-Founder',
    description: 'Promoted local hardware stores selling laptops, provided technical support and maintenance for clients, and meeting with tutoring companies and university students to offer our services.',
  },
];

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="experience" className="section-padding">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="heading-lg mb-4 text-gradient">Experience</h2>
          <p className="text-[var(--text-light)]">
            My professional journey and roles in various organizations
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card p-6 hover-lift"
            >
              <experience.icon className="h-12 w-12 text-[var(--primary)] mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-[var(--text)]">{experience.title}</h3>
              <h4 className="text-[var(--primary)] font-medium mb-4">{experience.role}</h4>
              <p className="text-[var(--text-light)]">
                {experience.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 