'use client';

import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  github: string;
  demo: string;
}

const projects: Project[] = [
  {
    title: 'DermaDetect',
    description: 'Final Year Project: A machine learning-based system for early detection of skin conditions using MATLAB and OpenCV.',
    image: '/assets/Prototype.jpg',
    tags: ['MATLAB', 'OpenCV', 'Solidworks', 'Machine Learning'],
    github: 'https://github.com/Nader-BouHamdan/DermaDetect',
    demo: '#',
  },
  {
    title: 'Wine Capsule Dispenser',
    description: 'Mechanical system design for automated wine capsule dispensing, featuring precise control and user-friendly interface.',
    image: '/assets/MEE.png',
    tags: ['Solidworks', 'Mechanical Design', 'Simulation'],
    github: 'https://github.com/Nader-BouHamdan/WineDispenser',
    demo: '#',
  },
  {
    title: 'B.O.T.Y (Bartender Of The Year)',
    description: 'Best of the Year project: An automated bartending system that mixes drinks with precision using MATLAB and Arduino.',
    image: '/assets/bOTY.jpg',
    tags: ['MATLAB', 'Arduino', 'Solidworks', 'Fuzzy Logic'],
    github: 'https://github.com/Nader-BouHamdan/AutoBartender',
    demo: '#',
  },
  {
    title: 'Robotic Sorting Arm',
    description: 'Designed the robotic arm\'s hardware in SolidWorks and integrated Arduino and Raspberry Pi for seamless computer vision and hardware communication using OpenCV.',
    image: '/assets/roboticsorting.jpg',
    tags: ['Solidworks', 'Arduino', 'Raspberry Pi', 'OpenCV'],
    github: '#',
    demo: '#',
  },
  {
    title: 'Finance Management',
    description: 'Developed a financial trading and risk management website using Java and Angular, with secure user authentication and efficient data management via Spring Boot and MySQL.',
    image: '/assets/Company.png',
    tags: ['Java', 'Angular', 'Spring Boot', 'MySQL'],
    github: '#',
    demo: '#',
  },
  {
    title: 'Smart Grid',
    description: 'Developed an innovative electricity network employing logic units and electrical components for real-time monitoring and efficient electricity transport across multiple grids.',
    image: '/assets/logic.jpg',
    tags: ['Electrical Design', 'Logic Units', 'Power Systems'],
    github: '#',
    demo: '#',
  },
  {
    title: 'HR Management',
    description: 'Created a full-stack application using Java for backend and JavaFX frontend development, along with SQL for the database, streamlining HR processes and data management.',
    image: '/assets/logic.jpg',
    tags: ['Java', 'JavaFX', 'SQL', 'Full Stack'],
    github: '#',
    demo: '#',
  },
  {
    title: 'Robotic Exoskeleton',
    description: 'Enhanced leg support using engineered gears, studied material to be used for each component, and automated the design with LabVIEW through Arduino for improved mobility.',
    image: '/assets/roboticexo.jpg',
    tags: ['LabVIEW', 'Arduino', 'Mechanical Design', 'Automation'],
    github: '#',
    demo: '#',
  },
  {
    title: 'Industrial Robot Arm',
    description: 'Designed and analyzed an industrial robotic arm using SolidWorks, performing rigorous Factor of Safety simulations and motion analysis for enhanced mechanical performance.',
    image: '/assets/Industrial arm.png',
    tags: ['Solidworks', 'Simulation', 'Mechanical Design', 'Robotics'],
    github: '#',
    demo: '#',
  },
];

export default function Projects() {
  const [currentPage, setCurrentPage] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // List view: show all projects and remove carousel
  const currentProjects = projects;

  return (
    <section id="projects" className="section-padding">
      <div className="container mx-auto px-4">
        <div ref={ref} className="max-w-3xl mx-auto mb-12 text-left">
          <h2 className="heading-lg mb-4 text-gradient">My Projects</h2>
          <p className="text-[var(--text-light)] text-lg">
            A selection of my recent work and personal projects
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Projects Grid - list style */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentProjects.map((project, index) => (
                <div
                  key={index}
                  className="card h-full flex flex-col"
                >
                  {/* Project Image Container */}
                  <div className="project-image">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover"
                      onError={(e) => {
                        // Fallback to a placeholder if image fails to load
                        const target = e.target as HTMLImageElement;
                        target.src = '/assets/placeholder.svg';
                      }}
                    />
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--background-alt)]/60 to-transparent" />
                  </div>
          
                  {/* Project Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-semibold mb-3 text-[var(--text)]">
                      {project.title}
                    </h3>
                    <p className="text-[var(--text-light)] mb-4 flex-1 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 text-xs rounded-full bg-[var(--primary)]/10 text-[var(--primary)] font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex gap-4 mt-auto">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[var(--text-light)] hover:text-[var(--primary)] transition-colors duration-200 p-2 rounded-lg hover:bg-[var(--hover-bg)]"
                        aria-label={`View ${project.title} on GitHub`}
                      >
                        <FaGithub className="h-5 w-5" />
                      </a>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[var(--text-light)] hover:text-[var(--primary)] transition-colors duration-200 p-2 rounded-lg hover:bg-[var(--hover-bg)]"
                        aria-label={`View ${project.title} demo`}
                      >
                        <FaExternalLinkAlt className="h-5 w-5" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}

          </div>

        </div>
      </div>
    </section>
  );
} 