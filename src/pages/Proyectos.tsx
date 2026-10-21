import { proyectos } from "../data/proyectos";
import ProyectoCard from "../components/ProyectoCard";
import { useTranslation } from "react-i18next";

function Proyectos() {
  const { t } = useTranslation();
  return (
    <main className="pagina">
      <div className="segundo-fondo">
        <section>
          <h1>{t("proyectos.proyectos")}</h1>

          {proyectos.map((proyecto) => (
            <ProyectoCard key={proyecto.id} proyecto={proyecto} />
          ))}
        </section>
      </div>
    </main>
  );
}

export default Proyectos;