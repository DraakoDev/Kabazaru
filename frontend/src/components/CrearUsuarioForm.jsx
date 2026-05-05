import logo from "../assets/logo.png";
import { useState } from "react";

export const CrearUsuarioForm = () => {
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
    <div className="bg-gray-200 flex items-center justify-center pt-8 pb-8 h-[86vh]">
      <form
        onSubmit={submitData}
        onReset={resetForm}
        className="bg-white rounded-2xl w-2xl p-8 shadow-2xl"
        id="formulario_registro"
      >
        <fieldset>
          <legend>Datos Personales</legend>
          <input
            id="cedula"
            className="border-b-2 outline-0 border-gray-600 p-1 m-2 focus:border-gray-900"
            name="cedula"
            placeholder="Cedula"
            type="text"
            onChange={change}
            value={formData.cedula}
            required
          />
          <input
            id="nombre"
            className="border-b-2 outline-0 border-gray-600 p-1 m-2 focus:border-gray-900"
            name="nombre"
            placeholder="Nombre"
            type="text"
            onChange={change}
            value={formData.nombre}
            required
          />
          <input
            id="apellido"
            className="border-b-2 outline-0 border-gray-600 p-1 m-2 focus:border-gray-900"
            name="apellido"
            placeholder="Apellido"
            type="text"
            onChange={change}
            value={formData.apellido}
            required
          />
          <input
            id="direccion"
            className="border-b-2 outline-0 border-gray-600 p-1 m-2 focus:border-gray-900"
            name="direccion"
            placeholder="Direccion"
            type="text"
            onChange={change}
            value={formData.direccion}
            required
          />
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
