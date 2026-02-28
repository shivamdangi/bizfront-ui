import { pricing } from '../data/content';

const Pricing = () => (
  <section className="section container" id="pricing" aria-label="Pricing">
    <div className="section__heading">
      <p className="eyebrow">PRICING</p>
      <h2>Clear investment tiers tailored to your stage.</h2>
    </div>
    <div className="pricing-grid">
      {pricing.map((tier) => (
        <article key={tier.name} className={`pricing-card ${tier.featured ? 'pricing-card--featured' : ''}`}>
          <h3>{tier.name}</h3>
          <p className="price">{tier.price}<span>{tier.frequency}</span></p>
          <ul>
            {tier.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
          <button className="btn btn--secondary" aria-label={`Choose ${tier.name} pricing plan`}>
            Choose {tier.name}
          </button>
        </article>
      ))}
    </div>
  </section>
);

export default Pricing;
