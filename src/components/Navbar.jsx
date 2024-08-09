import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useAuth } from '../Context/AuthProvider';

const Navbar = () => {
  const { isAuthenticated, logout } = useAuth();

  const handleSignOut = () => {
    logout();
    console.log("User signed out");
  };

  const handleActive = ({ isActive }) => (isActive ? "text-orange-700" : "");

  return (
    <div className="flex justify-between px-32 space-x-2 text-gray-700">
      <Link to={"/"}>
        <img
          src="src/assets/logo-no-background.png"
          className="w-40 h-20 object-contain mt-3"
          alt="Logo"
        />
      </Link>
      <div className="space-x-9 mt-10 font-medium">
        <NavLink to={"/"} className={handleActive}>
          HomePage
        </NavLink>
        <NavLink to={"/dashboard"} className={handleActive}>
          Dash Board
        </NavLink>
        <NavLink to={"/fitness"} className={handleActive}>
          Fitness
        </NavLink>
        <NavLink to={"/medical"} className={handleActive}>
          Health Assistant
        </NavLink>
      </div>
      <div className="mt-8 space-x-9 flex">
        {isAuthenticated ? (
         
            <Link to={'/profile'}>
              <img
                src="https://static.vecteezy.com/system/resources/previews/028/597/535/original/african-black-male-avatar-character-cartoon-profile-picture-ai-generated-file-no-background-png.png"
                className="w-[50px] h-[50px] bg-[#239d80] rounded-full px-2"
                alt=""
              />
            </Link>
        
          
        ) : (
          <>
            <Link to={"/signup"} className="bg-primary px-6 py-3 h-12 rounded shadow-md text-white">
              Sign Up
            </Link>
            <Link to={"/login"} className="bg-primary px-6 py-3 h-12 rounded shadow-md text-white">
              Login
            </Link>
            
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
