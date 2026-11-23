import { useState } from "react";
import { NavLink } from "react-router-dom";
import '../App.css'

export default function Nav() {
  const [menuAbierto, setMenuAbierto] = useState(false);
  const [subMenuAbierto, setSubMenuAbierto] = useState(null);

  function claseActiva({ isActive, isPending }) {
    const estado = isPending ? "pending" : isActive ? "active" : "";
    return `nav-link ${estado}`.trim();
  }

  function toggleSubMenu(nombre, e) {
    // En móviles evita navegar de inmediato si solo se quiere abrir el submenú
    if (window.innerWidth <= 768) {
      e.preventDefault();
    }
    setSubMenuAbierto((prev) => (prev === nombre ? null : nombre));
  }

  function cerrarMenus() {
    setMenuAbierto(false);
    setSubMenuAbierto(null);
  }

  return (
    <nav className="menu-bar">
      <button
        type="button"
        className="hamburguesa"
        aria-label="Abrir o cerrar menú"
        aria-expanded={menuAbierto}
        onClick={() => setMenuAbierto((prev) => !prev)}
      >
       
      </button>

      <ul className={`menus ${menuAbierto ? "abierto" : ""}`}>
        <li>
          <NavLink
            to="/"
            end
            className={claseActiva}
            data-i18n="inicio"
            onClick={cerrarMenus}
          >
            Inicio
          </NavLink>
        </li>

        <li className="desplegable">
          <NavLink
            to="/experiencia-smart"
            className={claseActiva}
            data-i18n="expSmart"
            onClick={cerrarMenus}
          >
            Experiencia Smart
          </NavLink>
        </li>

        <li
          className={`desplegable ${subMenuAbierto === "categorias" ? "open" : ""}`}
        >
          <NavLink
            to="/categorias"
            className={claseActiva}
            data-i18n="categorias"
            onClick={(e) => toggleSubMenu("categorias", e)}
          >
            Categorias
          </NavLink>
          <ul className="submenu">
            <li>
              <NavLink
                to="/categorias#computacion"
                className={claseActiva}
                data-i18n="compLap"
                onClick={cerrarMenus}
              >
                Computación y Laptos
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/categorias#celulares"
                className={claseActiva}
                data-i18n="celyTab"
                onClick={cerrarMenus}
              >
                Celurares y Tablets
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/categorias#gaming"
                className={claseActiva}
                data-i18n="gaming"
                onClick={cerrarMenus}
              >
                Gaming
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/categorias#smarthome"
                className={claseActiva}
                data-i18n="smartHome"
                onClick={cerrarMenus}
              >
                Smart Home y Oficina
              </NavLink>
            </li>
          </ul>
        </li>


        <li
          className={`desplegable ${subMenuAbierto === "categorias" ? "open" : ""}`}>
          <NavLink
            to="/contacto"
            className="nav-link"
            data-i18n="sopAyu"
            onClick={(e) => toggleSubMenu("soporte", e)}
          >
            Soporte / Ayuda
          </NavLink>
          <ul className="submenu">
            <li>
              <NavLink
                to="/contacto"
                className={claseActiva}
                data-i18n="contacto"
                onClick={cerrarMenus}
              >
                Contactanos
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/nuestro-equipo"
                className={claseActiva}
                data-i18n="nuestEquip"
                onClick={cerrarMenus}
              >
                Nuestro Equipo
              </NavLink>
            </li>
            </ul>
            
        </li>
      </ul>
    </nav>
  );
}