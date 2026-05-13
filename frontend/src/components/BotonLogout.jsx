import { useContext } from "react";

import { AuthContext } from "../context/contextos";

export const BotonLogout = () => {

  const { logout } =
    useContext(AuthContext);

  return (

    <button
      onClick={logout}

      className="
        h-14
        px-8
        rounded-2xl
        bg-red-500/90
        hover:bg-red-400
        text-white
        font-semibold
        transition-all
        duration-300
        hover:scale-[1.02]
        active:scale-[0.98]
        shadow-[0_10px_30px_rgba(239,68,68,.25)]
        cursor-pointer
      "
    >
      Cerrar sesión
    </button>

  );
};