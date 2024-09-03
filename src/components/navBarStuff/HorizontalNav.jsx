import React from 'react';
import './HorizontalNav.css'; // Importing CSS for styling

const HorizontalNav = () => {
  return (
    <nav className="horizontal-nav">
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#blog">Blog</a></li>
      </ul>
    </nav>
  );
};

export default HorizontalNav;
