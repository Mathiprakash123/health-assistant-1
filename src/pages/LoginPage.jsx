import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthProvider";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const { login, updateEmail, updateName } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8080/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const result = await response.json();

      console.log("Response Status:", response.status);
      console.log("Response Body:", result);

      if (response.ok) {
        if (result.message === "Login successful") {
          console.log("Login successful");
          navigate("/");
          login(email);
          updateEmail(email);
          updateName(result.name || "Guest");
        } else {
          setErrors({ general: "Invalid email or password" });
        }
      } else {
        setErrors({ general: result.message || "Something went wrong. Please try again later." });
      }
    } catch (error) {
      console.error("Error:", error);
      setErrors({ general: "Something went wrong. Please try again later." });
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50 justify-center p-4">
      <div className="bg-white shadow-md h-[70vh] mt-32 p-8 flex flex-col md:flex-row rounded gap-20">
        {/* Image Section */}
        <div className="mb-6 md:mb-0 flex items-center justify-center">
          <img
            src="https://ayushya.in/wp-content/uploads/2022/05/Homepage.png"
            alt="Login"
            className="w-[700px]"
          />
        </div>

        {/* Form Section */}
        <div className="flex flex-col items-center">
          <h1 className="text-3xl font-semibold text-gray-800 mb-6">Login</h1>

          {errors.general && (
            <p className="text-red-500 text-center mb-4">{errors.general}</p>
          )}

          <form onSubmit={handleSubmit} className="w-[400px] grid grid-cols-1 gap-6 mt-32">
            <div className="col-span-1">
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

            <div className="col-span-1">
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

            <div className="col-span-1">
              <button
                type="submit"
                className="w-full bg-black text-white p-3 rounded-lg font-semibold hover:bg-gray-800 transition duration-300"
              >
                Sign In
              </button>
            </div>
          </form>

          <div className="mt-6 text-center text-blue-600">
            <Link to={"/doctor/doctorlogin"} className="block hover:underline mb-2">
              Log In As Doctor
            </Link>
            <Link to={"/trainer/trainer_login"} className="block hover:underline">
              Log In As Trainer
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
