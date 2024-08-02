// HealthContext.js
import React, { createContext, useState } from 'react';

export const HealthContext = createContext();

export const HealthProvider = ({ children }) => {
  const [stepsCount, setStepsCount] = useState(5000);
  const [sleepCycle, setSleepCycle] = useState('7 hours');
  const [digitalWellbeing, setDigitalWellbeing] = useState('3 hours');
  const [rewards, setRewards] = useState(["Completed 7hours/day", "Walking 5000 steps"]);
  const [dailySteps, setDailySteps] = useState(Array.from({ length: 30 }, () => Math.floor(Math.random() * 10000))); // Mock daily steps data

  return (
    <HealthContext.Provider value={{
      stepsCount,
      sleepCycle,
      digitalWellbeing,
      rewards,
      dailySteps
    }}>
      {children}
    </HealthContext.Provider>
  );
};
