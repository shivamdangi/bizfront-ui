import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { testimonials } from '../data/content';

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 4200);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="section container" aria-label="Testimonials">
      <div className="section__heading">
        <p className="eyebrow">TESTIMONIALS</p>
        <h2>Trusted by operators building ambitious products.</h2>
      </div>
      <div className="testimonial-slider" role="region" aria-live="polite">
        <AnimatePresence mode="wait">
          <motion.blockquote
            key={testimonials[index].name}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
            transition={{ duration: 0.4 }}
          >
            <p>“{testimonials[index].quote}”</p>
            <footer>
              <strong>{testimonials[index].name}</strong>
              <span>{testimonials[index].role}</span>
            </footer>
          </motion.blockquote>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Testimonials;
