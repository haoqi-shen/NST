import React from 'react';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <h2 className="section-title">About ArtFusion</h2>
        <p className="section-subtitle">
          AI-Powered Visual Storytelling Through Neural Style Transfer
        </p>
        
        <div className="about-content">
          <div className="about-text">
            <h3>Transform Your Vision with AI</h3>
            <p>
              ArtFusion brings art and AI together — not by filters, but by neural imagination.
              Our advanced neural style transfer technology uses deep learning to understand and 
              recreate the essence of artistic styles, applying them to your images with 
              unprecedented precision.
            </p>
            <p>
              By leveraging convolutional neural networks (CNNs), ArtFusion extracts visual 
              patterns from deep layers to reconstruct color, texture, and brushstroke — 
              creating truly unique artistic interpretations of your photos.
            </p>
            <p>
              Whether you're a professional artist, photographer, or creative enthusiast, 
              ArtFusion empowers you to explore endless artistic possibilities and bring 
              your vision to life.
            </p>
          </div>
          
          <div className="about-features">
            <div className="about-feature">
              <div className="about-feature-icon">🎨</div>
              <div className="about-feature-text">
                <h4>Deep Neural Networks</h4>
                <p>
                  Powered by state-of-the-art CNN architecture that understands 
                  artistic patterns at multiple abstraction levels.
                </p>
              </div>
            </div>
            
            <div className="about-feature">
              <div className="about-feature-icon">🎯</div>
              <div className="about-feature-text">
                <h4>Precision Control</h4>
                <p>
                  Fine-tune style intensity and blending to achieve the perfect 
                  balance between content and artistic expression.
                </p>
              </div>
            </div>
            
            <div className="about-feature">
              <div className="about-feature-icon">🔒</div>
              <div className="about-feature-text">
                <h4>Privacy First</h4>
                <p>
                  All processing happens locally on your device. Your images 
                  never leave your machine, ensuring complete privacy.
                </p>
              </div>
            </div>
            
            <div className="about-feature">
              <div className="about-feature-icon">⚙️</div>
              <div className="about-feature-text">
                <h4>Production Ready</h4>
                <p>
                  Optimized for consumer GPUs with efficient processing pipelines 
                  that deliver professional results in seconds.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
