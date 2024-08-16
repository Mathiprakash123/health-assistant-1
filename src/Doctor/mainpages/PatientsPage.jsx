import React, { useEffect, useState } from "react";
import PatientsCard from "../PatientsCard";
import DoctorSidePanel from "./DoctorSidePanel";
import DoctorNavBar from "../DoctorNavBar";
import { useAuth } from "../../Context/AuthProvider";

const PatientsPage = () => {
  const { doctorId } = useAuth();
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    const fetchPatients = async () => {
      if (!doctorId) {
        console.error("Doctor ID is not available");
        return;
      }

      try {
        const response = await fetch(`http://localhost:8080/users/by-doctor/${doctorId}`);
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
          {patients.length > 0 ? (
            patients.map((patient) => (
              <PatientsCard
                key={patient.id}
                image="https://static.vecteezy.com/system/resources/previews/033/521/889/non_2x/cute-boy-character-adorable-boy-cartoon-charming-boy-illustration-lovable-male-character-ai-generative-png.png"
                name={patient.name}
              />
            ))
          ) : (
            <p className="col-span-3 text-center text-gray-500">No patients found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PatientsPage;
