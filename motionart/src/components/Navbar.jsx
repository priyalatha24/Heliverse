// import React from 'react';
import logo from '../assets/logo.png'

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-8">
      {/* Logo */}
      <div className="text-white">
        <img  className='p-3' src={logo} alt="logo" />
      </div>

      {/* Purchase Now Button */}
      <button className="bg-white  hover:bg-black text-black font-semibold py-4 px-7 rounded">
        Purchase Now
      </button>
    </nav>
  );
};

export default Navbar;
