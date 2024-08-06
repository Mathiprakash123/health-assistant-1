// OurServices.js
import React from "react";
import ServiceCard from "./ServiceCard";

const OurServices = () => {
  return (
    <div>
      <h1 className="text-[#239d80] text-6xl mx-32 font-semibold font-sans">
        Our Services
      </h1>
      <div className="mx-32 my-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-28">
        <ServiceCard
          to="/dashboard"
          imgSrc="src/assets/image.png"
          altText="Tracking Daily Activities"
          title="Tracking Activities"
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate
          placeat porro dolorem, perferendis ad quod provident iusto dolor
          cumque ipsum! Omnis voluptatibus possimus vel nostrum eum voluptates
          tenetur quidem voluptate."
        />
        <ServiceCard
          to="/medical"
          imgSrc="src/assets/image-2.jpg"
          altText="Fastest Medical Care"
          title="Fastest Medical Care"
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate
          placeat porro dolorem, perferendis ad quod provident iusto dolor
          cumque ipsum! Omnis voluptatibus possimus vel nostrum eum voluptates
          tenetur quidem voluptate."
        />
        <ServiceCard
          to="/fitness"
          imgSrc="src/assets/image-3.png"
          altText="Fitness Support"
          title="Fitness Support"
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate
          placeat porro dolorem, perferendis ad quod provident iusto dolor
          cumque ipsum! Omnis voluptatibus possimus vel nostrum eum voluptates
          tenetur quidem voluptate."
        />
      </div>
    </div>
  );
};

export default OurServices;
