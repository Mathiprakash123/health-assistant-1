import React from "react";
import OurServices from "../extrapages/OurServices";
import Feedback from "../extrapages/Feedback";
import { useAuth } from "../Context/AuthProvider";

const Home = () => {
  const { name } = useAuth(); // Correctly use the hook and destructure name

  return (
    <div>
      <div className="px-4 sm:px-8 lg:px-32 my-12 flex flex-col lg:flex-row items-center justify-between">
        <div className="text-center lg:text-left lg:w-1/2">
          <h1 className="text-[#239d80] text-4xl sm:text-5xl lg:text-6xl font-extrabold font-sans leading-tight">
            Welcome,
          </h1>
          <h1 className="text-[#239d80] text-4xl sm:text-5xl lg:text-6xl font-extrabold font-sans leading-tight">
            {name}
          </h1>

          <p className="mt-6 text-lg sm:text-xl lg:text-2xl text-gray-700">
            <span className="text-2xl block"> "Your health is our top priority." </span> 
            We believe in delivering exceptional care that makes a real difference. Our
            dedicated team of healthcare professionals is committed to providing
            you with compassionate, personalized treatment. Experience top-notch
            care that goes beyond the ordinary and embraces your well-being. 
            "Because every moment matters, and your health is priceless."
          </p>
        </div>
        <div className="mt-8 lg:mt-0 lg:w-1/2">
          <img
            src="src/assets/Screenshot from 2024-08-04 20-37-41 (1).png"
            alt="Healthcare"
            className="w-full h-auto max-w-md mx-auto lg:max-w-full"
          />
        </div>
      </div>

      <div className="text-center my-12">
        <h1 className="text-[#239d80] text-4xl sm:text-5xl lg:text-6xl font-semibold font-sans">
          World-Class Service
        </h1>
        <img src="src/assets/blob.png" alt="Decorative Blob" className="mx-auto mt-8 w-full max-w-4xl" />
      </div>

      <div>
        <OurServices />
        <Feedback />
      </div>
    </div>
  );
};

export default Home;
