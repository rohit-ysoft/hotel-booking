import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LayoutDashboard, FolderKanban, Settings, LogOut, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const AdminSidebar = ({ open }) => {

  const [hotelMenuOpen, setHotelMenuOpen] = useState(false); // ⭐ Submenu toggle

  return (
    <motion.aside
      initial={{ x: -250 }}
      animate={{ x: open ? 0 : -250 }}
      transition={{ duration: 0.4 }}
      className="bg-gray-900 text-white w-64 fixed h-full p-6 z-50"
    >
      <h1 className="text-2xl font-bold mb-10">DashUI</h1>

      <nav className="space-y-4">

        {/* Dashboard */}
        <Link
          to="/admindashboard"
          className="flex items-center gap-3 hover:bg-gray-700 p-3 rounded-lg cursor-pointer"
        >
          <LayoutDashboard size={20} /> Dashboard
        </Link>

        {/* ----------------- HOTELS MENU ----------------- */}
        <div>
          <button
            onClick={() => setHotelMenuOpen(!hotelMenuOpen)}
            className="flex items-center w-full justify-between hover:bg-gray-700 p-3 rounded-lg cursor-pointer"
          >
            <span className="flex items-center gap-3">
              <FolderKanban size={20} /> Hotels
            </span>
            <ChevronDown
              size={18}
              className={`transition-transform ${hotelMenuOpen ? "rotate-180" : ""}`}
            />
          </button>

          {/* Submenu - AnimatePresence */}
          <AnimatePresence>
            {hotelMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="ml-8 mt-2 space-y-2"
              >
                {/* Hotel List */}
                <Link
                  to="/admindashboard/hotel"
                  className="block hover:bg-gray-700 p-2 rounded cursor-pointer"
                >
                  Hotel List
                </Link>

                {/* Hotel Registration */}
                <Link
                  to="/admindashboard/registration"
                  className="block hover:bg-gray-700 p-2 rounded cursor-pointer"
                >
                  Hotel Registration
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Settings */}
        <Link
          to="/admindashboard/settings"
          className="flex items-center gap-3 hover:bg-gray-700 p-3 rounded-lg cursor-pointer"
        >
          <Settings size={20} /> Settings
        </Link>

        {/* Logout */}
        <Link
          to="/home/logout"
          className="flex items-center gap-3 hover:bg-gray-700 p-3 rounded-lg cursor-pointer mt-10"
        >
          <LogOut size={20} /> Logout
        </Link>
      </nav>
    </motion.aside>
  );
};

export default AdminSidebar;
