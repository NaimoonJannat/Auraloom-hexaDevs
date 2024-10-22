import ConditionalDashboard from '@/Components/Dashboard/ConditionalDashboard';
import Sidebar from '@/Components/Side-bar/SideBar';
import UserDashboardFee from '@/Components/UserDashboardFee/UserDashboardFee';
import React from 'react';

const page = () => {
    return (
        <div>
           <ConditionalDashboard></ConditionalDashboard> 
        </div>
    );
};

export default page;