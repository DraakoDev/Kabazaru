import { FormularioLogin } from "../components/FormularioLogin.jsx";

export const LoginPage = () => {
  return (
    <>
      <main className="bg-linear-to-r from-amber-50 via-orange-100 to-white">
        <div className="flex items-center justify-center">
          <FormularioLogin />
        </div>
      </main>
    </>
  );
};
