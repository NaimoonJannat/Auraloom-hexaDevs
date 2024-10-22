"use client"
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ReceivableGrowth = () => {
    // Fake data for the chart
    const data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
            {
                label: 'Receivable Growth ($)',
                data: [50000, 150000, 300000, 600000, 250000, 800000, 400000, 700000, 500000, 900000, 600000, 1000000],
                backgroundColor: '#60a5fa', // Tailwind yellow
                borderColor: '#1f2937', // Tailwind gray-800
                borderWidth: 2,
            },
        ],
    };

    // Chart options
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Receivable Growth - 2024',
            },
        },
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    callback: function (value) {
                        return `$${value / 1000}K`; // Display in K units
                    },
                },
            },
        },
    };

    return (
        <div className="p-4 bg-white rounded-lg shadow-sm">
            <Bar data={data} options={options} />
        </div>
    );
};

export default ReceivableGrowth;
