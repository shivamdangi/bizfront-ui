import { lazy, Suspense } from 'react';
import Footer from './sections/Footer';
import Hero from './sections/Hero';
import Process from './sections/Process';
import Pricing from './sections/Pricing';
import Services from './sections/Services';
import Testimonials from './sections/Testimonials';

const Portfolio = lazy(() => import('./sections/Portfolio'));
const FinalCta = lazy(() => import('./sections/FinalCta'));

const App = () => {
  return (
    <>
      <a href="#home" className="skip-link">
        Skip to content
      </a>
      <header className="top-nav">
        <div className="container nav-inner">
          <span className="brand">LeanFront</span>
          <nav aria-label="Primary navigation">
            <a href="#services">Services</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#pricing">Pricing</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>
      <main>
        <Hero />
        <Services />
        <Process />
        <Suspense fallback={<div className="container">Loading showcase…</div>}>
          <Portfolio />
          <Pricing />
          <Testimonials />
          <FinalCta />
        </Suspense>
      </main>
      <Footer />
    </>
  );
};

export default App;
