import { FinalCta } from './sections/FinalCta';
import { Footer } from './sections/Footer';
import { Hero } from './sections/Hero';
import { Portfolio } from './sections/Portfolio';
import { Pricing } from './sections/Pricing';
import { Process } from './sections/Process';
import { Services } from './sections/Services';
import { Testimonials } from './sections/Testimonials';

const App = () => (
  <>
    <Hero />
    <Services />
    <Process />
    <Portfolio />
    <Pricing />
    <Testimonials />
    <FinalCta />
    <Footer />
  </>
);

export default App;
