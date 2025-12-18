
import { ClipboardList, CheckCircle, Users, TrendingUp, Sidebar } from "lucide-react";
import StatsCard from "../../components/Admin/dashboard/StatsCard";
import AdminSidebar from "../../components/Admin/layout/adminSidebar";
import Navbar from "../../components/Admin/layout/Navbar";
import Footer from "../../components/Admin/layout/Footer";
import { useState } from "react";
import Admin from "../../components/Admin/dashboard/Admin";
import { Outlet } from "react-router-dom";


const AdminDashboard = () => {
  const [open, setOpen] = useState(true);
  return (
    <>
      <AdminSidebar open={open} />
      <div className="lg:ml-24 bg-gray-100 min-h-screen">
        <Navbar setOpen={setOpen} />


        <div className="p-6 lg:ml-64">
          <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            <StatsCard
              title="Projects"
              value="18"
              subtitle="2 Completed"
              icon={ClipboardList}
            />
            <StatsCard
              title="Active Task"
              value="132"
              subtitle="28 Completed"
              icon={CheckCircle}
            />
            <StatsCard
              title="Teams"
              value="12"
              subtitle="1 Completed"
              icon={Users}
            />
            <StatsCard
              title="Productivity"
              value="76%"
              subtitle="5% Completed"
              icon={TrendingUp}
            />
          </div>
          <Outlet />
          {/* <Admin /> */}
        </div>
        <Footer />
      </div>
    </>
  );
};

export default AdminDashboard;
