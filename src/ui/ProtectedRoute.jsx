import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../features/users/useUser";

function ProtectedRoute({ children }) {
  const navigate = useNavigate();

  const { isLoading, isAuthenticated } = useUser();

  useEffect(() => {
    if (!isAuthenticated && !isLoading) navigate("/login");
  }, [isAuthenticated, isLoading, navigate]);

  if (isLoading) return <p>Loading...</p>;

  if (isAuthenticated) return children;
}

export default ProtectedRoute;
