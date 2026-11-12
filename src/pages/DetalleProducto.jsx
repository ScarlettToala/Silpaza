import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Alergenos from "../components/Alergenos";
import {
FaPhoneAlt
} from "react-icons/fa";

import { categorias } from "../data/productosData";

function DetalleProducto({ user, setUser }) {

  const navigate = useNavigate();

  // Leemos el id de la URL
  const { id } = useParams();

  useEffect(() => {
  window.scrollTo(0, 0);
}, [id]);

  /* =========================
     CERRAR SESIÓN
  ========================= */

  const handleLogout = () => {
    localStorage.removeItem("userData");
    setUser(null);
    navigate("/");
  };


  /* =========================
     BUSCAR PRODUCTO
  ========================= */

  const producto = categorias
    .flatMap((categoria) => categoria.productos)
    .find((producto) => producto.id === Number(id));


  /* =========================
     PRODUCTO NO ENCONTRADO
  ========================= */

  if (!producto) {
    return (
      <div className="min-h-screen bg-[#fdfaf3] flex flex-col">

        <Header
          onLogout={handleLogout}
          user={user}
        />

        <main className="flex-1 flex flex-col items-center justify-center px-6">

          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Producto no encontrado
          </h1>

          <button
            onClick={() => navigate("/productos")}
            className="
              bg-[#A4133C]
              text-white
              px-6
              py-3
              rounded-full
              font-semibold
              hover:bg-[#C72A55]
              transition
            "
          >
            Ver productos
          </button>

        </main>

        <Footer/>

      </div>
    );
  }


  /* =========================
     PÁGINA DEL PRODUCTO
  ========================= */

  return (

    <div className="bg-[#fdfaf3] min-h-screen flex flex-col">

      <Header
        onLogout={handleLogout}
        user={user}
      />


      <main className="flex-1 py-3 md:py-6 px-4 max-w-screen-lg mx-auto w-full">

        {/* CONTENEDOR PRINCIPAL */}

        <section
  className="
    grid
    grid-cols-1
    md:grid-cols-2

    bg-white
    rounded-3xl
    shadow-lg
    overflow-hidden
  "
>

  {/* =========================
      IMAGEN
  ========================= */}

  <div className="
  h-[350px]
  md:h-full
  min-h-[450px]
  relative
">
  <img
    src={producto.image}
    alt={producto.nombre}
    className="
      w-full
      h-full
      object-cover
      rounded-2xl
      shadow-2xl
    "
  />
  
  {/* EFECTO GLASS EN LA PARTE INFERIOR */}
  <div className="
    absolute
    bottom-0
    left-0
    right-0
    h-32
    bg-gradient-to-t
    from-black/60
    to-transparent
    rounded-b-2xl
  ">
    <p style={{
        fontFamily: "Leckerli One" 
      }}
      className="
      absolute
      bottom-4
      left-6
      text-white
      text-5xl
      md:text-3xl
    ">
      {producto.nombre}
    </p>
  </div>
</div>


  {/* =========================
      INFORMACIÓN
  ========================= */}

  <div className="
    p-8
    md:p-12
    space-y-6
    flex
    flex-col
    justify-center
  ">

    {/* DESCRIPCIÓN LARGA */}

    {producto.descripcionLarga && (
      <p className="
        text-gray-700
        leading-relaxed
      ">
        {producto.descripcionLarga}
      </p>
    )}


    {/* POR QUÉ TE ENCANTARÁ */}

    {producto.caracteristicas && (
      <div>

        <h2 className="
          text-xl
          font-semibold
          text-[#A4133C]
          mb-4
        ">
          ¿Por qué te encantará?
        </h2>

        <ul className="space-y-3 text-gray-700">

          {producto.caracteristicas.map(
            (caracteristica, index) => (

              <li
                key={index}
                className="flex items-center gap-2"
              >
                <span className="text-[#A4133C]">
                  ✓
                </span>

                {caracteristica}

              </li>

            )
          )}

        </ul>

      </div>
    )}


    {/* ALÉRGENOS */}

    {producto.alergenos && (
      <div>

        <h2 className="
          text-xl
          font-semibold
          text-gray-800
          mb-3
        ">
          Alérgenos
        </h2>

        <Alergenos lista={producto.alergenos} />

      </div>
    )}


    {/* BOTÓN PEDIDO */}

    <a
      href="tel:+34652345678"
      className="
    inline-flex
    items-center
    justify-center
    gap-2

    bg-[#A4133C]
    text-white

    px-8
    py-4

    rounded-full

    font-semibold

    transition

    hover:bg-[#C72A55]
    hover:scale-105

    focus:outline-none
    focus:ring-4
    focus:ring-[#A4133C]/30
      "
    >
      <FaPhoneAlt  className="text-xl" aria-hidden="true"/> Llamar para pedir
    </a>


    {/* VOLVER A PRODUCTOS */}

    <button
      onClick={() => navigate("/productos")}
      className="
        self-end
        text-[#A4133C]
        font-semibold
        mt-2

        transition-all
        hover:underline
        hover:translate-x-1
        cursor-pointer
      "
    >
      Volver a productos →
    </button>

  </div>

</section>

        
      </main>


      <Footer/>

    </div>
  );
}

export default DetalleProducto;