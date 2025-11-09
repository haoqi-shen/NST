import React from 'react';

const Pricing = () => {
  const plans = [
    {
      name: 'Free',
      price: '$0',
      period: 'forever',
      features: [
        '10 images per month',
        'Basic style presets',
        'Standard resolution output',
        'Community support',
        'Local processing'
      ],
      featured: false
    },
    {
      name: 'Pro',
      price: '$19',
      period: 'per month',
      features: [
        'Unlimited images',
        'All style presets',
        'High resolution output (4K)',
        'Priority support',
        'Advanced controls',
        'Batch processing',
        'API access'
      ],
      featured: true
    },
    {
      name: 'Enterprise',
      price: '$99',
      period: 'per month',
      features: [
        'Everything in Pro',
        'Custom style training',
        'Dedicated support',
        'White-label solution',
        'Custom integrations',
        'Team collaboration',
        'SLA guarantee'
      ],
      featured: false
    }
  ];

  return (
    <section className="pricing" id="pricing">
      <div className="container">
        <h2 className="section-title">Choose Your Plan</h2>
        <p className="section-subtitle">
          Start free, scale as you grow. No hidden fees.
        </p>

        <div className="pricing-grid">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`pricing-card ${plan.featured ? 'featured' : ''}`}
            >
              {plan.featured && (
                <div className="pricing-badge">Most Popular</div>
              )}
              
              <h3 className="pricing-plan">{plan.name}</h3>
              <div className="pricing-price">
                {plan.price}
                <span>/{plan.period.split(' ')[1] || 'mo'}</span>
              </div>
              <p className="pricing-period">{plan.period}</p>
              
              <ul className="pricing-features">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex}>{feature}</li>
                ))}
              </ul>
              
              <button className={`btn ${plan.featured ? 'btn-primary' : 'btn-secondary'}`}>
                {plan.name === 'Free' ? 'Get Started' : 'Start Free Trial'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
