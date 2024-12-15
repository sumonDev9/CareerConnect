import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navber = () => {

    const links = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/allJob'>All Job</NavLink></li>
    </>

    return (
        <div className='bg-white shadow-lg'>
            <div className="navbar w-11/12 mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <Link to='/' className="md:text-3xl text-lg text-secondary font-bold"> <span className='font-medium text-primary'>Career</span>Connect</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-4">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="flex gap-4">
                        {/* Register Button */}
                    <Link to='/register'>
                    <button className="px-2 md:px-3 py-1 md:py-2 relative group overflow-hidden bg-[#613FE5] text-white rounded-md">
                            Resgister
                            <span
                                className="absolute inset-0 bg-white rounded-lg translate-x-full transition-transform duration-300 group-hover:translate-x-0 opacity-30"
                                aria-hidden="true"
                            ></span>
                        </button>
                    </Link>

                        {/* Login Button */}
                       <Link to='/login'>
                       <button className="px-2 md:px-3 py-1 md:py-2 relative group overflow-hidden bg-[#613FE5] text-white rounded-md">
                            Login
                            <span
                                className="absolute inset-0 bg-white rounded-lg -translate-x-full transition-transform duration-300 group-hover:translate-x-0 opacity-30"
                                aria-hidden="true"
                            ></span>
                        </button>
                       </Link>
                    </div>



                </div>
            </div>
        </div>
    );
};

export default Navber;