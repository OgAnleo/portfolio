
import type { Proyecto } from "../data/proyectos";
import { useTranslation } from "react-i18next";

interface Props {
  proyecto: Proyecto;
}

function ProyectoCard({ proyecto }: Props) {
  const { t } = useTranslation();

  return (
    <article className="tarjeta">
      <h2>{t(`proyectos.proyecto.${proyecto.id}.nombre`)}</h2>

      <p>{t(`proyectos.proyecto.${proyecto.id}.descripcion`)}</p>

      {proyecto.tecnologias.length > 0 && (
        <div className="proyecto-tecnologias">
          {proyecto.tecnologias.map((tecnologia) => (
            <span className="tag" key={tecnologia}>
              {tecnologia}
            </span>
          ))}
        </div>
      )}

      {proyecto.enlace && (
        <a
          className="enlace-proyecto"
          href={proyecto.enlace}
          target="_blank"
          rel="noopener noreferrer"
        >
          {t("proyectos.verProyecto")}
        </a>
      )}
    </article>
  );
}

export default ProyectoCard;
