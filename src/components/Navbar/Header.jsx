import React from 'react';
import './Header.css'; // Importing CSS for styling
import MainLogo from "../MainLogo/logo";

const Header = () => {
  return (
    <nav className="header">
      <MainLogo />
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/services">Services</a></li>
        <li><a href="/contact">Contact</a></li>
        <li><a href="/blog">Blog</a></li>
      </ul>
    </nav>
  );
};

export default Header;
