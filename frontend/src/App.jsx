import { CrearCuenta } from "./pages/CrearCuenta.jsx";
import { LoginPage } from "./pages/LoginPage.jsx";
import { BrowserRouter, Routes, Route } from "react-router";
import { VistaVendedor } from "./pages/VistaVendedor.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="registro" element={<CrearCuenta />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="vendedor" element={<VistaVendedor/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
