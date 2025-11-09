import React from 'react';

const Features = () => {
  const features = [
    {
      icon: '🧠',
      title: 'Neural Style Transfer Core',
      description: 'Extracts visual patterns from deep CNN layers to reconstruct color, texture, and brushstroke. Experience true neural imagination at work.'
    },
    {
      icon: '✨',
      title: 'Artistic Control',
      description: 'Adjust intensity to balance realism and creativity. Your photo, your aesthetic. Fine-tune every detail to match your vision.'
    },
    {
      icon: '⚡',
      title: 'Fast & Local',
      description: 'Runs smoothly on consumer GPUs, delivering results in seconds. No cloud required, your data stays with you.'
    },
    {
      icon: '🖼️',
      title: 'From Photos to Paintings',
      description: 'Turn portraits into oil art, landscapes into impressionism, or sketches into motion. Unlimited artistic possibilities.'
    }
  ];

  return (
    <section className="features" id="features">
      <div className="container">
        <h2 className="section-title">Powered by Intelligence</h2>
        <p className="section-subtitle">
          Advanced neural networks meet artistic creativity
        </p>
        
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
