import React from "react";
import {
  FaBirthdayCake,
  FaCookieBite,
  FaGift
} from "react-icons/fa";

function Servicios() {

  const servicios = [
    {
      icono: <FaBirthdayCake />,
      titulo: "Tartas personalizadas",
      texto: "Diseñadas para hacer de cada celebración un momento especial.",
    },
    {
      icono: <FaCookieBite />,
      titulo: "Dulces artesanales",
      texto: "Pequeños caprichos preparados cuidando cada detalle.",
    },
    {
      icono: <FaGift />,
      titulo: "Detalles para regalar",
      texto: "Porque un pequeño detalle también puede decir mucho.",
    },
  ];

  return (
    <section className="py-16 px-6 bg-white">

      <div className="max-w-6xl mx-auto text-center">

        <p className="uppercase tracking-[0.25em] text-sm text-gray-500 mb-3">
          Descubre Silpaza
        </p>

        <h2 className="text-3xl md:text-4xl font-leckerli mb-12">
          Hecho para endulzar tus momentos
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {servicios.map((servicio) => (

            <div
              key={servicio.titulo}
              className="p-8 rounded-2xl bg-[#FEFAE0] hover:-translate-y-2 transition duration-300"
            >

              {/* ICONO */}
              <div className="text-5xl text-[#A4133C] flex justify-center">
                {servicio.icono}
              </div>

              <h3 className="text-xl font-semibold mt-5 mb-3">
                {servicio.titulo}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {servicio.texto}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Servicios;

