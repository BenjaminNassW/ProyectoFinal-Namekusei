import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Login = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="mx-auto mt-5 d-flex flex-column w-25">
      <h1 className="mb-3">Iniciar Sesión</h1>
      <p className="m-0">Correo Electronico</p>
      <input placeholder="" className=""></input>
      <p className="m-0">Contraseña</p>
      <input placeholder="" className="mb-4"></input>

      <button className="btn-primary">Ingresar</button>
    </div>
  );
};
