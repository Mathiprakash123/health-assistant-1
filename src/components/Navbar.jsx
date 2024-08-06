import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleSignOut = () => {
    setIsAuthenticated(false);
    console.log("User signed out");
  };

  const handleActive = ({ isActive }) => (isActive ? "text-orange-700" : "");

  return (
    <div className="flex justify-between px-32  space-x-2 text-gray-700 ">
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
            <Link to={"/signup"}>
              <img
                src="https://static.vecteezy.com/system/resources/previews/028/597/535/original/african-black-male-avatar-character-cartoon-profile-picture-ai-generated-file-no-background-png.png"
                className="w-[60px] bg-[#239d80] rounded-full  px-2 py-1"
                alt=""
              />
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
