import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import FraseImagen from "../components/Banner.jsx";
import Servicios from "../components/Servicios.jsx";
import ImagenCollage from "../components/ImagenCollage.jsx";
import Destacado from "../components/Destacarproducto.jsx";
import SobreNosotros from "../components/SobreNosotros.jsx";
import BotonWhatsApp from "../components/BotonWhatsApp.jsx";

/*=============== IMPORTACIONES DE IMAGENES =================*/
import tarta2 from "../assets/img/Tarta2DEF.webp";
import img1 from "../assets/img/CheesecakeNormalDEF.webp";
import img2 from "../assets/img/RecetaLemonPieTartaDeLimonDEF.webp";
import img3 from "../assets/img/TresLechesPromocionalDEF.webp";
import roscon from "../assets/img/RosconPromo.webp";
import tartaEspecial from "../assets/img/TartaEspecial50.webp";
import galletas from "../assets/img/Galletas.webp";

import {
  FaPhoneAlt
} from "react-icons/fa";

//DATA
import { categorias } from "../data/productosData";

function Home() {

  const [loading, setLoading] = useState(true);

  //Producto destacado
  const productoDestacado = categorias .flatMap((categoria) => categoria.productos) .find((producto) => producto.id === 4);

  const images = [
    tarta2,
    img1,
    img2,
    img3,
    galletas,
  ];

  useEffect(() => {

    let loadedCount = 0;

    images.forEach((src) => {

      const img = new Image();

      img.src = src;

      img.onload = () => {

        loadedCount++;

        if (loadedCount === images.length) {
          setLoading(false);
        }

      };

    });

  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-xl font-bold">
          Cargando contenido...
        </p>
      </div>
    );
  }

  return (
    <>
      <h1 className="absolute w-px h-px overflow-hidden whitespace-nowrap">
        Silpaza
      </h1>

      <Header/>

      {/* HERO */}
      <FraseImagen
        backgroundImage={tarta2}
        eslogan="Hecho con cariño"
        frase="Dulces para momentos especiales"
        descripcion="Tartas, galletas y pequeños detalles para momentos especiales."
      />

      {/* SERVICIOS */}
      <Servicios />

      {/* PRODUCTOS */}
      <ImagenCollage
        image1={img1}
        name1="Cheesecake"
        image2={img2}
        name2="Pie de limón"
        image3={img3}
        name3="Tres leches"
      />

      {/* FRASE */}
      <div className="py-8 md:py-12">
      <FraseImagen
        eslogan="Los mejores momentos merecen algo dulce"
        backgroundImage={roscon}
        frase="La felicidad no brota de la razón, sino de la imaginación."
      />
      </div>

      {/* DESTACADO */}
      <Destacado
        producto={productoDestacado}
      />


{/* CTA */}

<section className="my-8 md:my-12 py-20 px-6 text-center bg-[#AE043D] text-white">

  <div className="max-w-3xl mx-auto">

    <p className="uppercase tracking-[0.25em] text-sm text-white/80 mb-4">
      Hacemos tus momentos más dulces
    </p>

    <h2 className="text-4xl md:text-5xl font-leckerli mb-5">
      ¿Tienes algo que celebrar?
    </h2>

    <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-8">
      Cumpleaños, reuniones, celebraciones o simplemente un antojo.
      Cuéntanos qué tienes en mente y prepararemos algo especial para ti.
    </p>

    <a
      href="tel:+34652345678"
      className="
        inline-flex
        items-center
        justify-center
        gap-3
        px-8
        py-4
        bg-white
        text-[#AE043D]
        rounded-full
        font-semibold
        hover:scale-105
        hover:shadow-lg
        transition
      "
    >
      <FaPhoneAlt aria-hidden="true" />
      Llamar para hacer un pedido
    </a>

  </div>

</section>




      {/* HISTORIA */}
      <SobreNosotros image={tartaEspecial} />

      <Footer/>

    <BotonWhatsApp />
    </>
  );
}

export default Home;