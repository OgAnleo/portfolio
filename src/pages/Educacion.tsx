import { useTranslation } from "react-i18next";

interface Estudio {
  titulo: string;
  centro: string;
  periodo: string;
}

interface Curso {
  titulo: string;
  centro: string;
  horas: number;
}

function Educacion() {
  const { t } = useTranslation();

  // Un genérico <T> es un "tipo comodín": la misma función sirve para
  // estudios y cursos, y TypeScript sabe qué devuelve en cada caso.
  const leerLista = <T,>(clave: string) =>
    Object.entries(t(clave, { returnObjects: true }) as Record<string, T>);

  const estudios = leerLista<Estudio>("educacion.estudios");
  const cursos = leerLista<Curso>("educacion.cursos");
  const otrosCursos = leerLista<Curso>("educacion.otrosCursos");

  const renderCursos = (lista: [string, Curso][]) =>
    lista.map(([id, curso]) => (
      <div className="cursos" key={id}>
        <article>
          <h3>{curso.titulo}</h3>
          <span className="tag">
            {curso.centro} ⟶ {curso.horas} {t("educacion.horas")}
          </span>
        </article>
      </div>
    ));

  return (
    <main className="educacion">
      <div className="segundo-fondo">
        <section className="fuente-curso">
          <h1>{t("educacion.educacion")}</h1>

          {estudios.map(([id, estudio]) => (
            <div className="cursos" key={id}>
              <article>
                <h2>{estudio.titulo}</h2>
                <span className="tag">{estudio.centro}</span>
                <span className="tag">{estudio.periodo}</span>
              </article>
            </div>
          ))}
        </section>

        <section className="fuente-curso">
          <h1>{t("educacion.titulos")}</h1>
          {renderCursos(cursos)}
        </section>

        <section className="fuente-curso">
          <h1>{t("educacion.otros")}</h1>
          {renderCursos(otrosCursos)}
        </section>
      </div>
    </main>
  );
}

export default Educacion;
