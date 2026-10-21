export interface Proyecto {
  id: number;
  tecnologias: string[];
  enlace?: string;
}

export const proyectos: Proyecto[] = [
  {
    id: 1,
    tecnologias: ["React", "TypeScript", "Vite", "i18n"],
    enlace: "https://github.com/OgAnleo/portfolio"
  },
  {
    id: 2,
    tecnologias: ["Dart", "Flutter"],
    enlace: "https://github.com/OgAnleo/ziesta",
  },

];