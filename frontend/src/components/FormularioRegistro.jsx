import Swal from 'sweetalert2'
import id_card from "../assets/id_card.svg"
import person from "../assets/person.svg"
import mapin from "../assets/mapin.svg"
import phone from "../assets/phone.svg"
import emailico from "../assets/emailico.svg"
import passkey from "../assets/passkey.svg"
import arroba from "../assets/arroba.svg"
import { useState } from "react";

export const FormularioRegistro = () => {
  const [formData, setFormData] = useState({
    cedula: "",
    nombre: "",
    apellido: "",
    telefono: "",
    correo: "",
    direccion: "",
    username: "",
    password: "",
  });

  const change = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const submitData = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/register", {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if(data.success) {
        Swal.fire({
          title: "Usuario Registrado!",
          text: "El registro ha sido exitoso!",
          icon: "success"
        })
      } else {
        Swal.fire({
          title: "Error",
          text: data.error,
          icon: "warning"
        })
      }
      
    } catch (error) {
      Swal.fire({
          title: "(|||❛︵❛。)",
          text: "No fue posible conectarse al servidor!",
          icon: "error"
        })
      console.log("Error enviando los datos", error);
    }
  };

  return (
    <div className="rounded-2xl w-2xl p-8 shadow-2xl z-10 bg-white m-6">
      <h2 className="text-center font-bold text-4xl mb-2">Crear Cuenta</h2>
      <span className="block text-center mb-8">
        Registrate para acceder a toda la coleccion
      </span>
      <form onSubmit={submitData} id="formulario_registro">
        <fieldset className="flex flex-col gap-4">
          <div>
            <label htmlFor="cedula">Cedula</label>
            <div className="relative">
              <img
                src={id_card}
                className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-700"
              />
              <input
                id="cedula"
                className="w-full h-11 pl-10 pr-4 rounded-lg bg-white border border-zinc-200 placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all"
                name="cedula"
                placeholder="Cedula"
                type="text"
                onChange={change}
                value={formData.cedula}
                required
              />
            </div>
          </div>
          <div>
            <div className="w-1/2 inline-block pr-2">
              <label htmlFor="nombre">Nombre</label>
              <div className="relative">
                <img
                  src={person}
                  className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-600"
                />
                <input
                  id="nombre"
                  className="w-full h-11 pl-10 pr-4 rounded-lg bg-white border border-zinc-200 placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all"
                  name="nombre"
                  placeholder="Nombre"
                  type="text"
                  onChange={change}
                  value={formData.nombre}
                  required
                />
              </div>
            </div>
            <div className="w-1/2 inline-block pl-2">
              <label htmlFor="apellido">Apellido</label>
              <div className="relative">
                <img
                  src={person}
                  className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-600"
                />
                <input
                  id="apellido"
                  className="w-full h-11 pl-10 pr-4 rounded-lg bg-white border border-zinc-200 placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all"
                  name="apellido"
                  placeholder="Apellido"
                  type="text"
                  onChange={change}
                  value={formData.apellido}
                  required
                />
              </div>
            </div>
          </div>
          <div>
            <label htmlFor="direccion">Direccion</label>
            <div className="relative">
              <img
                src={mapin}
                alt=""
                className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-600"
              />
              <input
                id="direccion"
                className="w-full h-11 pl-10 pr-4 rounded-lg bg-white border border-zinc-200 placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all"
                name="direccion"
                placeholder="Direccion"
                type="text"
                onChange={change}
                value={formData.direccion}
                required
              />
            </div>
          </div>
          <div>
            <div className="inline-block w-1/2 pr-2">
              <label htmlFor="telefono">Telefono</label>
              <div className="relative">
                <img
                  src={phone}
                  className="absolute left-3 top-1/2 -translate-y-1/2"
                />
                <input
                  id="telefono"
                  className="w-full h-11 pl-10 pr-4 rounded-lg bg-white border border-zinc-200 placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all"
                  name="telefono"
                  placeholder="Telefono"
                  type="text"
                  onChange={change}
                  value={formData.telefono}
                  required
                />
              </div>
            </div>
            <div className="inline-block w-1/2 pl-2">
              <label htmlFor="correo">Correo Electronico</label>
              <div className="relative">
                <img
                  src={emailico}
                  className="absolute left-3 top-1/2 -translate-y-1/2"
                />
                <input
                  id="correo"
                  className="w-full h-11 pl-10 pr-4 rounded-lg bg-white border border-zinc-200 placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all"
                  name="correo"
                  placeholder="Correo"
                  type="email"
                  onChange={change}
                  value={formData.correo}
                  required
                />
              </div>
            </div>
          </div>
        </fieldset>
        <hr className="text-zinc-400 mt-8 mb-8 " />
        <fieldset className="mt-4">
          <div>
            <div className="inline-block w-1/2 pr-2">
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
                  value={formData.username}
                  required
                />
              </div>
            </div>
            <div className="inline-block w-1/2 pl-2">
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
                  value={formData.password}
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
        ¿Ya tienes una cuenta?{" "}
        <span className="text-amber-600">Iniciar Sesion</span>
      </span>
    </div>
  );
};
