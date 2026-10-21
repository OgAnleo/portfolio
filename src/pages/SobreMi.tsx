import { habilidades } from "../data/habilidades";
import { useTranslation } from "react-i18next";

function SobreMi() {
  const { t } = useTranslation();
  return (
    <main className="pagina">
      <div className="segundo-fondo">
        <section className="presentacion">
          <img
            className="foto-perfil"
            src={`${import.meta.env.BASE_URL}perfil.webp`}
            alt={`${t("sobreMi.foto")} ${t("sobreMi.nombre")}`}
          />

          <div>
            <h1> {t("sobreMi.nombre")} </h1>
            <h2> {t("sobreMi.titulo")} </h2>

            <p> {t("sobreMi.descripcion")} </p>
          </div>
        </section>

        <section>
          <h2>{t("sobreMi.busquedaTitulo")}</h2>
          <p>{t("sobreMi.busquedaTexto")}</p>
        </section>

        <section>
          <h2>{t("sobreMi.quienTitulo")}</h2>
          <p>{t("sobreMi.quienTexto")}</p>
        </section>

        <h2>{t("sobreMi.habilidades")}</h2>
        <ul>
          {habilidades.map((habilidad) => (
            <li key={habilidad.id}>
              {habilidad.nombre} ({t(`sobreMi.niveles.${habilidad.nivel}`)})
            </li>
          ))}
        </ul>
        <a className="boton-cv" href={`${import.meta.env.BASE_URL}cv.pdf`} download>{t("sobreMi.cv")}</a>
      </div>

    </main >
  );
}

export default SobreMi;