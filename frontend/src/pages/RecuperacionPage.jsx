import { FormularioRecuperacion } from "../components/FormularioRecuperacion";

export const RecuperacionPage = () => {
  return (
    <main
      className="
        min-h-screen
        bg-[#09090b]
        relative
        overflow-hidden
      "
    >

      {/* EFECTOS FONDO */}

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

      {/* CONTENIDO */}

      <div className="relative z-10">
        <FormularioRecuperacion />
      </div>

    </main>
  );
};