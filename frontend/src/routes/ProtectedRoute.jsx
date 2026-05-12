import { Navigate } from "react-router";

import { useAuth }
from "../hooks/useAuth";

export const ProtectedRoute = ({
  children,
  role,
}) => {

  const {
    user,
    loading,
    isAuthenticated,
  } = useAuth();

  if (loading) {

    return (
      <h1>Cargando...</h1>
    );

  }

  if (!isAuthenticated) {

    return (
      <Navigate to="/login" />
    );

  }

  if (
    role &&
    user.tipo_usuario !== role
  ) {

    return (
      <Navigate to="/login" />
    );

  }

  return children;
};