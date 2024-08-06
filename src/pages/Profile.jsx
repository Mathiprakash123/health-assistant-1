import React from "react";

const Profile = () => {
  const mockProfileData = {
    name: "John Doe",
    age: 30,
    gender: "Male",
    height: 180,
    weight: 75,
    bloodGroup: "O+",
    medicalConditions: ["Diabetes", "Hypertension"],
    allergies: ["Peanuts", "Dust"],
    medications: ["Metformin", "Lisinopril"],
    surgicalHistory: ["Appendectomy", "Knee surgery"],
    vaccinations: ["COVID-19", "Flu"],
    profilePictureUrl: "https://bootdey.com/img/Content/avatar/avatar7.png", // Placeholder image
  };

  const {
    name,
    age,
    gender,
    height,
    weight,
    bloodGroup,
    medicalConditions,
    allergies,
    medications,
    surgicalHistory,
    vaccinations
  } = mockProfileData;

  return (
    <div className="flex flex-col lg:flex-row"> 
      <div className="lg:w-1/3 w-full p-4 lg:p-10">
        <div className=" rounded-xl shadow-lg p-10 flex h-[100%] flex-col items-center">
          <img
            src={mockProfileData.profilePictureUrl}  // Adjust as per your data
            alt="Profile"
            className="w-3/4 rounded-full h-[400px]"
          />
          <h1 className="mt-10 text-white font-bold text-3xl">Profile</h1>
          <div className="grid grid-cols-2 gap-4 mt-8 [w-80%]">
            {[
              { label: "Name", value: name },
              { label: "Age", value: age },
              { label: "Gender", value: gender },
              { label: "Height", value: height },
              { label: "Weight", value: weight },
            ].map((item) => (
              <p key={item.label} className="bg-white p-4 shadow-md rounded-lg text-center">
                {item.label}: {item.value}
              </p>
            ))}
          </div>
        </div>
      </div>

      <div className="lg:w-2/3 w-full p-4 lg:p-10">
        <div className="text-black rounded-xl shadow-lg mb-10 h-full p-10">
          <p className=" font-bold text-3xl">Medical Info</p>
          <div className="mt-6 space-y-6 ">
            {[
              { label: "Blood Group", value: bloodGroup },
              { label: "Medical Conditions", value: medicalConditions },
              { label: "Allergies", value: allergies },
            ].map((item) => (
              <div key={item.label}>
                <div className="flex justify-between items-center">
                  <p className="font-semibold text-lg">{item.label}:</p>
                  <button className="text-sm text-blue-500 hover:underline">Edit</button>
                </div>
                {Array.isArray(item.value) ? (
                  <ul className="list-disc list-inside pl-4 mt-2">
                    {item.value.map((val, index) => (
                      <li key={index}>{val}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="font-normal text-lg mt-2">{item.value}</p>
                )}
              </div>
            ))}
          </div>
        </div>

       
      </div>
    </div>
  );
};

export default Profile;
