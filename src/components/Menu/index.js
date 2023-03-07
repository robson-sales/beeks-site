import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';
import logo from '../../assets/images/logo.png';
import hamburguer from '../../assets/images/hamburguer.png';

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
            <img src={logo} alt="Logo" />
          </NavLink>
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <NavLink>
            <img src={hamburguer} alt="Logo" />
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
