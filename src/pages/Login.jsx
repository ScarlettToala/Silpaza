import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import HeaderLogIn from "../components/HeaderLogIn";
import Footer from "../components/Footer";

import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useAuth } from "../context/AuthContext";

const Login = () => {

  const { login } = useAuth();

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const foundUser = users.find(
      (u) =>
        u.email === formData.email &&
        u.password === formData.password
    );

    if (foundUser) {
      login(foundUser);
      navigate("/home");
    } else {
      setError("Email o contraseña incorrectos");
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#fdfaf3]">

      {/* HEADER */}
      <HeaderLogIn/>

      <h1 className="absolute w-px h-px overflow-hidden whitespace-nowrap border-0">
        Silpaza
      </h1>

      {/* CONTENIDO */}
      <main className="flex-1 flex items-center justify-center px-4 py-12">

        <div className="bg-[#FAEDCD] p-8 rounded-xl shadow-2xl w-full max-w-md border border-[#E6D7A9]">

          <h2 className="text-3xl font-bold mb-6 text-center text-gray-800 tracking-wide">
            Iniciar Sesión
          </h2>

          <form
            onSubmit={handleSubmit}
            className="space-y-5"
          >

            {/* EMAIL */}
            <div>

              <label
                className="block text-gray-700 font-semibold mb-1"
                htmlFor="email"
              >
                Email
              </label>

              <input
                type="email"
                id="email"
                name="email"
                placeholder="Escriba su email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#A4133C]"
              />

            </div>

            {/* CONTRASEÑA */}
            <div>

              <label
                className="block text-gray-700 font-semibold mb-1"
                htmlFor="password"
              >
                Contraseña
              </label>

              <div className="relative">

                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  placeholder="Escriba su contraseña"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 pr-12 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#A4133C]"
                />

                {/* BOTÓN MOSTRAR / OCULTAR */}
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-[#A4133C] transition"
                  aria-label={
                    showPassword
                      ? "Ocultar contraseña"
                      : "Mostrar contraseña"
                  }
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>

              </div>

            </div>

            {/* ERROR */}
            {error && (
              <p className="text-red-600 text-sm font-medium text-center">
                {error}
              </p>
            )}

            {/* BOTÓN */}
            <button
              type="submit"
              className="w-full bg-[#A4133C] text-white py-2 rounded-lg hover:bg-[#C72A55] transition-all shadow-md font-semibold"
            >
              Ingresar
            </button>

          </form>

          {/* OLVIDASTE CONTRASEÑA */}
          <a
            href="#"
            className="block mt-4 text-center text-gray-700 font-semibold hover:underline"
          >
            ¿Olvidaste tu contraseña?
          </a>

          {/* REGISTRO */}
          <p className="mt-4 text-center text-gray-700">

            ¿No tienes cuenta?{" "}

            <Link
              to="/register"
              className="text-[#770e2b] font-semibold hover:underline"
            >
              Regístrate aquí
            </Link>

          </p>

        </div>

      </main>

      {/* FOOTER */}
      <Footer/>

    </div>
  );
};

export default Login;

