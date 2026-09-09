import React from "react";
import { Link } from "react-router-dom";

export default function Welcome() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-[#a91f46] px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">
                Bienvenido a Silpaza
            </h1>
            <p className="text-white text-lg md:text-xl mb-8 text-center">
                Por favor, inicia sesión o regístrate para continuar.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/login">
                    <button className="px-6 py-3 bg-white font-bold text-[#0D579C] rounded-lg shadow hover:text-blue-800 transition-all">
                        Iniciar Sesión
                    </button>
                </Link>
                <Link to="/register">
                    <button className="px-6 py-3 bg-white font-bold text-[#296A2D] rounded-lg shadow hover:text-green-800 transition-all">
                        Registrarse
                    </button>
                </Link>
            </div>
        </div>
    );
}
