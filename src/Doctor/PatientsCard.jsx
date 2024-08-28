import React, { useState, useEffect } from 'react';

const PatientsCard = ({ image, name, appointmentId, patientId, additionalInfo, onStatusChange }) => {
  const initialStatus = localStorage.getItem(`status_${appointmentId}`) || 'Pending';
  const [status, setStatus] = useState(initialStatus);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    console.log(`Current status of appointment ${appointmentId}:`, status);
    if (status !== 'Pending') {
      if (onStatusChange) {
        console.log(`Notifying status change for appointment ${appointmentId}: ${status}`);
        onStatusChange(appointmentId, status);
      }
      localStorage.setItem(`status_${appointmentId}`, status);
      if (status === 'Rejected') {
        console.log(`Hiding card for appointment ${appointmentId} as status is Rejected`);
        setVisible(false);
      }
    }
  }, [status, appointmentId, onStatusChange]);

  const handleAccept = async () => {
    if (!appointmentId) {
      console.error("Appointment ID is missing");
      return;
    }
    try {
      console.log(`Sending accept request for appointment ${appointmentId}`);
      await fetch(`http://localhost:8080/api/appointment/accept/${appointmentId}`, { method: 'POST' });
      console.log("Appointment accepted successfully");
      setStatus('Accepted');
    } catch (error) {
      console.error("Failed to accept appointment", error);
    }
  };

  const handleReject = async () => {
    if (!appointmentId) {
      console.error("Appointment ID is missing");
      return;
    }
    try {
      console.log(`Sending reject request for appointment ${appointmentId}`);
      await fetch(`http://localhost:8080/api/appointment/reject/${appointmentId}`, { method: 'POST' });
      console.log("Appointment rejected successfully");
      setStatus('Rejected');
    } catch (error) {
      console.error("Failed to reject appointment", error);
    }
  };

  if (!visible) {
    console.log(`Card for appointment ${appointmentId} is not visible`);
    return null;
  }

  return (
    <div className="mx-4 my-4 flex justify-center">
      <div className="bg-white shadow-lg rounded-lg w-80 overflow-hidden">
        <img
          src={image}
          className="w-full h-48 object-cover"
          alt={name}
        />
        <div className="p-4 text-center">
          <p className="text-xl font-semibold text-gray-800 mb-2">{name}</p>
          {additionalInfo && <p className="text-gray-600 mb-4">{additionalInfo}</p>}
          <div className="flex justify-center space-x-4 mb-4">
            {status === 'Pending' && (
              <>
                <button 
                  onClick={handleAccept} 
                  className="bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-lg transition duration-300 ease-in-out"
                >
                  Accept
                </button>
                <button 
                  onClick={handleReject} 
                  className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-lg transition duration-300 ease-in-out"
                >
                  Reject
                </button>
              </>
            )}
            {status === 'Accepted' && (
              <button 
                onClick={handleReject} 
                className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-lg transition duration-300 ease-in-out"
              >
                Reject
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientsCard;
