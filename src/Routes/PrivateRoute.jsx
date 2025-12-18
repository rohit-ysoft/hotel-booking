import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRouter = ({ children }) => {
  const { isAuthenticated, token } = useSelector(
    (state) => state.auth
  );

  const location = useLocation();

  // If not logged in or token missing
  if (!isAuthenticated || !token) {
    return (
      <Navigate
        to="/home"                // redirect to login page
        replace
        state={{ from: location }} // save previous route
      />
    );
  }

  return children;
};

export default PrivateRouter;
