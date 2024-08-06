// HomePage.js
import React from "react";
import { Link } from "react-router-dom";
import DashboardItem from "../extrapages/DashboardItem";


const Dashboard = () => {
  const userName = "Mathiprakash";
  const stepsCount = 5000;
  const sleepCycle = "7 hours";
  const digitalWellbeing = "3 hours";
  const rewards = ["Completed 7 hours/day", "Walking 5000 steps"];

  return (
    <div className="min-h-screen p-6">
      <div className="bg-gradient-to-r from-blue-500 to-green-500 p-6 mx-10 rounded-lg shadow-lg text-white text-center mt-20">
        <h1 className="text-4xl font-bold mb-2">Welcome, {userName}!</h1>
        <p className="text-lg mb-4">
          Your personal health management dashboard
        </p>
        <img
          src="https://png.pngtree.com/png-vector/20220814/ourmid/pngtree-passport-photo-of-young-handsome-man-in-blue-checkered-shirt-close-png-image_5861432.png"
          alt="Welcome Image"
          className="mx-auto rounded-full border-4 border-white "
        />
      </div>
      <p className="text-primary mt-20 mx-10 text-4xl font-bold">Daily Activities </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mx-10 text-white my-5">
       
        <DashboardItem
          title="Steps Count"
          value={`${stepsCount} steps`}
          imageSrc="https://thumbs.dreamstime.com/b/legs-guy-girl-sports-shoes-feet-sneakers-green-unisex-sneakers-modern-fashionable-sneakers-lace-up-shoes-fashion-291158913.jpg"
          link="/report"
          altText="Steps Count"
        />
        <DashboardItem
          title="Sleep Cycle"
          value={sleepCycle}
          imageSrc="https://cdn.pixabay.com/photo/2020/11/12/11/15/sleep-5735224_1280.png"
          altText="Sleep Cycle"
          link={'/report'}
        />
        <DashboardItem
          title="Digital Wellbeing"
          value={`${digitalWellbeing} screen time`}
          imageSrc="https://swgfl.org.uk/assets/images/digital-wellbeing-1-m.jpg"
          altText="Digital Wellbeing"
          
        />
        <DashboardItem
          title="Rewards"
          value={rewards}
          imageSrc="https://media.istockphoto.com/id/1369741435/photo/hands-holding-golden-trophy-cup-on-white-background.jpg?s=612x612&w=0&k=20&c=3vsysxc4ZAo7tCzcyJscBeXcofP-uzg6E8LVu2Vt9Bw="
          altText="Rewards"
        />
      </div>
    </div>
  );
};

export default Dashboard;
