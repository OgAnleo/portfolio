import { estudios } from "../data/educacion";

function Educacion() {
  return (
    <section>
      <h1>Educación</h1>
      {estudios.map((estudio) => (
        <article key={estudio.titulo}>
          <h2>{estudio.titulo}</h2>
          <p>{estudio.centro}</p>
          <p>{estudio.periodo}</p>
        </article>
      ))}
    </section>
  );
}

export default Educacion;