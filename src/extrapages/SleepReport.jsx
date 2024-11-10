import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

const MonthlySleepReport = () => {
  // Load sleep hours from localStorage if available, else initialize with defaults
  const loadData = () => {
    const savedSleepHours = localStorage.getItem('sleepHours');
    return savedSleepHours ? JSON.parse(savedSleepHours) : Array(30).fill(0); // 30 days of 0 hours
  };

  // State to store sleep hours
  const [sleepHours, setSleepHours] = useState(loadData);

  // Effect to save sleepHours to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('sleepHours', JSON.stringify(sleepHours)); // Save to localStorage
  }, [sleepHours]);

  // Handle sleep hours change for a specific day, ensuring it does not exceed 24 hours
  const handleSleepHoursChange = (index, value) => {
    const newSleepHours = [...sleepHours];
    newSleepHours[index] = Math.min(value, 24); // Ensure sleep hours do not exceed 24
    setSleepHours(newSleepHours);
  };

  const data = {
    labels: Array.from({ length: 30 }, (_, i) => `Day ${i + 1}`), // Labels for each day of the month
    datasets: [
      {
        label: 'Sleep Hours',
        data: sleepHours, // Using the state for sleep hours
        fill: false,
        backgroundColor: 'rgba(153, 102, 255, 0.6)',
        borderColor: 'rgba(153, 102, 255, 1)',
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        max: 24, // Max value for sleep hours is 24
      },
    },
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Monthly Sleep Report</h2>
        <div className="mb-6">
          <Line data={data} options={options} />
        </div>

        {/* Input section for each day */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {data.labels.map((label, index) => (
            <div key={index} className="p-4 bg-gray-200 rounded-lg">
              <h3 className="text-xl font-semibold">{label}</h3>
              <input
                type="number"
                value={sleepHours[index]}
                onChange={(e) => handleSleepHoursChange(index, parseFloat(e.target.value))}
                className="w-full p-2 mt-2 border rounded-md"
                min="0"
                max="24"
                placeholder="Enter sleep hours (max 24)"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MonthlySleepReport;
