import { Button } from "bootstrap";
import React from "react";
import { Link } from "react-router-dom";
import "../../styles/index.css";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light fondo">
      <div className="container">
        <Link to="/">
          <span className="navbar-brand mb-0 h1">
            <img
              src="https://www.tudoc.com.pe/wp-content/uploads/2021/06/logo.png"
              className="logo2"
            ></img>
          </span>
        </Link>

        <Link to="/info">
          <button className="btn btn-primary">Sobre Nosotros</button>
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
