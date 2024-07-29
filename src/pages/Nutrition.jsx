import React, { useState } from "react";
import { Link } from "react-router-dom";

const MealCard = ({ imageSrc, description }) => {
  return (
    <div className="w-[500px] h-[400px] rounded-lg shadow-lg transform transition-transform hover:scale-105 bg-white overflow-hidden">
      <img src={imageSrc} alt="Meal" className="w-full h-[300px] object-cover" />
      <p className="p-3">{description}</p>
    </div>
  );
};

const Nutrition = () => {
  const [filter, setFilter] = useState("");
  const meals = [
    {
      imageSrc: "https://cookingfromheart.com/wp-content/uploads/2017/09/Veg-Biryani-in-Pressure-Cooker-6.jpg",
      description: "Biryani - Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      caloriesPerKg: 1200,
    },
    {
      imageSrc: "https://www.acouplecooks.com/wp-content/uploads/2023/01/Red-Sauce-Pasta-008.jpg",
      description: "Pasta - Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      caloriesPerKg: 800,
    },
    {
      imageSrc: "https://www.eatingwell.com/thmb/rmLlvSjdnJCCy_7iqqj3x7XS72c=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/chopped-power-salad-with-chicken-0ad93f1931524a679c0f8854d74e6e57.jpg",
      description: "Salad - Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      caloriesPerKg: 200,
    },
    {
      imageSrc: "https://www.allrecipes.com/thmb/pTGS0SZsSQK85sV_RQE_K6ZfoN4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/26460-quick-and-easy-chicken-noodle-soup-allrecipes-1x1-1-b88125437574471db3e114c40bc6928e.jpg",
      description: "Soup - Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      caloriesPerKg: 150,
    },
    {
      imageSrc: "https://cdn.britannica.com/52/128652-050-14AD19CA/Maki-zushi.jpg",
      description: "Sushi - Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      caloriesPerKg: 250,
    },
    {
      imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWeECgpU7ndozaDY-cS3QKLjvSL7stKvYsOQ&s",
      description: "Pizza - Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      caloriesPerKg: 2000,
    },
  ];

  const filteredMeals = meals.filter((meal) =>
    meal.description.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="p-10 bg-gray-100 min-h-screen">
      <div className="flex justify-center mt-20">
        <input
          type="text"
          className="p-3 w-[500px] rounded-l-md outline-none"
          placeholder="Enter the meal"
          aria-label="Enter the meal"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
        <button
          className="bg-black rounded-r-md p-4 text-white hover:bg-gray-800"
          aria-label="Search"
        >
          Search
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-10 mx-10">
        {filteredMeals.map((meal, index) => (
          <Link 
            key={index}
            to={{
              pathname: "/calculate",
              search: `?imageSrc=${encodeURIComponent(meal.imageSrc)}&description=${encodeURIComponent(meal.description)}&caloriesPerKg=${meal.caloriesPerKg}`,
            }}
          >
            <MealCard imageSrc={meal.imageSrc} description={meal.description} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Nutrition;
