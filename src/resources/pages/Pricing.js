// Pricing.js
import React from 'react';
import '../styles/pricing.css';

const Pricing = () => {
  return (
    <div>
      <h1>Pricing</h1>
      <div className="pricing-container">
        <div className="pricing-plan">
          <h2>Basic</h2>
          <ul>
            <li>Feature 1</li>
            <li>Feature 2</li>
            <li>Feature 3</li>
          </ul>
          <button>Choose Plan</button>
        </div>
        <div className="pricing-plan">
          <h2>Standard</h2>
          <ul>
            <li>Feature 1</li>
            <li>Feature 2</li>
            <li>Feature 3</li>
            <li>Feature 4</li>
          </ul>
          <button>Choose Plan</button>
        </div>
        <div className="pricing-plan">
          <h2>Premium</h2>
          <ul>
            <li>Feature 1</li>
            <li>Feature 2</li>
            <li>Feature 3</li>
            <li>Feature 4</li>
            <li>Feature 5</li>
          </ul>
          <button>Choose Plan</button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
