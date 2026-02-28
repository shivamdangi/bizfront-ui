import { motion } from 'framer-motion';
import { services } from '../data/content';

export const Services = () => (
  <section className="section" id="services">
    <div className="container">
      <h2>Services that blend precision design with technical depth.</h2>
      <div className="services-grid">
        {services.map((service) => (
          <motion.article
            key={service.title}
            className="service-card"
            whileHover={{ y: -8 }}
            transition={{ duration: 0.2 }}
          >
            <span className="service-icon">{service.icon}</span>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);
