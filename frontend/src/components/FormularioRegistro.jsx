import Swal from "sweetalert2";
import { useState } from "react";
import { Link, useNavigate } from "react-router";
import id_card from "../assets/id_card.svg";
import person from "../assets/person.svg";
import mapin from "../assets/mapin.svg";
import phone from "../assets/phone.svg";
import emailico from "../assets/emailico.svg";
import passkey from "../assets/passkey.svg";
import arroba from "../assets/arroba.svg";
import grupos from "../assets/grupos.svg";
import { backendURL } from "../config.js";

export const FormularioRegistro = () => {
  let navigate = useNavigate();
  const [formData, setFormData] = useState({
    cedula: "",
    nombre: "",
    apellido: "",
    telefono: "",
    correo: "",
    direccion: "",
    tipo_usuario: "",
    username: "",
    password: "",
  });

  const change = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const submitData = async (e) => {
    e.preventDefault();

    const {
      cedula,
      nombre,
      apellido,
      telefono,
      correo,
      direccion,
      tipo_usuario,
      username,
      password,
    } = formData;

    /* VALIDAR CAMPOS VACÍOS */

    if (
      !cedula ||
      !nombre ||
      !apellido ||
      !telefono ||
      !correo ||
      !direccion ||
      !tipo_usuario ||
      !username ||
      !password
    ) {
      return Swal.fire({
        title: "Campos incompletos",
        text: "Todos los campos son obligatorios.",
        icon: "warning",
        confirmButtonColor: "#f97316",
      });
    }

    /* VALIDAR CÉDULA */

    if (!/^\d+$/.test(cedula)) {
      return Swal.fire({
        title: "Cédula inválida",
        text: "La cédula solo debe contener números.",
        icon: "warning",
        confirmButtonColor: "#f97316",
      });
    }

    /* VALIDAR TELÉFONO */

    if (!/^\d+$/.test(telefono)) {
      return Swal.fire({
        title: "Teléfono inválido",
        text: "El teléfono solo debe contener números.",
        icon: "warning",
        confirmButtonColor: "#f97316",
      });
    }

    if (telefono.length < 7) {
      return Swal.fire({
        title: "Teléfono inválido",
        text: "El teléfono es demasiado corto.",
        icon: "warning",
        confirmButtonColor: "#f97316",
      });
    }

    /* VALIDAR CORREO */

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(correo)) {
      return Swal.fire({
        title: "Correo inválido",
        text: "Ingresa un correo electrónico válido.",
        icon: "warning",
        confirmButtonColor: "#f97316",
      });
    }

    /* VALIDAR PASSWORD */

    if (password.length < 6) {
      return Swal.fire({
        title: "Contraseña insegura",
        text: "La contraseña debe tener al menos 6 caracteres.",
        icon: "warning",
        confirmButtonColor: "#f97316",
      });
    }

    /* VALIDAR USERNAME */

    if (username.length < 4) {
      return Swal.fire({
        title: "Usuario inválido",
        text: "El nombre de usuario debe tener mínimo 4 caracteres.",
        icon: "warning",
        confirmButtonColor: "#f97316",
      });
    }

    console.log(`${backendURL}/register`);

    try {
      const response = await fetch(`${backendURL}/register`, {
        headers: {
          "Content-Type": "application/json",
        },

        method: "POST",

        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        Swal.fire({
          title: "Usuario Registrado!",
          text: "El registro ha sido exitoso!",
          icon: "success",
          confirmButtonColor: "#22c55e",
        });

        navigate("/login");
      } else {
        Swal.fire({
          title: "Error",
          text: data.error,
          icon: "warning",
          confirmButtonColor: "#f97316",
        });
      }
    } catch (error) {
      Swal.fire({
        title: "(|||❛︵❛。)",
        text: "No fue posible conectarse al servidor!",
        icon: "error",
        confirmButtonColor: "#ef4444",
      });

      console.log("Error enviando los datos", error);
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
        bg-orange-500/5
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
        max-w-4xl

        bg-black/40
        backdrop-blur-2xl

        border
        border-white/10

        rounded-[48px]
        p-10

        shadow-[0_0_60px_rgba(0,0,0,.45)]
      "
      >
        {/* HEADER */}

        <div className="text-center mb-12">
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
            Crea una cuenta para continuar.
          </p>
        </div>

        {/* FORM */}

        <form
          onSubmit={submitData}
          id="formulario_registro"
          className="space-y-10"
        >
          {/* INFORMACION PERSONAL */}

          <div>
            <h3
              className="
              text-2xl
              font-bold
              text-white
              mb-6
            "
            >
              Información personal
            </h3>

            <div
              className="
              grid
              grid-cols-1
              md:grid-cols-2
              gap-6
            "
            >
              {/* CEDULA */}

              <div>
                <label
                  htmlFor="cedula"
                  className="
                  block
                  text-sm
                  text-zinc-300
                  mb-3
                  font-medium
                "
                >
                  Cédula
                </label>

                <div className="relative">
                  <img
                    src={id_card}
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
                    id="cedula"
                    name="cedula"
                    type="text"
                    placeholder="Ingresa tu cédula"
                    onChange={change}
                    value={formData.cedula}
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

              {/* TELEFONO */}

              <div>
                <label
                  htmlFor="telefono"
                  className="
                  block
                  text-sm
                  text-zinc-300
                  mb-3
                  font-medium
                "
                >
                  Teléfono
                </label>

                <div className="relative">
                  <img
                    src={phone}
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
                    id="telefono"
                    name="telefono"
                    type="text"
                    placeholder="Ingresa tu teléfono"
                    onChange={change}
                    value={formData.telefono}
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

              {/* NOMBRE */}

              <div>
                <label
                  htmlFor="nombre"
                  className="
                  block
                  text-sm
                  text-zinc-300
                  mb-3
                  font-medium
                "
                >
                  Nombre
                </label>

                <div className="relative">
                  <img
                    src={person}
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
                    id="nombre"
                    name="nombre"
                    type="text"
                    placeholder="Nombre"
                    onChange={change}
                    value={formData.nombre}
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

              {/* APELLIDO */}

              <div>
                <label
                  htmlFor="apellido"
                  className="
                  block
                  text-sm
                  text-zinc-300
                  mb-3
                  font-medium
                "
                >
                  Apellido
                </label>

                <div className="relative">
                  <img
                    src={person}
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
                    id="apellido"
                    name="apellido"
                    type="text"
                    placeholder="Apellido"
                    onChange={change}
                    value={formData.apellido}
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

              {/* CORREO */}

              <div>
                <label
                  htmlFor="correo"
                  className="
                  block
                  text-sm
                  text-zinc-300
                  mb-3
                  font-medium
                "
                >
                  Correo electrónico
                </label>

                <div className="relative">
                  <img
                    src={emailico}
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
                    id="correo"
                    name="correo"
                    type="email"
                    placeholder="Correo electrónico"
                    onChange={change}
                    value={formData.correo}
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

              {/* DIRECCION */}

              <div>
                <label
                  htmlFor="direccion"
                  className="
                  block
                  text-sm
                  text-zinc-300
                  mb-3
                  font-medium
                "
                >
                  Dirección
                </label>

                <div className="relative">
                  <img
                    src={mapin}
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
                    id="direccion"
                    name="direccion"
                    type="text"
                    placeholder="Dirección"
                    onChange={change}
                    value={formData.direccion}
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
            </div>
          </div>

          {/* DATOS CUENTA */}

          <div>
            <h3
              className="
              text-2xl
              font-bold
              text-white
              mb-6
            "
            >
              Datos de la cuenta
            </h3>

            <div
              className="
              grid
              grid-cols-1
              md:grid-cols-2
              gap-6
            "
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
                    value={formData.username}
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
                    value={formData.password}
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

              {/* TIPO USUARIO */}

              <div className="md:col-span-2">
                <label
                  htmlFor="tipo_usuario"
                  className="
                  block
                  text-sm
                  text-zinc-300
                  mb-3
                  font-medium
                "
                >
                  Tipo de usuario
                </label>

                <div className="relative">
                  <img
                    src={grupos}
                    className="
                    absolute
                    left-4
                    top-1/2
                    -translate-y-1/2
                    w-5
                    opacity-40
                    invert
                    z-10
                  "
                  />

                  <select
                    id="tipo_usuario"
                    name="tipo_usuario"
                    onChange={change}
                    defaultValue=""
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
                    outline-none
                    transition-all
                    duration-300
                    focus:border-orange-500
                    focus:bg-white/[0.06]
                    focus:ring-4
                    focus:ring-orange-500/10
                    appearance-none
                    cursor-pointer
                  "
                  >
                    <option value="" disabled>
                      Selecciona un tipo
                    </option>

                    <option value="cliente">Cliente</option>

                    <option value="vendedor">Vendedor</option>

                    <option value="admin">Admin</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* BOTON */}

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
            Crear cuenta
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
          ¿Ya tienes una cuenta?
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
