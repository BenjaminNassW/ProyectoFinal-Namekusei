import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Link } from "react-router-dom";

export const Home = () => {
  const { store, actions } = useContext(Context);
  const [name, setName] = useState("");
  const [expert, setExpert] = useState("");
  const [region, setRegion] = useState("");

  useEffect(() => {
    console.log(name);
  }, [name]);

  return (
    <div className="text-center mt-5">
      <h1>Busca tu doctor!</h1>
      <>
        <input
          placeholder="Nombre"
          className="me-1"
          onChange={(e) => {
            setName(e.target.value.toLowerCase());
          }}
        ></input>
        <p>
          {store.doctor.map((obj, index) => {
            if (obj.namefirst.toLowerCase().includes(name) && name !== "") {
              return <li>{obj.namefirst}</li>;
            }
          })}
        </p>
      </>
      <>
        <input
          placeholder="Especialidad"
          className="me-1"
          onChange={(e) => {
            setExpert(e.target.value.toLowerCase());
          }}
        ></input>
        <p>
          {store.doctor.map((obj, index) => {
            if (obj.namelast.toLowerCase().includes(expert) && expert !== "") {
              return <li>{obj.namelast}</li>;
            }
          })}
        </p>
      </>
      <select
        onChange={(e) => {
          setRegion(e.target.value);
          console.log(region);
        }}
        id="regiones"
      >
        <option selected>Elija una region...</option>
        {store.regiones.map((obj, index) => {
          return <option key={index}>{obj.NombreRegion}</option>;
        })}
      </select>
      <select id="comunas">
        {store.regiones
          .filter((obj) => obj.NombreRegion == region)[0]
          ?.comunas.map((filteredRegion, i) => {
            return <option key={i}>{filteredRegion} </option>;
          })}
      </select>

      <button className="btn-primary">Buscar</button>

      {/* <div className="alert alert-info">
				{store.message || "Loading message from the backend (make sure your python backend is running)..."}
			</div> */}
    </div>
  );
};
