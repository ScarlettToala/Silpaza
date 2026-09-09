import { Link, useLocation } from "react-router-dom";

const links = [
  { path: "/home", label: "Inicio" },
  { path: "/sobrenosotros", label: "Sobre nosotros" },
  { path: "/productos", label: "Productos" },
  { path: "/servicios", label: "Servicios" },
];

export default function NavLinks({
  onClick,
  textColor = "text-white",
  textColorHover = "hover:text-black",
}) {
  const location = useLocation();

  return (
    <>
      {links
        .filter((link) => link.path !== location.pathname)
        .map((link) => (
          <Link
            key={link.path}
            to={link.path}
            onClick={onClick}
            className={`
              relative
              ${textColor}
              ${textColorHover}
              
              font-[Open_Sans]
              text-base
              md:text-lg

              py-2
              px-1

              whitespace-nowrap

              transition-all
              duration-300

              after:absolute
              after:left-0
              after:bottom-0
              after:h-[2px]
              after:w-0
              after:bg-current
              after:transition-all
              after:duration-300

              hover:after:w-full
            `}
          >
            {link.label}
          </Link>
        ))}
    </>
  );
}