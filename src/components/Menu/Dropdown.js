import { NavLink } from 'react-router-dom';
// import PropTypes from 'prop-types';

import './style.css';

export default function Dropdown() {
  const subitems = {
    title: 'produto 1',
    url: '/prod-1',
  };
  console.log(subitems);

  return (
    <ul className="nav-elements-subitems">
      <li>
        <NavLink to={subitems.url}>{subitems.title}</NavLink>
      </li>
    </ul>
  );
}

// Dropdown.propTypes = {
//   currElement: PropTypes.object({}).isRequired,
// };
