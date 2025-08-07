'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bars3Icon, XMarkIcon, SunIcon, MoonIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { useTheme } from '@/context/ThemeContext';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
  { name: 'Blog', href: '/blog' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-[var(--card-bg)]/90 backdrop-blur-xl shadow-lg border-b border-[var(--card-border)]/50' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="text-2xl font-bold group">
              <span className="gradient-text-animate group-hover:scale-105 transition-transform duration-300">
                Nader
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  href={item.href}
                  className="relative text-[var(--text-light)] hover:text-[var(--primary)] transition-colors duration-300 font-medium group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </motion.div>
            ))}
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <button
                onClick={toggleTheme}
                className="theme-switch group"
                aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
              >
                <motion.div
                  animate={{ rotate: theme === 'light' ? 0 : 180 }}
                  transition={{ duration: 0.3 }}
                >
                  {theme === 'light' ? (
                    <MoonIcon className="h-5 w-5 text-[var(--text-light)] group-hover:text-[var(--primary)] transition-colors duration-300" />
                  ) : (
                    <SunIcon className="h-5 w-5 text-[var(--text-light)] group-hover:text-[var(--primary)] transition-colors duration-300" />
                  )}
                </motion.div>
              </button>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-4 lg:hidden">
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              onClick={toggleTheme}
              className="theme-switch group"
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            >
              <motion.div
                animate={{ rotate: theme === 'light' ? 0 : 180 }}
                transition={{ duration: 0.3 }}
              >
                {theme === 'light' ? (
                  <MoonIcon className="h-5 w-5 text-[var(--text-light)] group-hover:text-[var(--primary)] transition-colors duration-300" />
                ) : (
                  <SunIcon className="h-5 w-5 text-[var(--text-light)] group-hover:text-[var(--primary)] transition-colors duration-300" />
                )}
              </motion.div>
            </motion.button>
            
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="p-2 text-[var(--text-light)] hover:text-[var(--primary)] transition-colors duration-300 rounded-lg hover:bg-[var(--hover-bg)]"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <motion.div
                animate={{ rotate: isMobileMenuOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isMobileMenuOpen ? (
                  <XMarkIcon className="h-6 w-6" />
                ) : (
                  <Bars3Icon className="h-6 w-6" />
                )}
              </motion.div>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence mode="sync">
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden bg-[var(--card-bg)]/95 backdrop-blur-xl border-b border-[var(--card-border)]/50"
          >
            <motion.div 
              className="container mx-auto px-4 py-6 space-y-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
                >
                  <Link
                    href={item.href}
                    className="block text-[var(--text-light)] hover:text-[var(--primary)] transition-colors duration-300 font-medium py-2 border-b border-[var(--card-border)]/30 last:border-b-0"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
} 