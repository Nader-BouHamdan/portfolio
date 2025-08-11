'use client';

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
        <div ref={ref} className="max-w-4xl mx-auto mb-12 text-left">
          <h2 className="heading-lg mb-4 text-gradient">Experience</h2>
          <p className="text-lg text-[var(--text-light)]">
            My professional journey and roles in various organizations
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {experiences.map((experience, index) => (
            <div
              key={index}
              className="card p-6 h-full flex flex-col"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-xl bg-[var(--primary)]/10 border border-[var(--primary)]/20">
                  <experience.icon className="h-6 w-6 text-[var(--primary)]" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[var(--text)]">{experience.title}</h3>
                  <h4 className="text-sm text-[var(--primary)] font-medium">{experience.role}</h4>
                </div>
              </div>
              <p className="text-[var(--text-light)] leading-relaxed flex-1">
                {experience.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 