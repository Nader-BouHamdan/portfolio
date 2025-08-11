import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 lg:pt-24 overflow-hidden" aria-labelledby="hero-heading">
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--background)] via-[var(--background-alt)] to-[var(--background)]" aria-hidden="true" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-left">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-[var(--primary)]/10 to-[var(--secondary)]/10  text-[var(--primary)] rounded-full text-sm font-medium border border-[var(--primary)]/20">
                Mechatronics Engineer
              </span>
            </div>

            <h1 id="hero-heading" className="heading-xl mb-6">
              <span className="text-[var(--text)]">Hello, I&apos;m Nader</span>
              <br />
              <span className="text-[var(--text)]">Bou Hamdan</span>
            </h1>

            <p className="text-lg text-[var(--text-light)] mb-8 max-w-lg leading-relaxed">
              A passionate Mechatronics Engineer building intelligent systems and cutting-edge technologies. 
              Specializing in robotics, automation, and software development.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
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
              <a 
                href="#contact" 
                className="btn-secondary"
                aria-label="Go to contact section"
              >
                <span>Get In Touch</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right content - Hero image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md lg:max-w-lg">
              <div className="hero-image">
                <Image
                  src="/assets/ProfilePic.jpeg"
                  alt="Nader Bou Hamdan - Mechatronics Engineer"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 400px"
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)]/20 via-transparent to-transparent" aria-hidden="true" />
              </div>
            </div>
          </div>
        </div>

        
      </div>
      
    </section>
  );
} 