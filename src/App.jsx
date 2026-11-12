import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import Welcome from "./pages/Welcome";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import SobreNosotros from "./pages/SobreNosotros";
import Servicios from "./pages/Servicios";
import Productos from "./pages/Productos";
import DetalleProducto from "./pages/DetalleProducto";
import PaginaError from "./pages/PaginaError";
import "./App.css";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* RUTAS PÚBLICAS */}
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* RUTAS PROTEGIDAS: todo lo de dentro exige estar logueado */}
          <Route element={<ProtectedRoute />}>
            <Route path="/home" element={<Home />} />
            <Route path="/sobrenosotros" element={<SobreNosotros />} />
            <Route path="/productos" element={<Productos />} />
            <Route path="/servicios" element={<Servicios />} />
            <Route path="/detalleProducto/:id" element={<DetalleProducto />} />
          </Route>

          <Route path="*" element={<PaginaError />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
