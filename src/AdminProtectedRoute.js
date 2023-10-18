import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const AdminProtectedRoute = ({ children }) => {
  const { loading, isAuthenticated,user } = useSelector((state) => state.user);
  console.log(user);
  if (loading === false) {
    if (!isAuthenticated) {
      return <Navigate to="/login" replace />;
    } else if(user.role !== "admin"){
        return <Navigate to="/home" replace />;
    }
    return children;
  }
};

export default AdminProtectedRoute;