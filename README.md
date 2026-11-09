# Silpaza - Frontend de tienda online

Aplicación frontend desarrollada con **React** y **Vite** para una tienda de productos dulces y repostería. Por ahora el proyecto se centra en la parte visual y en la experiencia de usuario: el catálogo y la gestión básica de usuarios se simulan con datos locales en el navegador.

## Índice

1. [Descripción del proyecto](#1-descripción-del-proyecto)
2. [Estado actual](#2-estado-actual)
3. [Tecnologías utilizadas](#3-tecnologías-utilizadas)
4. [Instalación y arranque](#4-instalación-y-arranque)
5. [Estructura del proyecto](#5-estructura-del-proyecto)
6. [Arquitectura general](#6-arquitectura-general)
7. [Modelo de datos](#7-modelo-de-datos)
8. [Flujo de la aplicación](#8-flujo-de-la-aplicación)
   - [Página principal](#página-principal)
   - [Productos](#productos)
   - [Detalle del producto](#detalle-del-producto)
   - [Login y registro](#login-y-registro)
   - [Rutas protegidas](#rutas-protegidas)
9. [Gestión de usuario y sesión](#9-gestión-de-usuario-y-sesión)
10. [Rutas principales](#10-rutas-principales)
11. [Limitaciones actuales](#11-limitaciones-actuales)
12. [Mejoras futuras](#12-mejoras-futuras)
13. [Conclusión](#13-conclusión)

---

## 1. Descripción del proyecto

Silpaza es una tienda de repostería y dulces con estructura de e-commerce. La aplicación permite:

- Ver la página principal de la marca.
- Navegar por distintas categorías de productos.
- Consultar la información detallada de cada producto.
- Registrarse e iniciar sesión.
- Mantener la sesión del usuario mediante `localStorage`.
- Disfrutar de una interfaz moderna y responsive.

Ahora mismo el catálogo tiene pocos productos. Se podría ampliar de dos formas:

- Mostrar un máximo de 5 productos por categoría y crear una página para cada una.
- Mostrar más productos en la misma página (por ejemplo, con un botón "Ver más").

## 2. Estado actual

La aplicación trabaja con:

- Un archivo de datos local en JavaScript: `src/data/productosData.js`.
- Un catálogo de productos almacenado como un array de objetos.
- Usuarios y sesión guardados en el navegador mediante `localStorage`.

Por tanto, la "base de datos" es una constante estática en el frontend, no una base de datos real ni un servidor backend. El inicio de sesión se simula con `localStorage`: no hay autenticación real ni seguridad apta para producción.

## 3. Tecnologías utilizadas

| Tecnología | Uso |
|:--|:--|
| React 19 | Interfaz de usuario |
| Vite 7 | Entorno de desarrollo y empaquetado |
| React Router DOM | Navegación entre páginas |
| Tailwind CSS | Estilos con clases utilitarias |
| Sass | Estilos personalizados (`.scss`) |
| React Icons | Iconos |
| ESLint | Calidad y revisión del código |

## 4. Instalación y arranque

1. Abre la terminal en la raíz del proyecto.
2. Instala las dependencias:

```bash
npm install
```

3. Inicia el servidor de desarrollo:

```bash
npm run dev
```

4. Abre en el navegador la URL que te indique Vite.

## 5. Estructura del proyecto

```text
src/
├── App.jsx
├── App.css
├── index.css
├── main.jsx
├── assets/
│   ├── audio/
│   ├── img/
│   └── video/
├── components/
│   ├── alergenos.jsx
│   ├── AudioPlayer.jsx
│   ├── Banner.jsx
│   ├── BotonWhatsApp.jsx
│   ├── ContactForm.jsx
│   ├── destacarproducto.jsx
│   ├── footer.jsx
│   ├── header.jsx
│   ├── headerLogIn.jsx
│   ├── imagenCollage.jsx
│   ├── NavLinks.jsx
│   ├── productoItem.jsx
│   ├── servicios.jsx
│   └── sobreNosotros.jsx
├── data/
│   └── productosData.js
├── pages/
│   ├── DetalleProducto.jsx
│   ├── Home.jsx
│   ├── Login.jsx
│   ├── PaginaError.jsx
│   ├── Productos.jsx
│   ├── Register.jsx
│   ├── Servicios.jsx
│   ├── SobreNosotros.jsx
│   ├── Welcome.jsx
│   └── ...
└── styles/
    ├── _variables.scss
    ├── Footer.scss
    ├── Producto.scss
    └── ProductoColores.scss
```

## 6. Arquitectura general

La aplicación sigue una arquitectura frontend sencilla:

1. `App.jsx` define las rutas de navegación.
2. Cada página vive en `src/pages`.
3. Los componentes reutilizables están en `src/components`.
4. Los datos del catálogo están en `src/data/productosData.js`.
5. La sesión y los usuarios se guardan en el navegador con `localStorage`.

## 7. Modelo de datos

El catálogo se organiza en una constante llamada `categorias`, y cada categoría contiene una colección de productos.

Cada producto tiene estos campos:

| Campo | Descripción |
|:--|:--|
| `id` | Identificador único |
| `image` | Imagen del producto |
| `nombre` | Nombre del producto |
| `descripcion` | Descripción corta |
| `descripcionLarga` | Descripción completa |
| `caracteristicas` | Lista de características |
| `alergenos` | Lista de alérgenos |

Ejemplo de estructura:

```js
export const categorias = [
  {
    id: 1,
    nombre: "Pasteles",
    descripcion: "Tartas y bizcochos ...",
    productos: [
      {
        id: 1,
        nombre: "Tarta de Chocolate",
        descripcion: "...",
        descripcionLarga: "...",
        caracteristicas: ["..."],
        alergenos: ["gluten", "lacteos", "soja"]
      }
    ]
  }
];
```

> [!IMPORTANT]
> Aunque el proyecto simula una base de datos con un JSON en una constante, esto no sustituye a una base de datos real. Como se trabaja con objetos y arrays de JavaScript, en el futuro sería fácil migrar a:
>
> - una API REST
> - Firebase
> - Supabase
> - MongoDB
> - MySQL o PostgreSQL

## 8. Flujo de la aplicación

### Página principal

La ruta `/home` muestra, en este orden:

- Header
- Banner promocional
- Servicios
- Collage de productos
- Destacado del día
- Historia de la marca
- Footer

### Productos

La ruta `/productos` muestra todas las categorías y sus productos en formato catálogo.

### Detalle del producto

La ruta `/detalleProducto/:id` muestra la información completa del producto seleccionado.

### Login y registro

- `/login` permite iniciar sesión.
- `/register` permite crear un usuario nuevo.
- Los datos se guardan en `localStorage` bajo las claves `userData` (usuario con sesión activa) y `users` (usuarios registrados).

### Rutas protegidas

Con `react-router-dom`, la aplicación redirige al usuario si no ha iniciado sesión.

## 9. Gestión de usuario y sesión

La sesión se gestiona con:

- `useState` en `App.jsx`.
- Almacenamiento en `localStorage`.

Ejemplo de la lógica:

```js
const savedUser = JSON.parse(localStorage.getItem("userData"));
if (savedUser) setUser(savedUser);
```

Así, el usuario sigue identificado aunque recargue la página o cierre el navegador, hasta que cierre sesión o se borre el almacenamiento.

## 10. Rutas principales

| Ruta | Descripción |
|:--|:--|
| `/` | Redirección inicial según si el usuario está logueado |
| `/login` | Inicio de sesión |
| `/register` | Registro de usuario |
| `/home` | Página principal |
| `/productos` | Catálogo completo |
| `/detalleProducto/:id` | Detalle de un producto |
| `/sobrenosotros` | Información de la empresa |
| `/servicios` | Servicios y oferta |
| `*` | Página de error |

## 11. Limitaciones actuales

> [!WARNING]
> Este proyecto es solo un frontend. No debe usarse en producción con datos reales de usuarios.

- No hay backend real.
- Los productos están simulados con un JSON constante.
- La autenticación es local y no es segura: los datos de los usuarios están en `localStorage`, donde cualquiera puede leerlos desde el navegador.
- Está pensado como base para conectar después una API o una base de datos real.

## 12. Mejoras futuras

- [ ] Migrar los productos a una API REST.
- [ ] Conectar un backend con MongoDB, MySQL o PostgreSQL.
- [ ] Añadir autenticación real con JWT o sesiones seguras.
- [ ] Crear un panel de administración para gestionar productos.
- [ ] Guardar imágenes y datos de productos en una base de datos.
- [ ] Ampliar el catálogo y crear una página por categoría.

## 13. Conclusión

Silpaza funciona como un frontend completo de tienda online de repostería, con catálogo visual y un flujo de usuario básico. Su ventaja es que ya tiene una base estructural sólida para conectarse más adelante a una base de datos real o a una API de producción.
