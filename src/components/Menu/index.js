import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <NavLink to="/">
            <img src="../../../images/logo.png" alt="Logo" />
          </NavLink>
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <NavLink>
            <img src="../../../images/hamburguer.png" alt="Logo" />
          </NavLink>
        </div>
        <div className={`nav-elements  ${showNavbar && 'active'}`}>
          <ul>
            <li>
              <NavLink to="/quem-somos">Quem somos</NavLink>
            </li>
            <li>
              <NavLink to="/solucoes-nuvem">Soluções Nuvem</NavLink>
            </li>
            <li>
              <NavLink to="/produtos">Produtos</NavLink>
            </li>
            <li>
              <NavLink to="/contato">Contato</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
