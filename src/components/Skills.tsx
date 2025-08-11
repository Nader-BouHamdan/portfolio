'use client';

import { useInView } from 'react-intersection-observer';

const skillKeywords: string[] = [
  'Kinematics',
  'Dynamics',
  'Control Theory',
  'Robotics',
  'Automation',
  'Computer Vision',
  'Optimization',
  'Reinforcement Learning',
  'C++',
  'Python',
  'MATLAB',
  'ROS',
  'RTOS',
  'DDS',
  'Embedded Systems',
  'SolidWorks',
  'LabVIEW',
  'Arduino',
  'Linux'
];

export default function Skills() {
  const [ref] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="skills" className="section-padding section-alt">
      <div className="container mx-auto px-4">
        <div ref={ref} className="max-w-4xl mx-auto mb-12 text-left">
          <h2 className="heading-lg mb-4 text-gradient">Skills</h2>
          <p className="text-lg text-[var(--text-light)]">Core areas I work in</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <ul className="flex flex-wrap gap-3">
            {skillKeywords.map((kw) => (
              <li
                key={kw}
                className="px-3 py-1 text-sm border border-[var(--card-border)] rounded-full text-[var(--text-light)]"
              >
                {kw}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}