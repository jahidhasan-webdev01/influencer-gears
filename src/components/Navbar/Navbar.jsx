import { useContext } from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import { IoSearch } from 'react-icons/io5';
import { Link, NavLink } from 'react-router';
import { CartContext } from '../../context/CartContext';

const Navbar = () => {
    const { cart } = useContext(CartContext)
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
                            <NavLink to="/" className='nav-link hover:underline hover:text-purple-500'>Home</NavLink>
                            <NavLink to="/products" className='nav-link hover:underline hover:text-purple-500'>Products</NavLink>
                            <NavLink to="sign-up" className='nav-link hover:underline hover:text-purple-500'>Sign up</NavLink>
                            <NavLink to="login" className='nav-link hover:underline hover:text-purple-500'>Log In</NavLink>
                        </ul>
                    </div>
                    <Link to={"/"} className="text-xl cursor-pointer font-bold">Influencer Gears</Link>
                </div>
                <div className="navbar-end">
                    <div className="flex items-center gap-5 text-base font-medium">
                        <NavLink to="/" className='nav-link hidden lg:flex hover:underline hover:text-purple-500'>Home</NavLink>
                        <NavLink to="/products" className='nav-link hidden lg:flex hover:underline hover:text-purple-500'>Products</NavLink>
                        <NavLink to="sign-up" className='nav-link hidden lg:flex hover:underline hover:text-purple-500'>Sign up</NavLink>
                        <NavLink to="login" className='nav-link hidden lg:flex hover:underline hover:text-purple-500'>Log In</NavLink>
                        <NavLink to="/search" className="nav-link"><IoSearch className='text-xlnav-link ' /></NavLink>
                        <div>
                            <NavLink to="/cart" className="nav-link"><FiShoppingCart className='text-xl relative' /></NavLink>
                            <span className='absolute top-2 -right-3 text-xs bg-purple-500 px-1 rounded-full flex items-center justify-center text-white'>{cart.length}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar; <p>This is navabr</p>