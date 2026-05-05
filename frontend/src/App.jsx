import { CrearCuenta } from "./pages/CrearCuenta.jsx";
import { BrowserRouter, Routes, Route } from "react-router";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="register" element={<CrearCuenta />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
