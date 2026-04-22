import FloreriaValentina from "../assets/projects/floreria-valentina.webp";
import DulceTentacion from "../assets/projects/dulce-tentacion.webp";
import DataDex from "../assets/projects/datadex.webp";
import BeatBond from "../assets/projects/beatbond.webp";

interface Project {
  id: number;
  title: string;
  image: string;
  alt: string;
  demo?: string;
  github?: string;
  behance?: string;
}

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "BeatBond",
    image: BeatBond,
    alt: "Imagen de proyecto de BeatBond",
    demo: "https://beatbond.vercel.app",
    github: "https://github.com/luishernandez019/BeatBond",
  },
  {
    id: 2,
    title: "DataDex",
    image: DataDex,
    alt: "Imagen de proyecto de DataDex",
    demo: "https://datadex-api.vercel.app",
    github: "https://github.com/luishernandez019/datadex",
  },
  {
    id: 3,
    title: "Florería Valentina",
    image: FloreriaValentina,
    alt: "Imagen de proyecto de Florería Valentina",
    demo: "https://floreria-valentina-mx.vercel.app",
    github: "https://github.com/luishernandez019/floreria-valentina",
  },
  {
    id: 4,
    title: "Dulce Tentación",
    image: DulceTentacion,
    alt: "Imagen de proyecto de Dulce Tentación",
    demo: "https://dulce-tentacion-mx.vercel.app",
    github: "https://github.com/luishernandez019/dulce-tentacion",
  }
];
