// TrainerCard.js
import React from 'react';

const TrainerCard = ({ trainer, handleCallTrainer, handleBookAppointment }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <img src={trainer.image} alt={trainer.name} className="w-full h-72 object-cover mb-4 rounded-md" />
      <h2 className="text-xl font-semibold">{trainer.name}</h2>
      <p>{trainer.specialty}</p>
      <p>{trainer.distance} km away</p>
      <p>Contact: {trainer.contact}</p>
      <div className="mt-3">
        <button
          onClick={() => handleCallTrainer(trainer)}
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded mr-2 shadow-md transition duration-300"
        >
          Call
        </button>
        <button
          onClick={() => handleBookAppointment(trainer)}
          className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded shadow-md transition duration-300"
        >
          Book Appointment
        </button>
      </div>
    </div>
  );
};

export default TrainerCard;
