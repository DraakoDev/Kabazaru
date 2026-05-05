import { Cabezera } from "../components/Cabezera.jsx";
import { FormularioRegistro } from "../components/FormularioRegistro.jsx";
import { PiePagina } from "../components/PiePagina.jsx";

export const CrearCuenta = () => {
  return (
    <>
      <Cabezera />
      <main className="bg-linear-to-r from-amber-50 via-orange-200 to-white">
        <div className="flex items-center justify-center">
          <FormularioRegistro />
        </div>
      </main>
    </>
  );
};
