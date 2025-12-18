import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../redux/slices/authSlice";

const Logout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    // 1️⃣ Clear redux auth state
    dispatch(logout());

    // 2️⃣ Remove stored token (if using localStorage)
 

    // 3️⃣ Redirect to home or login
    navigate("/home", { replace: true });
  }, [dispatch, navigate]);

  return null;
};

export default Logout;
