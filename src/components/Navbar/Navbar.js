import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    return (
        <div className='bg-gray-400 py-4 text-gray-800 flex justify-between cursor-pointer'>
             <h2 className='sm:ml-6 sm:text-3xl bg-slate-300 py-2  rounded-full pl-3'>
             Food 
             <span className='bg-gray-800 text-white px-3 py-1.5 rounded-full ml-2'>Monster</span></h2>
        <div className='sm:text-2xl sm:mr-6 mr-2'>
            <Link className='sm:mr-6 py-2 sm:px-5 px-1 rounded-full hover:text-white hover:bg-gray-800' to='/home'>Home</Link>
            <Link className='sm:ml-6 py-2 sm:px-5 px-1 rounded-full hover:text-white hover:bg-gray-800' to='/meal'>Meal</Link>
            <Link className='sm:ml-6 py-2 sm:px-5 px-1 rounded-full hover:text-white hover:bg-gray-800' to='/cocktail'>Cocktail</Link>
            <Link className='sm:ml-6 py-2 sm:px-5 px-1 rounded-full hover:text-white hover:bg-gray-800' to='/about'>About</Link>
            </div>
            </div>
        
    );
};

export default Navbar;