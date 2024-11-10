import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../Context/AuthProvider';

const Healthcare = () => {
  const [user, setUser] = useState(null);
  const [doctors, setDoctors] = useState([]);
  const [displayedDoctors, setDisplayedDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const { isAuthenticated, email } = useAuth();
  const [appointments, setAppointments] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAppointments = async () => {
      if (user?.id) {
        try {
          console.log(user.id);
          const response = await axios.get(`http://localhost:8080/api/appointment/appointments/user/${user.id}`);
          setAppointments(response.data);
        } catch (err) {
          setError('Failed to fetch appointments');
        } finally {
          setLoading(false);
        }
      }
    };

    fetchAppointments();
  }, [user]);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
      return;
    }

    const fetchUserProfile = async () => {
      try {
        const response = await axios.get('http://localhost:8080/profile', { params: { email } });
        setUser(response.data);
      } catch (error) {
        console.error('Error fetching user profile:', error);
      }
    };

    const fetchDoctors = async () => {
      try {
        const response = await axios.get('http://localhost:8080/view_alldoctor');
        setDoctors(response.data);
        setDisplayedDoctors(response.data.slice(0, 9));
      } catch (error) {
        console.error('Error fetching doctors:', error);
      }
    };

    const fetchData = async () => {
      await fetchUserProfile();
      await fetchDoctors();
      setLoading(false);
    };

    fetchData();
  }, [isAuthenticated, navigate, email]);

  useEffect(() => {
    const filteredDoctors = doctors.filter((doctor) =>
      doctor.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setDisplayedDoctors(filteredDoctors.slice(0, 9));
  }, [searchTerm, doctors]);

  const handleCallDoctor = (doctor) => {
    alert(`Calling Dr. ${doctor.name} at ${doctor.contact}`);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className=" py-4">
        <h1 className="text-2xl font-semibold text-gray-800 mb-6">Your Appointments</h1>
        {appointments.length > 0 ? (
          <table className="w-full bg-white shadow-md rounded">
            <thead>
              <tr>
                <th className="px-4 py-2 border-b">Doctor ID</th>
                <th className="px-4 py-2 border-b">Date</th>
                <th className="px-4 py-2 border-b">Time</th>
                <th className="px-4 py-2 border-b">Status</th>
              </tr>
            </thead>
            <tbody>
              {appointments.map((appointment) => (
                <tr key={appointment.id}>
                  <td className="px-4 py-2 border-b text-center">{appointment.doctorId}</td>
                  <td className="px-4 py-2 border-b text-center">{appointment.date}</td>
                  <td className="px-4 py-2 border-b text-center">{appointment.time}</td>
                  <td className="px-4 py-2 border-b text-center">{appointment.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No appointments found.</p>
        )}
      </div>
      <div className="mx-auto rounded-lg p-8 bg-white shadow-lg">
        <h1 className="text-3xl font-extrabold text-blue-700 mb-6 text-center">Patient Information</h1>
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-blue-600 mb-4">User Information</h2>
          {user ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <p className="bg-white p-4 rounded-lg shadow-md"><strong>Name:</strong> {user.firstname}</p>
              <p className="bg-white p-4 rounded-lg shadow-md"><strong>Age:</strong> {user.age}</p>
              <p className="bg-white p-4 rounded-lg shadow-md"><strong>Height:</strong> {user.height} cm</p>
              <p className="bg-white p-4 rounded-lg shadow-md"><strong>Weight:</strong> {user.weight} kg</p>
            </div>
          ) : (
            <p className="text-center">User profile not available.</p>
          )}
        </div>
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-blue-600 mb-4">Doctors</h2>
          <input
            type="text"
            placeholder="Search doctors..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border p-2 rounded mb-4 w-full"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedDoctors.length > 0 ? (
              displayedDoctors.map((doctor) => (
                <div
                  key={doctor.id}
                  className="p-6 bg-white rounded-lg shadow-lg hover:bg-blue-100 transition duration-300"
                >
                  <img
                    src="https://static.vecteezy.com/system/resources/thumbnails/002/403/589/small_2x/vaccination-and-injection-male-doctor-in-medical-gown-with-vaccine-vector.jpg"
                    alt={doctor.name}
                    className="w-full h-96 object-cover rounded-lg mb-4"
                  />
                  <div className="space-y-5">
                    <h3 className="text-xl font-bold text-blue-700 mb-2">{doctor.name}</h3>
                    <p className="mb-1"><strong>Specialty:</strong> {doctor.specialization}</p>
                    <p className="mb-3"><strong>Contact:</strong> {doctor.contact}</p>
                    <p className="mb-3"><strong>Description:</strong> {doctor.description}</p>
                    <div className="mt-3 flex space-x-2">
                      <button
                        onClick={() => handleCallDoctor(doctor)}
                        className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded shadow-md transition duration-300"
                      >
                        Call
                      </button>
                      <Link
                        to={`/appointmentof/${doctor.id}`}
                        className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded shadow-md transition duration-300"
                      >
                        Book Appointment
                      </Link>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center">No doctors match your search criteria.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Healthcare;
