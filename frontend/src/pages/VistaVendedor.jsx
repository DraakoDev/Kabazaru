import { useEffect } from "react";
import { useNavigate } from "react-router";
import Cookies from "js-cookie";

import {
  Car,
  DollarSign,
  Users,
  ShoppingBag,
} from "lucide-react";

import { StatCard } from "../components/ui/StatCard";

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

    <div className="space-y-8">

      <section>

        <h1 className="text-4xl font-black text-slate-800">
          Panel del vendedor
        </h1>

        <p className="text-slate-500 mt-2">
          Gestiona tus vehículos y ventas.
        </p>

      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

        <StatCard
          title="Vehículos"
          value="124"
          icon={<Car />}
        />

        <StatCard
          title="Ventas"
          value="$320M"
          icon={<DollarSign />}
        />

        <StatCard
          title="Clientes"
          value="87"
          icon={<Users />}
        />

        <StatCard
          title="Pedidos"
          value="16"
          icon={<ShoppingBag />}
        />

      </section>

    </div>
  );
};