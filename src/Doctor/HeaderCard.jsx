import React from "react";

const HeaderCard = ( {name,count,date,svg}) => {
  return (
    <div>
      {" "}
      <div className="">
        <div>
          <div className="flex mt-20 ml-8 mr-5">
            <div className="flex bg-blue-50 px-20   w-[450px] py-10 shadow-md justify-between">
             <div className=" mt-10 mx-auto border-4 rounded-full w-16 p-3 h-16 border-blue-700">
             {svg}
             </div>
              <div className="space-y-5">
                <h1 className=" text-gray-500">{name}</h1>
                <h1 className=" text-4xl">{count}</h1>
                <h1 className=" text-gray-500">{date}</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderCard;
