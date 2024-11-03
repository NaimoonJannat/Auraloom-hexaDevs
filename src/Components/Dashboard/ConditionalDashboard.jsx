'use client';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider/AuthProvider';
import axios from 'axios';
import Sidebar from '../Side-bar/SideBar';
import UserDashboardFee from '../UserDashboardFee/UserDashboardFee';
import CreatorDashboard from '../CreatorDashboard/CreatorDashboard';
import AdminDashboard from '../AdminDashboard/AdminDashboard';
import { CirclesWithBar } from 'react-loader-spinner';
import Loader from '../Loader/Loader';

const ConditionalDashboard = () => {
  const { user } = useContext(AuthContext);
  const [role, setRole] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user?.email) {
      // Fetch all users data from the backend
      axios
        .get('https://auraloom-backend.vercel.app/users')
        .then((response) => {
          const allUsers = response.data;
          // Find the user with the matching email
          const foundUser = allUsers.find((u) => u.email === user.email);
          if (foundUser) {
            setRole(foundUser.role);
          } else {
            console.error('User not found in the backend');
          }
        })
        .catch((error) => {
          console.error('Error fetching users data:', error);
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      setLoading(false); // Stop loading if no user
    }
  }, [user]);

  if (loading) {
    return <div className="flex justify-center min-h-screen items-center lg:mt-20">
      <CirclesWithBar
        height="100"
        width="100"
        color="#4F46E5"
        outerCircleColor="#4F46E5"
        innerCircleColor="#4F46E5"
        barColor="#4F46E5"
        ariaLabel="circles-with-bar-loading"
        visible={true}
      />
    </div>;
  }

  if (!user) {
    return <Loader></Loader>;
  }

  if (!role) {
    return <Loader></Loader>;
  }

  // Conditional rendering based on the role
  return (
    <div>
      {role === 'user' && (
        <div className=" h-auto bg-slate-900">
          <div className='hidden md:block lg:block'>
            <Sidebar />
          </div>
          <UserDashboardFee />
        </div>
      )}
      {role === 'creator' && <CreatorDashboard />}
      {role === 'admin' && <AdminDashboard />}
    </div>
  );
};

export default ConditionalDashboard;
