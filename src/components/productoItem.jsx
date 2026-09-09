/* import React from "react";
import Alergenos from "./alergenos";
import '../styles/Producto.scss';
import '../styles/ProductoColores.scss';

function Producto({ image, name, description1, alergenos, colorFondo = "amarillo" }) {
  return (
    <div className={`producto producto-${colorFondo}`}>
      <div className="producto-grid">
        <img src={image} alt={name} />
        <div>
          <h3>{name}</h3>
          <p>{description1}</p>
          <div className="alergenos">
            <Alergenos lista={alergenos} />
          </div>
          <p className="pedido">Realiza tu pedido</p>
        </div>
      </div>
    </div>
  );
}

export default Producto; */

import React from "react";
import { FaShoppingBag } from "react-icons/fa";
import Alergenos from "./alergenos";

function Producto({
  image,
  name,
  description1,
  alergenos,
  colorFondo = "amarillo",
  onClick
}) {
  return (
    <article 
      className={`
        group overflow-hidden rounded-3xl
        bg-white shadow-md
        transition-all duration-300
        hover:-translate-y-2 hover:shadow-xl
      `}
       onClick={onClick}
    >
      {/* IMAGEN */}
      <div className="overflow-hidden h-64" >
        <img
          src={image}
          alt={name}
          className="
            w-full h-full object-cover
            transition-transform duration-500
            group-hover:scale-110
          "
        />
      </div>

      {/* CONTENIDO */}
      <div className="p-6">

        <h3 className="text-xl font-bold text-gray-800 mb-2">
          {name}
        </h3>

        <p className="text-gray-600 leading-relaxed mb-4">
          {description1}
        </p>

        {/* ALÉRGENOS */}
        <div className="mb-5">
          <Alergenos lista={alergenos} />
        </div>

        {/* BOTÓN 
        <button
          className="
            w-full flex items-center justify-center gap-2
            bg-[#A4133C] text-white
            py-3 rounded-full font-semibold
            transition
            hover:bg-[#C72A55]
          "
        >
          <FaShoppingBag />
          Realiza tu pedido
        </button>
*/}
      </div>
    </article>
  );
}

export default Producto;