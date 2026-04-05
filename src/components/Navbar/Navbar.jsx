import React from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import { IoSearch } from 'react-icons/io5';
import { Link } from 'react-router';

const Navbar = () => {
    return (
        <div className="bg-base-100 shadow-sm pt-10">
            <div className='navbar w-full px-2 md:w-10/12 md:px-0 mx-auto'>
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <Link to="/" className='hover:underline hover:text-purple-500'>Home</Link>
                            <Link className='hover:underline hover:text-purple-500'>Products</Link>
                            <Link className='hover:underline hover:text-purple-500'>Sign up</Link>
                            <Link className='hover:underline hover:text-purple-500'>Log In</Link>
                        </ul>
                    </div>
                    <Link to={"/"} className="text-xl cursor-pointer font-bold">Influencer Gears</Link>
                </div>
                <div className="navbar-end">
                    <div className="flex items-center gap-5 text-base font-medium">
                        <Link to="/" className='hidden lg:flex hover:underline hover:text-purple-500'>Home</Link>
                        <Link className='hidden lg:flex hover:underline hover:text-purple-500'>Products</Link>
                        <Link className='hidden lg:flex hover:underline hover:text-purple-500'>Sign up</Link>
                        <Link className='hidden lg:flex hover:underline hover:text-purple-500'>Log In</Link>
                        <Link><IoSearch className='text-xl' /></Link>
                        <Link><FiShoppingCart className='text-xl' /></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar; <p>This is navabr</p>