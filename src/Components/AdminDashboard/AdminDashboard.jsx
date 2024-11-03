'use client';
import React, { useContext, useEffect, useState } from "react";
import CountUp from 'react-countup';
import { Bar } from 'react-chartjs-2';
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
  Legend,
  BarElement
);

const AdminDashboard = () => {

  const { user: loggedInUser, logout } = useContext(AuthContext);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isOpen, setIsOPen] = useState(false)
  const [categoryCounts, setCategoryCounts] = useState({});
  console.log(loggedInUser);

  // Toggle sidebar function for mobile devices
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const [podcasts, setPodcasts] = useState([])
  // Fetch podcasts and calculate category counts
  useEffect(() => {
    const getData = async () => {
      const { data } = await axios(`https://auraloom-backend.vercel.app/podcasts`);
      setPodcasts(data);

      // Calculate category counts dynamically
      const counts = data.reduce((acc, podcast) => {
        const category = podcast.category;
        acc[category] = (acc[category] || 0) + 1;
        return acc;
      }, {});

      setCategoryCounts(counts);
    };
    getData();
  }, []);
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
  // const listensData = {
  //   labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
  //   datasets: [
  //     {
  //       label: 'Monthly Listens',
  //       data: [65, 59, 80, 81, 56, 55, 40],
  //       borderColor: 'rgba(75,192,192,1)',
  //       backgroundColor: 'rgba(75,192,192,0.2)',
  //       tension: 0.4,
  //     },
  //   ],
  // };

  // Generate colors dynamically for each category
  // const generateColors = (numColors) => {
  //   const colors = [];
  //   for (let i = 0; i < numColors; i++) {
  //     const hue = (i * 360 / numColors) % 360;
  //     colors.push(`hsl(${hue}, 70%, 60%)`);  // Adjust saturation and lightness as needed
  //   }
  //   return colors;
  // };

  // const pieData = {
  //   labels: Object.keys(categoryCounts),
  //   datasets: [
  //     {
  //       label: 'Podcast Categories',
  //       data: Object.values(categoryCounts),
  //       backgroundColor: generateColors(Object.keys(categoryCounts).length),
  //       borderWidth: 1,
  //     },
  //   ],
  // };
  // const categoriesData = {
  //   labels: Object.keys(categoryCounts),
  //   datasets: [
  //     {
  //       label: 'Number of Podcasts in Each Category',
  //       data: Object.values(categoryCounts),
  //       backgroundColor: generateColors(Object.keys(categoryCounts).length),
  //       borderColor: generateColors(Object.keys(categoryCounts).length),
  //       borderWidth: 1,
  //     },
  //   ],
  // };

  // Chart options for categories bar chart
  // const barChartOptions = {
  //   responsive: true,
  //   plugins: {
  //     legend: {
  //       position: 'top',
  //     },
  //     title: {
  //       display: true,
  //       text: 'Podcast Categories Count',
  //     },
  //   },
  // };

  // const doughnutData = {
  //   labels: ['Basic', 'Premium', 'Pro'],
  //   datasets: [
  //     {
  //       label: 'Subscription Types',
  //       data: [500, 200, 100],
  //       backgroundColor: [
  //         'rgba(255, 159, 64, 0.6)',
  //         'rgba(54, 162, 235, 0.6)',
  //         'rgba(255, 99, 132, 0.6)',
  //       ],
  //       borderWidth: 1,
  //     },
  //   ],
  // };
  // const chartOptions = {
  //   responsive: true,
  //   plugins: {
  //     legend: {
  //       position: 'top',
  //     },
  //     title: {
  //       display: true,
  //       text: 'Podcast Categories Distribution',
  //     },
  //   },
  // };
  // Bar chart data for podcast categories
  const barData = {
    labels: Object.keys(categoryCounts),
    datasets: [
      {
        label: 'Podcast Categories',
        data: Object.values(categoryCounts),
        backgroundColor: '#00b4d8',
        borderColor: '#0077b6',
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
        text: 'Podcast Categories Distribution',
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
      <div className={`fixed inset-0 lg:relative  bg-gray-200  lg:translate-x-0 transition-transform transform ${isSidebarOpen ? "translate-x-0 " : "-translate-x-full"}  w-3/4 lg:w-1/5 z-50`}>

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
          <div className="ml-4 text-center light:text-[#03045E]">
            <p className="text-lg font-semibold">{loggedInUser?.displayName}</p>
            <p className="text-sm ">{loggedInUser?.email}</p>
          </div>
        </div>
        <nav className="mt-10">

          <a href="/Settings" className="flex items-center py-3 px-6  text-lg hover:bg-gray-400">
            <FaCog className="mr-3" /> Settings
          </a>
          <a href="/" className="flex items-center py-3 px-6 text-lg hover:bg-gray-400">
            <FaHome className="mr-3" /> Home
          </a>
        </nav>
      </div>
      {/* Main Content */}
      <div className="w-full md:w-3/4 p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {/* Total Listens */}
          <div className=" shadow-lg p-6 rounded-lg">
            <FaPodcast className="text-4xl text-blue-500 mb-4" />
            <h2 className="text-xl font-bold">Total Listens</h2>
            <p className="text-gray-600 text-3xl">
              <CountUp end={26} duration={2} />
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
              <AllPodcasts />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1  gap-6">
          {/* <div className=" shadow-lg p-6 rounded-lg col-span-1">
          <h2 className="text-2xl font-bold mb-4">Podcast Categories</h2>
          <Pie data={pieData} options={chartOptions} />
        </div> */}
          <div className="shadow-lg p-6 rounded-lg col-span-1">
            <h2 className="text-2xl font-bold mb-4">Podcast Categories</h2>
            <Bar data={barData} options={chartOptions} />  {/* Use Bar component */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
