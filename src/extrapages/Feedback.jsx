import React from "react";

const Feedback = () => {
  return (
    <div className="px-4 sm:px-8 lg:px-32 my-12">
      <h1 className="text-[#239d80] text-4xl sm:text-5xl lg:text-6xl font-semibold font-sans mb-8 text-center">
        Enjoy Our Clients Feedback
      </h1>

      <div className="flex flex-col lg:flex-row items-center lg:items-start bg-gray-100 p-6 lg:p-10 py-10 lg:py-20 space-y-6 lg:space-y-0 lg:space-x-10">
        <img
          src="https://media.licdn.com/dms/image/D4D12AQFKPBlutNYBUw/article-cover_image-shrink_720_1280/0/1675100206224?e=2147483647&v=beta&t=nUxpxKkPLz1wiZcIVUoHLvDL0slSyHGr36EieEMSK5Q"
          alt="Client Feedback"
          className="w-full max-w-sm lg:max-w-lg mx-auto lg:mx-0"
        />
        <div className="text-center lg:text-left lg:ml-4">
          <span className="text-xl sm:text-2xl lg:text-3xl font-bold flex items-center justify-center lg:justify-start mb-4">
            MathiPrakash
            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/009/663/927/small/5-star-rating-review-star-transparent-free-png.png"
              alt="Rating"
              className="w-24 h-6 lg:w-44 lg:h-10 ml-2"
            />
          </span>
          <p className="text-base sm:text-lg lg:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint incidunt
            quae earum consequatur enim ullam cumque quos, iste quo numquam?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
