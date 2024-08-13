import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthProvider";

const TrainerLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const { login, setSignupEmailAndLogin } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const response = await fetch("http://localhost:8080/trainer_login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
        });

        const result = await response.json();

        if (response.ok) {
            if (result.message === "Login successful") {
                navigate("/trainer");
                setSignupEmailAndLogin(email); 
                login();
            } else {
                setErrors({ general: result.message });
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
    <div className="flex min-h-screen bg-gray-100">
      <div className="flex bg-white m-auto items-center p-10 w-[80%] shadow-lg rounded-lg">
        <div className="flex items-center">
          <img
            src="https://img.freepik.com/premium-vector/running-african-american-man-outdoors-young-athletic-man-jogging-sportswear-with-fitness-bracelet-healthy-lifestyle-sport-concept-morning-jog-park-flat-vector-illustration_502651-583.jpg"
            alt="Description of the image"
            className="max-w-[1100px] h-[600px]"
          />
        </div>
        <div className="flex flex-1 items-center justify-center">
          <form
            onSubmit={handleSubmit}
            className="rounded-lg w-full max-w-md p-8 space-y-10"
          >
            <div className="text-center mb-8">
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
            <div className="mt-[50px] text-center">
              <p className="text-gray-700">Don't have an account? <a href="/trainer/trainer_signup" className="text-blue-600 hover:underline">Sign Up</a></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TrainerLogin;
