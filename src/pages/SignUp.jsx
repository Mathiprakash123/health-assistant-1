import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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

    if (!name) {
      newErrors.name = "Name is required";
    }

    if (!email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email address is invalid";
    }

    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters long";
    }

    if (!age) {
      newErrors.age = "Age is required";
    } else if (isNaN(age) || age <= 0) {
      newErrors.age = "Age must be a positive number";
    }

    if (!height) {
      newErrors.height = "Height is required";
    } else if (isNaN(height) || height <= 0) {
      newErrors.height = "Height must be a positive number";
    }

    if (!weight) {
      newErrors.weight = "Weight is required";
    } else if (isNaN(weight) || weight <= 0) {
      newErrors.weight = "Weight must be a positive number";
    }

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
          console.log(response.data);
          login(); // Update with proper parameters if needed
          updateEmail(email); // Set email in Auth context
          updateName(name); // Set name in Auth context
          navigate("/");
        } else {
          setErrors({ general: "Registration failed. Please try again." });
        }
      } catch (error) {
        console.error("There was an error registering the user!", error);
        setErrors({ general: "Registration failed. Please try again." });
      }
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <div className="flex bg-white m-auto items-center p-5 w-[80%] shadow-lg rounded-lg">
        <div className="flex items-center">
          <img
            src="src/assets/Designer.png"
            alt="Description of the image"
            className="max-w-[1100px] h-[600px]"
          />
        </div>
        <div className="flex flex-1 items-center justify-center">
          <form
            onSubmit={handleSubmit}
            className="rounded-lg w-full max-w-md p-8 space-y-6"
          >
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold text-black">Sign Up</h1>
            </div>

            {errors.general && (
              <p className="text-red-500 text-center mb-4">{errors.general}</p>
            )}

            <div className="grid grid-cols-2 grid-flow-row gap-4">
              <div className="mb-6">
                <label
                  htmlFor="name"
                  className={`block mb-2 text-lg ${
                    errors.name ? "text-red-500" : "text-gray-700"
                  }`}
                >
                  {errors.name || "Name"}
                </label>
                <input
                  type="text"
                  id="name"
                  className={` ${
                    errors.name ? "border-red-500" : "border-gray-300"
                  } p-3 rounded-lg w-full outline-none bg-gray-100`}
                  placeholder="Enter Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="email"
                  className={`block mb-2 text-lg ${
                    errors.email ? "text-red-500" : "text-gray-700"
                  }`}
                >
                  {errors.email || "Email"}
                </label>
                <input
                  type="email"
                  id="email"
                  className={` ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  } p-3 rounded-lg w-full outline-none bg-gray-100`}
                  placeholder="Enter Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="password"
                  className={`block mb-2 text-lg ${
                    errors.password ? "text-red-500" : "text-gray-700"
                  }`}
                >
                  {errors.password || "Password"}
                </label>
                <input
                  type="password"
                  id="password"
                  className={` ${
                    errors.password ? "border-red-500" : "border-gray-300"
                  } p-3 rounded-lg w-full outline-none bg-gray-100`}
                  placeholder="Enter Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="age"
                  className={`block mb-2 text-lg ${
                    errors.age ? "text-red-500" : "text-gray-700"
                  }`}
                >
                  {errors.age || "Age"}
                </label>
                <input
                  type="number"
                  id="age"
                  className={` ${
                    errors.age ? "border-red-500" : "border-gray-300"
                  } p-3 rounded-lg w-full outline-none bg-gray-100`}
                  placeholder="Enter Age"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="height"
                  className={`block mb-2 text-lg ${
                    errors.height ? "text-red-500" : "text-gray-700"
                  }`}
                >
                  {errors.height || "Height (in cm)"}
                </label>
                <input
                  type="number"
                  id="height"
                  className={` ${
                    errors.height ? "border-red-500" : "border-gray-300"
                  } p-3 rounded-lg w-full outline-none bg-gray-100`}
                  placeholder="Enter Height (in cm)"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="weight"
                  className={`block mb-2 text-lg ${
                    errors.weight ? "text-red-500" : "text-gray-700"
                  }`}
                >
                  {errors.weight || "Weight (in kg)"}
                </label>
                <input
                  type="number"
                  id="weight"
                  className={` ${
                    errors.weight ? "border-red-500" : "border-gray-300"
                  } p-3 rounded-lg w-full outline-none bg-gray-100`}
                  placeholder="Enter Weight (in kg)"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-black text-white p-3 rounded-lg font-semibold hover:bg-blue-600 transition duration-300"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
