import React, { useEffect } from "react";

import { useAuth } from '../Context/AuthProvider'; // Adjust import if necessary
import { useNavigate } from 'react-router-dom';
import DoctorNavBar from "../Doctor/DoctorNavBar";

const TrainerPayment = () => {
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

  const patients = [
    {
      id: 1,
      name: "John Doe",
   
      date: "2024-08-01",
      fees: "$100",
      paidStatus: "Paid",
    },
    {
      id: 2,
      name: "Jane Smith",
      date: "2024-08-02",
      fees: "$200",
      paidStatus: "Unpaid",
    },
    {
      id: 3,
      name: "Alice Johnson",
      date: "2024-08-03",
      fees: "$150",
      paidStatus: "Paid",
    },
    {
      id: 4,
      name: "John Doe",
      date: "2024-08-01",
      fees: "$100",
      paidStatus: "Paid",
    },
    {
      id: 5,
      name: "Jane Smith",
      date: "2024-08-02",
      fees: "$200",
      paidStatus: "Unpaid",
    },
    {
      id: 6,
      name: "Alice Johnson",
      date: "2024-08-03",
      fees: "$150",
      paidStatus: "Paid",
    },
  ];

  const handleStatusClick = (status) => {
    if (status === "Unpaid") {
      alert("Send a payment reminder notification.");
    }
  };

  return (
    <div className="">
      <DoctorNavBar name={"Bills"} />
      <div>
        <table className="bg-blue-50 mx-auto mt-32 w-[1200px] shadow-md">
          <thead>
            <tr>
              <th className="px-6 py-3 border-b-2 border-gray-200 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                #
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-200 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                Clients's Name
              </th>
              {/* <th className="px-6 py-3 border-b-2 border-gray-200 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                Visit Type
              </th> */}
              <th className="px-6 py-3 border-b-2 border-gray-200 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                Date
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-200 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                Fees
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-200 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                Paid Status
              </th>
            </tr>
          </thead>
          <tbody>
            {patients.map((patient) => (
              <tr key={patient.id}>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  {patient.id}
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  {patient.name}
                </td>
                {/* <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  {patient.visitType}
                </td> */}
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  {patient.date}
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  {patient.fees}
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  <button
                    className={`px-6 py-3 rounded-md text-white w-[100px] ${
                      patient.paidStatus === "Paid"
                        ? "bg-green-500"
                        : "bg-red-500"
                    }`}
                    onClick={() => handleStatusClick(patient.paidStatus)}
                  >
                    {patient.paidStatus}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TrainerPayment;
