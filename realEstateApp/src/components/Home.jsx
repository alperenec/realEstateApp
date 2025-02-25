import BannerImage from '../assets/banneryeni.jpg';
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

export const Home = () => {
  return (
    <div
      className="mainPage"
      style={{ backgroundImage: `url(${BannerImage})` }}
    >
      <div className="cta">
        <h1>Find Your Dream Property</h1>
        <p>Explore the best real estate listings in your area.</p>
        <Link to="/sale">
          <button>View Listings</button>
        </Link>
      </div>
    </div>
  );
};
