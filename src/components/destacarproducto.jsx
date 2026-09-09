import React from "react";
import { Link } from "react-router-dom";

function Destacado({ producto }) {
  if (!producto) return null;

  return (
    <section className="w-full bg-[#E9EDC9] py-16 px-6">

      <div className="max-w-6xl mx-auto">

        {/* TÍTULO */}

        <div className="text-center mb-12">

          <p className="uppercase tracking-[0.25em] text-sm text-gray-600 mb-3">
            Nuestro favorito
          </p>

          <h2 className="text-4xl md:text-5xl font-leckerli">
            Lo más vendido
          </h2>

        </div>


        {/* PRODUCTO DESTACADO */}

        <div className="flex flex-col md:flex-row items-center gap-10">

          {/* IMAGEN */}

          <Link
            to={`/detalleProducto/${producto.id}`}
            className="w-full md:w-1/2 overflow-hidden rounded-2xl"
          >

            <img
              src={producto.image}
              alt={producto.nombre}
              loading="lazy"
              className="
                w-full
                h-[400px]
                object-cover
                hover:scale-105
                transition
                duration-500
              "
            />

          </Link>


          {/* INFORMACIÓN */}

          <div className="w-full md:w-1/2 text-center md:text-left">

            <h3 className="text-3xl md:text-4xl font-leckerli mb-5">
              {producto.nombre}
            </h3>

            <p className="text-gray-700 text-lg leading-relaxed mb-7">
              {producto.descripcion}
            </p>


            {/* BOTÓN */}

            <Link
              to={`/detalleProducto/${producto.id}`}
              className="
                inline-block
                px-7
                py-3
                bg-[#AE043D]
                text-white
                font-semibold
                rounded-full
                hover:bg-[#8f0332]
                hover:scale-105
                transition
              "
            >
              Descubrir producto
            </Link>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Destacado;

