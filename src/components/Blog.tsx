'use client';

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
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [subscribeStatus, setSubscribeStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubscribe = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubscribing(true);
    setSubscribeStatus('idle');

    try {
      // Simulate newsletter subscription - replace with actual API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      console.log('Subscribing email:', email);
      setSubscribeStatus('success');
      setEmail('');
    } catch (error) {
      console.error('Subscription error:', error);
      setSubscribeStatus('error');
    } finally {
      setIsSubscribing(false);
    }
  };

  return (
    <div className="pt-16">
      {/* Blog Banner */}
      <section className="section-alt py-20" aria-labelledby="blog-heading">
        <div className="container mx-auto px-4 text-center">
          <h1 
            id="blog-heading"
            className="heading-xl mb-4"
          >
            <span className="text-[var(--text)]">Blog</span>
          </h1>
          <p 
            className="text-lg text-[var(--text)]"
          >
            364 Subscribers
          </p>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="section-padding bg-[var(--card-bg)]" aria-labelledby="newsletter-heading">
        <div className="container mx-auto px-4">
          <div 
            className="max-w-md mx-auto card p-8"
          >
            <h2 id="newsletter-heading" className="heading-lg mb-6 text-center text-gradient">
              Subscribe to Newsletter
            </h2>
            
            {/* Subscription Status Messages */}
            {subscribeStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-800" role="alert">
                <p>Thank you for subscribing! You&apos;ll receive updates about new blog posts.</p>
              </div>
            )}
            
            {subscribeStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-800" role="alert">
                <p>Sorry, there was an error subscribing. Please try again.</p>
              </div>
            )}
            
            <form onSubmit={handleSubscribe} className="flex gap-3" noValidate>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 bg-[var(--background)] border border-[var(--card-border)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent text-[var(--text)] disabled:opacity-50"
                required
                aria-required="true"
                disabled={isSubscribing}
                aria-label="Email address for newsletter subscription"
              />
              <button
                type="submit"
                className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={isSubscribing}
                aria-label={isSubscribing ? "Subscribing..." : "Subscribe to newsletter"}
              >
                {isSubscribing ? (
                  <>
                    <span>Subscribing...</span>
                    <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                  </>
                ) : (
                  "Subscribe"
                )}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="section-padding" aria-labelledby="blog-posts-heading">
        <div className="container mx-auto px-4">
          <div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <h2 id="blog-posts-heading" className="sr-only">Blog Posts</h2>
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="card overflow-hidden"
              >
                <div className="h-48 bg-gradient-to-br from-[var(--primary-light)] to-[var(--primary)] flex items-center justify-center" aria-hidden="true">
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
                  <time dateTime="2024-08-30T20:27:00+03:00">{post.date}</time>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
} 