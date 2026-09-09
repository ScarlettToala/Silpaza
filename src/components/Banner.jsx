import React from "react";
import { Link } from "react-router-dom";

function FraseImagen({
  eslogan,
  backgroundImage,
  backgroundVideo,
  frase,
  descripcion,
}) {
  return (
    <section className="relative w-full min-h-[550px] overflow-hidden">
      
      {/* Fondo */}
      {backgroundVideo ? (
        <video
          src={backgroundVideo}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
      ) : backgroundImage ? (
        <img
          src={backgroundImage}
          alt={descripcion || "Imagen de fondo"}
          fetchpriority="high"
          className="absolute inset-0 w-full h-full object-cover"
        />
      ) : null}

      {/* Capa */}
      <div className="absolute inset-0 bg-black/45"></div>

      {/* Contenido */}
      <div className="relative z-10 min-h-[550px] flex items-center justify-center px-6">
        
        <div className="text-center text-white max-w-3xl">

          <p className="uppercase tracking-[0.3em] text-sm mb-5">
            {eslogan}
          </p>

          <h1 className="text-4xl md:text-6xl font-leckerli leading-tight drop-shadow-lg">
            {frase}
          </h1>

          {descripcion && (
            <p className="mt-6 text-lg md:text-xl max-w-xl mx-auto">
              {descripcion}
            </p>
          )}

          <Link
            to="/productos"
            className="inline-block mt-8 px-8 py-3 bg-white text-gray-900 rounded-full font-semibold hover:scale-105 transition"
          >
            Ver productos
          </Link>

        </div>
      </div>
    </section>
  );
}

export default FraseImagen;