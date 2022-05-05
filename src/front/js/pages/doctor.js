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
      <div className="profile">
        <div className="image"></div>
        <div className="description d-flex">
          <img
            className="img"
            src="https://i.pinimg.com/474x/9a/c3/73/9ac3737b869483f4e682712dc5d3c313--hospitals-doctors.jpg"
          ></img>
          <h1>Maria</h1>
        </div>
      </div>
    </div>
  );
};
