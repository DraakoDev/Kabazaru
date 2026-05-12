import {
  createContext,
  useEffect,
  useState,
} from "react";

import axios from "axios";

const API_URL = "http://localhost:3000";

export const AuthContext =
  createContext();

export const AuthProvider = ({
  children,
}) => {

  const [user, setUser] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  const [isAuthenticated,
    setIsAuthenticated] =
    useState(false);

  const verificarSesion = async () => {

    try {

      const token =
        localStorage.getItem("token");

      const usuario =
        localStorage.getItem("usuario");

      if (token && usuario) {

        setUser(JSON.parse(usuario));

        setIsAuthenticated(true);

      }

    } catch (error) {

      console.log(error);

      setUser(null);

      setIsAuthenticated(false);

    } finally {

      setLoading(false);

    }
  };

  useEffect(() => {

    verificarSesion();

  }, []);

  const login = async (credentials) => {

    const response = await axios.post(
      `${API_URL}/login`,
      credentials,
      {
        withCredentials: true,
      }
    );

    const data = response.data;

    localStorage.setItem(
      "token",
      data.token
    );

    localStorage.setItem(
      "usuario",
      JSON.stringify(data.usuario)
    );

    setUser(data.usuario);

    setIsAuthenticated(true);

    return data;
  };

  const logout = () => {

    localStorage.removeItem("token");

    localStorage.removeItem("usuario");

    setUser(null);

    setIsAuthenticated(false);
  };

  return (

    <AuthContext.Provider
      value={{
        user,
        loading,
        isAuthenticated,
        login,
        logout,
      }}
    >

      {children}

    </AuthContext.Provider>
  );
};