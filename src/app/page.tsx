import Navbar from '@/components/sections/Navbar';
import Hero from '@/components/sections/Hero';
import LazyHomepageSections from '@/components/sections/LazyHomepageSections';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-brand selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <LazyHomepageSections />
      </main>
    </div>
  );
}
