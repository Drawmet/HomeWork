import React from 'react';
import {Link} from 'react-router-dom';

const Menu = () => (
  <ul className="list-group">
    <Link to="/auto">
      <li className="list-group-item list-group-item-action">
        Auto
      </li>
    </Link>
    <Link to="/users">
      <li className="list-group-item list-group-item-action">
        Users
      </li>
    </Link>
    <Link to="/admin">
      <li className="list-group-item list-group-item-action">
        Admin
      </li>
    </Link>
  </ul>
);

export default Menu;