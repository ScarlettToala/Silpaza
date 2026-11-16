import React from "react";

function Alergenos({ lista = [] }) {

  const coloresAlergenos = {
    gluten: "bg-[#F9E2AE] text-[#6B4E16]",
    lacteos: "bg-[#DCEAF7] text-[#31546D]",
    huevos: "bg-[#FAD7B5] text-[#7A421E]",
    soja: "bg-[#DDE8C5] text-[#3F5B2A]",
    cacahuetes: "bg-[#F5D6D6] text-[#7A2E2E]",
    frutosSecos: "bg-[#E8D5F2] text-[#5A2E7A]",
    sesamo: "bg-[#D6F0F0] text-[#2E7A7A]",
  };

  return (
    <div className="flex flex-wrap gap-2">

      {lista.map((alergeno) => {

        const nombre =
          typeof alergeno === "string"
            ? alergeno
            : alergeno.nombre;

        return (

          <span
            key={nombre}
            className={`
              px-3
              py-1
              rounded-full
              text-sm
              font-medium
              ${coloresAlergenos[nombre] || "bg-gray-200 text-gray-700"}
            `}
          >
            {nombre}
          </span>

        );

      })}

    </div>
  );
}

export default Alergenos;