import React from "react";
import PatientsCard from "../PatientsCard";
import DoctorSidePanel from "./DoctorSidePanel";
import DoctorNavBar from "../DoctorNavBar";

const PatientsPage = () => {
  const patientDetails = [
    {
      image:
        "https://cdn.vectorstock.com/i/500p/51/51/passport-photo-of-young-handsome-man-closeup-vector-20715151.jpg",
      name: "Mathiprakash",
    },
    {
      image:
        "https://img.freepik.com/premium-vector/avatar-man-flat-design-people-characters-vector-illustration-eps-10_505557-929.jpg",
      name: "John Doe",
    },
    {
      image: "https://img.freepik.com/premium-vector/man-face_48369-3117.jpg",
      name: "Jane Doe",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHsCCTrTBIF5MEDI6FP4pzCG_wg7dTNi47Kd1A-ewEhlc9QaHOZTzB9oTi1Ykly6HLcbw&usqp=CAU",
      name: "Naruto",
    },
    {
      image:
        "https://s.yimg.com/ny/api/res/1.2/jnHw8lEfYIrNEV2iK9COxA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQ4MA--/https://media.zenfs.com/en/one37pm_956/1c5d15feb7419df60814866015eea0b9",
      name: "Minato",
    },
    {
      image:
        "https://cdn.pixabay.com/photo/2020/11/14/19/52/sasuke-5743769_1280.png",
      name: "Sasuke",
    },
    {
      image:
        "https://i.pinimg.com/236x/1f/a2/02/1fa202a04814a3854b9bced222f18b31.jpg",
      name: "Itachi",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT33KwuHTKs0cv9CSpkrS1XSLT0bYWv0trWfw&s",
      name: "Jiraya",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYRDgCzEYkqD7jWrk-tM8O5s8DfUxDEkjECA&s",
      name: "Obito",
    },
    {
      image:
        "https://i.pinimg.com/736x/7c/2e/3f/7c2e3ff166258350a787509ad23aca3d.jpg",
      name: "Kakashi",
    },
  ];

  return (
    <div>
      <DoctorNavBar 
      name='Patient'

      />
      <div className="flex ">
        <p className="w-56">
          
        </p>

        <div className="grid grid-cols-3">
          {patientDetails.map((patient, index) => (
            <PatientsCard
              key={index}
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
