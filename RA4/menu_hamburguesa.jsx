import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import 'menu_hamburguesa.css';

function Navbar() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (path) => location.pathname === path;

  return (
    <header>

      <div>

        <nav role="navigation">
          <div>
            <img
              src="/img/logo.webp"
              alt="Logo Pokeball"
              className="logo"
            />
          </div>
          <ul className="ul-principal">
            <li>
              <Link to="/" className={`${isActive('/') ? 'active' : ''}`} >Inici</Link>
            </li>
            <li>
              <Link to="/galeria" className={`${isActive('/galeria') ? 'active' : ''}`}>Galeria</Link>
            </li>
            <li>
              <Link to="/contacta" className={`${isActive('/contacta') ? 'active' : ''}`}>Contacta</Link>
            </li>
          </ul>
        </nav>
      </div>

      <div>
        <button
          className="boto-hamburguesa"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Obrir menú"
          aria-expanded={menuOpen}
        >
          ☰
        </button>
      </div>
      {menuOpen && (
        <nav>
          <ul>
            {[
              { path: "/", label: "Inici" },
              { path: "/galeria", label: "Galeria" },
              { path: "/contacta", label: "Contacta" },
            ].map(({ path, label }) => (
              <li key={path}>
                <Link
                  to={path}
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}

    </header>
  );
}

export default Navbar;
