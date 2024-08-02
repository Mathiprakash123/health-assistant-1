// Footer.js
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto text-center">
        <div className="mb-4">
          <Link to={'/'} className="text-blue-400 hover:text-blue-500 mx-2">Home</Link>
          <Link to={'/nutrition'} className="text-blue-400 hover:text-blue-500 mx-2">Calorie Calculator</Link>
          <Link to={'/fitness'} className="text-blue-400 hover:text-blue-500 mx-2">Fitness</Link>
          <Link to={'/medical'} className="text-blue-400 hover:text-blue-500 mx-2">Health Assistant</Link>
        </div>
        <p className="text-sm">&copy; 2024 Your Health App. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
