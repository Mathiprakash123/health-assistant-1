import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useAuth } from '../Context/AuthProvider';

const Navbar = () => {
  const { isAuthenticated, logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSignOut = () => {
    logout();
    console.log("User signed out");
  };

  const handleActive = ({ isActive }) => (isActive ? "text-orange-700" : "text-gray-700");

  const handleLinkClick = () => {
    // Close the menu when a link is clicked
    setIsMenuOpen(false);
  };

  return (
    <div className="relative">
      <nav className="flex justify-between items-center px-4 py-3 bg-white shadow-md md:px-32">
        {/* Logo */}
        <Link to={"/"}>
          <img
            src="src/assets/logo-no-background.png"
            className="w-40 h-20 object-contain"
            alt="Logo"
          />
        </Link>

        {/* Menu Button for Mobile View */}
        <button
          className="block md:hidden p-2 text-gray-700"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        {/* Navigation Links */}
        <div className={`md:flex md:space-x-9 md:mt-0 mt-3 ${isMenuOpen ? "block" : "hidden"}`}>
          <NavLink to={"/"} className={handleActive} onClick={handleLinkClick}>
            HomePage
          </NavLink>
          <NavLink to={"/dashboard"} className={handleActive} onClick={handleLinkClick}>
            Dash Board
          </NavLink>
          <NavLink to={"/nutrition"} className={handleActive} onClick={handleLinkClick}>
            Nutrition Care
          </NavLink>
          <NavLink to={"/fitness"} className={handleActive} onClick={handleLinkClick}>
            Fitness
          </NavLink>
          <NavLink to={"/medical"} className={handleActive} onClick={handleLinkClick}>
            Health Assistant
          </NavLink>
        </div>

        {/* Profile and Auth Links */}
        <div className="md:flex md:items-center md:space-x-9 flex items-center mt-3">
          {isAuthenticated ? (
            <Link to={'/profile'}>
              <img
                src="https://static.vecteezy.com/system/resources/previews/028/597/535/original/african-black-male-avatar-character-cartoon-profile-picture-ai-generated-file-no-background-png.png"
                className="w-[50px] h-[50px] bg-[#239d80] rounded-full"
                alt="Profile"
              />
            </Link>
          ) : (
            <>
              <div className="hidden md:flex space-x-4">
                <Link to={"/signup"} className="bg-primary px-6 py-3 h-12 rounded shadow-md text-white">
                  Sign Up
                </Link>
                <Link to={"/login"} className="bg-primary px-6 py-3 h-12 rounded shadow-md text-white">
                  Login
                </Link>
              </div>
            </>
          )}
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-white shadow-md md:hidden ${isMenuOpen ? "block" : "hidden"} z-50`}>
        <div className="flex flex-col p-4 space-y-4">
          <NavLink to={"/"} className={handleActive} onClick={handleLinkClick}>
            HomePage
          </NavLink>
          <NavLink to={"/dashboard"} className={handleActive} onClick={handleLinkClick}>
            Dash Board
          </NavLink>
          <NavLink to={"/nutrition"} className={handleActive} onClick={handleLinkClick}>
            Nutrition Care
          </NavLink>
          <NavLink to={"/fitness"} className={handleActive} onClick={handleLinkClick}>
            Fitness
          </NavLink>
          <NavLink to={"/medical"} className={handleActive} onClick={handleLinkClick}>
            Health Assistant
          </NavLink>
          <div className="mt-6 flex flex-col space-y-4">
            {isAuthenticated ? (
              <Link to={'/profile'} className="flex items-center" onClick={handleLinkClick}>
                <img
                  src="https://static.vecteezy.com/system/resources/previews/028/597/535/original/african-black-male-avatar-character-cartoon-profile-picture-ai-generated-file-no-background-png.png"
                  className="w-[50px] h-[50px] bg-[#239d80] rounded-full"
                  alt="Profile"
                />
              </Link>
            ) : (
              <>
                <Link to={"/signup"} className="bg-primary px-6 py-3 h-12 rounded shadow-md text-white" onClick={handleLinkClick}>
                  Sign Up
                </Link>
                <Link to={"/login"} className="bg-primary px-6 py-3 h-12 rounded shadow-md text-white" onClick={handleLinkClick}>
                  Login
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
