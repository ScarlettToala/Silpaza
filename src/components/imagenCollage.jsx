import { Link } from "react-router-dom";

function ImagenCollage({
  image1,
  image2,
  image3,
  name1,
  name2,
  name3,
}) {
  const productos = [
    { image: image1, name: name1 },
    { image: image2, name: name2 },
    { image: image3, name: name3 },
  ];

  return (
    <section className="py-16 px-6">

      <div className="max-w-7xl mx-auto">

        <div className="flex items-end justify-between mb-10">

          <div>
            <p className="uppercase tracking-[0.25em] text-sm text-gray-500 mb-2">
              Para ti
            </p>

            <h2 className="font-leckerli text-3xl md:text-4xl">
              Productos destacados
            </h2>
          </div>

          <Link
            to="/productos"
            className="hidden md:block font-semibold hover:underline"
          >
            Ver todos →
          </Link>

        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {productos.map((producto) => (
            <Link
              key={producto.name}
              to="/productos"
              className="group"
            >

              <div className="overflow-hidden rounded-2xl">

                <img
                  src={producto.image}
                  alt={producto.name}
                  loading="lazy"
                  className="w-full h-[420px] object-cover group-hover:scale-105 transition duration-500"
                />

              </div>

              <h3 className="mt-4 text-lg font-semibold">
                {producto.name}
              </h3>

              <span className="text-sm text-gray-500 group-hover:underline">
                Descubrir →
              </span>

            </Link>
          ))}

        </div>

        <Link
          to="/productos"
          className="md:hidden block text-center mt-8 font-semibold"
        >
          Ver todos →
        </Link>

      </div>

    </section>
  );
}

export default ImagenCollage;