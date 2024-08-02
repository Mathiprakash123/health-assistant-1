import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors = {};

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

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      try {
        const response = await fetch("http://localhost:8080/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        });

        if (response.ok) {
          const result = await response.text();
          if (result === "Login successful") {
            console.log("Login successful");
            navigate("/");
          } else {
            setErrors({ general: "Invalid email or password" });
          }
        } else {
          setErrors({ general: "Something went wrong. Please try again later." });
        }
      } catch (error) {
        console.error("Error:", error);
        setErrors({ general: "Something went wrong. Please try again later." });
      }
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <div className="flex bg-white m-auto items-center p-10 w-[80%] shadow-lg rounded-lg">
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
            className="rounded-lg w-full max-w-md p-8"
          >
            <div className="text-center mb-8">
              <img
                src="src/assets/3-removebg-preview.png"
                className="w-32 h-32 mx-auto mb-4"
                alt=""
              />
              <h1 className="text-4xl font-bold text-black">Login</h1>
            </div>

            {errors.general && (
              <div className="mb-4 text-red-500 text-center">
                {errors.general}
              </div>
            )}

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
                type="text"
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

            <button
              type="submit"
              className="w-full bg-black text-white p-3 rounded-lg font-semibold hover:bg-blue-600 transition duration-300"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
