import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <NavLink to="/">Sobre mí</NavLink>
      <NavLink to="/educacion">Educación</NavLink>
      <NavLink to="/proyectos">Proyectos</NavLink>
    </nav>
  );
}

export default Navbar;