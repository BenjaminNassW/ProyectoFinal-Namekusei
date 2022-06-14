import React, { useContext } from "react";
import { Context } from "../store/appContext";

import "../../styles/home.css";

export const Info = () => {
  const { store, actions } = useContext(Context);

  return (
    <>
      <div className="container d-flex fondo">
        <p className="col-6 ">
          TuDoc Busca ser la herramienta tecnológica que ayude al sistema de
          salud Chileno ser el más rápido, eficiente y confiable. Nuestra
          plataforma busca conectar a todos los agentes involucrados en elsector
          salud: médicos, pacientes, centros clínicos, hospitales, centros de
          imagen, farmacias, centros odontológicos, consultorios y salas de
          operación.
        </p>
        <div className="col-6 foto">
          <img
            className="foto"
            src="https://www.tudoc.pe/src1/img/Capa1.png"
          ></img>
        </div>
      </div>
    </>
  );
};
