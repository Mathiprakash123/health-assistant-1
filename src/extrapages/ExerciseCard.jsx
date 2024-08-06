// ExerciseCard.js
import React from 'react';

const ExerciseCard = ({ exercise }) => {
  return (
    <div className="p-2 bg-primary rounded-lg shadow-md text-white">
      <img src={exercise.image} alt={exercise.name} className="w-full h-80 object-cover mb-4 rounded-md" />
      <h2 className="text-xl font-semibold">{exercise.name}</h2>
      <p>{exercise.description}</p>
      <ul className="list-disc pl-5 mt-2 ">
        {exercise.steps.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ul>
    </div>
  );
};

export default ExerciseCard;
