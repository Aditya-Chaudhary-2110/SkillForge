import { Navigate } from "react-router-dom";

import useAuth from "../../hooks/useAuth";
import PageLoader from "../common/PageLoader";

const PublicRoute = ({ children }) => {
  const { user, loading } = useAuth();

  // Wait until authentication check completes
  if (loading) {
    return <PageLoader />;
  }

  // Already logged in
  if (user) {
    return <Navigate to="/dashboard" replace />;
  }

  // User is not logged in
  return children;
};

export default PublicRoute;
