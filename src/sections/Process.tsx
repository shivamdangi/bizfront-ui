import { motion } from 'framer-motion';
import { processSteps } from '../data/content';
import { useParallax } from '../hooks/useParallax';

export const Process = () => {
  const offset = useParallax(0.08);

  return (
    <section className="section process" id="process">
      <div className="process-overlay" style={{ transform: `translateY(${offset}px)` }} />
      <div className="container">
        <h2>Structured process. Elegant outcomes.</h2>
        <ol className="timeline">
          {processSteps.map((step, index) => (
            <motion.li
              key={step}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              <span>{String(index + 1).padStart(2, '0')}</span>
              <p>{step}</p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
};
