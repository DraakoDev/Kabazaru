import { useEffect } from "react";
import { useNavigate } from "react-router";
import { backendURL } from "../config";
import Cookies from "js-cookie";
import { BotonLogout } from "../components/BotonLogout";

import {
  Car,
  DollarSign,
  Users,
  ShoppingBag,
} from "lucide-react";

export const VistaVendedor = () => {

  let navigate = useNavigate();

  useEffect(() => {

    const nose = async () => {

      try {

        const response = await fetch(
          `${backendURL}/seller`,
          {
            credentials: "include",

            headers: {
              "Content-Type": "application/json",
            },

            method: "post",

            body: JSON.stringify(
              Cookies.get("access_token")
            ),
          }
        );

        const data = await response.json();

        if (data.session === "non-active") {
          navigate("/login");
        }

      } catch (error) {

        console.log(
          "No fue posible solicitar acceso",
          error.message
        );

      }
    };

    nose();

  }, []);

  return (

    <div
      className="
        min-h-screen
        bg-[#09090b]
        relative
        overflow-hidden
        p-8
        text-white
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

      <div className="relative z-10 space-y-8">

        {/* HEADER */}

        <section
          className="
            flex
            flex-col
            md:flex-row
            md:items-center
            md:justify-between
            gap-6
          "
        >

          <div>

            <h1
              className="
                text-5xl
                font-black
                tracking-tight
                text-white
              "
            >
              Panel del vendedor
            </h1>

            <p
              className="
                text-zinc-400
                mt-3
                text-sm
              "
            >
              Gestiona tus vehículos, clientes y ventas realizadas.
            </p>

          </div>

          <button
            className="
              h-14
              px-8
              rounded-2xl
              bg-orange-500
              hover:bg-orange-400
              text-white
              font-semibold
              transition-all
              duration-300
              hover:scale-[1.02]
              active:scale-[0.98]
              shadow-[0_10px_30px_rgba(249,115,22,.25)]
              cursor-pointer
            "
          >
            Registrar vehículo
          </button>

        </section>

           <BotonLogout />

        {/* STATS */}

        <section
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            xl:grid-cols-4
            gap-6
          "
        >

          {/* VEHÍCULOS */}

          <div
            className="
              bg-[#111111]
              border
              border-white/5
              rounded-[28px]
              p-6
              shadow-[0_0_30px_rgba(0,0,0,.35)]
            "
          >

            <div className="flex items-center justify-between">

              <div>

                <p className="text-zinc-400 text-sm">
                  Vehículos
                </p>

                <h3
                  className="
                    text-4xl
                    font-black
                    mt-3
                  "
                >
                  124
                </h3>

              </div>

              <div
                className="
                  w-14
                  h-14
                  rounded-2xl
                  bg-cyan-500/10
                  flex
                  items-center
                  justify-center
                  text-cyan-400
                "
              >
                <Car size={28} />
              </div>

            </div>

          </div>

          {/* VENTAS */}

          <div
            className="
              bg-[#111111]
              border
              border-white/5
              rounded-[28px]
              p-6
              shadow-[0_0_30px_rgba(0,0,0,.35)]
            "
          >

            <div className="flex items-center justify-between">

              <div>

                <p className="text-zinc-400 text-sm">
                  Ventas
                </p>

                <h3
                  className="
                    text-4xl
                    font-black
                    mt-3
                  "
                >
                  $320M
                </h3>

              </div>

              <div
                className="
                  w-14
                  h-14
                  rounded-2xl
                  bg-green-500/10
                  flex
                  items-center
                  justify-center
                  text-green-400
                "
              >
                <DollarSign size={28} />
              </div>

            </div>

          </div>

          {/* CLIENTES */}

          <div
            className="
              bg-[#111111]
              border
              border-white/5
              rounded-[28px]
              p-6
              shadow-[0_0_30px_rgba(0,0,0,.35)]
            "
          >

            <div className="flex items-center justify-between">

              <div>

                <p className="text-zinc-400 text-sm">
                  Clientes
                </p>

                <h3
                  className="
                    text-4xl
                    font-black
                    mt-3
                  "
                >
                  87
                </h3>

              </div>

              <div
                className="
                  w-14
                  h-14
                  rounded-2xl
                  bg-purple-500/10
                  flex
                  items-center
                  justify-center
                  text-purple-400
                "
              >
                <Users size={28} />
              </div>

            </div>

          </div>

          {/* PEDIDOS */}

          <div
            className="
              bg-[#111111]
              border
              border-white/5
              rounded-[28px]
              p-6
              shadow-[0_0_30px_rgba(0,0,0,.35)]
            "
          >

            <div className="flex items-center justify-between">

              <div>

                <p className="text-zinc-400 text-sm">
                  Pedidos
                </p>

                <h3
                  className="
                    text-4xl
                    font-black
                    mt-3
                  "
                >
                  16
                </h3>

              </div>

              <div
                className="
                  w-14
                  h-14
                  rounded-2xl
                  bg-orange-500/10
                  flex
                  items-center
                  justify-center
                  text-orange-400
                "
              >
                <ShoppingBag size={28} />
              </div>

            </div>

          </div>

        </section>

        {/* TABLA */}

        <section
          className="
            bg-[#111111]
            border
            border-white/5
            rounded-[32px]
            p-8
            shadow-[0_0_40px_rgba(0,0,0,.35)]
          "
        >

          <div
            className="
              flex
              flex-col
              md:flex-row
              md:items-center
              md:justify-between
              gap-4
              mb-8
            "
          >

            <div>

              <h2
                className="
                  text-3xl
                  font-black
                  text-white
                "
              >
                Vehículos publicados
              </h2>

              <p className="text-zinc-500 mt-2 text-sm">
                Consulta y administra los vehículos registrados.
              </p>

            </div>

            <button
              className="
                h-14
                px-7
                rounded-2xl
                bg-orange-500
                hover:bg-orange-400
                text-white
                font-semibold
                transition-all
                duration-300
                hover:scale-[1.02]
                active:scale-[0.98]
                shadow-[0_10px_30px_rgba(249,115,22,.25)]
              "
            >
              Ver inventario
            </button>

          </div>

          <div className="overflow-x-auto">

            <table className="w-full">

              <thead>

                <tr
                  className="
                    border-b
                    border-white/10
                    text-left
                    text-zinc-400
                  "
                >

                  <th className="pb-5 font-medium">
                    Marca
                  </th>

                  <th className="pb-5 font-medium">
                    Modelo
                  </th>

                  <th className="pb-5 font-medium">
                    Precio
                  </th>

                  <th className="pb-5 font-medium">
                    Estado
                  </th>

                </tr>

              </thead>

              <tbody>

                <tr
                  className="
                    border-b
                    border-white/5
                    hover:bg-white/[0.02]
                    transition-all
                  "
                >

                  <td className="py-6 font-semibold">
                    Toyota
                  </td>

                  <td className="text-zinc-300">
                    Corolla Cross
                  </td>

                  <td className="text-zinc-300">
                    $145.000.000
                  </td>

                  <td>

                    <span
                      className="
                        bg-green-500/10
                        text-green-400
                        px-4
                        py-2
                        rounded-full
                        text-xs
                        font-semibold
                      "
                    >
                      Disponible
                    </span>

                  </td>

                </tr>

                <tr
                  className="
                    border-b
                    border-white/5
                    hover:bg-white/[0.02]
                    transition-all
                  "
                >

                  <td className="py-6 font-semibold">
                    Mazda
                  </td>

                  <td className="text-zinc-300">
                    CX-5
                  </td>

                  <td className="text-zinc-300">
                    $168.000.000
                  </td>

                  <td>

                    <span
                      className="
                        bg-yellow-500/10
                        text-yellow-400
                        px-4
                        py-2
                        rounded-full
                        text-xs
                        font-semibold
                      "
                    >
                      En negociación
                    </span>

                  </td>

                </tr>

              </tbody>

            </table>

          </div>

        </section>

      </div>

    </div>
  );
};