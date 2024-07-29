import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const [login, setLogin] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    if (!username) {
      newErrors.username = "User Name is required";
    }

    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters long";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      console.log("Form submitted");
      setLogin(true);
      navigate("/");
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100 ">
      <div className=" flex bg-white m-auto items-center p-10 w-[80%] shadow-lg rounded-lg">
        <div className="flex items-center ">
          <img
            src="src/assets/Designer.png"
            alt="Description of the image"
            className="max-w-[1100px] h-[600px]"
          />
        </div>
        <div className="flex flex-1 items-center justify-center">
          <form
            onSubmit={handleSubmit}
            className="rounded-lg w-full max-w-md p-8 "
          >
            <div className="text-center mb-8">
              <img
                src="src/assets/3-removebg-preview.png"
                className="w-32 h-32 mx-auto mb-4"
                alt=""
              />
              <h1 className="text-4xl font-bold text-black">Login</h1>
            </div>

            <div className="mb-6">
              <label
                htmlFor="username"
                className={`block mb-2 text-lg ${
                  errors.username ? "text-red-500" : "text-gray-700"
                }`}
              >
                {errors.username || "User Name"}
              </label>
              <input
                type="text"
                id="username"
                className={` ${
                  errors.username ? "border-red-500" : "border-gray-300"
                } p-3 rounded-lg w-full outline-none  bg-gray-100`}
                placeholder="Enter User Name"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
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
