import React, { useEffect } from "react";
import { useAuth } from '../Context/AuthProvider'; // Adjust import if necessary
import { useNavigate } from 'react-router-dom';

const clients = [
  {
    id: 1,
    image: "https://cdn.vectorstock.com/i/500p/51/51/passport-photo-of-young-handsome-man-closeup-vector-20715151.jpg",
    name: "Mathiprakash",
    goal: "Weight Loss",
    time: "10:00 AM",
  },
  {
    id: 2,
    image: "https://img.freepik.com/premium-vector/avatar-man-flat-design-people-characters-vector-illustration-eps-10_505557-929.jpg",
    name: "John Doe",
    goal: "Strength Gain",
    time: "11:00 AM",
  },
  {
    id: 3,
    image: "https://img.freepik.com/premium-vector/man-face_48369-3117.jpg",
    name: "Jane Doe",
    goal: "Weight Loss",
    time: "12:00 PM",
  },
  {
    id: 4,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHsCCTrTBIF5MEDI6FP4pzCG_wg7dTNi47Kd1A-ewEhlc9QaHOZTzB9oTi1Ykly6HLcbw&usqp=CAU",
    name: "Naruto",
    goal: "Strength Gain",
    time: "01:00 PM",
  },
  {
    id: 5,
    image: "https://s.yimg.com/ny/api/res/1.2/jnHw8lEfYIrNEV2iK9COxA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQ4MA--/https://media.zenfs.com/en/one37pm_956/1c5d15feb7419df60814866015eea0b9",
    name: "Minato",
    goal: "Weight Loss",
    time: "02:00 PM",
  },
];

const ClientsList = () => {
  const { isAuthenticated } = useAuth(); 
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/doctor/doctorlogin'); 
    }
  }, [isAuthenticated, navigate]);

  if (!isAuthenticated) {
    return null; 
  }

  return (
    <div className="bg-blue-50 px-6 py-4 w-[450px] h-fit mx-10 my-8 rounded-lg shadow-md">
      <h1 className="text-blue-600 text-xl font-semibold mb-4">Today's Client Sessions</h1>
      <table className="w-full max-w-[600px] border-separate border-spacing-2">
        <thead>
          <tr className="text-gray-800">
            <th className="p-3 rounded-tl-lg">Image</th>
            <th className="p-3">Name/Goal</th>
            <th className="p-3 rounded-tr-lg">Time</th>
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
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ClientsList;
