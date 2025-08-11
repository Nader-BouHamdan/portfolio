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
        <div ref={ref} className="text-center max-w-4xl mx-auto mb-12">
          <h2 id="about-heading" className="heading-lg mb-4 text-gradient">About Me</h2>
          <p className="text-lg text-[var(--text-light)]">
            Get to know more about my background and what drives me
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* About Content */}
          <div className="space-y-8">
            <article className="card p-8">
              <h3 className="heading-sm mb-4 text-[var(--text)]">I&apos;m Nader Bou Hamdan</h3>
              <p className="text-lg text-[var(--text-light)] leading-relaxed">
                I have graduated with a Bachelor&apos;s Degree in Mechatronics Engineering, and I am seeking an entry-level opportunity 
                with an esteemed organization where I can utilize my skills & enhance learning in the field of work for Intelligent 
                Systems and Technologies.
              </p>
            </article>

            <article className="card p-8">
              <h3 className="heading-sm mb-4 text-[var(--text)]">Why Work With Me</h3>
              <p className="text-lg text-[var(--text-light)] leading-relaxed">
                I&apos;m a driven Mechatronics Engineer looking to leverage my technical skills and cooperative spirit to successfully 
                complete innovating projects. With expertise in robotics, automation, and software development, I bring a unique 
                perspective to every challenge.
              </p>
            </article>

            <div className="text-center pt-4">
              <a
                href="/assets/Nader Hamdan.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                aria-label="Download Nader's CV (opens in new tab)"
              >
                <span>Download CV</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 