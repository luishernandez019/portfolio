import FloreriaValentina from "../assets/projects/floreria-valentina.webp?w=750&format=webp";
import FloreriaValentinaSrcset from "../assets/projects/floreria-valentina.webp?w=400;750&format=webp&as=srcset";
import DulceTentacion from "../assets/projects/dulce-tentacion.webp?w=750&format=webp";
import DulceTentacionSrcset from "../assets/projects/dulce-tentacion.webp?w=400;750&format=webp&as=srcset";
import DataDex from "../assets/projects/datadex.webp?w=750&format=webp";
import DataDexSrcset from "../assets/projects/datadex.webp?w=400;750&format=webp&as=srcset";
import BeatBond from "../assets/projects/beatbond.webp?w=750&format=webp";
import BeatBondSrcset from "../assets/projects/beatbond.webp?w=400;750&format=webp&as=srcset";

export type ProjectCategory = "Frontend";

interface Project {
  id: number;
  title: string;
  description: string;
  descriptionEn: string;
  image: string;
  srcset: string;
  alt: string;
  altEn: string;
  category: ProjectCategory;
  tags: string[];
  demo?: string;
  github?: string;
  behance?: string;
}

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "BeatBond",
    description: "Aplicación musical estilo Tinder para descubrir música basada en preferencias y gustos del usuario.",
    descriptionEn: "Tinder-style music app to discover music based on user preferences and tastes.",
    image: BeatBond,
    srcset: BeatBondSrcset,
    alt: "Imagen de proyecto de BeatBond",
    altEn: "BeatBond project image",
    category: "Frontend",
    tags: ["Next.js", "Tailwind", "TypeScript", "API REST"],
    demo: "https://beatbond.vercel.app",
    github: "https://github.com/luishernandez019/BeatBond",
  },
  {
    id: 2,
    title: "DataDex",
    description: "Explorador interactivo de datos Pokemón con visualizaciones dinámicas y filtros avanzados.",
    descriptionEn: "Interactive Pokémon data explorer with dynamic visualizations and advanced filters.",
    image: DataDex,
    srcset: DataDexSrcset,
    alt: "Imagen de proyecto de DataDex",
    altEn: "DataDex project image",
    category: "Frontend",
    tags: ["Next.js", "Tailwind", "TypeScript", "API REST"],
    demo: "https://datadex-api.vercel.app",
    github: "https://github.com/luishernandez019/datadex",
  },
  {
    id: 3,
    title: "Florería Valentina",
    description: "Landing page para floristería local con diseño elegante y galería de arreglos florales.",
    descriptionEn: "Landing page for a local flower shop with elegant design and floral arrangement gallery.",
    image: FloreriaValentina,
    srcset: FloreriaValentinaSrcset,
    alt: "Imagen de proyecto de Florería Valentina",
    altEn: "Florería Valentina project image",
    category: "Frontend",
    tags: ["Next.js", "Tailwind", "TypeScript"],
    demo: "https://floreria-valentina-mx.vercel.app",
    github: "https://github.com/luishernandez019/floreria-valentina",
  },
  {
    id: 4,
    title: "Dulce Tentación",
    description: "Sitio web para repostería artesanal con catálogo de productos y galería visual.",
    descriptionEn: "Website for an artisan bakery with a product catalog and visual gallery.",
    image: DulceTentacion,
    srcset: DulceTentacionSrcset,
    alt: "Imagen de proyecto de Dulce Tentación",
    altEn: "Dulce Tentación project image",
    category: "Frontend",
    tags: ["Next.js", "Tailwind", "TypeScript"],
    demo: "https://dulce-tentacion-mx.vercel.app",
    github: "https://github.com/luishernandez019/dulce-tentacion",
  },
];
