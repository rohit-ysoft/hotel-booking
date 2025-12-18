// import { Navigate } from "react-router-dom";
// // import { useAuth } from "../context/AuthContext";

// const PublicRouter = ({ children }) => {
//   const { isAuthenticated } = useAuth();

//   return !isAuthenticated ? children : <Navigate to="/admindashboard" replace />;
// };

// export default PublicRouter;



import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";


const PublicRouter = ({children}) =>{
  const isAuthenticated = useSelector(
    (state) => state.auth.isAuthenticated
  );

   return  !isAuthenticated ? children : <Navigate to="/admindashboard" replace />

};

export default PublicRouter;