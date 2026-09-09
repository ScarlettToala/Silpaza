# Silpaza - Frontend de tienda online

Este proyecto es una aplicación frontend desarrollada con React y Vite para una tienda de productos dulces y repostería. Actualmente el proyecto está centrado en la parte visual y de experiencia de usuario, mientras que la información del catálogo y la gestión básica de usuarios se simula con datos locales en el navegador.

## 1. Descripción del proyecto

Silpaza es una tienda de productos de repostería y dulces con una estructura tipo e-commerce. La aplicación permite:

- Ver la página principal de la marca.
- Navegar por distintas categorías de productos.
- Consultar la información detallada de cada producto.
- Registrarse e iniciar sesión en la aplicación.
- Mantener la sesión del usuario usando `localStorage`.
- Explorar una interfaz moderna y responsive.

El proyecto está en una fase de frontend funcional, ahora mismo presenta pocos productos pero se podría amplicar para mostrar más productos con una limitación de 5 productos y crear una pagina por categorias o mostrar más en la misma página.    

## 2. Estado actual

Actualmente, la aplicación trabaja con:

- Un archivo de datos local en JavaScript: `src/data/productosData.js`
- Un catálogo de productos almacenado como un array de objetos JSON.
- Persistencia de usuarios y sesión en el navegador mediante `localStorage`.

Esto significa que, por ahora, la "base de datos" del proyecto es un fichero estático de constante en frontend, no una base de datos real ni un servidor backend. Por lo que iniciar sesión solo se hace mediante local storage y no hay un sistema de autenticación real ni seguridad para producción.

## 3. Tecnologías utilizadas

- React 19
- Vite 7
- React Router DOM
- Tailwind CSS
- Sass
- React Icons
- ESLint

## 4. Estructura del proyecto

```bash
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

## 5. Arquitectura general

La aplicación sigue una arquitectura muy sencilla de frontend:

1. El componente principal `App.jsx` define las rutas de navegación.
2. Cada página de visualización vive en la carpeta `src/pages`.
3. Los componentes reutilizables están en `src/components`.
4. Los datos del catálogo se encuentran en `src/data/productosData.js`.
5. La sesión y los usuarios se guardan en el navegador mediante `localStorage`.

## 6. Modelo de datos

El catálogo principal se organiza en una constante llamada `categorias`, y cada categoría contiene una colección de productos.

Cada producto tiene información como:

- `id`
- `image`
- `nombre`
- `descripcion`
- `descripcionLarga`
- `caracteristicas`
- `alergenos`

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

### Importante

Aunque el proyecto simula una base de datos con un JSON en constante, esto no sustituye a una base de datos real. En un futuro se podría migrar a:

- una API REST
- Firebase
- Supabase
- MongoDB
- MySQL o PostgreSQL

Esto es gracias a que se trabaja con objetos y arrays de JavaScript, lo que facilita la transición a un backend real.
 
## 7. Flujo de la aplicación

### Página principal

La ruta `/home` muestra:

- header
- banner promocional
- servicios
- collage de productos
- destacado del día
- historia de la marca
- footer

### Productos

La ruta `/productos` muestra todas las categorías y sus productos en un formato tipo catálogo.

### Detalle del producto

La ruta `/detalleProducto/:id` permite ver la información completa del producto seleccionado.

### Login y registro

- `/login` permite iniciar sesión.
- `/register` permite crear un usuario nuevo.
- La información del usuario se guarda en `localStorage` bajo `userData` y `users`.

### Rutas protegidas

La aplicación usa `react-router-dom` para redirigir al usuario si no ha iniciado sesión.

## 8. Gestión de usuario y sesión

La sesión del usuario se gestiona con:

- `useState` en `App.jsx`
- almacenamiento en `localStorage`

Ejemplo de lógica:

```js
const savedUser = JSON.parse(localStorage.getItem("userData"));
if (savedUser) setUser(savedUser);
```

Esto permite que el usuario permanezca autenticado durante la sesión del navegador.

## 9. Rutas principales

| Ruta | Descripción |
| --- | --- |
| `/` | Redirección inicial según si el usuario está logueado |
| `/login` | Inicio de sesión |
| `/register` | Registro de usuario |
| `/home` | Página principal |
| `/productos` | Catálogo completo |
| `/detalleProducto/:id` | Detalle de un producto |
| `/sobrenosotros` | Información de la empresa |
| `/servicios` | Servicios y oferta |
| `*` | Página de error |

## 10. Scripts disponibles

En el proyecto puedes ejecutar estos comandos:

```bash
npm install
npm run dev
```

Para compilar la versión de producción:

```bash
npm run build
```

Para vista previa de la build:

```bash
npm run preview
```

## 11. Cómo arrancar el proyecto

1. Abre la terminal en la raíz del proyecto.
2. Instala las dependencias:

```bash
npm install
```

3. Inicia el servidor de desarrollo:

```bash
npm run dev
```

4. Abre la URL que te indique Vite en el navegador.

## 12. Observaciones importantes

- Este proyecto es un frontend sin backend real.
- La información de productos está simulada con un JSON constante.
- La lógica de autenticación actual es local y no segura para producción.
- El proyecto está pensado como base para luego conectar una API o base de datos real.

## 13. Mejoras futuras recomendadas

- Migrar la información de productos a una API REST.
- Conectar un backend con MongoDB, MySQL o PostgreSQL.
- Añadir autenticación real con JWT o sesiones seguras.
- Crear panel de administración para gestionar productos.
- Guardar imágenes y datos de productos desde una base de datos.

## 14. Conclusión

El proyecto actual funciona como un frontend completo de tienda online para repostería, con catálogo visual y flujo de usuario básico. Su gran ventaja es que ya tiene la base estructural para crecer y conectarse más adelante a una base de datos real o a una API de producción.

---

Si quieres, en el siguiente paso puedo dejarte una versión aún más profesional con:

- documentación técnica en formato README para GitHub,
- descripción de cada componente,
- diagrama de flujo de la app,
- y una guía de mejora para convertirlo en proyecto fullstack.
