import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const PublicRouter = ({ children }) => {
  const { isAuthenticated } = useAuth();

  return !isAuthenticated ? children : <Navigate to="/dashboard" replace />;
};

export default PublicRouter;
