import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleSignOut = () => {
    setIsAuthenticated(false);
    // Here you would also clear any authentication tokens or session data
    console.log("User signed out");
  };

  const handleActive = ({ isActive }) => (isActive ? "text-orange-700" : "");

  return (
    <div className="flex justify-between pl-10 pr-10 shadow-md space-x-2">
      <Link to={"/"}>
        <img src="src/assets/3-removebg-preview.png" className="w-20 h-20" alt="Logo" />
      </Link>
      <div className="space-x-9 mt-10 font-medium">
        <NavLink to={"/"} className={handleActive}>
          HomePage
        </NavLink>
        <NavLink to={"/nutrition"} className={handleActive}>
        Calorie Calculator
        </NavLink>
        <NavLink to={"/fitness"} className={handleActive}>
          Fitness
        </NavLink>
        <NavLink to={"/medical"} className={handleActive}>
          Health Assistant
        </NavLink>
      </div>
      <div className="mt-6 space-x-9">
        {isAuthenticated ? (
          <button
            onClick={handleSignOut}
            className="bg-red-500 p-3 text-white rounded-lg font-bold"
          >
            Sign Out
          </button>
        ) : (
          <>
            <Link to={"/login"}>
              <button className="bg-black p-3 text-white rounded-lg font-bold">
                Login
              </button>
            </Link>
            <Link to={"/signup"}>
              <button className="bg-[#225b5b] p-3 text-white rounded-lg font-bold">
                Sign Up
              </button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
