import React, { useState, useEffect } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css'; // Import Bootstrap Icons CSS

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    setVisible(scrolled > 300); // Show button after scrolling 300px
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Smooth scroll effect
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisible);
    return () => window.removeEventListener('scroll', toggleVisible);
  }, []);

  return (
    <div
      className={`scroll-to-top ${visible ? 'visible' : ''}`}
      onClick={scrollToTop}
      data-aos="fade-up" // Add AOS attribute for animation
    >
      <i className="bi bi-arrow-up-circle" style={{ fontSize: '2rem', color: '#f75815'}}></i>
    </div>
  );
};

export default ScrollToTopButton;