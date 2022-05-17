import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Link } from "react-router-dom";

export const Home = () => {
  const { store, actions } = useContext(Context);
  const { name, setName } = useState([]);
  useEffect(() => {
    console.log();
  }, []);
  return (
    <div className="text-center mt-5">
      <h1>Busca tu doctor!</h1>
      <>
        <input placeholder="Nombre" className="me-1"></input>
        <p>
          {store.doctor.map((obj, index) => {
            return obj.namelast;
          })}
        </p>
      </>
      <input placeholder="Especialidad" className="me-1"></input>
      <input placeholder="Region" className="me-1"></input>
      <input placeholder="Comuna" className="me-1"></input>
      <button className="btn-primary">Buscar</button>

      {/* <div className="alert alert-info">
				{store.message || "Loading message from the backend (make sure your python backend is running)..."}
			</div> */}
    </div>
  );
};
