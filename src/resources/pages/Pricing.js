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
            <li>5 Devices Connected</li>
            <li>8 presets</li>
            <li>Ads are Included</li>
          </ul>
          <button>Choose Plan</button>
        </div>
        <div className="pricing-plan">
          <h2>Supporter</h2>
          <ul>
            <li>Unlimited Devices Connected</li>
            <li>30 Presets + Community Presets</li>
            <li>No Ads </li>
            <li>Custom Presets</li>
          </ul>
          <button>Choose Plan</button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
