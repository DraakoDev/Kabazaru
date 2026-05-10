import { BrowserRouter, Routes, Route } from "react-router";

import { LoginPage } from "./pages/LoginPage";
import { CrearCuenta } from "./pages/CrearCuenta";
import { VistaVendedor } from "./pages/VistaVendedor";

import { MainLayout } from "./layouts/MainLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/registro" element={<CrearCuenta />} />

        <Route element={<MainLayout />}>
          <Route
            path="/vendedor"
            element={<VistaVendedor />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
