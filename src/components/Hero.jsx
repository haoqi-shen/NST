import React from 'react';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="gradient-text">ArtFusion</span>
          </h1>
          <p className="hero-subtitle">Where Art Meets AI</p>
          <p className="hero-description">
            Not by filters, but by <strong>neural imagination</strong>. 
            Re-create any image through deep feature blending, merging the content of one picture with the style of another.
          </p>
          <div className="cta-buttons">
            <button className="btn btn-primary" onClick={() => scrollToSection('demo')}>
              Try Demo
            </button>
            <button className="btn btn-secondary" onClick={() => scrollToSection('about')}>
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
