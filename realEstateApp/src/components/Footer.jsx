import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import '../styles/Footer.css';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="socialMedia">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FacebookIcon /></a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><InstagramIcon /></a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><TwitterIcon /></a>
      </div>
      <p>&copy; 2024 Real Estate Consultancy | All Rights Reserved</p>
    </footer>
  );
};
