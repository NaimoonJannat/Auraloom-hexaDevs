'use client';
import React from "react";
import {
  FaChartBar,
  FaUsers,
  FaDollarSign,
  FaPodcast,
  FaListAlt,
  FaChartPie,
  FaCog,
  FaBell,
  FaMoneyBillWave,
  FaChartLine,
} from "react-icons/fa";
import { MdSubscriptions, MdAccountCircle } from 'react-icons/md';
import { Line, Bar, Pie, Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register components from Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const AdminDashboard = () => {
  // Sample data for charts
  const listensData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
      {
        label: 'Monthly Listens',
        data: [65, 59, 80, 81, 56, 55, 40],
        borderColor: 'rgba(75,192,192,1)',
        backgroundColor: 'rgba(75,192,192,0.2)',
        tension: 0.4,
      },
    ],
  };

  const revenueData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
      {
        label: 'Revenue',
        data: [4000, 3000, 5000, 4000, 6000, 7000, 6500],
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
        borderColor: 'rgba(54, 162, 235, 1)',
      },
      {
        label: 'Subscriptions',
        data: [100, 200, 150, 180, 300, 250, 320],
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        borderColor: 'rgba(255, 99, 132, 1)',
      },
    ],
  };

  // Sample Pie chart data for podcast categories
  const pieData = {
    labels: ['Technology', 'Health', 'Business', 'Entertainment', 'Education'],
    datasets: [
      {
        label: 'Podcast Categories',
        data: [300, 50, 100, 200, 150],
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(153, 102, 255, 0.6)',
        ],
        borderWidth: 1,
      },
    ],
  };

  // Doughnut chart for subscription types
  const doughnutData = {
    labels: ['Basic', 'Premium', 'Pro'],
    datasets: [
      {
        label: 'Subscription Types',
        data: [500, 200, 100],
        backgroundColor: [
          'rgba(255, 159, 64, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 99, 132, 0.6)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Performance Overview',
      },
    },
  };

  return (
    <div className="flex min-h-screen">
       {/* Sidebar */}
       <div className="w-1/5 bg-[#03045E] text-white flex flex-col">
                <div className="py-6 px-8 text-3xl font-bold">Auraloom</div>
                <nav className="mt-10">
                    <a href="/overview" className="flex items-center py-3 px-6 hover:bg-[#00B4D8]">
                        <FaChartLine className="mr-3" /> Overview
                    </a>
                    <a href="/subscriptions" className="flex items-center py-3 px-6 hover:bg-[#00B4D8]">
                        <MdSubscriptions className="mr-3" /> Subscriptions
                    </a>
                    <a href="/transactions" className="flex items-center py-3 px-6 hover:bg-[#00B4D8]">
                        <FaMoneyBillWave className="mr-3" /> Transactions
                    </a>
                    <a href="/customers" className="flex items-center py-3 px-6 hover:bg-[#00B4D8]">
                        <FaUsers className="mr-3" /> Customers
                    </a>
                    <a href="/creators" className="flex items-center py-3 px-6 hover:bg-[#00B4D8]">
                        <FaPodcast className="mr-3" /> Creators
                    </a>
                    <a href="/statistics" className="flex items-center py-3 px-6 hover:bg-[#00B4D8]">
                        <FaChartBar className="mr-3" /> Statistics
                    </a>
                    <a href="/settings" className="flex items-center py-3 px-6 hover:bg-[#00B4D8]">
                        <FaCog className="mr-3" /> Settings
                    </a>
                </nav>
            </div>
      {/* Main Content */}
      <div className="w-3/4 p-6 bg-gray-50">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
          <div className="bg-white shadow-lg p-6 rounded-lg">
            <FaPodcast className="text-4xl text-blue-500 mb-4" />
            <h2 className="text-xl font-bold">Total Listens</h2>
            <p className="text-gray-600 text-3xl">15,000</p>
          </div>
          <div className="bg-white shadow-lg p-6 rounded-lg">
            <FaUsers className="text-4xl text-green-500 mb-4" />
            <h2 className="text-xl font-bold">Total Users</h2>
            <p className="text-gray-600 text-3xl">1,200</p>
          </div>
          <div className="bg-white shadow-lg p-6 rounded-lg">
            <FaDollarSign className="text-4xl text-yellow-500 mb-4" />
            <h2 className="text-xl font-bold">Revenue</h2>
            <p className="text-gray-600 text-3xl">$25,000</p>
          </div>
          <div className="bg-white shadow-lg p-6 rounded-lg">
            <FaListAlt className="text-4xl text-red-500 mb-4" />
            <h2 className="text-xl font-bold">Subscriptions</h2>
            <p className="text-gray-600 text-3xl">320</p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row">
            {/* Line Chart for Monthly Listens */}
        <div className="bg-white shadow-lg p-6 rounded-lg mb-6 w-full md:w-1/2">
          <h2 className="text-2xl font-bold mb-4">Monthly Listens</h2>
          <div style={{ height: '300px' }}>
            <Line data={listensData} options={chartOptions} />
          </div>
        </div>

        {/* Bar Chart for Revenue and Subscriptions */}
        <div className="bg-white shadow-lg p-6 rounded-lg mb-6 w-full md:w-1/2">
          <h2 className="text-2xl font-bold mb-4">Revenue & Subscriptions</h2>
          <div style={{ height: '300px' }}>
            <Bar data={revenueData} options={chartOptions} />
          </div>
        </div>
        </div>

       <div className="flex flex-col md:flex-row">
         {/* Pie Chart for Podcast Categories */}
         <div className="bg-white shadow-lg p-6 rounded-lg mb-6  w-full md:w-1/2">
          <h2 className="text-2xl font-bold mb-4">Podcast Categories</h2>
          <div style={{ height: '300px' }}>
            <Pie data={pieData} options={chartOptions} />
          </div>
        </div>

        {/* Doughnut Chart for Subscription Types */}
        <div className="bg-white shadow-lg p-6 rounded-lg mb-6  w-full md:w-1/2">
          <h2 className="text-2xl font-bold mb-4">Subscription Types</h2>
          <div style={{ height: '300px' }}>
            <Doughnut data={doughnutData} options={chartOptions} />
          </div>
        </div>
       </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
