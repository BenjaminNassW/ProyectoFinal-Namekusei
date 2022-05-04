import React from "react";
import { Cardoctor } from "../component/cardoctor";
import "../../styles/list.css";

export const List = () => {
  return (
    <div>
      <div className="text-center mt-5">
        <input placeholder="Especialista" className="me-1"></input>
        <input placeholder="Region" className="me-1"></input>
        <input placeholder="Comuna" className="me-1"></input>
        <button className="btn-primary">Buscar</button>
      </div>

      <div>
        <div className="cards">
          <div className="title1">Kinesiologo</div>
          <div className="d-flex doctor">
            <Cardoctor />
            <Cardoctor />
            <Cardoctor />
            <Cardoctor />
            <Cardoctor />
            <Cardoctor />
            <Cardoctor />
          </div>
        </div>
        <div className="cards">
          <div className="title">Terapeuta Ocupacional</div>
          <div className="d-flex doctor">
            <Cardoctor />
            <Cardoctor />
            <Cardoctor />
            <Cardoctor />
            <Cardoctor />
            <Cardoctor />
            <Cardoctor />
          </div>
        </div>
        <div className="cards">
          <div className="title">Dentista</div>
          <div className="d-flex doctor">
            <Cardoctor />
            <Cardoctor />
            <Cardoctor />
            <Cardoctor />
            <Cardoctor />
            <Cardoctor />
            <Cardoctor />
          </div>
        </div>
      </div>
    </div>
  );
};
