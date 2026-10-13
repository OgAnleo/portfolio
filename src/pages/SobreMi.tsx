import { perfil } from "../data/perfil";
import { habilidades } from "../data/habilidades";

function SobreMi() {
  return (
    <main className="sobre-mi">
      <section className="presentacion">
          <img
            className="foto-perfil"
            src="/perfil.jpg"
            alt="Foto de ${perfil.nombre}"
          />

        <div>
          <h1> {perfil.nombre} </h1>
          <h2> {perfil.titulo} </h2>

          <p> {perfil.descripcion} </p>
        </div>
      </section>

      <section className="busqueda">
        <h2>¿Qué estoy buscando?</h2>

        <p>
          Busco una oportunidad profesional como desarrollador en la que
          pueda aplicar mis conocimientos, aprender y seguir desarrollándome
          en el sector tecnológico.
        </p>
      </section>
      <h2>Habilidades</h2>
        <ul>
            {habilidades.map((habilidad) => (
          <li key={habilidad.id}>
            {habilidad.nombre} ({habilidad.nivel})
          </li>
        ))}
        </ul>
      <a href="/cv.pdf" download>Descargar CV</a> 
    </main>
  );
}

export default SobreMi;