import Header from "../components/header.jsx";
import { useNavigate } from "react-router-dom";
import Producto from "../components/productoItem.jsx";
import Audio from "../components/AudioPlayer.jsx";
import Video from "../components/VideoPlayer.jsx";
import Footer from "../components/footer.jsx";
import BotonWhatsApp from "../components/BotonWhatsApp";

/* =========================
   IMPORTACIONES DE RECURSOS
========================= */

import logoImage from "../assets/img/logooDEF.webp";

import audioMp3 from "../assets/audio/AudioMC.mp3";
import audioOgg from "../assets/audio/AudioMC.ogg";

import videoMp4 from "../assets/video/Video.mp4";
import videoWebm from "../assets/video/Video.webm";

/* =========================
     CATEGORÍAS Y PRODUCTOS
  ========================= */

  import { categorias } from "../data/productosData.js";

function Productos({ user, setUser }) {

  const navigate = useNavigate();


  /* =========================
     CERRAR SESIÓN
  ========================= */

  const handleLogout = () => {

    localStorage.removeItem("userData");

    setUser(null);

    navigate("/");
  };


  

  return (

    <div className="min-h-screen bg-[#fdfaf3]">

      {/* =========================
          HEADER
      ========================= */}

      <Header
        logoImage={logoImage}
        onLogout={handleLogout}
        user={user}
      />


      {/* =========================
          PRODUCTOS
      ========================= */}

      <main id="Productos">

        {/* TÍTULO PRINCIPAL */}

        <section className="max-w-6xl mx-auto px-4 md:px-8 py-16">

          <div className="text-center">

            <p className="uppercase tracking-[0.25em] text-sm text-gray-500 mb-3">
              Nuestra selección
            </p>

            <h1
              style={{
                fontFamily: '"Leckerli One", cursive'
              }}
              className="text-4xl md:text-5xl text-gray-800"
            >
              Dulces para cada momento
            </h1>

          </div>

        </section>


        {/* =========================
            CATEGORÍAS GENERADAS
        ========================= */}

        {categorias.map((categoria) => {

          const Icono = categoria.icono;

          return (

            <section
              key={categoria.nombre}
              className="py-16 px-4 md:px-8"
              style={{
                backgroundColor: categoria.color
              }}
            >

              <div className="max-w-6xl mx-auto">


                {/* CABECERA DE CATEGORÍA */}

                <div className="text-center mb-12">

                  <Icono
                    className="
                      text-5xl
                      text-[#A4133C]
                      mx-auto
                      mb-4
                    "
                  />

                  <h2
                    style={{
                      fontFamily: '"Leckerli One", cursive'
                    }}
                    className="text-3xl md:text-4xl text-gray-800"
                  >
                    {categoria.nombre}
                  </h2>

                  <p className="text-gray-600 mt-3 max-w-xl mx-auto">
                    {categoria.descripcion}
                  </p>

                </div>


                {/* =========================
                    GRID DE PRODUCTOS
                ========================= */}

                <div
                  className="
                    grid
                    grid-cols-1
                    sm:grid-cols-2
                    lg:grid-cols-3
                    gap-8
                  "
                >

                  {categoria.productos.map((producto) => (

                    <Producto
                      key={producto.id}
                      image={producto.image}
                      name={producto.nombre}
                      description1={producto.descripcion}
                      alergenos={
                        producto.alergenos.map((alergeno) => ({
                          nombre: alergeno
                        }))
                      }
                      onClick={() => navigate(`/detalleProducto/${producto.id}`)}
                    />

                  ))}

                </div>

              </div>

            </section>

          );

        })}

      </main>


      {/* =========================
          MULTIMEDIA
      ========================= */}

      <section className="max-w-6xl mx-auto px-4 md:px-8 py-16">

        <div className="text-center mb-10">

          <p className="uppercase tracking-[0.25em] text-sm text-gray-500 mb-3">
            Así creamos
          </p>

          <h2
            style={{
              fontFamily: '"Leckerli One", cursive'
            }}
            className="text-3xl md:text-4xl text-gray-800"
          >
            Momentos para recordar
          </h2>

        </div>


        <div
          className="
            flex
            flex-col
            md:flex-row
            gap-8
            md:gap-12
            justify-center
            items-start
          "
        >

          <Audio
            nameAudio="Audio Navideño"
            mp3={audioMp3}
            ogg={audioOgg}
          />

          <Video
            mp4={videoMp4}
            webm={videoWebm}
            titulo="Pastel de unicornio"
            usuario="Silpaza"
            className="w-full md:w-96"
          />

        </div>

      </section>


      {/* =========================
          FOOTER
      ========================= */}

      <Footer logo={logoImage} />

        <BotonWhatsApp />
    </div>
  );
}

export default Productos;