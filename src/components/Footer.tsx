'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  FaInstagram,
  FaLinkedin,
  FaGithub,
} from 'react-icons/fa';

const footerLinks = {
  navigation: [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ],
  resources: [
    { name: 'Resume', href: '/assets/Nader Hamdan.pdf' },
    { name: 'GitHub', href: 'https://github.com/Nader-BouHamdan' },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/naderbouhamdan/' },
  ],
};

const socialLinks = [
  { name: 'GitHub', icon: FaGithub, href: 'https://github.com/Nader-BouHamdan' },
  { name: 'LinkedIn', icon: FaLinkedin, href: 'https://www.linkedin.com/in/naderbouhamdan/' },
  { name: 'Instagram', icon: FaInstagram, href: 'https://www.instagram.com/naderbh_/' },
];

export default function Footer() {
  return (
    <footer className="bg-[var(--background-alt)] text-[var(--text-light)] border-t border-[var(--card-border)]">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-1">
            <Link href="/" className="text-2xl font-bold mb-4 block">
              <span className="text-gradient">Nader Bou Hamdan</span>
            </Link>
            <p className="text-[var(--text-light)] mb-6">
              Mechatronics Engineer passionate about building intelligent systems and technologies.
            </p>
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--text-light)] hover:text-[var(--primary)] transition-colors duration-200"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="h-6 w-6" />
                  <span className="sr-only">{social.name}</span>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-[var(--text)] font-semibold mb-4 capitalize">
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-[var(--text-light)] hover:text-[var(--primary)] transition-colors duration-200"
                      target={link.href.startsWith('http') ? '_blank' : undefined}
                      rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[var(--card-border)] mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-[var(--text-light)] text-sm">
              © {new Date().getFullYear()} Nader Bou Hamdan. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link
                href="#"
                className="text-[var(--text-light)] hover:text-[var(--primary)] text-sm transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-[var(--text-light)] hover:text-[var(--primary)] text-sm transition-colors duration-200"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 