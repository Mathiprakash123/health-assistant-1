import React, { useEffect, useState } from "react";

import PatientsCard from "../PatientsCard";
import DoctorSidePanel from "./DoctorSidePanel";
import DoctorNavBar from "../DoctorNavBar";
import { useAuth } from "../../Context/AuthProvider";

const PatientsPage = () => {
  const { doctorId } = useAuth(); // Use doctorId from context
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    const fetchPatients = async () => {
      if (!doctorId) {
        console.error("Doctor ID is not available");
        return;
      }

      try {
        const response = await fetch(`http://localhost:8080/api/doctors/${doctorId}/patients`);
        if (response.ok) {
          const data = await response.json();
          setPatients(data);
        } else {
          console.error("Failed to fetch patients");
        }
      } catch (error) {
        console.error("Error fetching patients:", error);
      }
    };

    fetchPatients();
  }, [doctorId]);

  return (
    <div>
      <DoctorNavBar name="Patients" />
      <div className="flex">
        <p className="w-56">
          <DoctorSidePanel />
        </p>
        <div className="grid grid-cols-3 gap-4 p-4">
          {patients.map((patient) => (
            <PatientsCard
              key={patient.id}
              image={patient.image}
              name={patient.name}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PatientsPage;
