// import React from 'react';
// import { Pie } from 'react-chartjs-2';
// import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from 'chart.js';
// import 'tailwindcss/tailwind.css';

// ChartJS.register(Title, Tooltip, Legend, ArcElement);

// const PieChart = () => {
 
//   const data = {
//     datasets: [
//       {
//         label: 'My Pie Chart',
//         data: [12, 19, 3],
//         backgroundColor: [
//           'rgba(255, 99, 132, 0.5)',
//           'rgba(54, 162, 235, 0.5)',
//           'rgba(255, 206, 86, 0.5)',
//           'rgba(75, 192, 192, 0.5)',
//         ],
//         borderColor: [
//           'rgba(255, 99, 132, 1)',
//           'rgba(54, 162, 235, 1)',
//           'rgba(255, 206, 86, 1)',
//           'rgba(75, 192, 192, 1)',
//         ],
//         borderWidth: 2,
//       },
//     ],
//   };

//   // Options for the pie chart
//   const options = {
//     responsive: true,
//     plugins: {
//       legend: {
//         position: 'top',
//         labels: {
//           color: '#333',
//         },
//       },
//       tooltip: {
//         callbacks: {
//           label: function (tooltipItem) {
//             return `${tooltipItem.label}: ${tooltipItem.raw}`;
//           },
//         },
//       },
//     },
//   };

//   return (
//     <div className="max-w-[420px]  p-4 h-fit">
//       <div className="bg-gray-50  rounded-lg p-6 pl-16">
//         <h2 className="text-xl font-semibold text-gray-800 mb-4">Patients Summary of June</h2>
//         <div className="h-fit">
//           <Pie data={data} options={options} />
//          <div className='mt-10 '>
//          <h1 > <span className='px-2 bg-blue-300 mx-3'></span>Total Patients</h1>
//          </div>
//          <div className='py-3 '>
//          <h1 > <span className='px-2 bg-red-300 mx-3'></span>Old Patients</h1>
//          </div>
//          <div className='py-3 '>
//          <h1 > <span className='px-2 bg-yellow-300 mx-3'></span>New Patients</h1>
//          </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PieChart;
import React, { useRef, useEffect } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';

// Register Chart.js components
Chart.register(ArcElement, Tooltip, Legend);

const RoundedDoughnutChart = () => {
    const chartRef = useRef(null);

    // Custom plugin to add rounded edges to doughnut segments
    const roundedCornersPlugin = {
        id: 'roundedDoughnut',
        afterDraw(chart) {
            const { ctx } = chart;
            chart.data.datasets.forEach((dataset, i) => {
                chart.getDatasetMeta(i).data.forEach((arc, index) => {
                    const startAngle = arc.startAngle;
                    const endAngle = arc.endAngle;
                    const outerRadius = arc.outerRadius;
                    const innerRadius = arc.innerRadius;
                    const x = arc.x;
                    const y = arc.y;
                    const backgroundColor = dataset.backgroundColor[index];

                    // Draw start edge
                    ctx.save();
                    ctx.fillStyle = backgroundColor;
                    ctx.beginPath();
                    ctx.arc(
                        x + outerRadius * Math.cos(startAngle),
                        y + outerRadius * Math.sin(startAngle),
                        (outerRadius - innerRadius) / 2,
                        0,
                        2 * Math.PI
                    );
                    ctx.fill();
                    ctx.restore();

                    // Draw end edge
                    ctx.save();
                    ctx.fillStyle = backgroundColor;
                    ctx.beginPath();
                    ctx.arc(
                        x + outerRadius * Math.cos(endAngle),
                        y + outerRadius * Math.sin(endAngle),
                        (outerRadius - innerRadius) / 2,
                        0,
                        2 * Math.PI
                    );
                    ctx.fill();
                    ctx.restore();
                });
            });
        }
    };

    useEffect(() => {
        Chart.register(roundedCornersPlugin);
    }, []);

    const data = {
        datasets: [
            {
                data: [40, 20, 20, 20],
                backgroundColor: ['#e77099', '#5da4e7', '#8f75e7', '#8fe768'],
                borderWidth: 0,
                hoverOffset: 4,
            },
        ],
    };

    const options = {
        cutout: '70%', // Cutout size for inner radius
        plugins: {
            legend: { display: false },
        },
        maintainAspectRatio: false, // Allows custom width/height
    };

    return (
        <div className="flex justify-center items-center p-6   rounded-lg">
            <div className="w-[300px] h-[300px]">
                <Doughnut ref={chartRef} data={data} options={options} />
                <p>moth</p>
            </div>
        </div>
    );
};

export default RoundedDoughnutChart;
