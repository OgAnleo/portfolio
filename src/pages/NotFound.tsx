import { useTranslation } from "react-i18next";

function NotFound() {
  const { t } = useTranslation();
  return (
    <section>
      <h1>{t("notFound.titulo")}</h1>
      <p>{t("notFound.texto")}</p>
    </section>
  );
}

export default NotFound;
