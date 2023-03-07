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
    <>
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
                <NavLink to="/quem-somos">quem somos</NavLink>
              </li>
              <li>
                <NavLink to="/solucoes-nuvem">soluções nuvem</NavLink>
              </li>
              <li>
                <NavLink to="/produtos">produtos</NavLink>
              </li>
              <li>
                <NavLink to="/contato">contato</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="nav-padding"></div>
    </>
  );
};

export default Navbar;
