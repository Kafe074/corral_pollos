# Corral Don Pedrito

Landing page de una granja familiar de huevos y pollos de corral (San Jerónimo de Tunán, Perú). Sitio de una sola página, sin backend: los pedidos se coordinan por WhatsApp.

## Stack

- React 18 + Vite
- CSS plano (`src/index.css`), sin framework de estilos
- Fuentes propias (Alfa Slab One, Karla) auto-hospedadas en `public/fonts`

## Requisitos

- Node.js 18+

## Uso

```bash
npm install
npm run dev       # servidor de desarrollo
npm run build     # build de producción en /dist
npm run preview   # sirve el build de /dist localmente
```

## Estructura

```
src/
  App.jsx              orden de las secciones de la página
  index.css             estilos globales (tokens de color, tipografía, componentes)
  components/
    Header.jsx           navegación + logo
    Hero.jsx              portada
    Nosotros.jsx          historia de la granja
    Productos.jsx         huevos y pollos
    Galeria.jsx            vista del corral, huevos, pollos y entrega
    Entrega.jsx            cómo se hacen los envíos
    FAQ.jsx                preguntas frecuentes
    Contacto.jsx            WhatsApp y datos de contacto
    Footer.jsx
    FloatingWhatsApp.jsx    botón flotante de WhatsApp
  config/
    contact.js             número de WhatsApp, mensaje y zona de entrega
  hooks/
    useReveal.js            animaciones de aparición al hacer scroll
```

## Qué editar

- **Datos de contacto**: todo el número de WhatsApp, el mensaje prellenado y la zona de entrega se configuran en un solo lugar: `src/config/contact.js`.
- **Logo**: mientras no haya logo definitivo, el header muestra un sello con las iniciales "CDP" (`.seal` en `src/components/Header.jsx`). Cuando esté listo el logo real, reemplazar ese `<div className="seal">` por un `<img src="/logo.png" ... />` (instrucción dejada como comentario en el propio archivo).
- **Fotos de la galería**: `src/components/Galeria.jsx` usa ilustraciones hechas en CSS (huevo, gallina, canasta) como marcador visual. Cuando haya fotos reales del corral, reemplazar el contenido de cada `.mark` por un `<img>`.
- **Precios**: no se muestran precios fijos en el sitio; se confirman por WhatsApp según el pedido (sección Productos).
- **Dominio**: antes de publicar, actualizar la URL real en `index.html` (`canonical`, `og:url`, `og:image`, `twitter:image`).

## Diseño

Paleta cálida (crema, terracota, amarillo yema, verde pasto) pensada para transmitir una identidad de granja familiar, no corporativa/tecnológica. Los tokens de color y tipografía están centralizados en `:root` al inicio de `src/index.css`; incluye variante para modo oscuro vía `prefers-color-scheme`.
