import { Routes, Route } from "react-router-dom";

import PrivateRouter from "./PrivateRoute";
import PublicRouter from "./PublicRoute";
// Pages
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
// Components

import Home from "../pages/DashBoard/Home";
import HotelDashboard from "../pages/DashBoard/HotelDashboard";
import Logout from "../components/common/Auth/Logout";

const AppRouter = () => {
  return (
    <Routes>
      {/* Public - Login */}
      <Route
        path="/login"
        element={
          <PublicRouter>
            <Home />
          </PublicRouter>
        }
      />

      {/* Public open route */}
      <Route path="/" element={<Login />} />

      {/* Public - Register */}
      <Route path="/register" element={<PublicRouter> <Register /> </PublicRouter>} />


      {/* Private - Dashboard */}
      <Route path="/dashboard" element={<PrivateRouter> <HotelDashboard /> </PrivateRouter>} />

      <Route path="/logout" element={ <PrivateRouter> <Logout /> </PrivateRouter> }/>

    </Routes>
  );
};

export default AppRouter;
