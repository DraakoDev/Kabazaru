import logo from "../assets/logo.png";

export const Cabezera = () => {
  return (
    <div className="bg-gray-800 p-2 h-[14vh] flex items-center justify-between flex-row">
      <header className="flex justify-between w-full">
        <div className="flex items-center gap-4">
          <figure className="w-24 p-0 m-0">
            <img src={logo} alt="Logo" />
          </figure>
          <h1 className=" text-4xl text-amber-50 font-bold italic">Kabazaru</h1>
        </div>
        <button className="bg-blue-500 rounded-2xl p-4 min-h-3 hover:bg-blue-900 hover:cursor-pointer">
          Iniciar Sesion
        </button>
      </header>
    </div>
  );
};
