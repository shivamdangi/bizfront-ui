import { motion } from 'framer-motion';
import { portfolio } from '../data/content';
import { useParallax } from '../hooks/useParallax';

export const Portfolio = () => {
  const offset = useParallax(0.05);

  return (
    <section className="section" id="portfolio">
      <div className="container">
        <h2>Selected product interfaces with measurable business impact.</h2>
        <div className="portfolio-grid" style={{ transform: `translateY(${offset}px)` }}>
          {portfolio.map((item, index) => (
            <motion.article key={item} className="portfolio-card" whileHover={{ scale: 1.02 }}>
              <div className="mock-screen">
                <div className="mock-chart" style={{ width: `${45 + index * 14}%` }} />
                <div className="mock-chart" style={{ width: `${70 - index * 9}%` }} />
                <div className="mock-chart" style={{ width: `${55 + index * 6}%` }} />
              </div>
              <p>{item}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
