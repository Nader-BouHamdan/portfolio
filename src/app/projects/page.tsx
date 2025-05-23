import Projects from '@/components/Projects';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function ProjectsPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Projects />
      <Footer />
    </main>
  );
} 