import { CrearCuenta } from "./pages/CrearCuenta.jsx";
import { LoginPage } from "./pages/LoginPage.jsx";
import { BrowserRouter, Routes, Route } from "react-router";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="registro" element={<CrearCuenta />} />
          <Route path="login" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
