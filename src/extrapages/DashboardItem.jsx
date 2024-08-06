import React from "react";
import { Link } from "react-router-dom";

const DashboardItem = ({ title, value, imageSrc, link, altText }) => {
  return (
    <div className="bg-primary p-6 rounded-lg shadow-md text-center transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-105 hover:bg-[#375856]  duration-150">
      {link ? (
        <Link to={link}>
          <img
            src={imageSrc}
            alt={altText}
            className="mx-auto mb-4 w-[400px] h-[300px] rounded-md"
          />
        </Link>
      ) : (
        <img
          src={imageSrc}
          alt={altText}
          className="mx-auto mb-4 w-[400px] h-[300px]"
        />
      )}
      <h2 className="text-2xl mb-2">{title}</h2>
      {Array.isArray(value) ? (
        <ul className="list-disc list-inside text-left">
          {value.map((item, index) => (
            <li key={index} className="text-xl">
              {item}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-4xl font-bold">{value}</p>
      )}
    </div>
  );
};

export default DashboardItem;
