
import { useTranslation } from "react-i18next";

function Educacion() {
  const { t } = useTranslation();

  const estudios = Object.entries(
    t("educacion.estudios", { returnObjects: true }) as Record<
      string,
      { titulo: string; centro: string; periodo: string }
    >
  );

  const cursos = Object.entries(
    t("educacion.cursos", { returnObjects: true }) as Record<
      string,
      { titulo: string; centro: string; horas: number }
    >
  );

  const otrosCursos = Object.entries(
    t("educacion.otrosCursos", { returnObjects: true }) as Record<
      string,
      { titulo: string; centro: string; horas: number }
    >
  );

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

          {cursos.map(([id, curso]) => (
            <div className="cursos" key={id}>
              <article key={id}>
                <h3>{curso.titulo}</h3>
                <span className="tag"> {curso.centro} ⟶ {curso.horas} {t("educacion.horas")}</span>
              </article>
            </div>
          ))}
        </section>

        <section className="fuente-curso">
          <h1>{t("educacion.otros")}</h1>

          {otrosCursos.map(([id, curso]) => (
            <div className="cursos" key={id}>
              <article>
                <h3>{curso.titulo}</h3>
                <span className="tag">
                  {curso.centro} ⟶ {curso.horas} {t("educacion.horas")}
                </span>
              </article>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
}

export default Educacion;
