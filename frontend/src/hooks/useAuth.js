import { useState, useEffect } from "react";
import axios from "axios";

const API_URL = "http://localhost:3000";

export const useAuth = () => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);


    const login = async (credentials) => {

        try {

            setLoading(true);
            setError(null);

            const response = await axios.post(
                `${API_URL}/login`,
                credentials,
                {
                    withCredentials: true
                }
            );

            const data = response.data;

            // Guardar usuario
            setUser(data.usuario);

            // Guardar token si existe
            if (data.token) {
                localStorage.setItem("token", data.token);
            }

            // Guardar usuario en localStorage
            localStorage.setItem(
                "usuario",
                JSON.stringify(data.usuario)
            );

            setIsAuthenticated(true);

            return {
                success: true,
                usuario: data.usuario
            };

        } catch (err) {

            console.error(err);

            setError(
                err.response?.data?.message ||
                "Error al iniciar sesión"
            );

            setIsAuthenticated(false);

            return {
                success: false
            };

        } finally {

            setLoading(false);

        }

    };

    const logout = () => {

        localStorage.removeItem("token");
        localStorage.removeItem("usuario");

        setUser(null);
        setIsAuthenticated(false);

    };


    const verificarSesion = () => {

        const usuarioGuardado =
            localStorage.getItem("usuario");

        const token =
            localStorage.getItem("token");

        if (usuarioGuardado && token) {

            setUser(JSON.parse(usuarioGuardado));
            setIsAuthenticated(true);

        } else {

            setUser(null);
            setIsAuthenticated(false);

        }

    };


    useEffect(() => {

        verificarSesion();

    }, []);

    return {

        // estados
        user,
        loading,
        error,
        isAuthenticated,

        // funciones
        login,
        logout,
        verificarSesion

    };

};
