import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { testimonials } from '../data/content';

export const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="section" id="testimonials">
      <div className="container testimonial-shell">
        <h2>Trusted by operators who value quality and speed.</h2>
        <div className="testimonial-track">
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={testimonials[activeIndex].author}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -18 }}
              transition={{ duration: 0.4 }}
            >
              “{testimonials[activeIndex].quote}”
              <footer>{testimonials[activeIndex].author}</footer>
            </motion.blockquote>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
