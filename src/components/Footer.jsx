import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="gradient-text">ArtFusion</h3>
            <p>AI-Powered Visual Storytelling</p>
            <p style={{ marginTop: '1rem' }}>
              Not just image editing — it's neural imagination brought to life.
            </p>
          </div>
          
          <div className="footer-section">
            <h4>Product</h4>
            <ul>
              <li>Features</li>
              <li>Demo</li>
              <li>Pricing</li>
              <li>API Documentation</li>
              <li>Roadmap</li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Technology</h4>
            <ul>
              <li>Neural Networks</li>
              <li>Deep Learning</li>
              <li>CNN Architecture</li>
              <li>Style Transfer</li>
              <li>Research Papers</li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Resources</h4>
            <ul>
              <li>Documentation</li>
              <li>Tutorials</li>
              <li>Examples</li>
              <li>Community</li>
              <li>Support</li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Company</h4>
            <ul>
              <li>About Us</li>
              <li>Blog</li>
              <li>Careers</li>
              <li>Contact</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2025 ArtFusion. All rights reserved. Not just image editing — AI-powered visual storytelling.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
