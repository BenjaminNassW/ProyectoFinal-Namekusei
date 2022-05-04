import React from "react";
import { Cardoctor } from "../component/cardoctor";

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
        <div className="cardkine">
          <div className="kine">KINESIOLOGOS</div>
          <div className="d-flex">
            <Cardoctor />
          </div>
        </div>
      </div>
    </div>
  );
};
