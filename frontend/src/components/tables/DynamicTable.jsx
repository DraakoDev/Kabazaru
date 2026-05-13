export const DynamicTable = ({
  columns,
  data,
}) => {

  const handleView = (item) => {

    console.log("Ver:", item);

  };

  const handleEdit = (item) => {

    console.log("Editar:", item);

  };

  const handleDelete = (item) => {

    console.log("Eliminar:", item);

  };

  return (

    <div className="
      overflow-x-auto
      rounded-3xl
    ">

      <table className="
        w-full
        border-collapse
      ">

        {/* HEADER */}

        <thead>

          <tr className="
            bg-slate-100
            text-slate-700
          ">

            {columns.map((col) => (

              <th
                key={col.key}

                className="
                  text-left
                  px-6
                  py-4
                  font-bold
                "
              >
                {col.label}
              </th>

            ))}

            {/* NUEVA COLUMNA */}

            <th className="
              text-left
              px-6
              py-4
              font-bold
            ">
              Acciones
            </th>

          </tr>

        </thead>

        {/* BODY */}

        <tbody>

          {data.map((item, index) => (

            <tr
              key={index}

              className="
                border-b
                border-slate-100
                hover:bg-slate-50
                transition
              "
            >

              {/* DATOS */}

              {columns.map((col) => (

                <td
                  key={col.key}

                  className="
                    px-6
                    py-4
                    text-slate-600
                  "
                >
                  {item[col.key]}
                </td>

              ))}

              {/* BOTONES */}

              <td className="
                px-6
                py-4
              ">

                <div className="
                  flex
                  gap-3
                ">

                  {/* VER */}

                  <button
                    onClick={() =>
                      handleView(item)
                    }

                    className="
                      px-4
                      py-2
                      rounded-xl
                      bg-blue-500
                      hover:bg-blue-600
                      text-white
                      text-sm
                      font-semibold
                      transition
                    "
                  >
                    Ver
                  </button>

                  {/* EDITAR */}

                  <button
                    onClick={() =>
                      handleEdit(item)
                    }

                    className="
                      px-4
                      py-2
                      rounded-xl
                      bg-amber-500
                      hover:bg-amber-600
                      text-white
                      text-sm
                      font-semibold
                      transition
                    "
                  >
                    Editar
                  </button>

                  {/* ELIMINAR */}

                  <button
                    onClick={() =>
                      handleDelete(item)
                    }

                    className="
                      px-4
                      py-2
                      rounded-xl
                      bg-red-500
                      hover:bg-red-600
                      text-white
                      text-sm
                      font-semibold
                      transition
                    "
                  >
                    Eliminar
                  </button>

                </div>

              </td>

            </tr>

          ))}

        </tbody>

      </table>
        
    </div>
  );
};