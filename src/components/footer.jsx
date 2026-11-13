import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";
import "../styles/Footer.scss";

/*======== Ruta del Logo ========*/
import logoImagen from "../assets/img/LogooDEF.webp";

function Footer() {
  const logo = logoImagen;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const img = new Image();
    img.src = logo;

    img.onload = () => setLoading(false);
    img.onerror = () => setLoading(false);
  }, [logo]);

  if (loading) {
    return (
      <footer className="footer flex justify-center items-center">
        <p>Cargando footer...</p>
      </footer>
    );
  }

  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-container">

        {/* Navegación */}
        <nav
          className="footer-nav"
          aria-label="Enlaces del pie de página"
        >
          <Link to="/sobrenosotros">Sobre Nosotros</Link>
          <Link to="/productos">Productos</Link>
          <Link to="/servicios">Servicios</Link>
          <a href="tel:+34652345678">Contacto</a>
        </nav>

        {/* Logo */}
        <div className="footer-logo">
          <img src={logo} alt="Logo de Silpaza" />
        </div>

        {/* Redes y contacto */}
        <div className="footer-contact">

          <div className="icons">
            <a
              href="https://instagram.com/silpaza"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>

            <a
              href="mailto:silpaza@ejemplo.com"
              aria-label="Correo electrónico"
            >
              <FaEnvelope />
            </a>

            <a
              href="tel:+34652345678"
              aria-label="Teléfono"
            >
              <FaPhone />
            </a>
          </div>

          <p>© Silpaza 2025 · Diseñado por Scarlett Toala</p>

        </div>

        {/* Legal */}
        <div className="footer-legal">
          <Link to="/aviso-legal">Aviso legal</Link>
          <span>·</span>
          <Link to="/politica-privacidad">
            Política de privacidad
          </Link>
          <span>·</span>
          <Link to="/politica-cookies">
            Política de cookies
          </Link>
        </div>

      </div>
    </footer>
  );
}

export default Footer;

