import { motion } from 'framer-motion';
import { processSteps } from '../data/siteContent';
import { useParallax } from '../hooks/useParallax';

const Process = () => {
  const offset = useParallax(0.06);

  return (
    <section className="section process" id="process">
      <div className="process-glow" style={{ transform: `translateY(${offset}px)` }} />
      <div className="container">
        <h2>Process</h2>
        <div className="timeline">
          {processSteps.map((step, idx) => (
            <motion.div
              key={step.id}
              className="timeline-item"
              initial={{ opacity: 0, x: idx % 2 ? 24 : -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4 }}
            >
              <span>{step.id}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
