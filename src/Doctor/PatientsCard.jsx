import React from 'react';

const PatientsCard = ({ image, name }) => {
  return (
    <div className="mx-10 my-10 flex space-x-20 bg-blue-50">
      <div className="h-[350px] shadow-md px-10 py-10 w-[350px] rounded-md items-center text-center">
        <img
          src={image}
          className="rounded-full h-[200px] w-[200px] mx-auto object-cover"
          alt={name}
        />
        <p className="text-xl font-semibold">{name}</p>
        <div className="flex justify-around mt-5">
          <button className="bg-green-500 px-10 py-2 rounded-lg text-white">Chat</button>
          <button className="bg-blue-700 px-10 py-2 rounded-lg text-white">Call</button>
        </div>
      </div>
    </div>
  );
};

export default PatientsCard;
