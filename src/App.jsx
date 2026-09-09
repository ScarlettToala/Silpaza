import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import SobreNosotros from "./pages/SobreNosotros";
import "./App.css";
import Servicios from "./pages/Servicios";
import Productos from "./pages/Productos";
import DetalleProducto from "./pages/DetalleProducto";
import PaginaError from "./pages/PaginaError";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("userData"));
    if (savedUser) setUser(savedUser);
  }, []);

  return (
    <Router>
      <Routes>
        {/*Si el usuario no esta logueado y quiere ver rutas protegidas lo manda a welcome para iniciar sesión o registrarse y si ha iniciado sesión no podrá ver welcome */}
        <Route path="/" element={user ? <Navigate to="/home" /> : <Navigate to="/login" />} /> 
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/register" element={<Register setUser={setUser} />} />
        <Route path="/sobrenosotros" element={user ? <SobreNosotros/> : <Navigate to="/" /> } />
        <Route path="/productos"  element={<Productos user={user} setUser={setUser} />} />
        <Route path="/servicios" element={<Servicios user={user} setUser={setUser} />} />
        <Route path="/detalleProducto/:id" element={<DetalleProducto user={user} setUser={setUser} />} />
        <Route
          path="/home"
          element={<Home user={user} setUser={setUser} />} 
        />
        <Route path="*" element={<PaginaError />} />
      </Routes>
    </Router>
  );
}

export default App;
