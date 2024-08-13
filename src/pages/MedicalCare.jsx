import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../Context/AuthProvider"; // Ensure the path is correct

const Healthcare = () => {
  const [user, setUser] = useState(null); // Changed to null initially
  const [doctors, setDoctors] = useState([]);
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

      const fetchDoctors = async () => {
        const mockDoctors = [
          {
            id: 1,
            name: "Dr. Smith",
            specialty: "Endocrinologist",
            contact: "123-456-7890",
            img: "https://plus.unsplash.com/premium_photo-1658506671316-0b293df7c72b?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZG9jdG9yfGVufDB8fDB8fHww",
            description: "Dr. Smith is a renowned endocrinologist with over 15 years of experience in treating diabetes and other hormonal disorders. She has a compassionate approach to patient care and is known for her dedication to improving patient outcomes."
          },
          {
            id: 2,
            name: "Dr. Johnson",
            specialty: "General Practitioner",
            contact: "987-654-3210",
            img: 'https://www.shutterstock.com/image-photo/headshot-portrait-positive-smiling-indian-600nw-2002147088.jpg',
            description: "Dr. Johnson is a general practitioner with extensive experience in primary care. He focuses on preventive medicine and works closely with patients to manage chronic illnesses and maintain overall health."
          },
        ];
        setDoctors(mockDoctors);
      };

      fetchUserProfile();
      fetchDoctors();
    }
  }, [isAuthenticated, navigate, email]);

  if (loading) {
    return <p>Loading...</p>; // Show loading message while fetching data
  }

  const handleCallDoctor = (doctor) => {
    alert(`Calling Dr. ${doctor.name} at ${doctor.contact}`);
  };

  const handleBookAppointment = (doctor) => {
    alert(`Booking appointment with Dr. ${doctor.name}`);
  };

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
              {/* <p className="bg-white p-4 rounded-lg shadow-md">
                <strong>Medical Illness:</strong> {user.medicalIllness}
              </p> */}
            </div>
          ) : (
            <p className="text-center">User profile not available.</p>
          )}
        </div>
        <div>
          <h2 className="text-2xl font-bold text-blue-600 mb-4">Doctors</h2>
          {doctors.length > 0 ? (
            doctors.map((doctor) => (
              <div
                key={doctor.id}
                className="mb-6 p-6 bg-white rounded-lg shadow-lg hover:bg-blue-100 transition duration-300 flex flex-col md:flex-row items-center"
              >
                <img src={doctor.img} alt="" className="w-48 h-48 object-cover rounded-lg mb-4 md:mb-0 md:mr-6" />
                <div className="flex-1 space-y-5">
                  <h3 className="text-xl font-bold text-blue-700 mb-2">
                    {doctor.name}
                  </h3>
                  <p className="mb-1">
                    <strong>Specialty:</strong> {doctor.specialty}
                  </p>
                  <p className="mb-3">
                    <strong>Contact:</strong> {doctor.contact}
                  </p>
                  <p className="mb-3">
                    <strong>Description:</strong> {doctor.description}
                  </p>
                  <div className="mt-3 flex space-x-2">
                    <button
                      onClick={() => handleCallDoctor(doctor)}
                      className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded shadow-md transition duration-300"
                    >
                      Call
                    </button>
                    <button
                      onClick={() => handleBookAppointment(doctor)}
                      className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded shadow-md transition duration-300"
                    >
                      Book Appointment
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center">No doctors available for the specified condition.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Healthcare;
