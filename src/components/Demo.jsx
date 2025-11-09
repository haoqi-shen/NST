import React, { useState, useRef } from 'react';

const Demo = () => {
  const [contentImage, setContentImage] = useState(null);
  const [styleImage, setStyleImage] = useState(null);
  const [intensity, setIntensity] = useState(50);
  const [isProcessing, setIsProcessing] = useState(false);
  const [resultImage, setResultImage] = useState(null);
  
  const contentInputRef = useRef(null);
  const styleInputRef = useRef(null);

  const handleImageUpload = (e, type) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (type === 'content') {
          setContentImage(reader.result);
        } else {
          setStyleImage(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const simulateProcessing = () => {
    if (!contentImage || !styleImage) {
      alert('Please upload both content and style images');
      return;
    }

    setIsProcessing(true);
    setResultImage(null);

    // Simulate AI processing (in a real app, this would call your NST model)
    setTimeout(() => {
      // For demo purposes, we'll show the content image with a note
      // In production, this would be the actual neural style transfer result
      setResultImage(contentImage);
      setIsProcessing(false);
    }, 3000);
  };

  const resetDemo = () => {
    setContentImage(null);
    setStyleImage(null);
    setResultImage(null);
    setIntensity(50);
    setIsProcessing(false);
  };

  return (
    <section className="demo" id="demo">
      <div className="container">
        <h2 className="section-title">Try It Yourself</h2>
        <p className="section-subtitle">
          Upload your images and experience the magic of neural style transfer
        </p>

        <div className="demo-container">
          <div className="demo-upload-area">
            <div 
              className={`upload-box ${contentImage ? 'has-image' : ''}`}
              onClick={() => contentInputRef.current?.click()}
            >
              {contentImage ? (
                <img src={contentImage} alt="Content" className="upload-preview" />
              ) : (
                <>
                  <div className="upload-icon">📷</div>
                  <h3>Content Image</h3>
                  <p>Click to upload your photo</p>
                </>
              )}
              <input
                ref={contentInputRef}
                type="file"
                accept="image/*"
                onChange={(e) => handleImageUpload(e, 'content')}
                style={{ display: 'none' }}
              />
            </div>

            <div 
              className={`upload-box ${styleImage ? 'has-image' : ''}`}
              onClick={() => styleInputRef.current?.click()}
            >
              {styleImage ? (
                <img src={styleImage} alt="Style" className="upload-preview" />
              ) : (
                <>
                  <div className="upload-icon">🎨</div>
                  <h3>Style Image</h3>
                  <p>Click to upload art style</p>
                </>
              )}
              <input
                ref={styleInputRef}
                type="file"
                accept="image/*"
                onChange={(e) => handleImageUpload(e, 'style')}
                style={{ display: 'none' }}
              />
            </div>
          </div>

          <div className="demo-controls">
            <div className="control-group">
              <label htmlFor="intensity">
                Style Intensity: {intensity}%
              </label>
              <input
                id="intensity"
                type="range"
                min="0"
                max="100"
                value={intensity}
                onChange={(e) => setIntensity(e.target.value)}
                className="slider"
              />
            </div>
          </div>

          <div className="demo-actions">
            <button 
              className="btn btn-primary"
              onClick={simulateProcessing}
              disabled={isProcessing || !contentImage || !styleImage}
            >
              {isProcessing ? 'Processing...' : 'Generate Art'}
            </button>
            <button 
              className="btn btn-secondary"
              onClick={resetDemo}
            >
              Reset
            </button>
          </div>

          {isProcessing && (
            <div className="demo-result">
              <div className="processing">
                <div className="spinner"></div>
                <p>Neural networks at work... Applying style transfer</p>
              </div>
            </div>
          )}

          {resultImage && !isProcessing && (
            <div className="demo-result">
              <h3 style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
                Your Artwork
              </h3>
              <img src={resultImage} alt="Result" className="result-image" />
              <p style={{ 
                textAlign: 'center', 
                marginTop: '1rem', 
                color: 'var(--gray-text)',
                fontSize: '0.9rem'
              }}>
                Note: This is a demo simulation. In production, this would show the actual neural style transfer result.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Demo;
