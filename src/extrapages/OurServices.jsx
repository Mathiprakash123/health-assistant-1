import React from "react";
import ServiceCard from "./ServiceCard";

const OurServices = () => {
  return (
    <div className="px-4 sm:px-8 lg:px-32">
      <h1 className="text-[#239d80] text-4xl sm:text-5xl lg:text-6xl font-semibold font-sans text-center my-12">
        Our Services
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
        <ServiceCard
          to="/dashboard"
          imgSrc="src/assets/image.png"
          altText="Tracking Daily Activities"
          title="Tracking Activities"
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate placeat porro dolorem, perferendis ad quod provident iusto dolor cumque ipsum! Omnis voluptatibus possimus vel nostrum eum voluptates tenetur quidem voluptate."
        />
        <ServiceCard
          to="/medical"
          imgSrc="src/assets/image-2.jpg"
          altText="Fastest Medical Care"
          title="Fastest Medical Care"
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate placeat porro dolorem, perferendis ad quod provident iusto dolor cumque ipsum! Omnis voluptatibus possimus vel nostrum eum voluptates tenetur quidem voluptate."
        />
        <ServiceCard
          to="/fitness"
          imgSrc="src/assets/image-3.png"
          altText="Fitness Support"
          title="Fitness Support"
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate placeat porro dolorem, perferendis ad quod provident iusto dolor cumque ipsum! Omnis voluptatibus possimus vel nostrum eum voluptates tenetur quidem voluptate."
        />
      </div>
    </div>
  );
};

export default OurServices;
