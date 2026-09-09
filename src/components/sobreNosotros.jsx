import React from "react";
import { Link } from "react-router-dom";

function SobreNosotros({ image }) {
    return (
        <section className="py-20 px-6 bg-[#FAF3DD]">

            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-14">

                {/* IMAGEN */}
                <div className="w-full md:w-1/2 flex justify-center">

                    <div className="relative w-full max-w-lg">

                        

                        {/* Imagen */}
                        <img
                            src={image}
                            alt="Elaboración artesanal de nuestros productos"
                            loading="lazy"
                            className="w-full h-[400px] object-cover rounded-3xl shadow-lg"
                        />

                    </div>

                </div>

                {/* TEXTO */}
                <div className="w-full md:w-1/2">

                    <p className="uppercase tracking-[0.25em] text-sm text-gray-800 mb-3">
                        Nuestra historia
                    </p>

                    <h2 className="text-3xl md:text-4xl font-leckerli mb-6 text-gray-800">
                        Más que dulces, creamos momentos
                    </h2>

                    <p className="text-gray-700 leading-relaxed mb-5">
                        En Silpaza creemos que cada celebración merece algo especial.
                        Por eso cuidamos cada detalle de nuestras tartas y dulces para
                        convertir pequeños momentos en recuerdos inolvidables.
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-7">
                        Elaboramos nuestros productos con cariño, creatividad y mucha
                        pasión por la repostería.
                    </p>

                    <Link
                        to="/sobre-nosotros"
                        className="inline-block bg-[#A4133C] text-white px-7 py-3 rounded-full font-semibold hover:bg-[#C72A55] transition shadow-md"
                    >
                        Conócenos
                    </Link>

                </div>

            </div>

        </section>
    );
}

export default SobreNosotros;
