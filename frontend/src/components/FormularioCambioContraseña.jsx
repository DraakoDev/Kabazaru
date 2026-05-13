import Swal from "sweetalert2";
import { useState } from "react";
import { Link, useNavigate } from "react-router";
import passkey from "../assets/passkey.svg";
import { backendURL } from "../config";

export const FormularioCambioContraseña = () => {

  const navigate = useNavigate();

  const [passwordData, setPasswordData] = useState({
    password: "",
    confirmPassword: "",
  });

  const change = (e) => {

    const { name, value } = e.target;

    setPasswordData({
      ...passwordData,
      [name]: value,
    });

  };

  const submitData = async (e) => {

    e.preventDefault();

    if (passwordData.password !== passwordData.confirmPassword) {

      Swal.fire({
        title: "Error",
        text: "Las contraseñas no coinciden.",
        icon: "warning",
      });

      return;
    }

    try {

      const response = await fetch(
        `${backendURL}/change-password`,
        {
          headers: {
            "Content-Type": "application/json",
          },

          method: "POST",

          body: JSON.stringify({
            password: passwordData.password,
          }),
        }
      );

      const data = await response.json();

      if (!data.success) {

        Swal.fire({
          title: "Error",
          text: data.error,
          icon: "warning",
        });

      } else {

        Swal.fire({
          title: "Contraseña actualizada",
          text: "Tu contraseña ha sido cambiada correctamente.",
          icon: "success",
        });

        navigate("/login");

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
            Nueva contraseña
          </h1>

          <p
            className="
              text-zinc-400
              mt-4
              text-sm
              leading-relaxed
            "
          >
            Ingresa tu nueva contraseña
            <br />
            para recuperar el acceso a tu cuenta.
          </p>

        </div>

        {/* FORM */}

        <form
          onSubmit={submitData}
          className="space-y-6"
        >

          {/* PASSWORD */}

          <div>

            <label
              htmlFor="password"
              className="
                block
                text-sm
                text-zinc-300
                mb-3
                font-medium
              "
            >
              Nueva contraseña
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
                  opacity-40
                  invert
                "
              />

              <input
                id="password"
                name="password"
                type="password"
                placeholder="Ingresa tu nueva contraseña"
                onChange={change}
                value={passwordData.password}
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

          {/* CONFIRM PASSWORD */}

          <div>

            <label
              htmlFor="confirmPassword"
              className="
                block
                text-sm
                text-zinc-300
                mb-3
                font-medium
              "
            >
              Confirmar contraseña
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
                  opacity-40
                  invert
                "
              />

              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                placeholder="Confirma tu contraseña"
                onChange={change}
                value={passwordData.confirmPassword}
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
            Cambiar contraseña
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

          ¿Volver al inicio?

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
            Iniciar sesión
          </Link>

        </div>

      </div>

    </div>
  );
};