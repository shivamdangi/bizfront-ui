import { lazy } from 'react';
import Hero from './sections/Hero';
import Services from './sections/Services';
import Process from './sections/Process';
import Portfolio from './sections/Portfolio';
import Pricing from './sections/Pricing';
import Testimonials from './sections/Testimonials';
import FinalCta from './sections/FinalCta';
import Footer from './sections/Footer';

const Logo3D = lazy(() => import('./components/three/LogoScene'));

const App = () => (
  <div className="site-shell" id="hero">
    <Hero Logo3D={Logo3D} />
    <Services />
    <Process />
    <Portfolio />
    <Pricing />
    <Testimonials />
    <FinalCta />
    <Footer />
  </div>
);

export default App;
