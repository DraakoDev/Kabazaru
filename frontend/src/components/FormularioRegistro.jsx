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
import {backendURL} from "../congi.js"
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
    console.log(`${backendURL}/register`)
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
        });
        navigate('/login')
      } else {
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
      max-w-5xl
      rounded-[32px]
      shadow-2xl
      border
      border-white/30
      p-10
    ">

      {/* HEADER */}

      <div className="text-center mb-10">

        <h2 className="
          text-5xl
          font-black
          text-slate-800
        ">
          Crear Cuenta
        </h2>

        <p className="
          text-slate-500
          mt-4
          text-lg
        ">
          Regístrate para acceder a toda la colección
        </p>

      </div>

      {/* FORM */}

      <form
        onSubmit={submitData}
        id="formulario_registro"
        className="space-y-8"
      >

        {/* DATOS PERSONALES */}

        <div>

          <h3 className="
            text-2xl
            font-bold
            text-slate-700
            mb-6
          ">
            Información personal
          </h3>

          <div className="
            grid
            grid-cols-1
            md:grid-cols-2
            gap-6
          ">

            {/* CEDULA */}

            <div>

              <label
                htmlFor="cedula"
                className="block mb-2 font-medium text-slate-700"
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
                    opacity-60
                  "
                />

                <input
                  id="cedula"

                  className="
                    w-full
                    bg-white/80
                    border
                    border-slate-200
                    rounded-2xl
                    pl-12
                    pr-4
                    py-4
                    outline-none
                    transition-all
                    focus:border-orange-400
                    focus:ring-4
                    focus:ring-orange-100
                  "

                  name="cedula"

                  placeholder="Ingresa tu cédula"

                  type="text"

                  onChange={change}

                  value={formData.cedula}

                  required
                />

              </div>

            </div>

            {/* TELEFONO */}

            <div>

              <label
                htmlFor="telefono"
                className="block mb-2 font-medium text-slate-700"
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
                    opacity-60
                  "
                />

                <input
                  id="telefono"

                  className="
                    w-full
                    bg-white/80
                    border
                    border-slate-200
                    rounded-2xl
                    pl-12
                    pr-4
                    py-4
                    outline-none
                    transition-all
                    focus:border-orange-400
                    focus:ring-4
                    focus:ring-orange-100
                  "

                  name="telefono"

                  placeholder="Ingresa tu teléfono"

                  type="text"

                  onChange={change}

                  value={formData.telefono}

                  required
                />

              </div>

            </div>

            {/* NOMBRE */}

            <div>

              <label
                htmlFor="nombre"
                className="block mb-2 font-medium text-slate-700"
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
                    opacity-60
                  "
                />

                <input
                  id="nombre"

                  className="
                    w-full
                    bg-white/80
                    border
                    border-slate-200
                    rounded-2xl
                    pl-12
                    pr-4
                    py-4
                    outline-none
                    transition-all
                    focus:border-orange-400
                    focus:ring-4
                    focus:ring-orange-100
                  "

                  name="nombre"

                  placeholder="Nombre"

                  type="text"

                  onChange={change}

                  value={formData.nombre}

                  required
                />

              </div>

            </div>

            {/* APELLIDO */}

            <div>

              <label
                htmlFor="apellido"
                className="block mb-2 font-medium text-slate-700"
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
                    opacity-60
                  "
                />

                <input
                  id="apellido"

                  className="
                    w-full
                    bg-white/80
                    border
                    border-slate-200
                    rounded-2xl
                    pl-12
                    pr-4
                    py-4
                    outline-none
                    transition-all
                    focus:border-orange-400
                    focus:ring-4
                    focus:ring-orange-100
                  "

                  name="apellido"

                  placeholder="Apellido"

                  type="text"

                  onChange={change}

                  value={formData.apellido}

                  required
                />

              </div>

            </div>

            {/* CORREO */}

            <div>

              <label
                htmlFor="correo"
                className="block mb-2 font-medium text-slate-700"
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
                    opacity-60
                  "
                />

                <input
                  id="correo"

                  className="
                    w-full
                    bg-white/80
                    border
                    border-slate-200
                    rounded-2xl
                    pl-12
                    pr-4
                    py-4
                    outline-none
                    transition-all
                    focus:border-orange-400
                    focus:ring-4
                    focus:ring-orange-100
                  "

                  name="correo"

                  placeholder="Correo electrónico"

                  type="email"

                  onChange={change}

                  value={formData.correo}

                  required
                />

              </div>

            </div>

            {/* DIRECCION */}

            <div>

              <label
                htmlFor="direccion"
                className="block mb-2 font-medium text-slate-700"
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
                    opacity-60
                  "
                />

                <input
                  id="direccion"

                  className="
                    w-full
                    bg-white/80
                    border
                    border-slate-200
                    rounded-2xl
                    pl-12
                    pr-4
                    py-4
                    outline-none
                    transition-all
                    focus:border-orange-400
                    focus:ring-4
                    focus:ring-orange-100
                  "

                  name="direccion"

                  placeholder="Dirección"

                  type="text"

                  onChange={change}

                  value={formData.direccion}

                  required
                />

              </div>

            </div>

          </div>

        </div>

        {/* CUENTA */}

        <div>

          <h3 className="
            text-2xl
            font-bold
            text-slate-700
            mb-6
          ">
            Datos de la cuenta
          </h3>

          <div className="
            grid
            grid-cols-1
            md:grid-cols-2
            gap-6
          ">

            {/* USERNAME */}

            <div>

              <label
                htmlFor="username"
                className="block mb-2 font-medium text-slate-700"
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
                    outline-none
                    transition-all
                    focus:border-orange-400
                    focus:ring-4
                    focus:ring-orange-100
                  "

                  name="username"

                  placeholder="Usuario"

                  type="text"

                  onChange={change}

                  value={formData.username}

                  required
                />

              </div>

            </div>

            {/* PASSWORD */}

            <div>

              <label
                htmlFor="password"
                className="block mb-2 font-medium text-slate-700"
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
                    outline-none
                    transition-all
                    focus:border-orange-400
                    focus:ring-4
                    focus:ring-orange-100
                  "

                  name="password"

                  placeholder="Contraseña"

                  type="password"

                  onChange={change}

                  value={formData.password}

                  required
                />

              </div>

            </div>

            {/* TIPO USUARIO */}

            <div className="md:col-span-2">

              <label
                htmlFor="tipo_usuario"
                className="block mb-2 font-medium text-slate-700"
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
                    opacity-60
                    z-10
                  "
                />

                <select
                  className="
                    w-full
                    bg-white/80
                    border
                    border-slate-200
                    rounded-2xl
                    pl-12
                    pr-4
                    py-4
                    outline-none
                    transition-all
                    focus:border-orange-400
                    focus:ring-4
                    focus:ring-orange-100
                    appearance-none
                    cursor-pointer
                  "

                  id="tipo_usuario"

                  name="tipo_usuario"

                  onChange={change}

                  defaultValue=""

                  required
                >

                  <option value="" disabled>
                    Selecciona un tipo de usuario
                  </option>

                  <option value="cliente">
                    Cliente
                  </option>

                  <option value="vendedor">
                    Vendedor
                  </option>

                </select>

              </div>

            </div>

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
            hover:scale-[1.01]
            active:scale-[0.99]
            cursor-pointer
          "

          type="submit"
        >
          Crear cuenta
        </button>

      </form>

      {/* FOOTER */}

      <div className="
        text-center
        mt-8
        text-slate-500
      ">

        ¿Ya tienes una cuenta?

        <Link
          to="/login"

          className="
            text-orange-500
            font-semibold
            ml-2
            hover:text-orange-600
            transition
          "
        >
          Iniciar sesión
        </Link>

      </div>

    </div>

  </div>
);
};
