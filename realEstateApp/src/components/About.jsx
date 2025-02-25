import React from 'react';
import BannerImage from '../assets/banneryeni.jpg';
import '../styles/About.css';

export const About = () => {
  return (
    <div className="about">
      <div className="aboutTop" style={{ backgroundImage: `url(${BannerImage})` }}></div>
      <div className="aboutBottom">
        <h1>About Us</h1>
        <p>
          Welcome to Real Estate Consultancy, where we help you find the perfect property.
          With years of experience in the real estate market, our expert team is here to 
          guide you through buying, selling, and renting properties. Whether you are looking 
          for a luxurious apartment, a cozy family home, or a commercial space, we are committed 
          to providing the best service.
        </p>
        <p>
          Our mission is to connect you with the best real estate opportunities while ensuring 
          a seamless and hassle-free experience. Contact us today and let us help you find 
          your dream property!
        </p>
      </div>
    </div>
  );
};
