// HomePage.js
import React from "react";
import { Link } from "react-router-dom";
const HomePage = () => {
  const userName = "Mathiprakash";
  const stepsCount = 5000;
  const sleepCycle = "7 hours";
  const digitalWellbeing = "3 hours";
  const rewards = ["Completed 7hours/day", "Walking 5000 steps"];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="bg-gradient-to-r from-blue-500 to-green-500 p-6 rounded-lg shadow-lg text-white text-center">
        <h1 className="text-4xl font-bold mb-2">Welcome, {userName}!</h1>
        <p className="text-lg mb-4">
          Your personal health management dashboard
        </p>
       
          <img
            src="https://png.pngtree.com/png-vector/20220814/ourmid/pngtree-passport-photo-of-young-handsome-man-in-blue-checkered-shirt-close-png-image_5861432.png"
            alt="Welcome Image"
            className="mx-auto rounded-full border-4 border-white"
          />
       
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-8">
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
        <Link to={'/report'}><img
            src="https://thumbs.dreamstime.com/b/legs-guy-girl-sports-shoes-feet-sneakers-green-unisex-sneakers-modern-fashionable-sneakers-lace-up-shoes-fashion-291158913.jpg"
            alt="Steps Count"
            className="mx-auto mb-4"
          />
           </Link>
          <h2 className="text-2xl font-bold mb-2">Steps Count</h2>
          <p className="text-xl">{stepsCount} steps</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <img
            src="https://cdn.pixabay.com/photo/2020/11/12/11/15/sleep-5735224_1280.png"
            alt="Sleep Cycle"
            className="mx-auto mb-4"
          />
          <h2 className="text-2xl font-bold mb-2">Sleep Cycle</h2>
          <p className="text-xl">{sleepCycle}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <img
            src="https://swgfl.org.uk/assets/images/digital-wellbeing-1-m.jpg"
            alt="Digital Wellbeing"
            className="mx-auto mb-4"
          />
          <h2 className="text-2xl font-bold mb-2">Digital Wellbeing</h2>
          <p className="text-xl">{digitalWellbeing} screen time</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <img
            src="https://media.istockphoto.com/id/1369741435/photo/hands-holding-golden-trophy-cup-on-white-background.jpg?s=612x612&w=0&k=20&c=3vsysxc4ZAo7tCzcyJscBeXcofP-uzg6E8LVu2Vt9Bw="
            alt="Rewards"
            className="mx-auto mb-4"
          />
          <h2 className="text-2xl font-bold mb-2">Rewards</h2>
          <ul className="list-disc list-inside text-left">
            {rewards.map((reward, index) => (
              <li key={index} className="text-xl">
                {reward}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
