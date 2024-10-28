'use client';
import React, { useContext, useEffect, useState } from "react";
import CountUp from 'react-countup';
import logo from '../../../public/auraloom-logo.png'
import {
  FaChartBar,
  FaUsers,
  FaDollarSign,
  FaPodcast,
  FaListAlt,
  FaChartLine,
  FaCog,
  FaHome,
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
import axios from "axios";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider/AuthProvider";
import { IoMdArrowBack } from 'react-icons/io';
import UpdateUserModal from "../modal/UpdateUserModal";
import UserTable from "./UserTable";
import AllPodcasts from './AllPodcasts'
import { useQuery } from '@tanstack/react-query'
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
  
  const { user: loggedInUser, logout } = useContext(AuthContext);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isOpen, setIsOPen] = useState(false)
  console.log(loggedInUser);

  // Toggle sidebar function for mobile devices
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  
  const {
    data: items = [],
    //isLoading,
    refetch,
  } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const { data } = await axios(`https://auraloom-backend.vercel.app/users`)
      return data
    },
  })
  const signOutUser = () => {
    logout()
      .then(() => { })
      .catch(() => { });
  };
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

  //deleting user
  const handleDelete = _id => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete!"
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const { data } = await axios.delete(`https://auraloom-backend.vercel.app/users/${_id}`);
          if (data.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: "User has been deleted.",
              icon: "success"
            });
          }
        } catch (err) {
          console.log(err.message);
        }
      }
    });
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      {/* Mobile menu button */}
      <button
        className="block md:hidden p-4 focus:outline-none"
        onClick={toggleSidebar}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
        </svg>
      </button>

      {/* Sidebar */}
      <div className={`fixed inset-0 lg:relative lg:translate-x-0 transition-transform transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} light:bg-gray-100 w-3/4 lg:w-1/5 z-50`}>

        {/* Back button for mobile & medium devices */}
        <div className="flex justify-between p-4 bg-blue-500 text-white rounded-2xl m-5 md:hidden">
          <h1 className="text-lg font-bold">Back</h1>
          <button
            className="focus:outline-none"
            onClick={toggleSidebar}
          >
            <IoMdArrowBack className="w-6 h-6" />
          </button>
        </div>
        <div className="py-6 px-8 flex items-center justify-center text-2xl font-bold">
          <Image
            src={logo}
            alt="Auraloom Logo"
            width={130}
            height={130}
            className="mr-3"
          />
        </div>

        <div className="py-6 px-8 flex items-center flex-col">
          <div className=" rounded-full border-2 border-sky-500 p-1">
            <Image
              src={loggedInUser?.photoURL}
              width={80}
              height={80}
              className="rounded-full"
              alt="User avatar"
            />
          </div>
          <div className="ml-4 text-center text-[#03045E]">
            <p className="text-lg font-semibold">{loggedInUser?.displayName}</p>
            <p className="text-sm ">{loggedInUser?.email}</p>
          </div>
        </div>

        <nav className="mt-10">
          {/* Sidebar links */}
          {/* <a href="/overview" className="flex items-center py-3 px-6 text-lg hover:bg-[#00B4D8]">
            <FaChartLine className="mr-3" /> Overview
          </a> */}
          <a href="/subscriptions" className="flex items-center py-3 text-lg px-6 hover:bg-[#00B4D8]">
            <MdSubscriptions className="mr-3" /> Subscriptions
          </a>
          {/* <a href="/transactions" className="flex items-center py-3 text-lg px-6 hover:bg-[#00B4D8]">
            <FaMoneyBillWave className="mr-3" /> Transactions
          </a> */}
          {/* <a href="/customers" className="flex items-center py-3 px-6 text-lg hover:bg-[#00B4D8]">
            <FaUsers className="mr-3" /> Customers
          </a> */}
          <a href="/creators" className="flex items-center py-3 px-6 text-lg hover:bg-[#00B4D8]">
            <FaPodcast className="mr-3" /> Creators
          </a>
          {/* <a href="/statistics" className="flex items-center py-3 text-lg px-6 hover:bg-[#00B4D8]">
            <FaChartBar className="mr-3" /> Statistics
          </a> */}
          <a href="/Settings" className="flex items-center py-3 px-6 text-lg hover:bg-[#00B4D8]">
            <FaCog className="mr-3" /> Settings
          </a>
          <a href="/" className="flex items-center py-3 px-6 text-lg hover:bg-[#00B4D8]">
            <FaHome className="mr-3" /> Home
          </a>
        </nav>
      </div>
      {/* Main Content */}
      <div className="w-full md:w-3/4 p-6 light:bg-gray-50">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {/* Total Listens */}
          <div className=" shadow-lg p-6 rounded-lg">
            <FaPodcast className="text-4xl text-blue-500 mb-4" />
            <h2 className="text-xl font-bold">Total Listens</h2>
            <p className="text-gray-600 text-3xl">
              <CountUp end={15000} duration={2} />
            </p>
          </div>

          {/* Total Users */}
          <div className=" shadow-lg p-6 rounded-lg">
            <FaUsers className="text-4xl text-green-500 mb-4" />
            <h2 className="text-xl font-bold">Total Users</h2>
            <p className="text-gray-600 text-3xl">
              <CountUp end={items.length} duration={2} />
            </p>
          </div>


          {/* Subscriptions */}
          <div className=" shadow-lg p-6 rounded-lg">
            <FaListAlt className="text-4xl text-red-500 mb-4" />
            <h2 className="text-xl font-bold">Subscriptions</h2>
            <p className="text-gray-600 text-3xl">
              <CountUp end={320} duration={2} />
            </p>
          </div>
        </div>

        {/* Other sections */}
        <div className="flex flex-col ">



          <div className=" shadow-lg p-4 sm:p-6 rounded-lg mb-6 w-full">
            <h2 className="text-lg sm:text-xl font-bold mb-4">All Users</h2>
            <div className="overflow-x-auto">
              <table className="w-full table-auto">
                <thead>
                  <tr>
                    <th className="px-2 sm:px-4 py-2">Photo</th>
                    <th className="px-2 sm:px-4 py-2">Name</th>
                    <th className="px-2 sm:px-4 py-2">Email</th>
                    <th className="px-2 sm:px-4 py-2">Role</th>
                    <th className="px-2 sm:px-4 py-2">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    items.map(item => <UserTable
                      key={item._id}
                      item={item}
                      refetch={refetch}
                    >
                    </UserTable>)}
                </tbody>
              </table>
            </div>
          </div>
          <div className=" shadow-lg p-4 sm:p-6 rounded-lg mb-6 w-full ">
            <h2 className="text-lg sm:text-xl font-bold mb-4">All Podcasts</h2>
            <div className="mx-auto mb-4">
               <AllPodcasts/>
            </div>
          </div>
          <div className=" shadow-lg p-4 sm:p-6 rounded-lg mb-6 w-full ">
            <h2 className="text-lg sm:text-xl font-bold mb-4">Monthly Listens</h2>
            <div className="h-48 sm:h-64 md:h-72 lg:h-80">
              <Line data={listensData} options={chartOptions} />
            </div>
          </div>


        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className=" shadow-lg p-6 rounded-lg col-span-1">
            <h2 className="text-2xl font-bold mb-4">Podcast Categories</h2>
            <Pie data={pieData} options={chartOptions} />
          </div>

          {/* <div className=" shadow-lg p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Subscription Types</h2>
            <Doughnut data={doughnutData} options={chartOptions} />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
