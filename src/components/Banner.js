import React from 'react';
import './Banner.scss';

const Banner = ({ text }) => {
  return (
    <div className="banner">
      <h1>{text}</h1>
    </div>
  );
};

export default Banner;