import { pricing } from '../data/content';

export const Pricing = () => (
  <section className="section" id="pricing">
    <div className="container">
      <h2>Transparent pricing built for momentum.</h2>
      <div className="pricing-grid">
        {pricing.map((plan) => (
          <article key={plan.tier} className={`pricing-card ${plan.featured ? 'featured' : ''}`}>
            <h3>{plan.tier}</h3>
            <p className="price">{plan.price}</p>
            <p>{plan.note}</p>
            <button className="btn btn-ghost" aria-label={`Choose ${plan.tier} plan`}>Choose Plan</button>
          </article>
        ))}
      </div>
    </div>
  </section>
);
