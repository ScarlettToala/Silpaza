import React from "react";
import { FaWhatsapp } from "react-icons/fa";

function BotonWhatsApp({
  telefono = "34652345678",
  mensaje = "¡Hola! Me gustaría realizar un pedido 😊"
}) {
  const urlWhatsApp = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;

  return (
    <a
      href={urlWhatsApp}
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed
        bottom-6
        right-6
        z-50

        flex
        items-center
        justify-center

        w-14
        h-14

        rounded-full
        bg-[#25D366]
        text-white

        text-3xl

        shadow-lg

        transition-all
        duration-300

        hover:scale-110
        hover:shadow-xl
      "
      aria-label="Contactar por WhatsApp"
      title="¡Escríbenos por WhatsApp!"
    >
      <FaWhatsapp />
    </a>
  );
}

export default BotonWhatsApp;