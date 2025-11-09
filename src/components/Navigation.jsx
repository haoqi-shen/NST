import React, { useState } from 'react';

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav>
      <div className="nav-container">
        <div className="nav-logo" onClick={() => scrollToSection('home')}>
          ArtFusion
        </div>
        <button 
          className="mobile-menu-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          ☰
        </button>
        <ul className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
          <li><a onClick={() => scrollToSection('home')}>Home</a></li>
          <li><a onClick={() => scrollToSection('about')}>About</a></li>
          <li><a onClick={() => scrollToSection('features')}>Features</a></li>
          <li><a onClick={() => scrollToSection('demo')}>Demo</a></li>
          <li><a onClick={() => scrollToSection('pricing')}>Pricing</a></li>
          <li>
            <button className="nav-cta" onClick={() => scrollToSection('demo')}>
              Try Now
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
