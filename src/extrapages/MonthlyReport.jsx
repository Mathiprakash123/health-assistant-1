import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

const MonthlyReport = () => {
  // Load step counts from localStorage if available, else initialize with zeros
  const loadStepCounts = () => {
    const savedStepCounts = localStorage.getItem('stepCounts');
    if (savedStepCounts) {
      return JSON.parse(savedStepCounts); // Parse and return the saved data
    }
    return Array(30).fill(0); // Default to 30 days of zeros if no saved data
  };

  // State to store step counts
  const [stepCounts, setStepCounts] = useState(loadStepCounts);

  // Effect to save stepCounts to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('stepCounts', JSON.stringify(stepCounts)); // Save to localStorage
  }, [stepCounts]); // This runs every time stepCounts changes

  // Update step count for a specific day
  const handleStepCountChange = (index, value) => {
    const newStepCounts = [...stepCounts];
    newStepCounts[index] = value;
    setStepCounts(newStepCounts);
  };

  const data = {
    labels: Array.from({ length: 30 }, (_, i) => `Day ${i + 1}`), // Labels for each day of the month
    datasets: [
      {
        label: 'Step Count',
        data: stepCounts, // Using the state for step counts
        fill: false,
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Monthly Report</h2>
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
                value={stepCounts[index]}
                onChange={(e) => handleStepCountChange(index, parseInt(e.target.value))}
                className="w-full p-2 mt-2 border rounded-md"
                min="0"
                placeholder="Enter steps"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MonthlyReport;
