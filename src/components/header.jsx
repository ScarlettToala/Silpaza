import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import NavLinks from "./NavLinks";
import { FaInfoCircle, FaBars, FaTimes } from "react-icons/fa";
import { useAuth } from "../context/AuthContext";

/*======== Ruta del Logo ========*/
import logo from "../assets/img/LogooDEF.webp";

export default function Header() {
  const logoImage = logo;
  const { user, logout } = useAuth();
  const [menuAbierto, setMenuAbierto] = useState(false);
  const [loading, setLoading] = useState(true);

  /* =========================
     CARGAR IMÁGENES
  ========================= */

useEffect(() => {
  const imgLogo = new Image();

  imgLogo.src = logoImage;

  imgLogo.onload = () => {
    setLoading(false);
  };

  imgLogo.onerror = () => {
    setLoading(false);
  };
}, [logoImage]);


  /* =========================
     CERRAR SESIÓN
  ========================= */

  const handleLogoutConfirm = () => {
    const confirmar = window.confirm(
      "¿Estás seguro de que quieres cerrar sesión?"
    );

    if (confirmar) {
      logout();
    }
  };


  /* =========================
     LOADING
  ========================= */

  if (loading) {
    return (
      <header className="bg-[#F480AD] text-white shadow-md px-6 py-7 flex justify-center items-center">
        <p className="text-lg font-bold">
          Cargando header...
        </p>
      </header>
    );
  }


  return (
    <header className="bg-[#F480AD] text-white shadow-md px-4 sm:px-6 xl:px-7 py-5 sm:py-6 relative">

      <div className="container mx-auto flex items-center justify-between min-h-[80px]">


        {/* =========================
            NAVEGACIÓN ESCRITORIO
        ========================= */}

        <nav
          className="hidden xl:flex items-center gap-4 2xl:gap-8"
          role="navigation"
          aria-label="Menú principal"
        >
          <NavLinks
            textColor="text-[#0C0808]"
            textColorHover="hover:text-black"
          />
        </nav>


        {/* =========================
            LOGO CENTRADO
        ========================= */}

        <Link
          to="/home"
          aria-label="Ir a la página de inicio"
          className="
            absolute
            left-1/2
            top-1/2
            -translate-x-1/2
            -translate-y-1/2
            bg-white
            rounded-full
            shadow-lg
            p-2
            sm:p-3
            z-10
          "
        >
          <img
            src={logoImage}
            alt="Logo Corporativo de Silpaza"
            fetchpriority="high"
            className="
              w-16
              h-16
              sm:w-20
              sm:h-20
              object-contain
              rounded-full
            "
          />
        </Link>


        {/* =========================
            ICONOS DERECHA DESKTOP
        ========================= */}

        <div className="hidden xl:flex items-center gap-4 2xl:gap-6">

          <FaInfoCircle
            className="
              text-xl
              text-black
              hover:text-white
              transition
              cursor-pointer
            "
          />


          {user ? (

            <button
              onClick={handleLogoutConfirm}
              aria-label="Cerrar sesión"
              className="
                relative
                text-[#0C0808]
                font-[Open_Sans]
                text-base
                2xl:text-lg
                whitespace-nowrap

                after:absolute
                after:left-0
                after:bottom-0
                after:h-[2px]
                after:w-0
                after:bg-white
                after:transition-all

                hover:after:w-full
              "
            >
              Cerrar sesión
            </button>

          ) : (

            <Link
              to="/login"
              className="
                text-black
                font-[Open_Sans]
                text-base
                2xl:text-lg
                whitespace-nowrap
                hover:text-white
                transition
              "
            >
              Iniciar sesión
            </Link>

          )}

        </div>


        {/* =========================
            BOTÓN HAMBURGUESA
        ========================= */}

        <button
          className="
            xl:hidden
            ml-auto
            text-2xl
            text-black
            hover:text-white
            transition
            p-2
          "
          onClick={() => setMenuAbierto(!menuAbierto)}
          aria-label={menuAbierto ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuAbierto}
          aria-controls="menu-movil"
        >
          {menuAbierto ? <FaTimes /> : <FaBars />}
        </button>

      </div>


      {/* =========================
          MENÚ MÓVIL / TABLET
      ========================= */}

      {menuAbierto && (

        <nav
          id="menu-movil"
          className="
            absolute
            top-full
            left-4
            right-4
            mt-2

            bg-white
            text-black

            rounded-2xl
            shadow-xl

            p-5

            flex
            flex-col
            gap-4

            xl:hidden
            z-50
          "
          aria-label="Menú móvil"
        >

          <NavLinks
            onClick={() => setMenuAbierto(false)}
            textColor="text-[#A4133C]"
            textColorHover="hover:text-black"
          />


          <hr className="border-gray-200" />


          {/* LOGIN / LOGOUT */}

          {user ? (

            <button
              onClick={() => {
                setMenuAbierto(false);
                handleLogoutConfirm();
              }}
              aria-label="Cerrar sesión"
              className="
                text-left
                text-[#A4133C]
                font-[Open_Sans]
                font-semibold
                hover:text-black
                transition
              "
            >
              Cerrar sesión
            </button>

          ) : (

            <Link
              to="/login"
              onClick={() => setMenuAbierto(false)}
              className="
                text-[#A4133C]
                font-[Open_Sans]
                font-semibold
                hover:text-black
                transition
              "
            >
              Iniciar sesión
            </Link>

          )}

        </nav>

      )}

    </header>
  );
}