import { Navigate } from "react-router";
import { AuthContext } from "../context/contextos.js";
import { useContext } from "react";

export const ProtectedRoute = ({ children, tipo }) => {
  const { user, isAuthenticated, loading } = useContext(AuthContext);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Cargando...
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (user.tipo !== tipo) {
    console.log("Los tipos no coinciden");
    return <Navigate to="/login" replace />;
  }

  return children;
};
