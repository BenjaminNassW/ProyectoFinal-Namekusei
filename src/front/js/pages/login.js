import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Login = () => {
  const { store, actions } = useContext(Context);

  return (
    <form
      method="GET"
      action="{{ url_for('search') }}"
      className="mx-auto mt-5 d-flex flex-column w-25"
    >
      <h1 className="mb-3">Iniciar Sesión</h1>
      <p className="m-0">Correo Electronico</p>
      <input name="useremail" placeholder="" className=""></input>
      <p className="m-0">Contraseña</p>
      <input name="userpassword" placeholder="" className="mb-4"></input>

      <button className="btn-primary">Ingresar</button>
    </form>
  );
};
