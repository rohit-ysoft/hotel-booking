import { useEffect } from "react";
import { useAuth } from "../../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const { setIsAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    // 1. Clear login state
    setIsAuthenticated(false);

    // 2. Remove token if stored
    localStorage.removeItem("token");

    // 3. Redirect to Home page
    navigate("/home", { replace: true });
  }, []);

  return null; 
};

export default Logout;
