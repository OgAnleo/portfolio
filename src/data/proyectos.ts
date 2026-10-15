export interface Proyecto {
  id: number;
  nombre: string;
  descripcion: string;
  tecnologias: string[];
  enlace?: string;
}

export const proyectos: Proyecto[] = [
  {
    id: 1,
    nombre: "Portfolio",
    descripcion: "Este mismo portfolio, hecho para aprender React.",
    tecnologias: ["React", "TypeScript", "Vite"],
    enlace: "https://github.com/OgAnleo/portfolio"
  },
  {
    id: 2,
    nombre: "App bloqueo con temporizador de movil",
    descripcion: "En progreso: Aplicacion con temporalizador en el movil",
    tecnologias: ["por decidir"],
  },

];