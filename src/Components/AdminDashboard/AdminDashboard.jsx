'use client';
import React from "react";
import CountUp from 'react-countup';
import {
  FaChartBar,
  FaUsers,
  FaDollarSign,
  FaPodcast,
  FaListAlt,
  FaChartLine,
  FaCog,
  FaMoneyBillWave,
} from "react-icons/fa";
import { MdSubscriptions } from 'react-icons/md';
import { Line, Pie, Doughnut } from "react-chartjs-2";
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
import Image from "next/image";

// Register components from Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const AdminDashboard = () => {
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

  const creatorsData = [
    {
      photo: 'https://wallpapers.com/images/featured/cool-profile-picture-87h46gcobjl5e4xu.jpg',
      name: 'Mahbub Sarwar Shafi',
      podcasts: 15,
      profileLink: '/creators/shafi',
    },
    {
      photo: 'https://i.pinimg.com/236x/db/1f/9a/db1f9a3eaca4758faae5f83947fa807c.jpg',
      name: 'Jannatul Ferdous Mirza',
      podcasts: 10,
      profileLink: '/creators/mirza',
    },
    {
      photo: 'https://i.pinimg.com/736x/51/ec/d0/51ecd0532e8d08227b15fa65a55cf522.jpg',
      name: 'Sayeed Hossain Sagor',
      podcasts: 20,
      profileLink: '/creators/sagor',
    },
  ];

  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
        {/* Sidebar */}
        <div className="w-full lg:w-1/5 bg-[#03045E] text-white flex flex-col">
       <div className="py-6 px-8 text-3xl font-bold">Auraloom</div>
        <div className="py-6 px-8 flex items-center flex-col">
          <Image
            src="https://i.pinimg.com/564x/3c/01/76/3c017689a6f12b7821ae4de3967fb35c.jpg"
            alt="Profile Picture"
            width={80}
            height={80}
            className="rounded-full"
          />
          <div className="ml-4 text-center">
            <p className="text-lg font-semibold">Naimoon Jannat Prapti</p>
            <p className="text-sm text-gray-300">Admin</p>
          </div>
        </div>
        
        <nav className="mt-10">
          {/* Sidebar links */}
          <a href="/overview" className="flex items-center py-3 px-6 text-lg hover:bg-[#00B4D8]">
            <FaChartLine className="mr-3" /> Overview
          </a>
          <a href="/subscriptions" className="flex items-center py-3 text-lg px-6 hover:bg-[#00B4D8]">
            <MdSubscriptions className="mr-3" /> Subscriptions
          </a>
          <a href="/transactions" className="flex items-center py-3 text-lg px-6 hover:bg-[#00B4D8]">
            <FaMoneyBillWave className="mr-3" /> Transactions
          </a>
          <a href="/customers" className="flex items-center py-3 px-6 text-lg hover:bg-[#00B4D8]">
            <FaUsers className="mr-3" /> Customers
          </a>
          <a href="/creators" className="flex items-center py-3 px-6 text-lg hover:bg-[#00B4D8]">
            <FaPodcast className="mr-3" /> Creators
          </a>
          <a href="/statistics" className="flex items-center py-3 text-lg px-6 hover:bg-[#00B4D8]">
            <FaChartBar className="mr-3" /> Statistics
          </a>
          <a href="/settings" className="flex items-center py-3 px-6 text-lg hover:bg-[#00B4D8]">
            <FaCog className="mr-3" /> Settings
          </a>
        </nav>
      </div>
      {/* Main Content */}
      <div className="w-full md:w-3/4 p-6 bg-gray-50">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {/* Total Listens */}
          <div className="bg-white shadow-lg p-6 rounded-lg">
            <FaPodcast className="text-4xl text-blue-500 mb-4" />
            <h2 className="text-xl font-bold">Total Listens</h2>
            <p className="text-gray-600 text-3xl">
              <CountUp end={15000} duration={2} />
            </p>
          </div>
          
          {/* Total Users */}
          <div className="bg-white shadow-lg p-6 rounded-lg">
            <FaUsers className="text-4xl text-green-500 mb-4" />
            <h2 className="text-xl font-bold">Total Users</h2>
            <p className="text-gray-600 text-3xl">
              <CountUp end={1200} duration={2} />
            </p>
          </div>
          
          {/* Revenue */}
          <div className="bg-white shadow-lg p-6 rounded-lg">
            <FaDollarSign className="text-4xl text-yellow-500 mb-4" />
            <h2 className="text-xl font-bold">Revenue</h2>
            <p className="text-gray-600 text-3xl">
              $<CountUp end={25000} duration={2} />
            </p>
          </div>
          
          {/* Subscriptions */}
          <div className="bg-white shadow-lg p-6 rounded-lg">
            <FaListAlt className="text-4xl text-red-500 mb-4" />
            <h2 className="text-xl font-bold">Subscriptions</h2>
            <p className="text-gray-600 text-3xl">
              <CountUp end={320} duration={2} />
            </p>
          </div>
        </div>

        {/* Other sections */}
        <div className="flex flex-col md:flex-row">
        <div className="bg-white shadow-lg p-4 sm:p-6 rounded-lg mb-6 w-full md:w-1/2">
  <h2 className="text-lg sm:text-xl font-bold mb-4">Monthly Listens</h2>
  <div className="h-48 sm:h-64 md:h-72 lg:h-80">
    <Line data={listensData} options={chartOptions} />
  </div>
</div>


<div className="bg-white shadow-lg p-4 sm:p-6 rounded-lg mb-6 w-full md:w-1/2">
  <h2 className="text-lg sm:text-xl font-bold mb-4">Creators</h2>
  <div className="overflow-x-auto">
    <table className="w-full table-auto">
      <thead>
        <tr>
          <th className="px-2 sm:px-4 py-2">Photo</th>
          <th className="px-2 sm:px-4 py-2">Name</th>
          <th className="px-2 sm:px-4 py-2">Podcasts</th>
          <th className="px-2 sm:px-4 py-2">Profile</th>
        </tr>
      </thead>
      <tbody>
        {creatorsData.map((creator, index) => (
          <tr key={index}>
            <td className="px-2 sm:px-4 py-2">
              <Image src={creator.photo} alt={creator.name} width={50} height={50} className="rounded-full" />
            </td>
            <td className="px-2 sm:px-4 py-2">{creator.name}</td>
            <td className="px-2 sm:px-4 py-2">{creator.podcasts}</td>
            <td className="px-2 sm:px-4 py-2">
              <a href={creator.profileLink} className="text-blue-500 hover:underline">View Profile</a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white shadow-lg p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Podcast Categories</h2>
            <Pie data={pieData} options={chartOptions} />
          </div>

          <div className="bg-white shadow-lg p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Subscription Types</h2>
            <Doughnut data={doughnutData} options={chartOptions} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
