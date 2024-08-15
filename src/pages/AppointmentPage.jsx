import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../Context/AuthProvider';

const AppointmentPage = () => {
  const { doctorId } = useParams();
  const [doctor, setDoctor] = useState(null);
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const { email } = useAuth();

  useEffect(() => {
    if (!doctorId) {
      navigate('/healthcare');
      return;
    }

    const fetchDoctor = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/view_dr_byid/${doctorId}`);
        console.log('Doctor data:', response.data); // Log the doctor data
        setDoctor(response.data);
      } catch (err) {
        console.error('Error fetching doctor information:', err);
        setError('Failed to fetch doctor information.');
      }
    };

    const fetchUserDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/profile`, { params: { email: email } });
        console.log('User data:', response.data); // Log the user data
        setUser(response.data);
      } catch (err) {
        console.error('Error fetching user details:', err);
        setError('Failed to fetch user details.');
      }
    };

    fetchDoctor();
    fetchUserDetails();
  }, [doctorId, email, navigate]);

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   if (!date || !time) {
  //     setError('Please select both date and time.');
  //     return;
  //   }

  //   if (!user || !doctorId) {
  //     setError('User or Doctor details are not available.');
  //     return;
  //   }

  //   try {
  //     const response = await fetch('http://localhost:8080/api/appointment/post', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({
  //         userId: user.id,
  //         doctorId: Number(doctorId), // Ensure doctorId is passed as a number
  //         date: date,
  //         time: time,
  //       }),
  //     });

  //     const contentType = response.headers.get('Content-Type');
  //     console.log('Response Content-Type:', contentType);

  //     let result;
  //     if (contentType && contentType.includes('application/json')) {
  //       result = await response.json();
  //       console.log('JSON response:', result);

  //       if (response.ok) {
  //         setSuccess(result.message || 'Appointment submitted successfully!');
  //         setError('');
  //         setDate('');
  //         setTime('');
  //       } else {
  //         setSuccess('');
  //         setError(result.message || 'Something went wrong. Please try again.');
  //       }
  //     } else if (contentType && contentType.includes('text/plain')) {
  //       const text = await response.text();
  //       console.log('Plain text response:', text);
  //       setSuccess(text);
  //       setError('');
  //       setDate('');
  //       setTime('');
  //     } else {
  //       const text = await response.text();
  //       console.log('Unexpected response:', text);
  //       setSuccess('');
  //       setError('Unexpected response format: ' + text);
  //     }
  //   } catch (err) {
  //     setSuccess('');
  //     setError('An error occurred while submitting the appointment.');
  //     console.error('Error:', err);
  //   }
  // };
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!date || !time) {
      setError('Please select both date and time.');
      return;
    }
  
    if (!user || !doctorId) {
      setError('User or Doctor details are not available.');
      return;
    }
  
    try {
      const response = await fetch('http://localhost:8080/api/appointment/post', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId: user.id,
          doctorId: Number(doctorId), // Ensure doctorId is passed as a number
          dateTime: `${date}T${time}`, // Combine date and time into a single string
        }),
      });
  
      const contentType = response.headers.get('Content-Type');
      console.log('Response Content-Type:', contentType);
  
      let result;
      if (contentType && contentType.includes('application/json')) {
        result = await response.json();
        console.log('JSON response:', result);
  
        if (response.ok) {
          setSuccess(result.message || 'Appointment submitted successfully!');
          setError('');
          setDate('');
          setTime('');
        } else {
          setSuccess('');
          setError(result.message || 'Something went wrong. Please try again.');
        }
      } else if (contentType && contentType.includes('text/plain')) {
        const text = await response.text();
        console.log('Plain text response:', text);
        setSuccess(text);
        setError('');
        setDate('');
        setTime('');
      } else {
        const text = await response.text();
        console.log('Unexpected response:', text);
        setSuccess('');
        setError('Unexpected response format: ' + text);
      }
    } catch (err) {
      setSuccess('');
      setError('An error occurred while submitting the appointment.');
      console.error('Error:', err);
    }
  };
  
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 p-6">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-semibold text-gray-800 mb-6">Book an Appointment</h1>

        {error && <p className="text-red-500 mb-4">{error}</p>}
        {success && <p className="text-green-500 mb-4">{success}</p>}

        {doctor ? (
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Doctor Information</h2>
            <div className="bg-gray-100 p-4 rounded-lg mb-6">
              <p className="mb-2"><strong>Name:</strong> {doctor.name}</p>
              <p className="mb-2"><strong>Specialty:</strong> {doctor.specialization}</p>
              <p className="mb-2"><strong>Contact:</strong> {doctor.contact}</p>
              <p className="mb-2"><strong>Description:</strong> {doctor.description}</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="date" className="block text-gray-700">Date</label>
                <input
                  type="date"
                  id="date"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  required
                />
              </div>

              <div>
                <label htmlFor="time" className="block text-gray-700">Time</label>
                <input
                  type="time"
                  id="time"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition duration-300"
              >
                Submit Appointment
              </button>
            </form>
          </div>
        ) : (
          <p>Loading doctor information...</p>
        )}
      </div>
    </div>
  );
};

export default AppointmentPage;
