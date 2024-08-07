import React from 'react'
import PatientsCard from '../Doctor/PatientsCard';
import DoctorNavBar from '../Doctor/DoctorNavBar';
const client = [
    {
      id: 1,
      image: "https://cdn.vectorstock.com/i/500p/51/51/passport-photo-of-young-handsome-man-closeup-vector-20715151.jpg",
      name: "Mathiprakash",
      diagnosis: "Flu",
      time: "10:00 AM",
    },
    {
      id: 2,
      image: "https://img.freepik.com/premium-vector/avatar-man-flat-design-people-characters-vector-illustration-eps-10_505557-929.jpg",
      name: "John Doe",
      diagnosis: "Cold",
      time: "11:00 AM",
    },
    {
      id: 3,
      image: "https://img.freepik.com/premium-vector/man-face_48369-3117.jpg",
      name: "Jane Doe",
      diagnosis: "Allergy",
      time: "12:00 PM",
    },
    {
      id: 4,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHsCCTrTBIF5MEDI6FP4pzCG_wg7dTNi47Kd1A-ewEhlc9QaHOZTzB9oTi1Ykly6HLcbw&usqp=CAU",
      name: "Naruto",
      diagnosis: "Headache",
      time: "01:00 PM",
    },
    {
      id: 5,
      image: "https://s.yimg.com/ny/api/res/1.2/jnHw8lEfYIrNEV2iK9COxA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQ4MA--/https://media.zenfs.com/en/one37pm_956/1c5d15feb7419df60814866015eea0b9",
      name: "Minato",
      diagnosis: "Back Pain",
      time: "02:00 PM",
    },
    
  ];
const ClientsPage = () => {
  return (
    <div>
    <DoctorNavBar 
    name='Clients'

    />
    <div className="flex ">
      <p className="w-56">
        
      </p>

      <div className="grid grid-cols-3">
        {client.map((patient, index) => (
          <PatientsCard
            key={index}
            image={patient.image}
            name={patient.name}
          />
        ))}
      </div>
    </div>
  </div>
  )
}

export default ClientsPage