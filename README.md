# Portafolio Luis Hernández
[![Project Version][version-image]][version-url]
[![Frontend][frontend-image]][frontend-url]
[![Deploy][deploy-image]][deploy-url]

## Instalación

```sh
npm install
npm run dev
```

## Release History

* **1.0.3**
    * Mejoras de accesibilidad: focus visible global, skip link, aria-required, aria-expanded, role="dialog" en menú mobile, cierre con tecla Escape.
    * SEO: Open Graph, Twitter Cards, canonical, JSON-LD Schema.org Person.
    * Rendimiento: React.lazy() con code splitting real, preload de fuentes críticas (Poppins 400/700) desde public/, imágenes responsivas con srcset para profile y UPCHiapas, fetchpriority="high" en imagen LCP.
    * Corrección de jerarquía de headings: un solo h1 por página, secciones usan h2.
    * Error Boundary para captura de errores en componentes lazy.
    * Sanitización de inputs en el API de contacto.
    * Corregido: useEffect sin dependencias en Navbar, comparación == → ===, links externos sin rel="noopener noreferrer".

* **1.0.2**
    * Actualización de perfil, descripción de experiencias laborales y proyectos.

* **1.0.1**
    * Actualización de nombre, fechas de experiencias laborales y sección Inicio al scrollear.

* **1.0.0**
    * Primera versión.

---

<!-- Markdown link & img dfn's -->
[version-image]: https://img.shields.io/badge/Version-1.0.3-brightgreen?style=for-the-badge
[version-url]: https://luishernandez.digital
[frontend-image]: https://img.shields.io/badge/Frontend-React%20%2B%20TypeScript-blue?style=for-the-badge&logo=react
[frontend-url]: https://react.dev
[deploy-image]: https://img.shields.io/badge/Deploy-Vercel-black?style=for-the-badge&logo=vercel
[deploy-url]: https://luishernandez.digital
