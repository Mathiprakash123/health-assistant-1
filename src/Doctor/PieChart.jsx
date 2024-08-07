import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import 'tailwindcss/tailwind.css';

ChartJS.register(Title, Tooltip, Legend, ArcElement);

const PieChart = () => {
 
  const data = {
    datasets: [
      {
        label: 'My Pie Chart',
        data: [12, 19, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.5)',
          'rgba(54, 162, 235, 0.5)',
          'rgba(255, 206, 86, 0.5)',
          'rgba(75, 192, 192, 0.5)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
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
    <div className="max-w-[420px] ml-60 p-4 h-fit">
      <div className="bg-gray-50  rounded-lg p-6 pl-16">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Patients Summary of June</h2>
        <div className="h-fit">
          <Pie data={data} options={options} />
         <div className='mt-10 '>
         <h1 > <span className='px-2 bg-blue-300 mx-3'></span>Total Patients</h1>
         </div>
         <div className='py-3 '>
         <h1 > <span className='px-2 bg-red-300 mx-3'></span>Old Patients</h1>
         </div>
         <div className='py-3 '>
         <h1 > <span className='px-2 bg-yellow-300 mx-3'></span>New Patients</h1>
         </div>
        </div>
      </div>
    </div>
  );
};

export default PieChart;
