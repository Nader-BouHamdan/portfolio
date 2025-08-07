import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--background)]">
      <div className="text-center">
        <div className="animate-fade-in">
          <h1 className="text-6xl font-bold text-[var(--primary)] mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-[var(--text)] mb-4">
            Page Not Found
          </h2>
          <p className="text-[var(--text-light)] mb-8 max-w-md mx-auto">
            The page you&apos;re looking for doesn&apos;t exist. It might have been moved, deleted, or you entered the wrong URL.
          </p>
          <Link 
            href="/"
            className="btn-primary hover-lift"
          >
            Go Back Home
          </Link>
        </div>
      </div>
    </div>
  );
}
