// ServiceCard.js
import React from "react";
import { Link } from "react-router-dom";

const ServiceCard = ({ to, imgSrc, altText, title, description }) => {
  return (
    <Link to={to}>
      <div className="bg-[#096a64]  rounded-lg text-white p-2 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-[#375856]  duration-300">
        <img
          src={imgSrc}
          alt={altText}
          className="rounded-lg object-cover w-full h-[350px] bg-white"
        />
        <div className="overflow-hidden text-center p-2 text-gray-200">
          <p className="text-4xl text-center block text-[#04fe1d] mb-5">
            {title}
          </p>
          <p>{description}</p>
        <button className="bg-black px-4 py-2 rounded-xl shadow-xl my-3"> Show more</button>
        </div>
      </div>
     
    </Link>
  );
};

export default ServiceCard;
