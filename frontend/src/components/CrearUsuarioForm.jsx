import logo from "../assets/logo.png";
import { InputForm } from "./InputForm";

export const CrearUsuarioForm = () => {
  return (
    <div className="bg-gray-200 flex items-center justify-center pt-8 pb-8 min-h-4/5">
      <form
        action=""
        method="post"
        className="bg-white rounded-2xl w-2xl p-8 shadow-2xl"
      >
        <fieldset>
          <legend>Datos Personales</legend>
          <div>
            <InputForm inputId={"cedula"} plahold={"Cedula"} tipo={"text"} />
          </div>
          <div>
            <InputForm inputId={"nombre"} plahold={"Nombre"} tipo={"text"} />
          </div>
          <div>
            <InputForm
              inputId={"apellido"}
              plahold={"Apellido"}
              tipo={"text"}
            />
          </div>
          <div>
            <InputForm
              inputId={"direccion"}
              plahold={"Direccion"}
              tipo={"text"}
            />
          </div>
          <div>
            <InputForm
              inputId={"telefono"}
              plahold={"Telefono"}
              tipo={"text"}
            />
          </div>
          <div>
            <InputForm inputId={"correo"} plahold={"Correo"} tipo={"email"} />
          </div>
        </fieldset>
        <fieldset>
          <legend>Usuario y Contraseña</legend>
          <div>
            <InputForm
              inputId={"username"}
              plahold={"Nombre de usuario"}
              tipo={"text"}
            />
          </div>
          <div>
            <InputForm
              inputId={"password"}
              plahold={"Contraseña"}
              tipo={"password"}
            />
          </div>
        </fieldset>
      </form>
    </div>
  );
};
