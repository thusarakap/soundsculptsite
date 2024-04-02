// Home.js
import React, { useEffect, useRef } from 'react';
import image1 from '../images/homeDemo.png';
import image2 from '../images/calibratedDemo.png';
import image3 from '../images/playerDemo.png';
import '../styles/home.css';

const images = [image1, image2, image3, image1, image2, image3, image1, image2, image3]; 

const Home = () => {
  const galleryRef = useRef();

  useEffect(() => {
    let timerId = null;

    const handleWheel = (e) => {
      if (e.deltaY) {
        e.preventDefault();

        if (timerId === null) {
          galleryRef.current.scrollLeft += e.deltaY * 5; // Increase scroll amount

          timerId = setTimeout(() => {
            timerId = null;
          }, 100);
        }
      }
    };

    const galleryElement = galleryRef.current;
    galleryElement.addEventListener('wheel', handleWheel);

    return () => {
      galleryElement.removeEventListener('wheel', handleWheel);
    };
  }, []);

  return (
    <div>
      <div className="animatedBackground">
        <h1> Experience SoundSculpt!</h1>
        <h2>The future of speaker calibration.</h2>
      </div>
      
      <div className="mainDescription">
      <h3>
        Revolutionize your audio experience with SoundSculpt.
        Unlock the true potential of your speakers and immerse yourself in crystal-clear sound.
      </h3>

      <h4>Effortless</h4>
      <p>
        SoundSculpt makes it easy to fine-tune your speaker's frequency response for 
        optimal audio quality. No technical expertise required!
      </p>

      <h4>Real-Time Analysis</h4>
      <p>
        Instantly analyze your speaker's performance using your smartphone's microphone.
        Get precise results in seconds!
      </p>

      <h4>Auto-Calibration</h4>
      <p>
        Let our intelligent algorithms automatically calibrate your speakers based on ambient noise levels and room characteristics. 
        Sit back and relax as your audio setup is optimized for optimal performance.
      </p>

      <h4>Frequency Equalization</h4>
      <p>
        Fine-tune individual frequency bands to achieve the perfect balance of bass, midrange, and treble. 
        Customize the audio output to suit your personal preferences with precision.
      </p>

      <h4>Save and Share Profiles</h4>
      <p>
        Save your customized calibration profiles for future reference or share them with friends and family. 
        Collaborate on perfecting audio settings and enjoy consistent sound across different devices.
      </p>

      <h4>Privacy</h4>
      <p>
         SoundSculpt calibrates completely offline, ensuring that your personal data remains private and secure.
      </p>


      </div>
        


      <div className="image-gallery" ref={galleryRef}>
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Gallery ${index}`} className="gallery-image" />
        ))}
      </div>
    </div>
  );
};

export default Home;