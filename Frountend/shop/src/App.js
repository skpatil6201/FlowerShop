import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navigation from './Pages/componant/Navigation';
import Home from './Pages/Home';
import Contact from './Pages/Contact'; // Ensure this import is correct
// import Admin from './Pages/Admin'; // Ensure this import is correct
import Login from './Pages/login'; // Ensure this import is correct
import Signup from './Pages/signup'; // Ensure this import is correct

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


//   import { useState } from "react";
//   import { Menu, X } from "lucide-react";
//   function App() {
//     const [isOpen, setIsOpen] = useState(false);
//     return (
//     <nav className="bg-blue-600 text-white shadow-md">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16">
//           {/* Logo */}
//           <div className="text-2xl font-bold">MyLogo</div>

//           {/* Desktop Menu */}
//           <div className="hidden md:flex space-x-6">
//             <a href="#" className="hover:text-gray-200">Home</a>
//             <a href="#" className="hover:text-gray-200">About</a>
//             <a href="#" className="hover:text-gray-200">Services</a>
//             <a href="#" className="hover:text-gray-200">Contact</a>
//           </div>

//           {/* Mobile Menu Button */}
//           <button
//             className="md:hidden focus:outline-none"
//             onClick={() => setIsOpen(!isOpen)}
//           >
//             {isOpen ? <X size={28} /> : <Menu size={28} />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       <div className={`${isOpen ? "block" : "hidden"} md:hidden`}>
//         <a href="#" className="block py-2 px-4 text-center hover:bg-blue-700">Home</a>
//         <a href="#" className="block py-2 px-4 text-center hover:bg-blue-700">About</a>
//         <a href="#" className="block py-2 px-4 text-center hover:bg-blue-700">Services</a>
//         <a href="#" className="block py-2 px-4 text-center hover:bg-blue-700">Contact</a>
//       </div>
//     </nav>
//   );

// }

// export default App;
