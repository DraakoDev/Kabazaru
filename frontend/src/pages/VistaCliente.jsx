import { useEffect } from "react";
import { useNavigate } from "react-router";
import Cookies from "js-cookie";

import {
  ShoppingCart,
  Heart,
  Car,
  DollarSign,
} from "lucide-react";

import { StatCard } from "../components/ui/StatCard";

export const VistaCliente = () => {

  const navigate = useNavigate();

  useEffect(() => {

    const verificarSesion = async () => {

      try {

        const response = await fetch(
          `${backendURL}/login`,
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

    verificarSesion();

  }, []);

  return (

    <div className="space-y-8">

      {/* HEADER */}

      <section>

        <h1 className="text-4xl font-black text-slate-800">
          Panel del cliente
        </h1>

        <p className="text-slate-500 mt-2">
          Consulta tus compras y vehículos favoritos.
        </p>

      </section>

      {/* STATS */}

      <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

        <StatCard
          title="Compras"
          value="12"
          icon={<ShoppingCart />}
        />

        <StatCard
          title="Favoritos"
          value="28"
          icon={<Heart />}
        />

        <StatCard
          title="Vehículos vistos"
          value="134"
          icon={<Car />}
        />

        <StatCard
          title="Presupuesto"
          value="$80M"
          icon={<DollarSign />}
        />

      </section>

      {/* TABLA */}

      <section className="glass rounded-3xl p-6 overflow-hidden">

        <div className="flex items-center justify-between mb-6">

          <h2 className="text-2xl font-bold">
            Vehículos favoritos
          </h2>

          <button className="
            bg-orange-500
            hover:bg-orange-600
            text-white
            px-5
            py-3
            rounded-2xl
            transition
          ">
            Explorar vehículos
          </button>

        </div>

        <div className="overflow-x-auto">

          <table className="w-full">

            <thead>

              <tr className="border-b border-slate-200 text-left">

                <th className="pb-4">Marca</th>
                <th className="pb-4">Modelo</th>
                <th className="pb-4">Precio</th>
                <th className="pb-4">Estado</th>

              </tr>

            </thead>

            <tbody>

              <tr className="border-b border-slate-100 hover:bg-slate-50 transition">

                <td className="py-4">BMW</td>
                <td>X5</td>
                <td>$240.000.000</td>

                <td>

                  <span className="
                    bg-green-100
                    text-green-700
                    px-3
                    py-1
                    rounded-full
                    text-sm
                  ">
                    Disponible
                  </span>

                </td>

              </tr>

              <tr className="border-b border-slate-100 hover:bg-slate-50 transition">

                <td className="py-4">Audi</td>
                <td>A4</td>
                <td>$180.000.000</td>

                <td>

                  <span className="
                    bg-yellow-100
                    text-yellow-700
                    px-3
                    py-1
                    rounded-full
                    text-sm
                  ">
                    Reservado
                  </span>

                </td>

              </tr>

            </tbody>

          </table>

        </div>

      </section>

    </div>
  );
};