import { useEffect } from "react";

/*Componentes*/
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import FraseImagen from "../components/Banner.jsx";

/*Recursos*/
import aboutBackground from '../assets/img/galletas.webp'; 

function SobreNosotros() {

    useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="bg-amber-50">
        <Header/>

        {/* SECCIÓN HERO CON FRASE E IMAGEN */}
        <FraseImagen
          eslogan="Sobre nosotros"
          backgroundImage={aboutBackground}
          frase="Hechos con amor, recordados con sonrisas"
          descripcion="Descubre la historia, la pasión y el cariño que ponemos en cada creación."
        />

        {/* CONTENIDO PRINCIPAL */}
        <div className="min-h-screen py-16 px-6 max-w-screen-lg mx-auto">

          {/* Título */}
          <h1
            style={{ fontFamily: '"Leckerli One", cursive' }}
            className="text-4xl md:text-5xl text-center text-[#AE043D] mb-8"
          >
            Nuestra historia
          </h1>

          {/* Descripción mejorada con más jerarquía visual */}
          <div className="max-w-4xl mx-auto text-center text-gray-700 space-y-6 text-lg leading-relaxed">

            <p className="text-2xl md:text-3xl font-semibold text-gray-800">
              En Silpaza creemos que los mejores momentos se comparten alrededor de algo dulce. 🍰
            </p>

            <p>
              Nacimos con la ilusión de crear mucho más que pasteles: queremos formar parte de esos momentos
              que recordamos con una sonrisa. Un cumpleaños, una reunión con amigos, una celebración especial
              o simplemente una tarde en buena compañía.
            </p>

            <div className="bg-white/70 p-8 rounded-3xl shadow-md border border-amber-200">
              <p className="mb-2">
                <strong>Más de 10 años de experiencia</strong> nos avalan. Trabajamos con auténticos
                profesionales de la repostería y seleccionamos ingredientes de la mejor calidad para
                conseguir productos deliciosos, cuidados y elaborados con cariño.
              </p>
            </div>

            <p>
              Nos gusta cuidar cada detalle, desde el momento en que entras por nuestra puerta
              hasta que te llevas tu pedido. Y cuando se trata de una ocasión especial,
              hacemos realidad tus ideas con{' '}
              <strong>pedidos personalizados pensados para superar tus expectativas.</strong>
            </p>

            <p className="font-semibold text-[#AE043D] text-xl">
              Porque para nosotros no se trata solo de preparar algo dulce.
              <br />
              Se trata de crear momentos que quieras recordar.
            </p>

            {/* Botón de acción adicional */}
            <div className="pt-4">
              <a
                href="/productos"
                className="inline-block bg-[#AE043D] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#C72A55] transition shadow-md"
              >
                Descubre nuestros productos
              </a>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}

export default SobreNosotros;