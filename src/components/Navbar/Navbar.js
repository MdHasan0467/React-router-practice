import React from 'react';
import { Link } from 'react-router-dom';
import Home from '../Home/Home';
import './Navbar.css'

const Navbar = () => {
    return (
        <div className='bg-gray-400 py-4 text-gray-800 flex justify-between'>
             <h2 className='ml-6 text-3xl bg-slate-300 py-2  rounded-full pl-3'>
             Food 
             <span className='bg-gray-800 text-white px-3 py-1.5 rounded-full'>Monster</span></h2>
        <div className='text-2xl mr-6'>
            <Link className='mr-6 hover:text-red-600' to='/home'>Home</Link>
            <Link className='ml-6 hover:text-red-600' to='/about'>About</Link></div>
        </div>
    );
};

export default Navbar;