// About.js
import React from 'react';
import '../styles/about.css';
import image1 from '../images/Thusaraka.png';
import image2 from '../images/Thusaraka.png';
import image3 from '../images/Thusaraka.png';
import image4 from '../images/Thusaraka.png';
import image5 from '../images/Thusaraka.png';

const About = () => {
  return (
    <div className="about-us-container">
      <h1>About Us</h1>
      <div className="team-members">
        <div className="team-member">
          <img src={image1} alt="Thusaraka Palliyguru" className="team-member-image" />
          <h3>Thusaraka Palliyeguru</h3>
        </div>
        <div className="team-member">
          <img src={image2} alt="Member 2" className="team-member-image" />
          <h3>Thusaraka Palliyeguru</h3>
        </div>
        <div className="team-member">
          <img src={image3} alt="Member 3" className="team-member-image" />
          <h3>Thusaraka Palliyeguru</h3>
        </div>
        <div className="team-member">
          <img src={image4} alt="Member 4" className="team-member-image" />
          <h3>Thusaraka Palliyeguru</h3>
        </div>
        <div className="team-member">
          <img src={image5} alt="Member 5" className="team-member-image" />
          <h3>Thusaraka Palliyeguru</h3>
        </div>
      </div>
      <p className="team-description">
      We are a hardworking and dedicated team committed to delivering the best results. Our team is composed of students from diverse backgrounds, each bringing a unique set of skills and experiences to the table.
      </p>

      <p className="team-description-2">
      We believe in the power of collaboration and the importance of delivering high-quality work. We strive to exceed expectations and continuously improve our knowledge to create better and better projects.
      </p>

    </div>
  );
};

export default About;