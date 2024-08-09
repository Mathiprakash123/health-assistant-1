import React, { useState, useEffect } from 'react';
import { useAuth } from '../Context/AuthProvider';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const ProfilePage = () => {
  const [profile, setProfile] = useState({
    firstname: '',
    age: 0,
    height: 0,
    weight: 0,
    bloodGroup: '',
    medicalConditions: [],
  });

  const { isAuthenticated, logout, email } = useAuth();
  const navigate = useNavigate();

  const [isEditing, setIsEditing] = useState(false);
  const [editableProfile, setEditableProfile] = useState({ ...profile });

  useEffect(() => {
    if (email) {
      axios.get(`http://localhost:8080/profile`, { params: { email: email } })
        .then(response => {
          const data = response.data;
          setProfile({
            ...data,
            medicalConditions: data.medicalConditions || []
          });
          setEditableProfile({
            ...data,
            medicalConditions: data.medicalConditions || []
          });
        })
        .catch(error => {
          console.error('Error fetching profile:', error);
        });
    }
  }, [email]);

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

  const handleSignOut = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-4xl">
        <div className="flex flex-col items-center mb-8">
          <img
            src='https://static.vecteezy.com/system/resources/previews/028/597/535/original/african-black-male-avatar-character-cartoon-profile-picture-ai-generated-file-no-background-png.png'
            alt="Profile"
            className="w-32 h-32 rounded-full object-cover"
          />
          <div className="relative mt-4">
            <div className="absolute bottom-0 right-0 bg-white p-2 rounded-full shadow-md cursor-pointer">
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
        </div>
        <div className="space-y-6">
          {Object.keys(profile).map((key) => (
            key !== 'medicalConditions' && (
              <div key={key} className={`flex items-center ${isEditing ? '' : 'border-b-2 border-gray-300'} pb-4`}>
                <label className="text-gray-600 text-sm font-medium w-1/3">{key.charAt(0).toUpperCase() + key.slice(1)}:</label>
                {isEditing ? (
                  <input
                    type={key === 'age' || key === 'height' || key === 'weight' ? 'number' : 'text'}
                    name={key}
                    value={editableProfile[key]}
                    onChange={handleChange}
                    className="border border-gray-300 rounded-md p-3 w-2/3"
                  />
                ) : (
                  <p className="text-gray-800 text-lg w-2/3">{profile[key]}</p>
                )}
              </div>
            )
          ))}
          <div className={`flex flex-col space-y-4 ${isEditing ? '' : 'border-b-2 border-gray-300'} pb-4`}>
            <label className="text-gray-600 text-sm font-medium mb-1">Medical Conditions:</label>
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
                {(profile.medicalConditions || []).map((condition, index) => (
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
          {isAuthenticated && (
            <button
              onClick={handleSignOut}
              className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
            >
              Sign Out
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
