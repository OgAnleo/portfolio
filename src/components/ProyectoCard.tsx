import type {Proyecto} from "../data/proyectos";
interface Props {
    proyecto: Proyecto;
}

function ProyectoCard ({proyecto}: Props) {
    return (
        <article>
            <h2>{proyecto.nombre}</h2>
            <p>{proyecto.descripcion}</p>
            <p>{proyecto.tecnologias.join(", ")}</p>
            {proyecto.enlace && <a href={proyecto.enlace}>Ver proyecto</a>}
        </article>
    );
}

export default ProyectoCard;