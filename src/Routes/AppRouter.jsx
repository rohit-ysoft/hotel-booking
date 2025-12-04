import { Routes, Route } from "react-router-dom";

import PrivateRouter from "./PrivateRoute";
import PublicRouter from "./PublicRoute";

// Pages
import Login from "../pages/Auth/Login";
import Dashboard from "../pages/DashBoard/Home";

const AppRouter = () => {
  return (
    <Routes>
      {/* Public */}
      <Route
        path="/login"
        element={
          <PublicRouter>
            <Login />
          </PublicRouter>
        }
      />

      {/* Public open route */}
      <Route path="/" element={<Login />} />

      {/* Private */}
      <Route
        path="/dashboard"
        element={
          <PrivateRouter>
            <Dashboard />
          </PrivateRouter>
        }
      />
    </Routes>
  );
};

export default AppRouter;
