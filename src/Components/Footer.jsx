import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 px-6 py-16 border-t border-neutral-800 ">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
        {/* Left: Brand Summary */}
        <div>
          <h2 className="text-white text-2xl font-semibold tracking-tight">Docable</h2>
          <p className="mt-3 text-sm leading-relaxed text-gray-400">
            Generate clean, professional PDFs from structured JSON using customizable templates.
          </p>
        </div>

        {/* Middle: Quick Links */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:text-white transition-colors duration-200">
                Home
              </Link>
            </li>
            <li>
              <Link to="/docs" className="hover:text-white transition-colors duration-200">
                Docs
              </Link>
            </li>
            <li>
              <a
                href="https://github.com/your-repo-url"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors duration-200"
              >
                GitHub
              </a>
            </li>
          </ul>
        </div>

        {/* Right: Contact Info */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-3">Contact</h3>
          <p className="text-sm text-gray-400">mutashimmohsin@gmail.com</p>
        </div>
      </div>

      <div className="mt-14 text-center text-xs text-gray-600 border-t border-neutral-800 pt-6">
        © {new Date().getFullYear()} Docable. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
