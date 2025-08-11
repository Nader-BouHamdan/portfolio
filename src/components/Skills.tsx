'use client';

import { useInView } from 'react-intersection-observer';

const skills = [
  { name: 'Python', level: 90, icon: '🐍' },
  { name: 'C++', level: 60, icon: '⚡' },
  { name: 'Solidworks', level: 80, icon: '🔧' },
  { name: 'MATLAB', level: 80, icon: '📊' },
  { name: 'Linux', level: 60, icon: '🐧' },
  { name: 'Angular', level: 70, icon: '🅰️' },
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
        <div ref={ref} className="text-center max-w-4xl mx-auto mb-12">
          <h2 className="heading-lg mb-4 text-gradient">Skills & Projects</h2>
          <p className="text-lg text-[var(--text-light)]">
            My technical expertise and notable projects
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {/* Technical Skills */}
          <div className="space-y-6">
            <div className="card p-8">
              <h3 className="heading-sm mb-6 text-[var(--text)]">Technical Skills</h3>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <span className="text-lg">{skill.icon}</span>
                        <span className="font-medium text-[var(--text)]">{skill.name}</span>
                      </div>
                      <span className="text-[var(--text-light)] font-medium">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-3 bg-[var(--card-border)] rounded-full overflow-hidden">
                      <div
                        style={{ width: `${skill.level}%` }}
                        className="h-full bg-gradient-to-r from-[var(--primary)] to-[var(--primary-light)] rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="card p-8">
              <h3 className="heading-sm mb-4 text-[var(--text)]">Development Skills</h3>
              <p className="text-[var(--text-light)] leading-relaxed">
                I&apos;ve worked on various projects that showcase my technical abilities and problem-solving skills. 
                My expertise spans from mechanical design and robotics to software development and system integration.
              </p>
            </div>
          </div>

          {/* Projects */}
          <div className="space-y-6">
            <div className="card p-8">
              <h3 className="heading-sm mb-6 text-[var(--text)]">Notable Projects</h3>
              <ul className="space-y-4">
                {projects.map((project, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 p-3 rounded-lg"
                  >
                    <span className="text-[var(--primary)] font-bold text-lg">•</span>
                    <span className="text-[var(--text-light)] leading-relaxed">
                      {project}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 