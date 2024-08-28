import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PatientsCard from '../PatientsCard';
import DoctorSidePanel from './DoctorSidePanel';
import DoctorNavBar from '../DoctorNavBar';
import { useAuth } from '../../Context/AuthProvider';

const PatientsPage = () => {
  const { isAuthenticated, doctorId } = useAuth();
  const [patients, setPatients] = useState([]);
  const [appointments, setAppointments] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/doctor/doctorlogin');
      return;
    }

    const fetchPatientsAndAppointments = async () => {
      if (!doctorId) {
        console.error("Doctor ID is not available");
        return;
      }

      try {
        const patientResponse = await fetch(`http://localhost:8080/users/by-doctor/${doctorId}`);
        if (patientResponse.ok) {
          const patientsData = await patientResponse.json();
          setPatients(patientsData);

          const userIds = patientsData.map(patient => patient.id);

          const appointmentPromises = userIds.map(userId =>
            fetch(`http://localhost:8080/api/appointment/appointments?userId=${userId}&doctorId=${doctorId}`)
          );

          const appointmentResponses = await Promise.all(appointmentPromises);
          const appointmentData = await Promise.all(
            appointmentResponses.map(response => response.json())
          );

          const allAppointments = appointmentData.flat();
          setAppointments(allAppointments);
        } else {
          console.error("Failed to fetch patients");
        }
      } catch (error) {
        console.error("Error fetching patients or appointments:", error);
      }
    };

    fetchPatientsAndAppointments();
  }, [isAuthenticated, doctorId, navigate]);

  const handleStatusChange = (appointmentId, newStatus) => {
    console.log(`Appointment ID: ${appointmentId}, New Status: ${newStatus}`);
    setAppointments(prevAppointments => 
      prevAppointments.map(appointment => 
        appointment.id === appointmentId
          ? { ...appointment, status: newStatus }
          : appointment
      ).filter(appointment => appointment.status !== 'Rejected') // Filter out rejected appointments
    );
  };

  if (!isAuthenticated) {
    return null; // Or a loading spinner if you prefer
  }

  return (
    <div>
      <DoctorNavBar name="Patients" />
      <div className="flex">
        <aside className="w-56">
          <DoctorSidePanel />
        </aside>
        <main className="flex-1 p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {appointments.length > 0 ? (
              appointments.map((appointment) => {
                const patient = patients.find(p => p.id === appointment.userId);
                return (
                  <PatientsCard
                    key={appointment.id}
                    image="https://static.vecteezy.com/system/resources/previews/033/521/889/non_2x/cute-boy-character-adorable-boy-cartoon-charming-boy-illustration-lovable-male-character-ai-generative-png.png"
                    name={patient ? patient.name : 'Unknown'}
                    appointmentId={appointment.id}
                    patientId={appointment.userId}
                    additionalInfo={`Date: ${appointment.date}, Time: ${appointment.time}`}
                    onStatusChange={handleStatusChange}
                  />
                );
              })
            ) : (
              <p className="col-span-3 text-center text-gray-500">No appointments found</p>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default PatientsPage;
