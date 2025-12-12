import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const PrivateRouter = ({ children }) => {
  const { isAuthenticated } = useAuth();
  const location = useLocation();

  if (!isAuthenticated) {
    // Save the last attempted URL so after login we redirect back
    return <Navigate to="/home" replace state={{ from: location }} />;
  }

  return children;
};

export default PrivateRouter;
