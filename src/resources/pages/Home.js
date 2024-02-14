// Home.js
import React from 'react';
import '../styles/home.css';

const Home = () => {
  return (
    <div>
      <div className="gradient-background">
        {/* You can put any content you want in this div */}
      </div>
      <h1>Welcome to Our Website!</h1>
      <p>
        We are dedicated to providing you with the best products and services.
      </p>
      <p>
        <strong>Featured Products:</strong> Check out our latest offerings in
        our <a href="/products">products</a> section.
      </p>
      <p>
        Want to learn more <a href="/about">about us</a>? Feel free to explore!
      </p>
      <p>
        <a href="/contact">contact us</a>.
      </p>
    </div>
  );
};

export default Home;