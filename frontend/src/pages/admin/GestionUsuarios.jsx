import {
  useEffect,
  useState,
} from "react";

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
      key: "persona",
      label: "Persona",
    },

    {
      key: "registro_empresa",
      label: "Registro Empresa",
    },
  ];

  return (

    <div className="
      space-y-8
      p-6
    ">

      {/* HEADER */}

      <div>

        <h1 className="
          text-4xl
          font-black
          text-slate-800
        ">
          Gestión de Usuarios
        </h1>

        <p className="
          text-slate-500
          mt-2
        ">
          Administra personas,
          usuarios y vendedores
        </p>

      </div>

      {/* BOTONES */}

      <div className="flex gap-4">

        <button
          onClick={() =>
            setActive("personas")
          }

          className={`
            px-6
            py-3
            rounded-2xl
            font-semibold
            transition

            ${
              active === "personas"
              ? "bg-orange-500 text-white"
              : "bg-slate-200"
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
            px-6
            py-3
            rounded-2xl
            font-semibold
            transition

            ${
              active === "usuarios"
              ? "bg-orange-500 text-white"
              : "bg-slate-200"
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
            px-6
            py-3
            rounded-2xl
            font-semibold
            transition

            ${
              active === "vendedores"
              ? "bg-orange-500 text-white"
              : "bg-slate-200"
            }
          `}
        >
          Vendedores
        </button>

      </div>

      {/* TABLA */}

      <div className="
        glass
        p-6
        rounded-3xl
      ">

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

    </div>
  );
};