import { FormularioRegistro } from "../components/FormularioRegistro.jsx";

export const CrearCuenta = () => {
 return (
  <main
    className="
      min-h-screen
      bg-[#09090b]
      relative
      overflow-hidden
      flex
      items-center
      justify-center
      px-6
      py-10
    "
  >

    {/* EFECTOS DE FONDO */}

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

    {/* FORMULARIO */}

    <div className="relative z-10 w-full flex justify-center">
      <FormularioRegistro />
    </div>

  </main>
);
};
