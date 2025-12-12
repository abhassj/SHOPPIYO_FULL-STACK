// src/components/Hero.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

// Import your video and fallback image
import heroVideo from '../assets/hero_banner_1.mp4';
import heroPoster from '../assets/hero_banner_1_poster.jpeg';

const Hero = () => {
  return (
    <div className='hero-section-video'>
      {/* Video element for the background */}
      <video className='hero-video' src={heroVideo} poster={heroPoster} autoPlay loop muted playsInline>
        Your browser does not support the video tag.
      </video>

      {/* Content for the foreground - this will hold just the button */}
      <div className='hero-content-video'>
        <Link to='/collection' className='absolute bottom-12'> {/* Use absolute positioning on the link */}
          <button>SHOP NOW</button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;