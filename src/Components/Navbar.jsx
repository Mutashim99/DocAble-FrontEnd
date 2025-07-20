import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-black text-white py-4 shadow-md">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <div className="text-xl font-bold">
          <Link to="/">Docify</Link>
        </div>
        <div className="flex space-x-6">
          <Link to="/" className="hover:text-gray-400 transition">Home</Link>
          <Link to="/docs" className="hover:text-gray-400 transition">Docs</Link>
          <a
            href="https://github.com/your-username/docify"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black px-4 py-2 rounded hover:bg-gray-200 transition"
          >
            GitHub
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
