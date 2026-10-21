import { siGithub, siGmail } from "simple-icons/icons";
import { contacto } from "../data/contacto";
import { Phone } from "lucide-react";

function Footer() {
  return (
    <footer>
      <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
        <path d={siGmail.path} fill={`#${siGmail.hex}`} />
      </svg>
      <a href={`mailto:${contacto.email}`}>{contacto.email}</a>

      <Phone size={24} aria-hidden="true" />
      <a href={`tel:${contacto.telefono.replace(/\s/g, "")}`}>{contacto.telefono}</a>
      <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
        <path d={siGithub.path} fill={`#${siGithub.hex}`} />
      </svg>
      <a href={contacto.github} target="_blank" rel="noreferrer">GitHub</a>
    </footer>
  );
}

export default Footer;