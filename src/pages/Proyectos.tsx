import { proyectos } from "../data/proyectos";

function Proyectos() {
  return (
    <section>
      <h1>Proyectos</h1>
      {proyectos.map((proyecto) => (
  <article key={proyecto.id}>
    <h2>{proyecto.nombre}</h2>
    <p>{proyecto.descripcion}</p>
    <p>{proyecto.tecnologias.join(", ")}</p>
    {proyecto.enlace && <a href={proyecto.enlace}>Ver proyecto</a>}
  </article>
      ))}
    </section>
  );
}

export default Proyectos;