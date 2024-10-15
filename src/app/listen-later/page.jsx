import ListenLater from '@/Components/UserDashboardFee/ListenLater';
import React from 'react';

const page = () => {
    return (
        <div className='bg-slate-900 h-auto'>
            <h1>Listen Later</h1>
            <div className='pb-20 bg-slate-900'>
                <ListenLater></ListenLater>
            </div>
        </div>
    );
};

export default page;