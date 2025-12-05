import { useEffect } from "react";
import { useAuth } from "../../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const { setIsAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    // Step 1: Clear login state
    setIsAuthenticated(false);

    // Step 2: Remove token/storage if used
    localStorage.removeItem("token");

    // Step 3: redirect to login page
    navigate("/login", { replace: true });
  }, [setIsAuthenticated, navigate]);

  return null; // or return <p>Logging out...</p>;
};

export default Logout;
