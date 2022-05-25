import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Link } from "react-router-dom";
import { Cardoctor } from "../component/cardoctor";

export const Home = () => {
  const { store, actions } = useContext(Context);
  const [name, setName] = useState("");
  const [expert, setExpert] = useState("");
  const [region, setRegion] = useState("");
  const [comuna, setComuna] = useState("");

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
      </>
      <>
        <input
          placeholder="Especialidad"
          className="me-1"
          onChange={(e) => {
            setExpert(e.target.value.toLowerCase());
          }}
        ></input>
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
      <select
        id="comunas"
        onChange={(e) => {
          setComuna(e.target.value.toLocaleLowerCase());
        }}
      >
        {store.regiones
          .filter((obj) => obj.NombreRegion == region)[0]
          ?.comunas.map((filteredRegion, i) => {
            return <option key={i}>{filteredRegion} </option>;
          })}
      </select>
      {name !== "" && (
        <div>
          <div className="cards">
            <div className="title1">Kinesiologo</div>
            <div className="d-flex doctor">
              {store.doctor.map((obj, index) => {
                if (obj.namefirst.toLowerCase().includes(name) && name !== "") {
                  return <Cardoctor key={index} obj={obj}></Cardoctor>;
                }
              })}
            </div>
          </div>
        </div>
      )}
      {expert !== "" && (
        <div>
          <div className="cards">
            <div className="title1">Kinesiologo</div>
            <div className="d-flex doctor">
              {store.doctor.map((obj, index) => {
                if (
                  obj.namelast.toLowerCase().includes(expert) &&
                  expert !== ""
                ) {
                  return <Cardoctor key={index} obj={obj}></Cardoctor>;
                }
              })}
            </div>
          </div>
        </div>
      )}
      {comuna !== "" && (
        <div>
          <div className="cards">
            <div className="title1">Kinesiologo</div>
            <div className="d-flex doctor">
              {store.doctor.map((obj, index) => {
                if (obj.city.toLowerCase().includes(comuna) && comuna !== "") {
                  return <Cardoctor key={index} obj={obj}></Cardoctor>;
                }
              })}
            </div>
          </div>
        </div>
      )}
      {/* <div className="alert alert-info">
				{store.message || "Loading message from the backend (make sure your python backend is running)..."}
			</div> */}
    </div>
  );
};
