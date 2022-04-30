import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Login = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="mx-auto mt-5 d-flex flex-column w-25">
      <h1 className="mb-5">Sign Up</h1>
      <p className="m-0">E-mail</p>
      <input placeholder="" className=""></input>
      <p className="m-0">Password</p>
      <input placeholder="" className=""></input>

      <button className="btn-primary">Buscar</button>
    </div>
  );
};
