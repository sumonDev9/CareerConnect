import React from 'react';
import Navber from '../pages/shared/Navber';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div className='bg-gray-100'>
            <Navber></Navber>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;