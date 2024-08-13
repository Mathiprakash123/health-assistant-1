import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import 'tailwindcss/tailwind.css';

ChartJS.register(Title, Tooltip, Legend, ArcElement);

const ClientsChart = () => {
  const data = {
    datasets: [
      {
        label: 'Gym Clients Summary',
        data: [15, 25, 10], // Example data: [Weight Loss, Strength Gain, Maintenance]
        backgroundColor: [
          'rgba(255, 99, 132, 0.5)',
          'rgba(54, 162, 235, 0.5)',
          'rgba(255, 206, 86, 0.5)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
        ],
        borderWidth: 2,
      },
    ],
  };

  // Options for the pie chart
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: '#333',
        },
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return `${tooltipItem.label}: ${tooltipItem.raw}`;
          },
        },
      },
    },
  };

  return (
    <div className="max-w-[420px] p-4 h-fit">
      <div className="bg-gray-50 rounded-lg p-6 pl-16">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Clients Summary</h2>
        <div className="h-fit">
          <Pie data={data} options={options} />
          <div className='mt-10'>
            <h1><span className='px-2 bg-blue-300 mx-3'></span>Weight Loss</h1>
          </div>
          <div className='py-3'>
            <h1><span className='px-2 bg-red-300 mx-3'></span>Strength Gain</h1>
          </div>
          <div className='py-3'>
            <h1><span className='px-2 bg-yellow-300 mx-3'></span>Maintenance</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientsChart;
