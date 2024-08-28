import React from "react";
import { Link } from "react-router-dom";

const ServiceCard = ({ to, imgSrc, altText, title, description }) => {
  return (
    <Link to={to}>
      <div className="bg-[#096a64] rounded-lg text-white p-4 transition-transform transform hover:-translate-y-2 hover:scale-105 hover:bg-[#375856] duration-300">
        <img
          src={imgSrc}
          alt={altText}
          className="rounded-lg object-cover w-full h-[250px] md:h-[300px] lg:h-[350px] bg-white"
        />
        <div className="overflow-hidden text-center p-4">
          <p className="text-xl sm:text-2xl lg:text-3xl text-[#04fe1d] mb-4 font-bold">
            {title}
          </p>
          <p className="text-sm sm:text-base lg:text-lg text-gray-200 mb-4">
            {description}
          </p>
          <button className="bg-black px-4 py-2 rounded-xl shadow-xl text-white hover:bg-gray-700 transition duration-300">
            Show more
          </button>
        </div>
      </div>
    </Link>
  );
};

export default ServiceCard;
