import React from 'react';
import { Link } from 'react-router-dom'; // Correct import for Link

function Navigation() {
  return (
    <nav className="bg-gray-800 text-white py-4">
      <ul className="flex justify-center space-x-6">
        <li>
          <Link to="/" className="hover:text-yellow-500">Home</Link>
        </li>
        <li>
          <Link to="/contact" className="hover:text-yellow-500">Contact</Link>
        </li>
        <li>
          <Link to="/admin" className="hover:text-yellow-500">Admin</Link>
        </li>
        <li>
          <Link to="/login" className="hover:text-yellow-500">Login</Link>
        </li>
        <li>
          <Link to="/signup" className="hover:text-yellow-500">Signup</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
