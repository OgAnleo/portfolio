export interface Habilidad {
  id: number;
  nombre: string;
  nivel: "básico" | "medio" | "avanzado";
}

export const habilidades: Habilidad[] = [
  { id: 1, nombre: "React", nivel: "básico" },
  { id: 2, nombre: "TypeScript", nivel: "básico" },
  { id: 3, nombre: "Java", nivel: "medio" },
];