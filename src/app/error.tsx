'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Application error:', error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--background)]">
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-6xl font-bold text-[var(--accent)] mb-4">500</h1>
          <h2 className="text-2xl font-semibold text-[var(--text)] mb-4">
            Something went wrong!
          </h2>
          <p className="text-[var(--text-light)] mb-8 max-w-md mx-auto">
            An unexpected error occurred. Please try refreshing the page or contact support if the problem persists.
          </p>
          <div className="flex gap-4 justify-center">
            <button
              onClick={reset}
              className="btn-primary hover-lift"
            >
              Try Again
            </button>
            <Link 
              href="/"
              className="px-6 py-3 rounded-lg border border-[var(--card-border)] hover:border-[var(--primary)] 
                       text-[var(--text)] hover:text-[var(--primary)] transition-all duration-200 
                       hover:shadow-md hover-lift"
            >
              Go Home
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
