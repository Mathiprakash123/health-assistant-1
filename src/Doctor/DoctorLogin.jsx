import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthProvider";

const DoctorLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const { setSignupEmailAndLogin, setDoctorIdAndLogin } = useAuth();

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
        const response = await fetch("http://localhost:8080/doctor_login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        });

        if (response.ok) {
          const result = await response.json();
          if (result.message === "Login successful") {
            console.log("Login successful");

            // Retrieve and log doctorId
            const doctorId = result.doctorId; // Changed to doctorId based on your updated response
            console.log(doctorId);
            

            // Update context with email and doctorId
            setSignupEmailAndLogin(email);
            setDoctorIdAndLogin(doctorId);

            navigate("/doctor");
          } else {
            setErrors({ general: result.message });
          }
        } else if (response.status === 401) {
          setErrors({ general: "Invalid email or password" });
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
            src="https://static.vecteezy.com/system/resources/previews/016/928/593/original/making-appointment-online-flat-concept-illustration-scheduling-visit-to-doctor-editable-2d-cartoon-characters-on-white-for-web-design-creative-idea-for-website-mobile-presentation-vector.jpg"
            alt="Doctor"
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
                type="email"
                id="email"
                className={`${
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
                className={`${
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

            <div className="mt-12 text-center">
              <p className="text-gray-700">
                Don't have an account?
                <Link to="/doctor/doctorregister" className="text-blue-600 hover:underline">
                  Sign Up
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DoctorLogin;
