export interface Curso{
titulo: string;
centro: string;
horas: number
año: number
}

export const cursos: Curso[] =[
{titulo:"Curso de cassandra + Java y MySQL JDBC + MongoDB",
centro:"OpenWebinar",
horas: 23,
año: 2026
},
{titulo:"Curso de HTML5 y CSS3 + Manipulación del DOM desde JavaScript",
centro:"OpenWebinar",
horas: 18,
año: 2026
},

{titulo:"Java desde 0 + JavaFX + estructuras de datos en Java + Java XML + Javadoc + Java 18: Clean Code + Entrada y salida IO/NIO",
centro:"OpenWebinar",
horas: 25,
año: 2026
},

{titulo:"Curso de fundamentos de Redes + Introducción a las RedesInalámbricas y la Revolución de las 5G:TCP/IP",
centro:"OpenWebinar",
horas: 16,
año: 2026
},

]