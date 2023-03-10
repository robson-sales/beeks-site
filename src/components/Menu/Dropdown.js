import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import './style.css';

export default function Dropdown({ menuItem }) {
  const { subItems } = menuItem;

  return (
    <ul className="submenu-list">
      {subItems.map((submenuItem, index) => (
        <li className="submenu-item" key={index}>
          <NavLink to={submenuItem.url} key={index}>
            {submenuItem.title}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}

Dropdown.propTypes = {
  menuItem: PropTypes.object.isRequired,
};
