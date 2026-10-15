import { proyectos } from "../data/proyectos";
import ProyectoCard from "../components/ProyectoCard";

function Proyectos() {
  return (
    <main className="proyectos">
      <div className="segundo-fondo">
        <section>
          <h1>Proyectos</h1>

          {proyectos.map((proyecto) => (
            <ProyectoCard key={proyecto.id} proyecto={proyecto} />
          ))}
        </section>
      </div>
    </main>
  );
}

export default Proyectos;