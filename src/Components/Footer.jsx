import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#0f172a] text-gray-400 py-10 px-6 mt-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {/* Left: Brand Summary */}
        <div>
          <h2 className="text-white text-xl font-semibold">Docify</h2>
          <p className="mt-2 text-sm">
            Generate clean, professional PDFs from structured JSON using customizable templates.
          </p>
        </div>

        {/* Middle: Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1 text-sm">
            <li>
              <Link to="/" className="hover:text-white transition">Home</Link>
            </li>
            <li>
              <Link to="/docs" className="hover:text-white transition">Docs</Link>
            </li>
            <li>
              <a
                href="https://github.com/your-repo-url"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                GitHub
              </a>
            </li>
          </ul>
        </div>

        {/* Right: Contact (optional or placeholder) */}
        <div>
          <h3 className="text-white font-semibold mb-2">Contact</h3>
          <p className="text-sm">docify.support@example.com</p>
        </div>
      </div>

      <div className="mt-10 text-center text-xs border-t border-gray-700 pt-6">
        © {new Date().getFullYear()} Docify. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
