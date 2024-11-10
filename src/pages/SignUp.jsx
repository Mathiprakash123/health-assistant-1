import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../Context/AuthProvider";

const SignupPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const { login, updateEmail, updateName } = useAuth();

  const validateForm = () => {
    const newErrors = {};

    if (!name) newErrors.name = "Name is required";
    if (!email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = "Email address is invalid";
    if (!password) newErrors.password = "Password is required";
    else if (password.length < 6) newErrors.password = "Password must be at least 6 characters long";
    if (!age) newErrors.age = "Age is required";
    else if (isNaN(age) || age <= 0) newErrors.age = "Age must be a positive number";
    if (!height) newErrors.height = "Height is required";
    else if (isNaN(height) || height <= 0) newErrors.height = "Height must be a positive number";
    if (!weight) newErrors.weight = "Weight is required";
    else if (isNaN(weight) || weight <= 0) newErrors.weight = "Weight must be a positive number";

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      try {
        const response = await axios.post('http://localhost:8080/register', {
          firstname: name,
          email: email,
          password: password,
          age: parseInt(age, 10),
          height: parseInt(height, 10),
          weight: parseInt(weight, 10)
        });

        if (response.status === 200) {
          login(); // Update with proper parameters if needed
          updateEmail(email); // Set email in Auth context
          updateName(name); // Set name in Auth context
          navigate("/");
        } else {
          setErrors({ general: "Registration failed. Please try again." });
        }
      } catch (error) {
        setErrors({ general: "Registration failed. Please try again." });
      }
    }
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-50 items-center justify-center p-4">
      <div className="hidden md:flex md:flex-1 md:items-center md:justify-center">
        <img 
          src="https://ayushya.in/wp-content/uploads/2022/05/Homepage.png" 
          alt="Signup" 
          className="w-full max-w-lg"
        />
      </div>

      <div className="flex-1 flex items-center justify-center p-4">
        <div className="bg-white shadow-md p-8 rounded-lg w-full max-w-md">
          <h1 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6 text-center">Sign Up</h1>

          {errors.general && (
            <p className="text-red-500 text-center mb-4">{errors.general}</p>
          )}
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className={`block mb-2 text-lg ${errors.name ? "text-red-500" : "text-gray-700"}`}
              >
                {errors.name || "Name"}
              </label>
              <input
                type="text"
                id="name"
                className={`border ${errors.name ? "border-red-500" : "border-gray-300"} p-3 rounded-lg w-full bg-gray-100`}
                placeholder="Enter Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className={`block mb-2 text-lg ${errors.email ? "text-red-500" : "text-gray-700"}`}
              >
                {errors.email || "Email"}
              </label>
              <input
                type="email"
                id="email"
                className={`border ${errors.email ? "border-red-500" : "border-gray-300"} p-3 rounded-lg w-full bg-gray-100`}
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className={`block mb-2 text-lg ${errors.password ? "text-red-500" : "text-gray-700"}`}
              >
                {errors.password || "Password"}
              </label>
              <input
                type="password"
                id="password"
                className={`border ${errors.password ? "border-red-500" : "border-gray-300"} p-3 rounded-lg w-full bg-gray-100`}
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div>
              <label
                htmlFor="age"
                className={`block mb-2 text-lg ${errors.age ? "text-red-500" : "text-gray-700"}`}
              >
                {errors.age || "Age"}
              </label>
              <input
                type="number"
                id="age"
                className={`border ${errors.age ? "border-red-500" : "border-gray-300"} p-3 rounded-lg w-full bg-gray-100`}
                placeholder="Enter Age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
            </div>

            <div>
              <label
                htmlFor="height"
                className={`block mb-2 text-lg ${errors.height ? "text-red-500" : "text-gray-700"}`}
              >
                {errors.height || "Height (in cm)"}
              </label>
              <input
                type="number"
                id="height"
                className={`border ${errors.height ? "border-red-500" : "border-gray-300"} p-3 rounded-lg w-full bg-gray-100`}
                placeholder="Enter Height (in cm)"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
              />
            </div>

            <div>
              <label
                htmlFor="weight"
                className={`block mb-2 text-lg ${errors.weight ? "text-red-500" : "text-gray-700"}`}
              >
                {errors.weight || "Weight (in kg)"}
              </label>
              <input
                type="number"
                id="weight"
                className={`border ${errors.weight ? "border-red-500" : "border-gray-300"} p-3 rounded-lg w-full bg-gray-100`}
                placeholder="Enter Weight (in kg)"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white p-3 rounded-lg font-semibold hover:bg-gray-800 transition duration-300"
            >
              Sign Up
            </button>
          </form>

          <div className="mt-6 text-center text-blue-600">
            <Link to={"/doctor/doctorregiser"} className="block hover:underline mb-2">
              Sign Up As Doctor
            </Link>
            <Link to={"/trainer/trainer_signup"} className="block hover:underline">
              Sign Up As Trainer
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
