import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../Context/AuthProvider";

const DoctorSignup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const { login, updateEmail } = useAuth();

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

    if (!gender) {
      newErrors.gender = "Gender is required";
    }

    if (!specialization) {
      newErrors.specialization = "Specialization is required";
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
        const response = await axios.post('http://localhost:8080/doctorregister', {
          name: name,
          email: email,
          password: password,
          gender: gender,
          specialization: specialization
        });

        if (response.status === 200) {
          console.log(response.data);
          login(); 
          updateEmail(email); 
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
            src="https://static.vecteezy.com/system/resources/previews/016/928/593/original/making-appointment-online-flat-concept-illustration-scheduling-visit-to-doctor-editable-2d-cartoon-characters-on-white-for-web-design-creative-idea-for-website-mobile-presentation-vector.jpg"
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
                  htmlFor="gender"
                  className={`block mb-2 text-lg ${
                    errors.gender ? "text-red-500" : "text-gray-700"
                  }`}
                >
                  {errors.gender || "Gender"}
                </label>
                <select
                  id="gender"
                  className={` ${
                    errors.gender ? "border-red-500" : "border-gray-300"
                  } p-3 rounded-lg w-full outline-none bg-gray-100`}
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="mb-6">
                <label
                  htmlFor="specialization"
                  className={`block mb-2 text-lg ${
                    errors.specialization ? "text-red-500" : "text-gray-700"
                  }`}
                >
                  {errors.specialization || "Specialization"}
                </label>
                <input
                  type="text"
                  id="specialization"
                  className={` ${
                    errors.specialization ? "border-red-500" : "border-gray-300"
                  } p-3 rounded-lg w-full outline-none bg-gray-100`}
                  placeholder="Enter Specialization"
                  value={specialization}
                  onChange={(e) => setSpecialization(e.target.value)}
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

export default DoctorSignup;
