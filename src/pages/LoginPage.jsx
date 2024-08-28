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

      if (response.ok) {
        if (result.message === "Login successful") {
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
      setErrors({ general: "Something went wrong. Please try again later." });
    }
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-50 items-center justify-center p-4">
      <div className="hidden md:flex md:flex-1 md:items-center md:justify-center">
        <img
          src="https://ayushya.in/wp-content/uploads/2022/05/Homepage.png"
          alt="Login"
          className="w-full max-w-lg"
        />
      </div>

      <div className="flex-1 flex items-center justify-center p-4">
        <div className="bg-white shadow-md p-8 rounded-lg w-full max-w-md">
          <h1 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6 text-center">Login</h1>

          {errors.general && (
            <p className="text-red-500 text-center mb-4">{errors.general}</p>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
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

            <button
              type="submit"
              className="w-full bg-black text-white p-3 rounded-lg font-semibold hover:bg-gray-800 transition duration-300"
            >
              Sign In
            </button>
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
