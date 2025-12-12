import { Routes, Route, Navigate } from "react-router-dom";

import PrivateRouter from "./PrivateRoute";
import PublicRouter from "./PublicRoute";

import Login from "../components/common/Auth/Login";
import Register from "../components/common/Auth/Register";
import Home from "../pages/DashBoard/Home";
import HotelDashboard from "../pages/DashBoard/HotelDashboard";
import Logout from "../components/common/Auth/Logout";
import AdminDashboard from "../pages/Admin/adminDashboard";
import Hotel from "../components/Admin/Hotels/Hotel";
import Admin from "../components/Admin/dashboard/Admin";
import HotelRegistration from "../components/Admin/Hotels/HotelRegistration";
import HotelDetails from "../components/Admin/Hotels/HotelDetails";
import HotelFacilityRegistration from "../components/Admin/Hotels/Facility/HotelFacilityRegistration";
import HotelFacilityList from "../components/Admin/Hotels/Facility/HotelFacilityList";

const AppRouter = () => {
  return (
    <Routes>

      {/* Public Home */}
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />

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
        {/* Default admin page */}
        <Route index element={<Admin />} />

        {/* Child routes */}
        <Route path="hotel" element={<Hotel />} />
        <Route path="registration" element={<HotelRegistration />} />

        {/* Hotel Details + Nested Routes */}
        <Route
          path="hoteldetails/:id"
          element={
            <PrivateRouter>
              <HotelDetails />
            </PrivateRouter>
          }
        >

          {/* ----------- Nested Inside Hotel Details ----------- */}
          {/* <Route
            path="/admindashboard/hotel-facilities/:hotelId"
            element={<HotelFacilityLayout />}   // parent layout (optional)
          > */}
            <Route index element={<HotelFacilityList />} />   {/* loads initially */}
          


          <Route
            path="add-facility/:hotelId"
            element={<HotelFacilityRegistration />}
          />

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
