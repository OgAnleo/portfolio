import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
function Navbar() {
  const { t, i18n } = useTranslation();
  return (

    <nav>

      <NavLink className="boton-nav" to="/">{t("nav.sobreMi")}</NavLink>
      <NavLink to="/educacion">{t("nav.educacion")}</NavLink>
      <NavLink to="/proyectos">{t("nav.proyectos")}</NavLink>
      <button
        className="cambio-idioma"
        type="button"
        onClick={() => i18n.changeLanguage(i18n.language === "es" ? "en" : "es")}
      >
        {i18n.language === "es" ? "EN" : "ES"}
      </button>
    </nav>

  );
}

export default Navbar;