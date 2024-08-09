import React, { useState } from 'react';

const patients = [
  {
    id: 6,
    image: "https://cdn.pixabay.com/photo/2020/11/14/19/52/sasuke-5743769_1280.png",
    name: "Rohith",
    diagnosis: "Corona",
    time: "03:00 PM",
  },
  {
    id: 7,
    image: "https://i.pinimg.com/236x/1f/a2/02/1fa202a04814a3854b9bced222f18b31.jpg",
    name: "Itachi",
    diagnosis: "Cough",
    time: "04:00 PM",
  },
  {
    id: 8,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT33KwuHTKs0cv9CSpkrS1XSLT0bYWv0trWfw&s",
    name: "Jiraya",
    diagnosis: "Sore Throat",
    time: "05:00 PM",
  },
  {
    id: 9,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYRDgCzEYkqD7jWrk-tM8O5s8DfUxDEkjECA&s",
    name: "Obito",
    diagnosis: "Fever",
    time: "06:00 PM",
  },
  {
    id: 10,
    image: "https://i.pinimg.com/736x/7c/2e/3f/7c2e3ff166258350a787509ad23aca3d.jpg",
    name: "Kakashi",
    diagnosis: "Chest Pain",
    time: "07:00 PM",
  },
];

const AppointmentRequest = () => {
  const [appointmentsStatus, setAppointmentsStatus] = useState({});

  const handleResponse = (id, response) => {
    alert(`Appointment ${response} for patient with ID ${id}`);
    setAppointmentsStatus((prev) => ({ ...prev, [id]: response }));
  };

  return (
    <div className="bg-blue-50 px-5 py-4 w-[450px] h-fit mx-10 my-8 rounded-lg shadow-md">
      <h1 className="text-blue-600 text-xl font-semibold mb-4">Appointment Requests</h1>
      <table className="w-full max-w-[600px] border-separate border-spacing-2">
        <thead>
          <tr className="text-gray-800">
            <th className="p-3 rounded-tl-lg">Image</th>
            <th className="p-3">Name/Diagnosis</th>
            <th className="p-3">Time</th>
            <th className="p-3 rounded-tr-lg">Actions</th>
          </tr>
        </thead>
        <tbody>
          {patients.map((patient) => (
            <tr key={patient.id}>
              <td className="p-2">
                <img
                  src={patient.image}
                  alt="Patient"
                  className="w-14 h-14 rounded-full border-2 border-gray-300"
                />
              </td>
              <td className="p-2 flex flex-col">
                <span className="font-semibold text-blue-600">{patient.name}</span>
                <span>{patient.diagnosis}</span>
              </td>
              <td className="p-2">{patient.time}</td>
              <td className="p-2 flex space-x-2">
                {appointmentsStatus[patient.id] === undefined && (
                  <>
                    <button
                      onClick={() => handleResponse(patient.id, 'Accepted')}
                      className="bg-green-500 text-white py-1 px-3 rounded hover:bg-green-600"
                    >
                      Yes
                    </button>
                    <button
                      onClick={() => handleResponse(patient.id, 'Rejected')}
                      className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600"
                    >
                      No
                    </button>
                  </>
                )}
                {appointmentsStatus[patient.id] === 'Accepted' && (
                  <span className="text-green-600 font-semibold">Accepted</span>
                )}
                {appointmentsStatus[patient.id] === 'Rejected' && (
                  <span className="text-red-600 font-semibold">Rejected</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AppointmentRequest;
