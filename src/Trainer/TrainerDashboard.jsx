import React, { useEffect } from "react";
import TrainerNavBar from "./TrainerNavBar";
import HeaderCard from "../Doctor/HeaderCard";
import ClientsChart from "./ClientsChart"; // Updated to ClientsChart
import TrainerAppointment from "./TrainerAppointment"; // Updated to TrainerAppointment
import { useAuth } from '../Context/AuthProvider'; // Adjust import if necessary
import { useNavigate } from 'react-router-dom';
import ClientsList from "./ClinetsList";

const TrainerDashboard = () => {
  const { isAuthenticated } = useAuth(); // Assuming isAuthenticated is provided
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/trainer/trainer_login'); // Redirect to login if not authenticated
    }
  }, [isAuthenticated, navigate]);

  if (!isAuthenticated) {
    return null; // Optionally return a loading indicator or nothing while checking authentication
  }

  const now = new Date();
  const formattedDate = now.toLocaleDateString();
  const cardData = [
    {
      name: "Total Clients",
      count: "1500+",
      date: formattedDate,
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="fill-current"
        >
          <path d="M13 14.0619V22H4C4 17.5817 7.58172 14 12 14C12.3387 14 12.6724 14.021 13 14.0619ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13ZM17.7929 19.9142L21.3284 16.3787L22.7426 17.7929L17.7929 22.7426L14.2574 19.2071L15.6716 17.7929L17.7929 19.9142Z"></path>
        </svg>
      ),
    },
    {
      name: "New Clients Today",
      count: "30",
      date: formattedDate,
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="fill-current"
        >
          <path d="M13 14.0619V22H4C4 17.5817 7.58172 14 12 14C12.3387 14 12.6724 14.021 13 14.0619ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13ZM17.7929 19.9142L21.3284 16.3787L22.7426 17.7929L17.7929 22.7426L14.2574 19.2071L15.6716 17.7929L17.7929 19.9142Z"></path>
        </svg>
      ),
    },
    {
      name: "Upcoming Appointments",
      count: "8",
      date: formattedDate,
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="fill-current"
        >
          <path d="M20 22H4C3.44772 22 3 21.5523 3 21V8H21V21C21 21.5523 20.5523 22 20 22ZM21 6H3V3C3 2.44772 3.44772 2 4 2H20C20.5523 2 21 2.44772 21 3V6ZM7 11V15H11V11H7ZM7 17V19H17V17H7ZM13 12V14H17V12H13Z"></path>
        </svg>
      ),
    },
  ];

  return (
    <div className="grid grid-rows-[auto_1fr] gap-10 p-10">
      <div>
        <TrainerNavBar name={"Dashboard"} />
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3 ml-44">
        {cardData.map((card, index) => (
          <HeaderCard
            key={index}
            name={card.name}
            count={card.count}
            date={card.date}
            svg={card.svg}
          />
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 ml-44 bg-gray-50">
        <ClientsChart />
        <ClientsList name="Client" />
        <TrainerAppointment />
      </div>
    </div>
  );
};

export default TrainerDashboard;
