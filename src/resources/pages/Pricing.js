// Pricing.js
import React from 'react';
import '../styles/pricing.css';

const Pricing = () => {
  return (
    <div>
      <h1 className="pricing-heading">Pricing</h1>
      <div className="pricing-container">
        <div className="pricing-plan">
          <h2>Free</h2>
          <ul>
            <li>Feature 1</li>
            <li>8 presets</li>
            <li>Feature 3</li>
          </ul>
          <button>Choose Plan</button>
        </div>
        <div className="pricing-plan">
          <h2>Supporter</h2>
          <ul>
            <li>Feature 1</li>
            <li>Feature 2</li>
            <li>Feature 3</li>
            <li>Feature 4</li>
          </ul>
          <button>Choose Plan</button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
