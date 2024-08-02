import React, { useState, useEffect } from "react";
import axios from "axios";

const Profile = () => {
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Replace with your backend endpoint
    axios.get("http://localhost:8080/viewall")  
      .then(response => {
        setProfileData(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError("Failed to fetch profile data");
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!profileData) return <p>No profile data found</p>;

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
  } = profileData;

  return (
    <div className="flex flex-col lg:flex-row bg-[#3AAFA9] min-h-screen">
      <div className="lg:w-1/3 w-full p-4 lg:p-10">
        <div className="bg-[#238a85] rounded-xl shadow-lg p-10 flex h-[100%] flex-col items-center">
          <img
            src={profileData.profilePictureUrl}  // Adjust as per your data
            alt="Profile"
            className="w-3/4 rounded-full h-[400px]"
          />
          <h1 className="mt-10 text-white font-bold text-3xl">Profile</h1>
          <div className="grid grid-cols-2 gap-4 mt-8 w-full">
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
        <div className="bg-[#238a85] rounded-xl shadow-lg mb-10 p-10">
          <p className="text-white font-bold text-3xl">Medical Info</p>
          <div className="mt-6 space-y-6 text-white">
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

        <div className="bg-[#238a85] rounded-xl shadow-lg p-10">
          <p className="text-white font-bold text-3xl">Additional Medical Info</p>
          <div className="mt-6 space-y-6 text-white">
            {[
              { label: "Medications", value: medications },
              { label: "Surgical History", value: surgicalHistory },
              { label: "Vaccinations", value: vaccinations },
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
