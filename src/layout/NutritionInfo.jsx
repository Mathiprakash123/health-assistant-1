import React, { useState, useEffect } from "react";
import axios from 'axios';

const NutritionInfo = () => {
  const [foodData, setFoodData] = useState([]);
  const [expandedIndex, setExpandedIndex] = useState(null);
  useEffect(() => {
    axios.get('http://localhost:8080/api/foods/view_all_food')
      .then(response => {
        if (Array.isArray(response.data)) {
          setFoodData(response.data);
        } else {
          console.error('Unexpected data format:', response.data);
        }
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);
  

  const handleToggle = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="container mx-auto px-6 min-h-screen lg:px-32 py-10">
     <div className="text-center">
     <h1 className="text-4xl text-blue-800 font-bold mb-4">Nutrition Info</h1>
      <p className="text-lg text-gray-700 mb-8">Your journey to a healthier lifestyle starts here</p>
      <h2 className="text-2xl font-semibold mb-6">Browse Nutrition Food</h2>
     </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        {foodData.map((item, index) => (
          <div
            key={index}
            className={`relative flex flex-col p-4 rounded-lg transition-transform duration-159 transform hover:scale-105 hover:shadow-md cursor-pointer ${expandedIndex === index ? "bg-blue-100" : "bg-white"}`}
            onClick={() => handleToggle(index)}
          >
            <img
              src={item.img}
              alt={item.nutritionType}
              className="w-full h-[200px] object-cover rounded-lg mb-3"
            />
            <h1 className={`text-xl font-semibold mb-2 ${expandedIndex === index ? "text-blue-800" : "text-gray-800"}`}>
              {item.nutritionType}
            </h1>
            <h2 className={`text-gray-600 ${expandedIndex === index ? "font-bold" : ""}`}>
              {item.noOfRecipes}
            </h2>
          </div>
        ))}
      </div>

      {expandedIndex !== null && (
        <div className="mt-10">
          <h3 className="text-xl font-semibold mb-4">Recipes:</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {foodData[expandedIndex].details.map((detail, idx) => (
              <div key={idx} className="flex flex-col bg-white p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
                <img
                  src={detail.img}
                  alt={detail.recipe}
                  className="w-full h-[150px] object-cover rounded-lg mb-4"
                />
                <h2 className="text-lg font-semibold text-gray-800 mb-2">{detail.recipe}</h2>
                <p className="text-gray-700 mb-4">{detail.description}</p>
                <h3 className="text-md font-semibold text-gray-900 mb-2">Ingredients</h3>
                <ul className="list-disc list-inside mb-4 text-gray-700">
                  {detail.ingredients.map((ingredient, i) => (
                    <li key={i}>{ingredient}</li>
                  ))}
                </ul>
                <h3 className="text-md font-semibold text-gray-900 mb-2">Steps</h3>
                <ol className="list-decimal list-inside text-gray-700">
                  {detail.steps.map((step, i) => (
                    <li key={i}>{step}</li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default NutritionInfo;
