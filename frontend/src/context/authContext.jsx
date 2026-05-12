import { useState, useEffect } from "react";
import { backendURL } from "../config.js";
import { AuthContext } from "./contextos.js";
import Cookies from "js-cookie";

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  const verificarSesion = async () => {
    setLoading(true);
    console.log("Verificando Sesion...");
    try {
      const token = Cookies.get("access_token");

      const response = await fetch(`${backendURL}/getAuth`, {
        credentials: "include",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          token,
        }),
      });

      const data = await response.json();
      setIsAuthenticated(Boolean(data.session));
      setUser(data.user || null);
    } catch (error) {
      console.log("No fue posible solicitar acceso", error.message);
      setIsAuthenticated(false);
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    verificarSesion();
  }, []);

  const logout = async () => {
    try {
      const response = await fetch(`${backendURL}/logout`, {
        method: "POST",
        credentials: "include",
      });

      const data = await response.json();
      console.log(data);

      setIsAuthenticated(false);
      setUser(null);
    } catch (error) {
      console.log("Error cerrando la sesión", error.message);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        loading,
        logout,
        verificarSesion,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
