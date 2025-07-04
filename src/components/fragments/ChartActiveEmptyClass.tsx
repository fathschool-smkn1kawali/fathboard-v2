'use client';

import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const ChartActiveEmptyClass = ({ gradeData }: { gradeData?: { percentage_active_class?: string; percentage_empty_class?: string } }) => {
  const activePercentage = parseFloat(gradeData?.percentage_active_class ?? '0');
  const emptyPercentage = parseFloat(gradeData?.percentage_empty_class ?? '0');

  const data = {
    datasets: [
      {
        data: [activePercentage, emptyPercentage],
        backgroundColor: ['#28a745', '#dc3545'], // Hijau untuk aktif, merah untuk kosong
        hoverBackgroundColor: ['#45A049', '#FF1744'],
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom' as const,
      },
    },
  };

  return (
    <div className="w-full h-64">
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default ChartActiveEmptyClass;
