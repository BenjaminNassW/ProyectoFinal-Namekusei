import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Link } from "react-router-dom";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="text-center mt-5">
      <h1>Busca tu doctor!</h1>

      <input placeholder="Especialista" className="me-1"></input>
      <input placeholder="Region" className="me-1"></input>
      <input placeholder="Comuna" className="me-1"></input>
      <button className="btn-primary">Buscar</button>

      {/* <div className="alert alert-info">
				{store.message || "Loading message from the backend (make sure your python backend is running)..."}
			</div> */}
    </div>
  );
};
