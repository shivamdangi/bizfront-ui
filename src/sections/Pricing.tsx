import { pricing } from '../data/siteContent';

const Pricing = () => (
  <section className="section" id="pricing">
    <div className="container">
      <h2>Pricing</h2>
      <div className="pricing-grid">
        {pricing.map((plan) => (
          <article key={plan.tier} className={`price-card ${plan.featured ? 'featured' : ''}`}>
            <h3>{plan.tier}</h3>
            <p className="price">{plan.price}</p>
            <ul>
              {plan.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <button className="btn btn-ghost">Select Plan</button>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Pricing;
