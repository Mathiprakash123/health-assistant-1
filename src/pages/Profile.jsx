import React, { useState } from 'react';

const ProfilePage = () => {
  const [profile, setProfile] = useState({
    name: 'Mathiprakash',
    age: 30,
    height: '180 cm',
    weight: '75 kg',
    bloodGroup: 'O+',
    medicalConditions: ['None'],
    profilePicture: 'https://static.vecteezy.com/system/resources/previews/028/597/535/original/african-black-male-avatar-character-cartoon-profile-picture-ai-generated-file-no-background-png.png'
  });

  const [isEditing, setIsEditing] = useState(false);

  const [editableProfile, setEditableProfile] = useState({ ...profile });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditableProfile({ ...editableProfile, [name]: value });
  };

  const handleSave = () => {
    setProfile({ ...editableProfile });
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditableProfile({ ...profile });
    setIsEditing(false);
  };

  return (
    <div className="h-[90vh] bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full mx-32 h-fit flex items-center">
        <div className=" mb-6 w-[400px]">
          <img
            src={profile.profilePicture}
            alt="Profile"
            className="w-[400px] rounded-full   "
          />
          <div className="absolute bottom-0 right-0 bg-white p-1 rounded-full shadow-md cursor-pointer">
            <svg
              className="w-6 h-6 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15.232 12.232a2 2 0 11-2.464-2.464m4.928 0a2 2 0 11-2.464 2.464M12 4v8m0 4v1.5a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5V17a.5.5 0 01.5-.5h1a.5.5 0 01.5.5v1.5a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5V17a.5.5 0 01.5-.5h1a.5.5 0 01.5.5v1.5a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5V17"
              ></path>
            </svg>
          </div>
        </div>
        <div className="w-full space-y-4">
          <div>
            <label className="block text-gray-600 text-sm font-medium mb-1">Name</label>
            {isEditing ? (
              <input
                type="text"
                name="name"
                value={editableProfile.name}
                onChange={handleChange}
                className="border border-gray-300 rounded-md p-3 w-full"
              />
            ) : (
              <p className="text-gray-800 text-lg">{profile.name}</p>
            )}
          </div>
          <div>
            <label className="block text-gray-600 text-sm font-medium mb-1">Age</label>
            {isEditing ? (
              <input
                type="number"
                name="age"
                value={editableProfile.age}
                onChange={handleChange}
                className="border border-gray-300 rounded-md p-3 w-full"
              />
            ) : (
              <p className="text-gray-800 text-lg">{profile.age}</p>
            )}
          </div>
          <div>
            <label className="block text-gray-600 text-sm font-medium mb-1">Height</label>
            {isEditing ? (
              <input
                type="text"
                name="height"
                value={editableProfile.height}
                onChange={handleChange}
                className="border border-gray-300 rounded-md p-3 w-full"
              />
            ) : (
              <p className="text-gray-800 text-lg">{profile.height}</p>
            )}
          </div>
          <div>
            <label className="block text-gray-600 text-sm font-medium mb-1">Weight</label>
            {isEditing ? (
              <input
                type="text"
                name="weight"
                value={editableProfile.weight}
                onChange={handleChange}
                className="border border-gray-300 rounded-md p-3 w-full"
              />
            ) : (
              <p className="text-gray-800 text-lg">{profile.weight}</p>
            )}
          </div>
          <div>
            <label className="block text-gray-600 text-sm font-medium mb-1">Blood Group</label>
            {isEditing ? (
              <input
                type="text"
                name="bloodGroup"
                value={editableProfile.bloodGroup}
                onChange={handleChange}
                className="border border-gray-300 rounded-md p-3 w-full"
              />
            ) : (
              <p className="text-gray-800 text-lg">{profile.bloodGroup}</p>
            )}
          </div>
          <div>
            <label className="block text-gray-600 text-sm font-medium mb-1">Medical Conditions</label>
            {isEditing ? (
              <textarea
                name="medicalConditions"
                value={editableProfile.medicalConditions.join(', ')}
                onChange={(e) => setEditableProfile({ ...editableProfile, medicalConditions: e.target.value.split(', ') })}
                className="border border-gray-300 rounded-md p-3 w-full"
                rows="3"
              />
            ) : (
              <ul className="text-gray-800 text-lg list-disc pl-5">
                {profile.medicalConditions.map((condition, index) => (
                  <li key={index}>{condition}</li>
                ))}
              </ul>
            )}
          </div>
          <div className="flex gap-4 mt-6">
            {isEditing ? (
              <>
                <button
                  onClick={handleSave}
                  className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                >
                  Save
                </button>
                <button
                  onClick={handleCancel}
                  className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
                >
                  Cancel
                </button>
              </>
            ) : (
              <button
                onClick={() => setIsEditing(true)}
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              >
                Edit
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
