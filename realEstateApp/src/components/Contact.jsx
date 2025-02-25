import React from 'react';
import BannerImage from '../assets/banner.jpg';
import '../styles/Contact.css';

export const Contact = () => {
  return (
    <div className="contact">
      <div className="leftSide" style={{ backgroundImage: `url(${BannerImage})` }}></div>
      <div className="rightSide">
        <h1>Contact Us</h1>
        <p>
          Do you have any questions about buying, selling, or renting properties? 
          Contact us today and let our expert team assist you!
        </p>
        <form>
          <label>Full Name</label>
          <input type="text" name="name" placeholder="Enter your full name..." />

          <label>Email</label>
          <input type="email" name="email" placeholder="Enter your email..." />

          <label>Message</label>
          <textarea rows="6" name="message" placeholder="Enter your message..."></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};
