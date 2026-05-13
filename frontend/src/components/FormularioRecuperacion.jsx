import Swal from "sweetalert2";
import { useState } from "react";
import { Link } from "react-router";
import arroba from "../assets/arroba.svg";
import { backendURL } from "../config";

export const FormularioRecuperacion = () => {
  const [recoveryData, setRecoveryData] = useState({
    username: "",
  });

  const change = (e) => {
    const { name, value } = e.target;

    setRecoveryData({
      ...recoveryData,
      [name]: value,
    });
  };

  const submitData = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${backendURL}/forgot-password`, {
        headers: {
          "Content-Type": "application/json",
        },

        method: "POST",

        body: JSON.stringify(recoveryData),
      });

      const data = await response.json();

      if (!data.success) {
        Swal.fire({
          title: "Error",
          text: data.error,
          icon: "warning",
        });
      } else {
        Swal.fire({
          title: "Correo enviado",
          text: "Se ha enviado un enlace de recuperación al correo asociado a esta cuenta.",
          icon: "success",
        });
      }
    } catch (error) {
      Swal.fire({
        title: "(|||❛︵❛。)",
        text: "No fue posible conectarse al servidor.",
        icon: "error",
      });

      console.log(error);
    }
  };

  return (
    <div
      className="
        min-h-screen
        flex
        items-center
        justify-center
        px-6
        py-10
        bg-[#09090b]
        relative
        overflow-hidden
      "
    >
      {/* FONDOS */}

      <div
        className="
          absolute
          w-[500px]
          h-[500px]
          bg-orange-500/10
          blur-3xl
          rounded-full
          -top-40
          -left-40
        "
      />

      <div
        className="
          absolute
          w-[400px]
          h-[400px]
          bg-purple-500/10
          blur-3xl
          rounded-full
          bottom-0
          right-0
        "
      />

      {/* CARD */}

      <div
        className="
          relative
          w-full
          max-w-md
          bg-[#111111]
          border
          border-black
          rounded-[40px]
          p-10
          shadow-[0_0_60px_rgba(0,0,0,.65)]
        "
      >
        {/* HEADER */}

        <div className="text-center mb-10">
          <h1
            className="
              text-4xl
              font-black
              tracking-tight
              text-white
            "
          >
            Recuperar contraseña
          </h1>

          <p
            className="
              text-zinc-400
              mt-4
              text-sm
              leading-relaxed
            "
          >
            Ingresa tu nombre de usuario.
            <br />
            Se enviará un correo al email asociado a la cuenta.
          </p>
        </div>

        {/* FORM */}

        <form onSubmit={submitData} className="space-y-6">
          {/* USERNAME */}

          <div>
            <label
              htmlFor="username"
              className="
                block
                text-sm
                text-zinc-300
                mb-3
                font-medium
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
                  opacity-40
                  invert
                "
              />

              <input
                id="username"
                name="username"
                type="text"
                placeholder="Ingresa tu usuario"
                onChange={change}
                value={recoveryData.username}
                required
                className="
                  w-full
                  h-14
                  bg-white/[0.04]
                  border
                  border-white/10
                  rounded-2xl
                  pl-12
                  pr-4
                  text-white
                  placeholder:text-zinc-500
                  outline-none
                  transition-all
                  duration-300

                  focus:border-orange-500
                  focus:bg-white/[0.06]
                  focus:ring-4
                  focus:ring-orange-500/10
                "
              />
            </div>
          </div>

          {/* BUTTON */}

          <button
            type="submit"
            className="
              w-full
              h-14
              rounded-2xl
              bg-orange-500
              hover:bg-orange-400
              text-white
              font-bold
              transition-all
              duration-300
              hover:scale-[1.01]
              active:scale-[0.98]
              shadow-[0_10px_30px_rgba(249,115,22,.35)]
              cursor-pointer
            "
          >
            Enviar correo
          </button>
        </form>

        {/* FOOTER */}

        <div
          className="
            mt-8
            text-center
            text-zinc-500
            text-sm
          "
        >
          ¿Recordaste tu contraseña?
          <Link
            to="/login"
            className="
              text-orange-400
              hover:text-orange-300
              transition
              ml-2
              font-semibold
            "
          >
            Volver al login
          </Link>
        </div>
      </div>
    </div>
  );
};
