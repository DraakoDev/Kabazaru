import {
  useEffect,
  useState,
} from "react";
import { BotonLogout } from "../../components/BotonLogout.jsx";
import {
  getPersonas,
  getUsuarios,
  getVendedores,
} from "../../services/userService";

import {
  DynamicTable,
} from "../../components/tables/DynamicTable";

export const GestionUsuarios = () => {

  const [active,
    setActive] =
    useState("personas");

  const [data,
    setData] =
    useState([]);

  const loadData = async () => {

    if (active === "personas") {

      const res =
        await getPersonas();

      setData(res);

    }

    if (active === "usuarios") {

      const res =
        await getUsuarios();

      setData(res);

    }

    if (active === "vendedores") {

      const res =
        await getVendedores();

      setData(res);

    }
  };

  useEffect(() => {

    loadData();

  }, [active]);

  const personaColumns = [

    {
      key: "cedula",
      label: "Cédula",
    },

    {
      key: "nombre",
      label: "Nombre",
    },

    {
      key: "apellido",
      label: "Apellido",
    },

    {
      key: "direccion",
      label: "Dirección",
    },

    {
      key: "telefono",
      label: "Teléfono",
    },

    {
      key: "correo",
      label: "Correo",
    },
  ];

  const usuarioColumns = [

    {
      key: "persona",
      label: "Persona",
    },

    {
      key: "nombre_usuario",
      label: "Usuario",
    },

    {
      key: "tipo",
      label: "Tipo",
    },
  ];

  const vendedorColumns = [

   {
      key: "cedula",
      label: "Cédula",
    },

    {
      key: "nombre",
      label: "Nombre",
    },

    {
      key: "apellido",
      label: "Apellido",
    },

    {
      key: "direccion",
      label: "Dirección",
    },

    {
      key: "telefono",
      label: "Teléfono",
    },

    {
      key: "correo",
      label: "Correo",
    },

    {
      key: "tipo",
      label: "Tipo",
    },
  ];

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
              Gestión de Usuarios
            </h1>

            <p
              className="
                text-zinc-400
                mt-3
                text-sm
              "
            >
              Administra personas, usuarios y vendedores del sistema.
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
            Nuevo usuario
          </button>

        </section>

        {/* BOTONES */}

        <section
          className="
            flex
            flex-wrap
            gap-4
          "
        >

          <button
            onClick={() =>
              setActive("personas")
            }

            className={`
              h-14
              px-7
              rounded-2xl
              font-semibold
              transition-all
              duration-300
              hover:scale-[1.02]
              active:scale-[0.98]

              ${
                active === "personas"

                ? `
                  bg-orange-500
                  text-white
                  shadow-[0_10px_30px_rgba(249,115,22,.25)]
                `

                : `
                  bg-[#111111]
                  border
                  border-white/5
                  text-zinc-300
                  hover:bg-white/[0.03]
                `
              }
            `}
          >
            Personas
          </button>

          <button
            onClick={() =>
              setActive("usuarios")
            }

            className={`
              h-14
              px-7
              rounded-2xl
              font-semibold
              transition-all
              duration-300
              hover:scale-[1.02]
              active:scale-[0.98]

              ${
                active === "usuarios"

                ? `
                  bg-orange-500
                  text-white
                  shadow-[0_10px_30px_rgba(249,115,22,.25)]
                `

                : `
                  bg-[#111111]
                  border
                  border-white/5
                  text-zinc-300
                  hover:bg-white/[0.03]
                `
              }
            `}
          >
            Usuarios
          </button>

          <button
            onClick={() =>
              setActive("vendedores")
            }

            className={`
              h-14
              px-7
              rounded-2xl
              font-semibold
              transition-all
              duration-300
              hover:scale-[1.02]
              active:scale-[0.98]

              ${
                active === "vendedores"

                ? `
                  bg-orange-500
                  text-white
                  shadow-[0_10px_30px_rgba(249,115,22,.25)]
                `

                : `
                  bg-[#111111]
                  border
                  border-white/5
                  text-zinc-300
                  hover:bg-white/[0.03]
                `
              }
            `}
          >
            Vendedores
          </button>

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
                {
                  active === "personas"
                  ? "Listado de personas"

                  : active === "usuarios"
                  ? "Listado de usuarios"

                  : "Listado de vendedores"
                }
              </h2>

              <p className="text-zinc-500 mt-2 text-sm">

                {
                  active === "personas"
                  ? "Consulta todas las personas registradas."

                  : active === "usuarios"
                  ? "Administra los usuarios del sistema."

                  : "Consulta los vendedores registrados."
                }

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
              Exportar datos
            </button>

          </div>

          <div
            className="
              overflow-x-auto
              rounded-2xl
            "
          >

            {active === "personas" && (

              <DynamicTable
                columns={personaColumns}
                data={data}
              />

            )}

            {active === "usuarios" && (

              <DynamicTable
                columns={usuarioColumns}
                data={data}
              />

            )}

            {active === "vendedores" && (

              <DynamicTable
                columns={vendedorColumns}
                data={data}
              />

            )}

          </div>

        </section>
          <BotonLogout />
      </div>
          
    </div>
  );
};