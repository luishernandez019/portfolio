import FloreriaValentina from "../assets/projects/floreria-valentina.webp";
import DulceTentacion from "../assets/projects/dulce-tentacion.webp";
import Cientifico from "../assets/projects/100tifico.webp";
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
    title: "Florería Valentina",
    image: FloreriaValentina,
    alt: "Imagen de proyecto de Florería Valentina",
    demo: "https://floreria-valentina-mx.vercel.app",
    github: "https://github.com/luishernandez019/floreria-valentina",
  },
  {
    id: 3,
    title: "Dulce Tentación",
    image: DulceTentacion,
    alt: "Imagen de proyecto de Dulce Tentación",
    demo: "https://dulce-tentacion-mx.vercel.app",
    github: "https://github.com/luishernandez019/dulce-tentacion",
  },
  {
    id: 4,
    title: "100tifi.co",
    image: Cientifico,
    alt: "Imagen de proyecto de 100tifi.co",
    demo: "https://luishernandez019.github.io/100tifi.co/",
    github: "https://github.com/luishernandez019/100tifi.co",
  }
];
