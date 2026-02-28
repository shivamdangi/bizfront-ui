import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { testimonials } from '../data/siteContent';

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((p) => (p + 1) % testimonials.length);
    }, 3500);
    return () => window.clearInterval(id);
  }, []);

  const testimonial = testimonials[index];

  return (
    <section className="section" id="testimonials">
      <div className="container testimonial-shell">
        <h2>What clients say</h2>
        <AnimatePresence mode="wait">
          <motion.blockquote
            key={testimonial.author}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35 }}
          >
            “{testimonial.quote}”
            <footer>
              <strong>{testimonial.author}</strong>
              <span>{testimonial.role}</span>
            </footer>
          </motion.blockquote>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Testimonials;
