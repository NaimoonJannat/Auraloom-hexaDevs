'use client';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider/AuthProvider';
import axios from 'axios';
import Sidebar from '../Side-bar/SideBar';
import UserDashboardFee from '../UserDashboardFee/UserDashboardFee';
import CreatorDashboard from '../CreatorDashboard/CreatorDashboard';
import AdminDashboard from '../AdminDashboard/AdminDashboard';

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
    return <div>Loading...</div>;
  }

  if (!user) {
    return <div>No user logged in.</div>;
  }

  if (!role) {
    return <div>No role assigned to the user.</div>;
  }

  // Conditional rendering based on the role
  return (
    <div>
      {role === 'user' && (
        <div className="flex flex-col lg:flex-row h-auto bg-slate-900">
          <Sidebar />
          <UserDashboardFee />
        </div>
      )}
      {role === 'creator' && <CreatorDashboard />}
      {role === 'admin' && <AdminDashboard />}
    </div>
  );
};

export default ConditionalDashboard;
