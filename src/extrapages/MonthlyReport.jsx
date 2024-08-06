// MonthlyReport.js
import React from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

const MonthlyReport = () => {
  const data = {
    labels: Array.from({ length: 30 }, (_, i) => `Day ${i + 1}`), // Labels for each day of the month
    datasets: [
      {
        label: 'Step Count',
        data: Array.from({ length: 30 }, () => Math.floor(Math.random() * 10000)), // Random step count data for illustration
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
        <h2 className="text-2xl font-semibold mb-4">Monthly Step Count Report</h2>
        <div className="mb-6">
          <Line data={data} options={options} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {data.labels.map((label, index) => (
            <div key={index} className="p-4 bg-gray-200 rounded-lg">
              <h3 className="text-xl font-semibold">{label}</h3>
              <p>Steps: {data.datasets[0].data[index]}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MonthlyReport;
