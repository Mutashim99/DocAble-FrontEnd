import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Navbar = () => {
  return (
    <nav className="bg-black border-b border-neutral-800 text-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img className="h-10" src={logo} alt="logo" />
          {/* Optional Text beside logo */}
          {/* <span className="text-xl font-bold tracking-tight">Docify</span> */}
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center space-x-6">
          <Link
            to="/"
            className="text-sm text-gray-300 hover:text-white transition"
          >
            Home
          </Link>
          <Link
            to="/docs"
            className="text-sm text-gray-300 hover:text-white transition"
          >
            Docs
          </Link>
          <a
            href="https://github.com/Mutashim99/DocAble"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm bg-white text-black px-4 py-1.5 rounded-md font-medium hover:bg-gray-200 transition"
          >
            GitHub
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
