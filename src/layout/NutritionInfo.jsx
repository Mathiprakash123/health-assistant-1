import React, { useState, useEffect } from "react";

const NutritionInfo = () => {
  const [data, setData] = useState(null);
  const [foodQuery, setFoodQuery] = useState("apple"); // Default food item to get multiple results
  const apiKey = "0e390eb319b5d685040ae198e372f74d"; // Your Nutritionix API key
  const appId = "935b44ee"; // Your Nutritionix App ID

  useEffect(() => {
    fetchNutritionData(foodQuery);
  }, [foodQuery]);

  const fetchNutritionData = (query) => {
    fetch(`https://trackapi.nutritionix.com/v2/natural/nutrients`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-app-id": appId,
        "x-app-key": apiKey,
      },
      body: JSON.stringify({
        query: query,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Nutritional Information:", data);
        // Ensure at least 12 items are displayed
        const items = data.foods || [];
        if (items.length < 12) {
          // Optionally handle less than 12 items, e.g., by using placeholders or fetching more data
          console.warn(
            "Less than 12 results found. Displaying available results."
          );
        }
        setData({ foods: items.slice(0, 12) }); // Slice to ensure max 12 items
      })
      .catch((error) => console.error("Error:", error));
  };

  return (
    <div className="max-w-5xl mx-auto p-8 bg-white rounded-lg shadow-lg">
      <h1 className="text-4xl font-extrabold mb-8 text-gray-900">
        Nutrition Information
      </h1>
      <div className="flex items-center mb-8 space-x-4">
        <input
          type="text"
          value={foodQuery}
          onChange={(e) => setFoodQuery(e.target.value)}
          placeholder="Enter food item"
          className="flex-grow bg-gray-200 border border-gray-300 rounded-l-lg px-4 py-3 text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
        <button
          onClick={() => fetchNutritionData(foodQuery)}
          className="px-6 py-3 bg-blue-600 text-white rounded-r-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
        >
          Search
        </button>
      </div>
      {data ? (
        data.foods && data.foods.length > 0 ? (
          data.foods.map((item, index) => (
            <div
              key={index}
              className="mb-8 p-6 border border-gray-300 rounded-lg shadow-md"
            >
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                {item.food_name}
              </h2>
              {item.photo ? (
                <img
                  src={item.photo.thumb}
                  alt={item.food_name}
                  className=" w-[300px] h-fit object-cover mb-4 rounded-md border border-gray-200 mx-auto"
                />
              ) : (
                <p className="text-gray-600 mb-4">No image available</p>
              )}
              <div className="space-y-2 flex justify-around">
                <div>
                  <p className="text-blue-700 ">
                    <strong >Calories:</strong> {item.nf_calories} kcal
                  </p>
                  <p className="text-gray-700">
                    <strong>Serving Size:</strong> {item.nf_serving_size_g} g
                  </p>
                  <p className="text-gray-700">
                    <strong>Fat Total:</strong> {item.nf_total_fat} g
                  </p>
                  <p className="text-gray-700">
                    <strong>Fat Saturated:</strong> {item.nf_saturated_fat} g
                  </p>
                  <p className="text-gray-700">
                    <strong>Protein:</strong> {item.nf_protein} g
                  </p>
                </div>{" "}
                <div>
                  <p className="text-gray-700">
                    <strong>Sodium:</strong> {item.nf_sodium} mg
                  </p>
                  <p className="text-gray-700">
                    <strong>Potassium:</strong> {item.nf_potassium} mg
                  </p>
                  <p className="text-gray-700">
                    <strong>Cholesterol:</strong> {item.nf_cholesterol} mg
                  </p>
                  <p className="text-gray-700">
                    <strong>Carbohydrates Total:</strong>{" "}
                    {item.nf_total_carbohydrate} g
                  </p>
                  <p className="text-gray-700">
                    <strong>Fiber:</strong> {item.nf_dietary_fiber} g
                  </p>
                  <p className="text-gray-700">
                    <strong>Sugar:</strong> {item.nf_sugars} g
                  </p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-600">No results found.</p>
        )
      ) : (
        <p className="text-gray-600">Loading...</p>
      )}
    </div>
  );
};

export default NutritionInfo;
