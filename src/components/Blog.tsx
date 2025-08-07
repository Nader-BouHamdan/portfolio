'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const blogPosts = [
  {
    id: 1,
    title: 'Lebanese Tech Landscape',
    image: '/assets/Company.png',
    date: 'Aug. 30, 2024 - 8:27 p.m. (GMT+3)',
    excerpt: 'Exploring the growing technology sector in Lebanon and its potential for innovation.'
  },
  {
    id: 2,
    title: 'Beyond the Books',
    image: '/assets/ProfilePic.jpeg',
    date: 'July 5, 2024 - 3:48 p.m. (GMT+3)',
    excerpt: 'How practical experience complements academic learning in engineering.'
  },
  {
    id: 3,
    title: 'LinkedIn Networking',
    image: '/assets/MEE.png',
    date: 'June 15, 2024 - 2:15 p.m. (GMT+3)',
    excerpt: 'Effective strategies for building professional connections and advancing your career.'
  },
];

export default function Blog() {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Subscribing email:', email);
    setEmail('');
  };

  return (
    <div className="pt-16">
      {/* Blog Banner */}
      <section className="section-alt py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="heading-xl mb-4"
          >
            <span className="text-gradient">Blog</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-[var(--text)]"
          >
            364 Subscribers
          </motion.p>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="section-padding bg-[var(--card-bg)]">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-md mx-auto card p-8"
          >
            <h2 className="heading-lg mb-6 text-center text-gradient">
              Subscribe to Newsletter
            </h2>
            <form onSubmit={handleSubscribe} className="flex gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 bg-[var(--background)] border border-[var(--card-border)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent text-[var(--text)]"
                required
              />
              <button
                type="submit"
                className="btn-primary"
              >
                Subscribe
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="card overflow-hidden hover-lift"
              >
                <div className="h-48 bg-gradient-to-br from-[var(--primary-light)] to-[var(--primary)] flex items-center justify-center">
                  <div className="text-white text-center p-4">
                    <div className="text-4xl mb-2">📊</div>
                    <div className="text-sm opacity-90">{post.title}</div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[var(--text)] mb-3">
                    {post.title}
                  </h3>
                  <p className="text-[var(--text-light)] mb-4">
                    {post.excerpt}
                  </p>
                </div>
                <div className="bg-[var(--primary)] text-white px-6 py-3 text-sm">
                  {post.date}
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
} 