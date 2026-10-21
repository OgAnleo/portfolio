export interface Habilidad {
  id: number;
  nombre: string;
  nivel: "basico" | "medio" | "avanzado";
}

export const habilidades: Habilidad[] = [
  { id: 1, nombre: "React", nivel: "medio" },
  { id: 2, nombre: "TypeScript", nivel: "medio" },
  { id: 3, nombre: "Java", nivel: "basico" },
  { id: 4, nombre: "Dart", nivel: "basico" },
  { id: 5, nombre: "Flutter", nivel: "basico" },
];