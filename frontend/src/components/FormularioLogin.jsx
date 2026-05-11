import Swal from "sweetalert2";
import { useState } from "react";
import passkey from "../assets/passkey.svg";
import arroba from "../assets/arroba.svg";
import { Link } from "react-router";
import { backendURL } from "../config";

export const FormularioLogin = () => {
  const [loginData, setLoginData] = useState({ username: "", password: "" });

  const submitData = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch( `${backendURL}/login`, {
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

  <div className="
    min-h-screen
    gradient-bg
    flex
    items-center
    justify-center
    p-6
  ">

    <div className="
      glass
      w-full
      max-w-md
      rounded-[32px]
      p-10
      shadow-2xl
      border
      border-white/30
    ">

      {/* HEADER */}

      <div className="text-center mb-10">

        <h2 className="
          text-5xl
          font-black
          text-slate-800
        ">
          Zaru
        </h2>

        <p className="
          text-slate-500
          mt-4
          text-lg
        ">
          Accede a toda la colección
        </p>

      </div>

      {/* FORM */}

      <form
        onSubmit={submitData}
        id="formulario_registro"
        className="space-y-6"
      >

        {/* USERNAME */}

        <div>

          <label
            htmlFor="username"
            className="
              block
              text-sm
              font-semibold
              text-slate-700
              mb-2
            "
          >
            Nombre de usuario
          </label>

          <div className="relative">

            <img
              src={arroba}

              className="
                absolute
                left-4
                top-1/2
                -translate-y-1/2
                w-5
                opacity-60
              "
            />

            <input
              id="username"

              className="
                w-full
                bg-white/80
                border
                border-slate-200
                rounded-2xl
                pl-12
                pr-4
                py-4
                text-slate-700
                placeholder:text-slate-400
                outline-none
                transition-all
                duration-300
                focus:border-orange-400
                focus:ring-4
                focus:ring-orange-100
              "

              name="username"

              placeholder="Ingresa tu usuario"

              type="text"

              onChange={change}

              value={loginData.username}

              required
            />

          </div>

        </div>

        {/* PASSWORD */}

        <div>

          <label
            htmlFor="password"
            className="
              block
              text-sm
              font-semibold
              text-slate-700
              mb-2
            "
          >
            Contraseña
          </label>

          <div className="relative">

            <img
              src={passkey}

              className="
                absolute
                left-4
                top-1/2
                -translate-y-1/2
                w-5
                opacity-60
              "
            />

            <input
              id="password"

              className="
                w-full
                bg-white/80
                border
                border-slate-200
                rounded-2xl
                pl-12
                pr-4
                py-4
                text-slate-700
                placeholder:text-slate-400
                outline-none
                transition-all
                duration-300
                focus:border-orange-400
                focus:ring-4
                focus:ring-orange-100
              "

              name="password"

              placeholder="Ingresa tu contraseña"

              type="password"

              onChange={change}

              value={loginData.password}

              required
            />

          </div>

        </div>

        {/* BOTON */}

        <button
          className="
            w-full
            py-4
            rounded-2xl
            bg-orange-500
            hover:bg-orange-600
            text-white
            font-bold
            text-lg
            transition-all
            duration-300
            shadow-lg
            shadow-orange-500/30
            hover:scale-[1.02]
            active:scale-[0.99]
            cursor-pointer
          "

          type="submit"
        >
          Iniciar sesión
        </button>

      </form>

      {/* FOOTER */}

      <div className="
        text-center
        mt-8
        text-slate-500
      ">

        ¿No tienes una cuenta?

        <Link
          to="/registro"

          className="
            text-orange-500
            font-semibold
            ml-2
            hover:text-orange-600
            transition
          "
        >
          Crear cuenta
        </Link>

      </div>

    </div>

  </div>
);
};
