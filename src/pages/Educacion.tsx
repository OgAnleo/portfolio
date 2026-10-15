import { estudios } from "../data/educacion";
import { cursos } from "../data/cursos";
import { otrosCursos } from "../data/otrosCursos";
function Educacion() {
  return (
    <main className="educacion">
      <div className="segundo-fondo">  
        
        <section className="fuente-curso">
          <h1>Educación</h1>
          {estudios.map((estudio) => (
            <div className="titulo">
            <article key={estudio.titulo}>
              <h2>{estudio.titulo}</h2>
              <span className="tag">{estudio.centro}</span >
              <span  className="tag">{estudio.periodo}</span >
            </article>
            </div>
          ))}
        </section>

        <section className="fuente-curso">
          <h1>Cursos relacionados</h1>
          {cursos.map((Curso) =>(
            <div className="curso">
              <article key={Curso.titulo}>
              <h2>{Curso.titulo}</h2>
              <span  className="tag" >{Curso.centro} ⟶ {Curso.horas} horas</span >
              </article>
            </div>
          ))}

        </section>
        <section className="fuente-curso" >
          <h1>Otros Cursos</h1>
          {otrosCursos.map((OtroCurso) =>(
            <div className="cursos">
            <article key={OtroCurso.titulo}>
            <h3>{OtroCurso.titulo}</h3>
            <span  className="tag">{OtroCurso.centro} ⟶  {OtroCurso.horas}</span >
            </article>
          </div>
          ))}
        </section>

      </div>
    </main>
  );
}

export default Educacion;