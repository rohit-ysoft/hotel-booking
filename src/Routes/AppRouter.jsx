import { Routes, Route } from "react-router-dom";

import PrivateRouter from "./PrivateRoute";
import PublicRouter from "./PublicRoute";

// Pages
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import Dashboard from "../pages/DashBoard/Home";

const AppRouter = () => {
  return (
    <Routes>  
      {/* Public - Login */}
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

      {/* Public - Register */}
      <Route path="/register"element={<PublicRouter> <Register /> </PublicRouter> } />


      {/* Private - Dashboard */}
      <Route path="/dashboard" element={ <PrivateRouter> <Dashboard /> </PrivateRouter> } />
    </Routes>
  );
};

export default AppRouter;
