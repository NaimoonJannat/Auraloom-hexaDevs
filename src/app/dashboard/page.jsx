import MainContent from '@/Components/MainContent/MainContent';
import Sidebar from '@/Components/Side-bar/SideBar';
import UserDashboardFee from '@/Components/UserDashboardFee/UserDashboardFee';
import React from 'react';

const page = () => {
    return (
        <div className="flex flex-col lg:flex-row h-auto bg-slate-900">
            <Sidebar />
            <UserDashboardFee />
        </div>
    );
};

export default page;