import { Navigate } from "react-router-dom";

import useAuth from "../../hooks/useAuth";
import PageLoader from "../common/PageLoader";

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();

  // Wait until authentication check completes
  if (loading) {
    return <PageLoader />;
  }

  // User not logged in
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // User authenticated
  return children;
};

export default ProtectedRoute;
