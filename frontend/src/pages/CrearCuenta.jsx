import { Cabezera } from "../components/Cabezera.jsx";
import { CrearUsuarioForm } from "../components/CrearUsuarioForm.jsx";
import { PiePagina } from "../components/PiePagina.jsx";

export const CrearCuenta = () => {
  return (
    <div className="flex flex-col">
      <Cabezera />
      <CrearUsuarioForm />
      <PiePagina />
    </div>
  );
};
