import React from "react";
import Rating from "./Rating";

const Feedback = () => {
  return (
    <div className="mx-32">
      <h1 className="text-[#239d80] text-6xl font-semibold font-sans mb-10">
        Enjoy Our Clients Feedback
      </h1>

      <div className="bg-gray-100 p-10 py-20 flex justify-between space-x-10">
        <img
          src="https://media.licdn.com/dms/image/D4D12AQFKPBlutNYBUw/article-cover_image-shrink_720_1280/0/1675100206224?e=2147483647&v=beta&t=nUxpxKkPLz1wiZcIVUoHLvDL0slSyHGr36EieEMSK5Q"
          alt=""
          className="w-[800px]"
        />
        <p className=" my-auto ml-4 ">
          <span className=" text-2xl font-bold ml-4 ">
            {" "}
            MathiPrakash{" "}
            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/009/663/927/small/5-star-rating-review-star-transparent-free-png.png"
              alt=""
              className="w-44 h-10 object-cover items-start"
            />
          </span>
          <p className="ml-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint incidunt
          quae earum consequatur enim ullam cumque quos, iste quo numquam?
          </p>
        </p>
      </div>
    </div>
  );
};

export default Feedback;
