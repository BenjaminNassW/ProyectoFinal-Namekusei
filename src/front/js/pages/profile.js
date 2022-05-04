import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Profile = () => {
  const { store, actions } = useContext(Context);

  return (
    <>
      <h1 className="container">Profile</h1>
      <div className="container d-flex">
        <div className="card me-5" style={{ width: "18rem" }}>
          <img
            src="https://picsum.photos/200"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <a href="#" className="btn btn-primary">
              Upload Photo
            </a>
          </div>
        </div>

        <div className="d-flex flex-column col-6 ">
          <p className="m-0">Nombre</p>
          <input placeholder="" className=""></input>
          <p className="m-0">Apellido</p>
          <input placeholder="" className=""></input>
          <p className="m-0">E-mail</p>
          <input placeholder="" className=""></input>
          <p className="m-0">Nombre Institucion</p>
          <input placeholder="" className=""></input>
          <p className="m-0">Titulo profesional</p>
          <input placeholder="" className=""></input>
          <p className="m-0">Especialidad</p>
          <input placeholder="" className="mb-4"></input>

          <button className="btn-primary">Guardar cambios</button>
        </div>
      </div>
    </>
  );
};
