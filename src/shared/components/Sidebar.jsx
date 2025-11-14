import React from "react";
import { FaUser, FaHeart, FaQuestionCircle, FaComments, FaCog } from "react-icons/fa";

const Sidebar = () => {
  return (
    <aside className="hidden lg:flex flex-col justify-center bg-linear-to-b from-purple-800 to-pink-500 text-white w-14 fixed right-0 top-0 h-full space-y-6 items-center">
      <FaUser className="cursor-pointer hover:scale-110 transition-transform" />
      <FaHeart className="cursor-pointer hover:scale-110 transition-transform" />
      <FaQuestionCircle className="cursor-pointer hover:scale-110 transition-transform" />
      <FaComments className="cursor-pointer hover:scale-110 transition-transform" />
      <FaCog className="cursor-pointer hover:scale-110 transition-transform" />
    </aside>
  );
};

export default Sidebar;
