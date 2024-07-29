import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const Calculator = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const imageSrc = params.get("imageSrc");
  const description = params.get("description");
  const caloriesPerKg = parseInt(params.get("caloriesPerKg"));

  const [amount, setAmount] = useState("");
  const [calories, setCalories] = useState(0);

  const handleAmountChange = (e) => {
    const value = e.target.value;
    setAmount(value);
    if (!isNaN(value) && value !== "") {
      setCalories((value * caloriesPerKg) / 1000); // Assuming caloriesPerKg is passed correctly
    } else {
      setCalories(0);
    }
  };

  return (
    <div className="bg-gray-100 h-full">
      <div className="p-32 rounded-lg flex">
        <img
          src={imageSrc}
          alt="Meal"
          className="h-[420px] w-[600px] rounded-s-lg"
        />

        <div className="space-y-7 p-10 bg-white w-[1300px]">
          <h1 className="font-bold text-xl">{description.split(" - ")[0]}</h1>
          <p>{description.split(" - ")[1]}</p>
          <p>1kg = {caloriesPerKg} calories</p>
          <div>
            <p className="font-medium">Enter the amount of meal ( in grams):</p>
          <input
            type="text"
            className="w-[500px] h-[50px] p-2 outline-none bg-gray-100"
            placeholder="Enter the amount of meal (in grams)"
            value={amount}
            onChange={handleAmountChange}
          />
          </div>
          <div className=" flex">
            <p className="p-3 text-3xl font-bold"> Total Calaories:</p>
            <input
              type="text"
              readOnly
              className="block outline-none p-3 rounded text-3xl"
              value={calories}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
