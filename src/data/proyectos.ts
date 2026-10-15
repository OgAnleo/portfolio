export interface Proyecto {
  id: number;
  nombre: string;
  tecnologias: string[];
  enlace?: string;
}

export const proyectos: Proyecto[] = [
  {
    id: 1,
    nombre: "Portfolio",
    tecnologias: ["React", "TypeScript", "Vite", "i18n"],
    enlace: "https://github.com/OgAnleo/portfolio"
  },
  {
    id: 2,
    nombre: "App bloqueo con temporizador de movil",
    tecnologias: ["por decidir"],
  },

];