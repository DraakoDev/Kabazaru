export const DynamicTable = ({
  columns,
  data,
}) => {

  return (

    <div className="
      overflow-x-auto
      rounded-3xl
    ">

      <table className="
        w-full
        border-collapse
      ">

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

          </tr>

        </thead>

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

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
};