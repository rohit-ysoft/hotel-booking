import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const PrivateRouter = ({ children }) => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

export default PrivateRouter;
