import MainContent from '@/Components/MainContent/MainContent';
import Sidebar from '@/Components/Side-bar/SideBar';
import React from 'react';

const page = () => {
    return (
        <div className="flex flex-col lg:flex-row h-auto ">
            <Sidebar />
            <MainContent />
        </div>
    );
};

export default page;