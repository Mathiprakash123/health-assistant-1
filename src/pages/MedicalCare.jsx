import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../Context/AuthProvider"; // Ensure the path is correct

const Healthcare = () => {
  const [user, setUser] = useState(null); // Changed to null initially
  const [loading, setLoading] = useState(true); 
  const navigate = useNavigate();
  const { isAuthenticated, email } = useAuth(); // Ensure email is provided by AuthProvider

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login'); 
    } else {
      const fetchUserProfile = async () => {
        try {
          const response = await axios.get(`http://localhost:8080/profile`, {
            params: { email: email },
          });
          setUser(response.data);
        } catch (error) {
          console.error("There was an error fetching the user profile!", error);
        } finally {
          setLoading(false); // Ensure loading state is turned off even if there's an error
        }
      };

      fetchUserProfile();
    }
  }, [isAuthenticated, navigate, email]);

  if (loading) {
    return <p>Loading...</p>; // Show loading message while fetching data
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="mx-auto max-w-4xl rounded-lg p-8 bg-white shadow-lg">
        <h1 className="text-3xl font-extrabold text-blue-700 mb-6 text-center">
          Patient Information
        </h1>
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-blue-600 mb-4">
            User Information
          </h2>
          {user ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <p className="bg-white p-4 rounded-lg shadow-md">
                <strong>Name:</strong> {user.firstname}
              </p>
              <p className="bg-white p-4 rounded-lg shadow-md">
                <strong>Age:</strong> {user.age}
              </p>
              <p className="bg-white p-4 rounded-lg shadow-md">
                <strong>Height:</strong> {user.height} cm
              </p>
              <p className="bg-white p-4 rounded-lg shadow-md">
                <strong>Weight:</strong> {user.weight} kg
              </p>
              <p className="bg-white p-4 rounded-lg shadow-md">
                <strong>Medical Illness:</strong> {user.medicalIllness}
              </p>
            </div>
          ) : (
            <p className="text-center">User profile not available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Healthcare;
