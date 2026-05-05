import logo from "../assets/logo.png";
import id_card from "../assets/id_card.svg";
import person from "../assets/person.svg";
import mapin from "../assets/mapin.svg";
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

  const submitData = (e) => {
    e.preventDefault();
    console.log("Data: ", formData);
  };

  const resetForm = () => {
    setFormData({
      cedula: "",
      nombre: "",
      apellido: "",
      telefono: "",
      correo: "",
      direccion: "",
      username: "",
      password: "",
    });
  };

  return (
    <div className="rounded-2xl w-2xl p-8 shadow-2xl z-10 bg-white">
      <h2 className="text-center font-bold ">Crear Cuenta</h2>
      <span className="block text-center">
        Registrate para acceder a toda la coleccion
      </span>
      <form onSubmit={submitData} onReset={resetForm} id="formulario_registro">
        <fieldset>
          <legend>Datos Personales</legend>
          <label htmlFor="cedula">Cedula</label>
          <div className="relative">
            <img
              src={id_card}
              className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-500"
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
          <div>
            <div className="w-1/2 inline-block pr-2">
              <label htmlFor="nombre">Nombre</label>
              <div className="relative">
                <img
                  src={person}
                  className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-500"
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
                  className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-500"
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
          <label htmlFor="direccion">Direccion</label>
          <div className="relative">
            <img
              src={mapin}
              alt=""
              className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-500"
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
          <input
            id="telefono"
            className="border-b-2 outline-0 border-gray-600 p-1 m-2 focus:border-gray-900"
            name="telefono"
            placeholder="Telefono"
            type="text"
            onChange={change}
            value={formData.telefono}
            required
          />
          <input
            id="correo"
            className="border-b-2 outline-0 border-gray-600 p-1 m-2 focus:border-gray-900"
            name="correo"
            placeholder="Correo"
            type="email"
            onChange={change}
            value={formData.correo}
            required
          />
        </fieldset>
        <fieldset>
          <legend>Usuario y Contraseña</legend>
          <input
            id="username"
            className="border-b-2 outline-0 border-gray-600 p-1 m-2 focus:border-gray-900"
            name="username"
            placeholder="Nombre de usuario"
            type="text"
            onChange={change}
            value={formData.username}
            required
          />
          <input
            id="password"
            className="border-b-2 outline-0 border-gray-600 p-1 m-2 focus:border-gray-900"
            name="password"
            placeholder="Contraseña"
            type="password"
            onChange={change}
            value={formData.password}
            required
          />
        </fieldset>
        <div>
          <input
            className="bg-blue-400 hover:cursor-pointer hover:bg-blue-600 p-4 rounded-xl"
            value="Registrarse"
            type="submit"
          />
          <input
            type="reset"
            name="boton-reset"
            id="boton-reset"
            className="bg-blue-400 hover:cursor-pointer hover:bg-blue-600 p-4 rounded-xl"
          />
        </div>
      </form>
    </div>
  );
};
