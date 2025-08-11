'use client';

import { useInView } from 'react-intersection-observer';

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="section-padding section-alt" aria-labelledby="about-heading">
      <div className="container mx-auto px-4">
        <div ref={ref} className="max-w-3xl mx-auto text-left">
          <h2 id="about-heading" className="heading-lg mb-4 text-gradient">About</h2>
          <div className="card p-6">
            <p className="text-[var(--text-light)] leading-relaxed mb-4">
              I&apos;m Nader Bou Hamdan, a Mechatronics Engineer focused on robotics, automation, and software. I enjoy building
              intelligent systems end-to-end, from mechanical design and control to code.
            </p>
            <p className="text-[var(--text-light)] leading-relaxed">
              I&apos;m seeking an entry-level opportunity where I can contribute and grow. Let&apos;s talk.
            </p>
            <div className="pt-4">
              <a
                href="/assets/Nader Bou Hamdan Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
                aria-label="Download Nader's CV (opens in new tab)"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 