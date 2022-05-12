import React from "react";
import { Link } from "react-router-dom";
import "../../styles/index.css";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container">
        <Link to="/">
          <span className="navbar-brand mb-0 h1">
            <img
              src="https://cdn-icons-png.flaticon.com/512/822/822111.png"
              className="logo"
            ></img>
          </span>
        </Link>
        <Link to="/list">
          <span>Busca un especialista</span>
        </Link>
        <Link to="/info">
          <span>¿Que hacemos?</span>
        </Link>
        <div className="ml-auto">
          <Link to="/login">
            <button className="btn btn-primary me-1">Inicia sesion</button>
          </Link>
          <Link to="/signup">
            <button className="btn btn-primary me-1">Registrar</button>
          </Link>
          <Link to="/profile">
            <button className="btn btn-primary">Perfil</button>
          </Link>
        </div>
      </div>
    </nav>
  );
};
