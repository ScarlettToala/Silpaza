import { Link } from "react-router-dom";
import { useEffect } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import BotonWhatsApp from "../components/BotonWhatsApp";

import {
  FaBirthdayCake,
  FaHeart,
  FaGift,
  FaTruck,
  FaPhoneAlt
} from "react-icons/fa";

import logoImage from "../assets/img/logooDEF.webp";

function Servicios({ user, setUser }) {

  /* =========================
  CERRAR SESIÓN
  ========================= */

  const handleLogout = () => {
    localStorage.removeItem("userData");
    setUser(null);
  };

  /* =========================
  SERVICIOS
  ========================= */

  const servicios = [
    {
      icono: FaBirthdayCake,
      titulo: "Tartas personalizadas",
      descripcion:
        "Creamos tartas únicas para cumpleaños, celebraciones y momentos especiales, adaptadas a tus gustos y necesidades."
    },
    {
      icono: FaGift,
      titulo: "Pedidos personalizados",
      descripcion:
        "Cuéntanos tu idea y crearemos una propuesta personalizada para que tu celebración sea todavía más especial."
    },
    {
      icono: FaTruck,
      titulo: "Encargos y recogida",
      descripcion:
        "Puedes realizar tu pedido con antelación para organizar la recogida de tus productos de la forma más cómoda."
    }
  ];

  useEffect(() => {
  window.scrollTo(0, 0);
}, []);

  return (

    <div className="min-h-screen bg-[#fdfaf3] flex flex-col">

      {/* HEADER */}

      <Header
        logoImage={logoImage}
        onLogout={handleLogout}
        user={user}
      />


      <main className="flex-1">

        {/* =========================
        CABECERA
    ========================= */}

        <section className="max-w-6xl mx-auto px-4 md:px-8 py-16 md:py-24">

          <div className="text-center max-w-2xl mx-auto">

            <p className="
          uppercase
          tracking-[0.25em]
          text-sm
          text-gray-500
          mb-3
        ">
              Lo hacemos especial
            </p>


            <h1
              style={{
                fontFamily: '"Leckerli One", cursive'
              }}
              className="
            text-4xl
            md:text-5xl
            text-gray-800
            mb-6
          "
            >
              Nuestros servicios
            </h1>


            <p className="
          text-gray-600
          leading-relaxed
        ">
              Cada celebración es diferente. Por eso queremos ayudarte a
              encontrar el dulce perfecto para acompañar tus momentos más
              especiales.
            </p>

          </div>

        </section>


        {/* =========================
        TARJETAS DE SERVICIOS
    ========================= */}

        <section
          className="
        bg-[#FAEDCD]
        py-16
        px-4
        md:px-8
      "
          aria-labelledby="servicios-titulo"
        >

          <div className="max-w-6xl mx-auto">

            <h2
              id="servicios-titulo"
              className="sr-only"
            >
              Servicios disponibles
            </h2>


            <div
              className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            gap-8
          "
            >

              {servicios.map((servicio) => {

                const Icono = servicio.icono;

                return (

                  <article
                    key={servicio.titulo}
                    className="
                  bg-white
                  rounded-3xl
                  p-8
                  text-center
                  shadow-md

                  transition-all
                  duration-300

                  hover:-translate-y-2
                  hover:shadow-xl
                "
                  >

                    {/* ICONO */}

                    <div
                      className="
                    w-16
                    h-16
                    mx-auto
                    mb-6

                    rounded-full

                    bg-[#F480AD]

                    flex
                    items-center
                    justify-center
                  "
                    >

                      <Icono
                        className="
                      text-2xl
                      text-[#A4133C]
                    "
                        aria-hidden="true"
                      />

                    </div>


                    {/* TÍTULO */}

                    <h2
                      className="
                    text-xl
                    font-bold
                    text-gray-800
                    mb-4
                  "
                    >
                      {servicio.titulo}
                    </h2>


                    {/* DESCRIPCIÓN */}

                    <p
                      className="
                    text-gray-600
                    leading-relaxed
                  "
                    >
                      {servicio.descripcion}
                    </p>

                  </article>

                );

              })}

            </div>


            {/* =========================
            CTA
        ========================= */}

            <div className="text-center mt-14">

              <h2
                style={{
                  fontFamily: '"Leckerli One", cursive'
                }}
                className="
              text-3xl
              text-gray-800
              mb-4
            "
              >
                ¿Tienes una idea especial?
              </h2>


              <p className="text-gray-600 mb-7">
                Cuéntanos qué necesitas y estaremos encantados de ayudarte.
              </p>


              <a
                href="https://wa.me/34652345678"
                target="_blank"
                rel="noopener noreferrer"
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
                <FaPhoneAlt className="text-xl" aria-hidden="true" /> Contactar con nosotros
              </a>

            </div>

          </div>

        </section>


        {/* =========================
        PRODUCTOS
    ========================= */}

        <section className="max-w-6xl mx-auto px-4 md:px-8 py-20">

          <div className="text-center max-w-2xl mx-auto">

            <h2
              style={{
                fontFamily: '"Leckerli One", cursive'
              }}
              className="
            text-3xl
            md:text-4xl
            text-gray-800
            mb-5
          "
            >
              Descubre nuestros productos
            </h2>


            <p className="text-gray-600 mb-8">
              Explora nuestra selección de dulces, tartas y elaboraciones
              artesanales.
            </p>


            <Link
              to="/productos"
              className="
            inline-flex
            items-center
            justify-center

            border-2
            border-[#A4133C]

            text-[#A4133C]

            px-8
            py-3

            rounded-full

            font-semibold

            transition

            hover:bg-[#A4133C]
            hover:text-white

            focus:outline-none
            focus:ring-4
            focus:ring-[#A4133C]/30
          "
            >
              Ver productos
            </Link>

          </div>

        </section>

      </main>


      {/* FOOTER */}

      <Footer logo={logoImage} />

      <BotonWhatsApp />

    </div>


  );
}

export default Servicios;
