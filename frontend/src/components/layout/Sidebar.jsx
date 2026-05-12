import {
  LayoutDashboard,
  Car,
  ShoppingCart,
  User,
  LogOut,
} from "lucide-react";

export const Sidebar = () => {
  return (
    <aside className="w-72 bg-slate-950 text-white p-6 hidden lg:flex flex-col justify-between">
      <div>
        <div className="mb-10">
          <h1 className="text-3xl font-black text-orange-400">
            Zaru
          </h1>

          <p className="text-slate-400 mt-2 text-sm">
            Marketplace Automotriz
          </p>
        </div>

        <nav className="space-y-3">
          <button className="flex items-center gap-3 w-full px-4 py-3 rounded-2xl bg-orange-500 hover:bg-orange-600 transition">
            <LayoutDashboard size={20} />
            Dashboard
          </button>

        <NavLink
  to="/gestion-usuarios"

  className="
    flex
    items-center
    gap-3
    px-4
    py-3
    rounded-2xl
    hover:bg-orange-100
    transition
  "
>
  Gestión Usuarios
</NavLink>

          <button className="flex items-center gap-3 w-full px-4 py-3 rounded-2xl hover:bg-slate-800 transition">
            <Car size={20} />
            Vehículos
          </button>

          <button className="flex items-center gap-3 w-full px-4 py-3 rounded-2xl hover:bg-slate-800 transition">
            <ShoppingCart size={20} />
            Compras
          </button>

          <button className="flex items-center gap-3 w-full px-4 py-3 rounded-2xl hover:bg-slate-800 transition">
            <User size={20} />
            Perfil
          </button>
        </nav>
      </div>

      <button className="flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 py-3 rounded-2xl transition">
        <LogOut size={18} />
        Cerrar sesión
      </button>
    </aside>
  );
};