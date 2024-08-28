import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

const ShowAppointment = () => {
  const location = useLocation();
  const { doctorId, userId } = location.state || {}; // Get doctorId and userId from location state
  const [appointmentDetails, setAppointmentDetails] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    console.log('Location State:', location.state); // Log location state
    console.log('Doctor ID:', doctorId);
    console.log('User ID:', userId);

    if (!doctorId || !userId) {
      setError('Invalid appointment details.');
      return;
    }

    const fetchAppointmentDetails = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/appointment/details', {
          params: {
            doctorId: doctorId,
            userId: userId,
          },
        });
        console.log('Appointment Details Response:', response.data); // Log response data
        setAppointmentDetails(response.data);
      } catch (err) {
        console.error('Error fetching appointment details:', err); // Log error details
        setError('Failed to fetch appointment details.');
      }
    };

    fetchAppointmentDetails();
  }, [doctorId, userId]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 p-6">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-semibold text-gray-800 mb-6">Appointment Details</h1>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        {appointmentDetails ? (
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Details</h2>
            <div className="bg-gray-100 p-4 rounded-lg mb-6">
              <p className="mb-2"><strong>Doctor ID:</strong> {appointmentDetails.doctorId}</p>
              <p className="mb-2"><strong>User ID:</strong> {appointmentDetails.userId}</p>
              <p className="mb-2"><strong>Date:</strong> {appointmentDetails.date}</p>
              <p className="mb-2"><strong>Time:</strong> {appointmentDetails.time}</p>
              <p className="mb-2"><strong>Status:</strong> {appointmentDetails.status}</p>
            </div>
          </div>
        ) : (
          <p>Loading appointment details...</p>
        )}
      </div>
    </div>
  );
};

export default ShowAppointment;
