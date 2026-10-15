import type { Proyecto } from "../data/proyectos";

interface Props {
  proyecto: Proyecto;
}

function ProyectoCard({ proyecto }: Props) {
  return (
    <article className="proyecto-card" key={proyecto.id}>
      <h2>{proyecto.nombre}</h2>
      <p>{proyecto.descripcion}</p>
      
      <div className="proyecto-tecnologias">
        {proyecto.tecnologias.map((tecnologia) => (
          <span className="tag" key={tecnologia}>
            {tecnologia}
          </span>
        ))}
      </div>

      {proyecto.enlace && (
        <a
          className="enlace-proyecto"
          href={proyecto.enlace}
          target="_blank"
        >
          Ver proyecto
        </a>
      )}
    </article>
  );
}

export default ProyectoCard;