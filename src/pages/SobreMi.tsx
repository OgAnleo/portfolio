import { perfil } from "../data/perfil";
import { habilidades } from "../data/habilidades";

function SobreMi() {
  return (
    <main className="sobre-mi">
      <div className="segundo-fondo">
        <section className="presentacion">
          <img
            className="foto-perfil"
            src="/perfil.webp"
            alt={`Foto de ${perfil.nombre}`}
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
            Busco una oportunidad profesional como desarrollador en la que pueda aplicar mis conocimientos,
            seguir aprendiendo y crecer dentro del sector tecnológico. Mi objetivo es incorporarme a una empresa
            donde pueda desarrollar mi carrera a largo plazo, aportar valor al equipo y evolucionar profesionalmente
            de forma estable.

          </p>
        </section>

        <section className="descripcion">
          <h2>¿Quien soy?</h2>
          <p>
            Mi trayectoria me ha permitido desarrollar habilidades de adaptación,
            paciencia y trabajo en equipo. Actualmente estoy centrado en la programación y
            en construir una base técnica sólida para desarrollar aplicaciones y
            afrontar nuevos retos profesionales.
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
      </div>

    </main>
  );
}

export default SobreMi;