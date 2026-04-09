import FloreriaValentina from "../assets/projects/floreria-valentina.webp";
import DulceTentacion from "../assets/projects/dulce-tentacion.webp";
import Cientifico from "../assets/projects/100tifico.webp";
import Matchnime from "../assets/projects/matchnime.webp";

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
    title: "Florería Valentina",
    image: FloreriaValentina,
    alt: "Imagen de proyecto de Florería Valentina",
    demo: "https://floreria-valentina-two.vercel.app",
    github: "https://github.com/luishernandez019/floreria-valentina",
  },
  {
    id: 2,
    title: "Dulce Tentación",
    image: DulceTentacion,
    alt: "Imagen de proyecto de Dulce Tentación",
    demo: "https://dulce-tentacion-omega.vercel.app",
    github: "https://github.com/luishernandez019/dulce-tentacion",
  },
  {
    id: 3,
    title: "100tifi.co",
    image: Cientifico,
    alt: "Imagen de proyecto de 100tifi.co",
    demo: "https://luishernandez019.github.io/100tifi.co/",
    github: "https://github.com/luishernandez019/100tifi.co",
  },
  {
    id: 4,
    title: "Matchnime",
    image: Matchnime,
    alt: "Imagen de proyecto de Matchnime",
    demo: "https://matchnime-app.web.app",
    github: "https://github.com/luishernandez019/Matchnime",
  },
];
