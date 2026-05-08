import Swal from "sweetalert2";
import { useState } from "react";
import passkey from "../assets/passkey.svg";
import arroba from "../assets/arroba.svg";
import { Link } from "react-router";

export const FormularioLogin = () => {
  const [loginData, setLoginData] = useState({ username: "", password: "" });

  const submitData = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/login", {
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        method: "post",
        body: JSON.stringify(loginData),
      });
      const data = await response.json();
      console.log(data);
      if (!data.success) {
        Swal.fire({
          title: "Error",
          text: data.error,
          icon: "warning",
        });
      }
    } catch (error) {
      Swal.fire({
        title: "(|||❛︵❛。)",
        text: "No fue posible conectarse al servidor!",
        icon: "error",
      });
      console.log("Error enviando los datos", error);
    }
  };

  const change = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  return (
    <div className="rounded-2xl w-2xl p-8 shadow-2xl z-10 bg-white m-6">
      <h2 className="text-center font-bold text-4xl mb-2">Inicio de Sesion</h2>
      <span className="block text-center mb-8">Accede a toda la coleccion</span>
      <form onSubmit={submitData} id="formulario_registro">
        <fieldset className="mt-4">
          <div>
            <div className="w-full">
              <label htmlFor="username">Nombre de usuario</label>
              <div className="relative">
                <img
                  src={arroba}
                  className="absolute left-3 top-1/2 -translate-y-1/2"
                />
                <input
                  id="username"
                  className="w-full h-11 pl-10 pr-4 rounded-lg bg-white border border-zinc-200 placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all"
                  name="username"
                  placeholder="Usuario"
                  type="text"
                  onChange={change}
                  value={loginData.username}
                  required
                />
              </div>
            </div>
            <div className="w-full mt-6">
              <label htmlFor="password">Contraseña</label>
              <div className="relative">
                <img
                  src={passkey}
                  className="absolute left-3 top-1/2 -translate-y-1/2"
                />
                <input
                  id="password"
                  className="w-full h-11 pl-10 pr-4 rounded-lg bg-white border border-zinc-200 placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all"
                  name="password"
                  placeholder="Contraseña"
                  type="password"
                  onChange={change}
                  value={loginData.password}
                  required
                />
              </div>
            </div>
          </div>
        </fieldset>
        <div>
          <input
            className="w-full h-11 rounded-lg mt-6 text-white bg-amber-500 font-semibold hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-500/50 transition-all shadow-lg shadow-amber-500/50 hover:cursor-pointer"
            value="Registrarse"
            type="submit"
          />
        </div>
      </form>
      <span className="block text-center mt-8">
        No tienes una cuenta?{" "}
        <Link to="/registro" className="text-amber-600">
          Crea una cuenta
        </Link>
      </span>
    </div>
  );
};
