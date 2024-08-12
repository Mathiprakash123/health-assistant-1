import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthProvider";

const DoctorLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const { login, signupEmail } = useAuth();
  const { setSignupEmailAndLogin } = useAuth();
  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Submitted Email:", email);  // Log email
    console.log("Submitted Password:", password);  // Log password

    try {
      const response = await fetch("http://localhost:8080/dr_login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),  // Send the email and password
      });

      console.log("Response Status:", response.status);  // Log response status

      if (response.ok) {
        const result = await response.text();
        console.log("Response Text:", result);  // Log response text

        if (result === "Login successful") {
          console.log("Login successful");
          navigate("/doctor");
          setSignupEmailAndLogin(email); // Set signup email and login
          console.log(email);
          login(); 
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
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <div className="flex bg-white m-auto items-center p-10 w-[80%] shadow-lg rounded-lg">
        <div className="flex items-center">
          <img
            src="https://static.vecteezy.com/system/resources/previews/016/928/593/original/making-appointment-online-flat-concept-illustration-scheduling-visit-to-doctor-editable-2d-cartoon-characters-on-white-for-web-design-creative-idea-for-website-mobile-presentation-vector.jpg"
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
          </form>
        </div>
      </div>
    </div>
  );
};

export default DoctorLogin;
