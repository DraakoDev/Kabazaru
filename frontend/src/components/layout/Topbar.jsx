import { Bell, Search } from "lucide-react";

export const Topbar = () => {
  return (
    <header className="h-20 bg-white border-b border-slate-200 flex items-center justify-between px-6">
      <div>
        <h2 className="text-2xl font-bold text-slate-800">
          Dashboard
        </h2>

        <p className="text-slate-500 text-sm">
          Bienvenido nuevamente
        </p>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative hidden md:block">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            size={18}
          />

          <input
            type="text"
            placeholder="Buscar..."
            className="bg-slate-100 rounded-2xl pl-10 pr-4 py-3 outline-none w-72"
          />
        </div>

        <button className="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center hover:bg-slate-200 transition">
          <Bell size={20} />
        </button>

        <div className="w-12 h-12 rounded-2xl bg-orange-500 text-white flex items-center justify-center font-bold">
          A
        </div>
      </div>
    </header>
  );
};