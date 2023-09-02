import React from 'react';
import { Link } from 'react-router-dom';

const Header = (Link) => {
  return (
    <header>
      <Link to="/">Inicio/Blog</Link>
      <Link to="/area-socios">Área Socios</Link>
      <a href="https://www.instagram.com/beticosdelnorte/?hl=es" target="_blank" rel="noopener noreferrer">Nuestro Instagram</a>
    </header>
  );
}

export default Header;
