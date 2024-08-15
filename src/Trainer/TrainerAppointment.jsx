import React, { useState } from 'react';

const clients = [
  {
    id: 1,
    image: "https://cdn.pixabay.com/photo/2020/11/14/19/52/sasuke-5743769_1280.png",
    name: "Rohith",
    goal: "Weight Loss",
    time: "03:00 PM",
  },
  {
    id: 2,
    image: "https://i.pinimg.com/236x/1f/a2/02/1fa202a04814a3854b9bced222f18b31.jpg",
    name: "Itachi",
    goal: "Strength Gain",
    time: "04:00 PM",
  },
  {
    id: 3,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT33KwuHTKs0cv9CSpkrS1XSLT0bYWv0trWfw&s",
    name: "Jiraya",
    goal: "Weight Loss",
    time: "05:00 PM",
  },
  {
    id: 4,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYRDgCzEYkqD7jWrk-tM8O5s8DfUxDEkjECA&s",
    name: "Obito",
    goal: "Strength Gain",
    time: "06:00 PM",
  },
  
];

const TrainerAppointment = () => {
  const [clientsStatus, setClientsStatus] = useState({});

  const handleResponse = (id, response) => {
    // alert(`Session ${response} for client with ID ${id}`);
    setClientsStatus((prev) => ({ ...prev, [id]: response }));
  };

  return (
    <div className="bg-blue-50 px-5 py-4 w-[450px] h-[540px] mx-10 my-8 rounded-lg shadow-md">
      <h1 className="text-blue-600 text-xl font-semibold mb-4">Client Sessions</h1>
      <table className="w-full max-w-[600px] border-separate border-spacing-2">
        <thead>
          <tr className="text-gray-800">
            <th className="p-3 rounded-tl-lg">Image</th>
            <th className="p-3">Name/Goal</th>
            <th className="p-3">Time</th>
            <th className="p-3 rounded-tr-lg">Actions</th>
          </tr>
        </thead>
        <tbody>
          {clients.map((client) => (
            <tr key={client.id}>
              <td className="p-2">
                <img
                  src={client.image}
                  alt="Client"
                  className="w-14 h-14 rounded-full border-2 border-gray-300"
                />
              </td>
              <td className="p-2 flex flex-col">
                <span className="font-semibold text-blue-600">{client.name}</span>
                <span>{client.goal}</span>
              </td>
              <td className="p-2">{client.time}</td>
              <td className="p-2 flex space-x-2">
                {clientsStatus[client.id] === undefined && (
                  <>
                    <button
                      onClick={() => handleResponse(client.id, 'Completed')}
                      className="bg-green-500 text-white py-1 px-3 rounded hover:bg-green-600"
                    >
                      Yes
                    </button>
                    <button
                      onClick={() => handleResponse(client.id, 'Missed')}
                      className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600"
                    >
                      No
                    </button>
                  </>
                )}
                {clientsStatus[client.id] === 'Completed' && (
                  <span className="text-green-600 font-semibold">Yes</span>
                )}
                {clientsStatus[client.id] === 'Missed' && (
                  <span className="text-red-600 font-semibold">No</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TrainerAppointment;
