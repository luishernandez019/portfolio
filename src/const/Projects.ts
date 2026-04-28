import FloreriaValentina from "../assets/projects/floreria-valentina.webp";
import DulceTentacion from "../assets/projects/dulce-tentacion.webp";
import DataDex from "../assets/projects/datadex.webp";
import BeatBond from "../assets/projects/beatbond.webp";

export type ProjectCategory = "Frontend" | "Diseño";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  alt: string;
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
    description: "Plataforma musical para descubrir artistas y crear playlists colaborativas en tiempo real.",
    image: BeatBond,
    alt: "Imagen de proyecto de BeatBond",
    category: "Frontend",
    tags: ["React", "TypeScript", "CSS"],
    demo: "https://beatbond.vercel.app",
    github: "https://github.com/luishernandez019/BeatBond",
  },
  {
    id: 2,
    title: "DataDex",
    description: "Explorador interactivo de datos con visualizaciones dinámicas y filtros avanzados.",
    image: DataDex,
    alt: "Imagen de proyecto de DataDex",
    category: "Frontend",
    tags: ["React", "API REST", "JavaScript"],
    demo: "https://datadex-api.vercel.app",
    github: "https://github.com/luishernandez019/datadex",
  },
  {
    id: 3,
    title: "Florería Valentina",
    description: "Landing page para floristería local con diseño elegante y galería de arreglos florales.",
    image: FloreriaValentina,
    alt: "Imagen de proyecto de Florería Valentina",
    category: "Diseño",
    tags: ["Figma", "HTML", "CSS"],
    demo: "https://floreria-valentina-mx.vercel.app",
    github: "https://github.com/luishernandez019/floreria-valentina",
  },
  {
    id: 4,
    title: "Dulce Tentación",
    description: "Sitio web para repostería artesanal con catálogo de productos y galería visual.",
    image: DulceTentacion,
    alt: "Imagen de proyecto de Dulce Tentación",
    category: "Diseño",
    tags: ["Figma", "HTML", "CSS"],
    demo: "https://dulce-tentacion-mx.vercel.app",
    github: "https://github.com/luishernandez019/dulce-tentacion",
  }
];
