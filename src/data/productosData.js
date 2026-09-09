import tartaChocolate from "../assets/img/tartaChocolate.webp";
import tresLeches from "../assets/img/tresLechesPromocionalDEF.webp";
import volteado from "../assets/img/volteadoPinaPromo.webp";

import galletaChocolate from "../assets/img/brownieCookiesPromo.webp";
import galletaAvena from "../assets/img/galletasDeAvena.webp";
import galletaMantequilla from "../assets/img/galletasDeMantequilla.webp";

import panMasaMadre from "../assets/img/panDeMasaMadrePromo.webp";
import croissant from "../assets/img/croissantMantequilla.webp";

import {
  FaBirthdayCake,
  FaCookieBite,
  FaBreadSlice
} from "react-icons/fa";

export const categorias = [
  {
    id: 1,
    nombre: "Pasteles",
    descripcion:
      "Tartas y bizcochos elaborados para hacer especiales tus celebraciones.",
    color: "#FAEDCD",
    icono: FaBirthdayCake,

    productos: [
      {
        id: 1,
        image: tartaChocolate,
        nombre: "Tarta de Chocolate",
        descripcion:
          "Deliciosa tarta de chocolate con cobertura de trufa.",
        descripcionLarga:
          "Nuestra tarta de chocolate está elaborada con el mejor cacao de origen y una cobertura de trufa artesanal que la hace irresistible. Cada bocado es una explosión de sabor que te transportará al paraíso del chocolate.",
        caracteristicas: [
          "Elaborada con cacao de origen 100% natural",
          "Cobertura de trufa artesanal",
          "Bizcocho esponjoso y húmedo",
          "Perfecta para celebraciones especiales"
        ],
        alergenos: ["gluten", "lacteos", "soja"]
      },
      {
        id: 2,
        image: volteado,
        nombre: "Volteado de Piña",
        descripcion:
          "Bizcocho esponjoso de piña con una suave cobertura.",
        descripcionLarga:
          "El volteado de piña es un clásico de la repostería que conquista por su equilibrio perfecto entre la dulzura natural de la piña y la esponjosidad del bizcocho. Nuestra receta incluye un toque de caramelo que realza el sabor de la fruta.",
        caracteristicas: [
          "Piña natural caramelizada",
          "Bizcocho esponjoso y jugoso",
          "Toque de caramelo artesanal",
          "Receta tradicional mejorada"
        ],
        alergenos: ["gluten", "lacteos", "huevos"]
      },
      {
        id: 3,
        image: tresLeches,
        nombre: "Tres Leches",
        descripcion:
          "Bizcocho esponjoso mojado en una deliciosa mezcla de tres leches.",
        descripcionLarga:
          "El pastel de tres leches es un postre latinoamericano que enamora a todos con su textura única. Nuestra versión combina leche evaporada, leche condensada y crema de leche para crear un bizcocho que se deshace en la boca y deja un sabor inolvidable.",
        caracteristicas: [
          "Mojado en tres tipos de leche",
          "Textura esponjosa y húmeda",
          "Toque de vainilla natural",
          "Decorado con crema batida"
        ],
        alergenos: ["gluten", "lacteos"]
      }
    ]
  },

  {
    id: 2,
    nombre: "Galletas",
    descripcion:
      "Pequeños dulces artesanales perfectos para disfrutar en cualquier momento.",
    color: "#FEFAE0",
    icono: FaCookieBite,

    productos: [
      {
        id: 4,
        image: galletaChocolate,
        nombre: "Galleta de Chocolate",
        descripcion:
          "Deliciosa galleta de chocolate con trozos de cacao.",
        descripcionLarga:
          "Nuestras galletas de chocolate son el sueño de cualquier amante del cacao. Elaboradas con auténticos trozos de chocolate negro, tienen un exterior crujiente y un interior suave que hace que cada bocado sea una experiencia inolvidable.",
        caracteristicas: [
          "Trozos de chocolate negro auténtico",
          "Exterior crujiente, interior suave",
          "Elaboradas con mantequilla artesanal",
          "Perfectas para acompañar café o té"
        ],
        alergenos: ["gluten", "lacteos", "soja"]
      },
      {
        id: 5,
        image: galletaAvena,
        nombre: "Galleta de Avena",
        descripcion:
          "Galleta de avena con un toque de miel y canela.",
        descripcionLarga:
          "Nuestra galleta de avena es la opción saludable y deliciosa que estabas buscando. Combinamos copos de avena, miel natural y un toque de canela para crear una galleta con textura y sabor que te hará disfrutar sin remordimientos.",
        caracteristicas: [
          "Copos de avena 100% naturales",
          "Endulzada con miel ecológica",
          "Toque de canela y nuez moscada",
          "Textura crujiente y satisfactoria"
        ],
        alergenos: ["gluten", "lacteos"]
      },
      {
        id: 6,
        image: galletaMantequilla,
        nombre: "Galleta de Mantequilla",
        descripcion:
          "Galleta clásica de mantequilla, suave y deliciosa.",
        descripcionLarga:
          "La galleta de mantequilla es un clásico que nunca pasa de moda. Nuestra receta utiliza la mejor mantequilla para crear una galleta que se deshace en la boca, con un sabor suave y reconfortante que te transportará a la infancia.",
        caracteristicas: [
          "Mantequilla artesanal de alta calidad",
          "Textura que se deshace en la boca",
          "Sabor suave y reconfortante",
          "Perfecta para cualquier ocasión"
        ],
        alergenos: ["gluten", "lacteos", "huevos"]
      }
    ]
  },

  {
    id: 3,
    nombre: "Repostería y Pan",
    descripcion:
      "Elaboraciones artesanales para acompañar tus momentos más especiales.",
    color: "#E9EDC9",
    icono: FaBreadSlice,

    productos: [
      {
        id: 7,
        image: panMasaMadre,
        nombre: "Pan de Masa Madre",
        descripcion:
          "Pan artesanal elaborado con masa madre y fermentación lenta.",
        descripcionLarga:
          "Nuestro pan de masa madre es una obra de arte artesanal. Elaborado con harinas de calidad y un proceso de fermentación lenta de más de 24 horas, este pan tiene una corteza crujiente y un interior esponjoso con un sabor y aroma incomparables.",
        caracteristicas: [
          "Fermentación lenta de más de 24 horas",
          "Masa madre natural y viva",
          "Corteza crujiente y miga esponjosa",
          "Sabor y aroma únicos"
        ],
        alergenos: ["gluten"]
      },
      {
        id: 8,
        image: croissant,
        nombre: "Croissant",
        descripcion:
          "Croissant clásico, crujiente por fuera y suave por dentro.",
        descripcionLarga:
          "Nuestros croissants son el equilibrio perfecto entre la tradición francesa y el toque artesanal. Hojaldrados con mantequilla de la mejor calidad, tienen un exterior dorado y crujiente que esconde un interior suave y lleno de sabor.",
        caracteristicas: [
          "Hojaldre artesanal con mantequilla",
          "Exterior dorado y crujiente",
          "Interior suave y esponjoso",
          "Elaborados con técnicas tradicionales"
        ],
        alergenos: ["gluten", "lacteos", "huevos"]
      }
    ]
  }
];