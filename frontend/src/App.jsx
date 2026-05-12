import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router";

import {GestionUsuarios,} 
from "./pages/admin/GestionUsuarios";

import { CrearCuenta }
from "./pages/CrearCuenta";

import { LoginPage }
from "./pages/LoginPage";

import { VistaCliente }
from "./pages/VistaCliente";

import { VistaVendedor }
from "./pages/VistaVendedor";

import { ProtectedRoute }
from "./routes/ProtectedRoute";

function App() {

  return (

    <BrowserRouter>

      <Routes>

        {/* PUBLICAS */}

        <Route
          path="/login"
          element={<LoginPage />}
        />

        <Route
          path="/registro"
          element={<CrearCuenta />}
        />

        {/* PRIVADAS */}

        <Route
          path="/cliente"

          element={

            <ProtectedRoute
              role="cliente"
            >

              <VistaCliente />

            </ProtectedRoute>

          }
        />
         <Route
          path="/gestion-usuarios"

          element={

            <ProtectedRoute>

              <GestionUsuarios />

            </ProtectedRoute>

          }
        />
        <Route
          path="/vendedor"

          element={

            <ProtectedRoute
              role="vendedor"
            >

              <VistaVendedor />

            </ProtectedRoute>

          }
        />

        {/* REDIRECT */}

        <Route
          path="*"
          element={
            <Navigate to="/login" />
          }
        />

      </Routes>

    </BrowserRouter>

    
  );

  
}

export default App;

