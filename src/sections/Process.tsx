import { motion } from 'framer-motion';
import { processSteps } from '../data/content';
import { useParallax } from '../hooks/useParallax';

const Process = () => {
  const offset = useParallax(0.07);

  return (
    <section className="section section--process" id="process" aria-label="Process">
      <div className="container">
        <div className="section__heading">
          <p className="eyebrow">PROCESS</p>
          <h2>Structured execution with refined craftsmanship.</h2>
        </div>
        <div className="timeline" style={{ transform: `translateY(${-offset * 0.15}px)` }}>
          {processSteps.map((step, idx) => (
            <motion.div
              key={step.title}
              className="timeline__item"
              initial={{ opacity: 0, x: idx % 2 === 0 ? -24 : 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.4 }}
            >
              <span>{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
