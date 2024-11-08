// src/Menu.js
import React from 'react';
import './Menu.css';

const Menu = () => {
  return (
    <nav className="menu">
      <ul>
        <li><a href="#seccion1">Sección 1</a></li>
        <li><a href="#seccion2">Sección 2</a></li>
        <li><a href="#seccion3">Sección 3</a></li>
      </ul>
    </nav>
  );
};

export default Menu;
