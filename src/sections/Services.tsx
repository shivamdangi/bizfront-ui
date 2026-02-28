import { motion } from 'framer-motion';
import { services } from '../data/content';

const Services = () => (
  <section className="section container" id="services" aria-label="Services">
    <div className="section__heading">
      <p className="eyebrow">SERVICES</p>
      <h2>High-impact frontend capabilities designed for growth.</h2>
    </div>
    <div className="services-grid">
      {services.map((service, idx) => (
        <motion.article
          key={service.title}
          className="service-card"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4, delay: idx * 0.07 }}
          tabIndex={0}
        >
          <span className="service-card__icon" aria-hidden>{service.icon}</span>
          <h3>{service.title}</h3>
          <p>{service.description}</p>
        </motion.article>
      ))}
    </div>
  </section>
);

export default Services;
