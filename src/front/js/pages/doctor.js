import React from "react";
import "../../styles/doctor.css";

export const Doctor = () => {
  return (
    <div>
      <div className="text-center mt-5">
        <input placeholder="Especialista" className="me-1"></input>
        <input placeholder="Region" className="me-1"></input>
        <input placeholder="Comuna" className="me-1"></input>
        <button className="btn-primary">Buscar</button>
      </div>
    </div>
  );
};
