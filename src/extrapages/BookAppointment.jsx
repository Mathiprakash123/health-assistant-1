import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const BookAppointment = () => {
  const location = useLocation();
  const { trainer } = location.state || {};
  const [goal, setGoal] = useState("");

  if (!trainer) {
    return <p className="text-center text-red-500">No trainer selected</p>;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
   alert(`Appointment booked with ${trainer.name} for ${goal}`);
  };

  return (
    <div className="container mx-auto p-6 my-20  bg-primary rounded-lg  shadow-lg">
      <div className="flex ">
        <img
          src={trainer.image}
          alt={trainer.name}
          className="w-[600px] h-auto object-cover rounded-lg mb-6"
        />
        <div className="mt-32 mx-32 text-white">
          <h1 className="text-5xl font-semibold mb-6 ">
            About MySelf 
          </h1>
          <span className="block mt-[18%] text-3xl font-bold mb-10">{trainer.name}</span>
          <p className="text-lg mb-2 ">
            Specialty:{" "}
            <span className="font-semibold ">{trainer.specialty}</span>
          </p>
          <p className="text-lg mb-2">
            Contact: <span className="font-semibold">{trainer.contact}</span>
          </p>
          <p className="text-lg mb-4">
            Distance:{" "}
            <span className="font-semibold">{trainer.distance} km</span>
          </p>
        </div>
        
      </div>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="flex flex-col">
          <label className="text-lg font-medium mb-2">Your Goal</label>
          <select
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
            className="w-full border-2 border-gray-300 rounded-lg p-3 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            required
          >
            <option value="" disabled>
              Select your goal
            </option>
            <option value="Weight Loss">Weight Loss</option>
            <option value="Strength Gain">Strength Gain</option>
          </select>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Submit Appointment
        </button>
      </form>
    
    </div>
  );
};

export default BookAppointment;
