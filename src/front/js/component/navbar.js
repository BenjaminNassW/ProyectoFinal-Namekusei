import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container">
        <Link to="/">
          <span className="navbar-brand mb-0 h1">Logo</span>
        </Link>
        <Link to="/">
          <span>Busca un especialista</span>
        </Link>
        <Link to="/">
          <span>¿Que hacemos?</span>
        </Link>
        <div className="ml-auto">
          <Link to="/login">
            <button className="btn btn-primary me-1">Inicia sesion</button>
          </Link>
          <Link to="/login">
            <button className="btn btn-primary">Registrar</button>
          </Link>
        </div>
      </div>
    </nav>
  );
};
