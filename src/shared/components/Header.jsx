import React from "react";
import banner from "../../assets/Logo/logo.png";

const Header = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-4 md:px-8">
        <div className="flex items-center space-x-2">
          <img src={banner} alt="Logo" className="w-8 h-8" />
          <span className="font-bold text-lg md:text-xl text-gray-800">Diu Travels</span>
        </div>
        <nav className="hidden md:flex space-x-6">
          <a href="#" className="hover:text-purple-600">Home</a>
          <a href="#" className="hover:text-purple-600">Get Quotation</a>
          <a href="#" className="hover:text-purple-600">Packages</a>
          <a href="#" className="hover:text-purple-600">Contact</a>
        </nav>
        <button className="bg-purple-700 text-white px-4 py-2 rounded-lg hover:bg-purple-800">
          Sign In
        </button>
      </div>
      <div className="bg-pink-200 text-center text-sm py-1 overflow-x-auto whitespace-nowrap">
        <span className="mx-2 font-medium">🔥 B2B Travel Portal</span>
        <span className="mx-2">💥 Off Season Rates Now Live</span>
        <span className="mx-2">🏨 2 New Blooms Properties Added</span>
      </div>
    </header>
  );
};

export default Header;
