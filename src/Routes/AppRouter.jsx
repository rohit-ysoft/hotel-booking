import { Routes, Route, Navigate } from "react-router-dom";


import PrivateRouter from "./PrivateRoute";
import Logout from "../modules/auth/Logout";
import Login from "../modules/auth/Login";


// import Home from "../modules/home/Home";
// import HotelDashboard from "../pages/DashBoard/HotelDashboard";
// import Logout from "../components/common/Auth/Logout";
// import AdminDashboard from "../pages/Admin/adminDashboard";
// import Hotel from "../components/Admin/Hotels/Hotel";
// import Admin from "../components/Admin/dashboard/Admin";
// import HotelRegistration from "../components/Admin/Hotels/HotelRegistration";
// import HotelDetails from "../components/Admin/Hotels/HotelDetails";
// import HotelFacilityRegistration from "../components/Admin/Hotels/Facility/HotelFacilityRegistration";
// import HotelFacilityList from "../components/Admin/Hotels/Facility/HotelFacilityList";

const AppRouter = () => {
  return (
    <Routes>

      {/* Public Home */}
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Login />} />

      {/* Private Hotel Dashboard */}
      <Route
        path="/hoteldashboard"
        element={
          <PrivateRouter>
            <HotelDashboard />
          </PrivateRouter>
        }
      />

      {/* ---------- ADMIN DASHBOARD NESTED ROUTES ---------- */}
      <Route
        path="/admindashboard"
        element={
          <PrivateRouter>
            <AdminDashboard />
          </PrivateRouter>
        }
      >


        {/* Hotel Details + Nested Routes */}
        <Route
          path="hoteldetails/:id"
          element={
            <PrivateRouter>
              <HotelDetails />
            </PrivateRouter>
          }
        >



        </Route>

      </Route>

      {/* -------------------------------------------------- */}

      {/* Logout */}
      <Route
        path="/home/logout"
        element={
          <PrivateRouter>
            <Logout />
          </PrivateRouter>
        }
      />

      {/* Fallback */}
      <Route path="*" element={<Navigate to="/home" replace />} />
    </Routes>
  );
};

export default AppRouter;
