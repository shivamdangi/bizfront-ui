import { motion } from 'framer-motion';
import { services } from '../data/siteContent';

const Services = () => (
  <section className="section" id="services">
    <div className="container">
      <h2>Services</h2>
      <div className="services-grid">
        {services.map((service, idx) => (
          <motion.article
            key={service.title}
            className="service-card"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.4, delay: idx * 0.05 }}
          >
            <span className="icon">{service.icon}</span>
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
