import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Pagination } from 'swiper/modules';

// Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

// Media
import heroVideo from '../assets/hero_banner_1.mp4';
import heroPoster from '../assets/hero_banner_1_poster.jpeg';
import quoteImage from '../assets/hero_pic.png';

import './FullPageHero.css';

const FullPageHero = () => {
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [shrink, setShrink] = useState(false);
  
  // REF: Used to lock the scroll listener during animation
  const isNavigating = useRef(false);

  // 1. Scroll Listener
  useEffect(() => {
    const handleScroll = () => {
      // IF we are currently clicking the arrow, IGNORE scroll events
      if (isNavigating.current) return;

      // Otherwise, check position normally
      if (window.scrollY > 40) {
        setShrink(true);
      } else {
        setShrink(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 2. Navigation Handler (The Fix)
  const handleNavigation = (direction) => {
    if (!swiperInstance) return;

    // A. LOCK the listener so it doesn't fight us
    isNavigating.current = true;

    // B. Force Expand logic immediately
    setShrink(false);

    // C. Scroll to top instantly
    window.scrollTo({
      top: 0,
      behavior: 'auto', // 'auto' is faster and prevents glitching
    });

    // D. Change Slide
    if (direction === 'next') {
      swiperInstance.slideNext();
    } else {
      swiperInstance.slidePrev();
    }

    // E. UNLOCK after animation (1 second buffer)
    setTimeout(() => {
      isNavigating.current = false;
    }, 1000);
  };

  return (
    <div className={`hero-wrapper ${shrink ? 'hero-wrapper--shrink' : ''}`}>
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        effect="fade"
        pagination={{ clickable: true }}
        modules={[EffectFade, Pagination]}
        onSwiper={setSwiperInstance}
        className="myFullPageSwiper"
        // Ensure manual dragging also resets the view
        onSlideChange={() => {
           window.scrollTo({ top: 0, behavior: 'auto' });
           setShrink(false);
        }}
      >
        {/* Slide 1: Video */}
        <SwiperSlide>
          <div className="hero-section-video">
            <video
              className="hero-video"
              src={heroVideo}
              poster={heroPoster}
              autoPlay
              loop
              muted
              playsInline
            >
              Your browser does not support the video tag.
            </video>

            <div className="hero-content-video">
              {/* Using the button style from your Hero.jsx */}
              <Link to="/collection" className="hero-cta-link">
                <button className="hero-button-outline">SHOP NOW</button>
              </Link>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2: Quote */}
        <SwiperSlide>
          <div className="split-screen">
            <div className="split-left">
              <img
                src={quoteImage}
                alt="Inspirational quote"
                className="quote-image"
              />
            </div>
            <div className="split-right">
              <div className="quote-content">
                <p className="quote-text">
                  &quot;Style is a way to say who you are without having to
                  speak.&quot;
                </p>
                <p className="quote-author">— Rachel Zoe</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      {/* Navigation Arrows */}
      {swiperInstance && (
        <>
          <button
            className="hero-nav hero-nav-prev"
            onClick={() => handleNavigation('prev')}
          >
            ‹
          </button>
          <button
            className="hero-nav hero-nav-next"
            onClick={() => handleNavigation('next')}
          >
            ›
          </button>
        </>
      )}
    </div>
  );
};

export default FullPageHero;