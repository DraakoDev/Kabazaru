import { useContext } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../context/contextos";
import { useState } from "react";
import passkey from "../assets/passkey.svg";
import arroba from "../assets/arroba.svg";
import { Link } from "react-router";
import { backendURL } from "../config";

export const FormularioLogin = () => {
  const [loginData, setLoginData] = useState({ username: "", password: "" });
  const { verificarSesion } = useContext(AuthContext);
  let navigate = useNavigate();
  const submitData = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${backendURL}/login`, {
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        method: "post",
        body: JSON.stringify(loginData),
      });
      const data = await response.json();
      if (!data.success) {
        Swal.fire({
          title: "Error",
          text: data.error,
          icon: "warning",
        });
      } else {
        verificarSesion();
        navigate(`/${data.usuario.tipo.toLowerCase()}`);
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
        bg-white/[0.03]
        backdrop-blur-2xl
        border
        border-white/10
        rounded-[32px]
        p-10
        shadow-[0_0_60px_rgba(0,0,0,.45)]
      "
    >

      {/* LOGO */}

      <div className="text-center mb-10">

        <h1
          className="
            text-5xl
            font-black
            tracking-tight
            text-white
          "
        >
          Zaru
        </h1>

        <p
          className="
            text-zinc-400
            mt-4
            text-sm
            leading-relaxed
          "
        >
          Bienvenido de nuevo.
          <br />
          Inicia sesión para continuar.
        </p>

      </div>

      {/* FORM */}

      <form
        onSubmit={submitData}
        className="space-y-6"
      >

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
            Usuario
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
              value={loginData.username}
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
                opacity-40
                invert
              "
            />

            <input
              id="password"
              name="password"
              type="password"
              placeholder="Ingresa tu contraseña"
              onChange={change}
              value={loginData.password}
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
          Iniciar sesión
        </button>

{/* RECUPERAR CONTRASEÑA */}

<div className="flex justify-end">

  <Link
    to="/recuperar-password"

    className="
      text-sm
      text-zinc-400
      hover:text-orange-400
      transition-all
      duration-300
    "
  >
    ¿Olvidaste tu contraseña?
  </Link>

</div>

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

        ¿No tienes cuenta?

        <Link
          to="/registro"

          className="
            text-orange-400
            hover:text-orange-300
            transition
            ml-2
            font-semibold
          "
        >
          Crear cuenta
        </Link>

      </div>

    </div>

  </div>
);
};
