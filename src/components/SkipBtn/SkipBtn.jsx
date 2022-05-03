import React from 'react';
import './skipBtn.css';

const SkipBtn = ({ navHeight }) => {
  const contentLocation = document.getElementById('main-content');
  // const topOffset = navHeight;

  // Skip to main content
  const skipToContent = () => {
    console.log(contentLocation);
    window.scrollTo({
      top: contentLocation,
      left: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button className='btn skipBtn' onClick={skipToContent}>
      Skip to content
    </button>
  );
};

export default SkipBtn;
