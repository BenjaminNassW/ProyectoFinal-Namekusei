import React, { useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "../../styles/doctor.css";

import EvaluationModal from "../component/evaluationModal";

export const Doctor = () => {
  const [rating, setRating] = useState([]);
  const saveRating = (start, mail, experiencia) => {
    setRating([...rating, { valoracion: start }]);
  };
  console.log(rating);
  return (
    <div>
      <div className="text-center m-5 ">
        <input placeholder="Especialista" className="me-1"></input>
        <input placeholder="Region" className="me-1"></input>
        <input placeholder="Comuna" className="me-1"></input>
        <button className="btn-primary">Buscar</button>
      </div>
      <div className="profile container">
        <div className="row">
          <div className="description col-lg-5 col-sm-11 ">
            <img
              className="img"
              src="https://i.pinimg.com/474x/9a/c3/73/9ac3737b869483f4e682712dc5d3c313--hospitals-doctors.jpg"
            ></img>

            <div className="ui-review-view__rating__summary__rating">
              <h2>Maria Silva</h2>
              <h4>Especialista Veterinaria</h4>
              <div>Valor consulta</div>
              <div>Atención presencial en Comuna, Region</div>
              <Link to="/booking">
                <button className="btn btn-primary me-1 m-2">
                  Reserva tu hora
                </button>
              </Link>

              <EvaluationModal saveRating={saveRating} />
              <div className="valoracion">
                <div className="usuario">estrellitas</div>
              </div>
            </div>
          </div>

          <div className="experiencia col-lg-6 col-sm-11 ">
            <h2>Experiencia</h2>
            <h5>
              <img
                src="https://cdn-icons-png.flaticon.com/512/7054/7054163.png"
                className="icono2"
              ></img>
              Sobre mí
            </h5>
            <p>
              Centro Oftamológico Dr. Patricio Gómez Toledo Brindamos atención a
              recién nacidos, adultos y urgencias con Servicios de Oculista,
              Receta de Lentes Computarizada, Microcirugía, Cirugía de Catarata,
              Glaucoma, Cirugía Refractiva, Especialista en Retina,
              Desprendimiento de Retina, Retinopatía Diabética, Trombosis.
            </p>
            <h5>
              <img
                src="https://cdn-icons-png.flaticon.com/512/2793/2793594.png"
                className="icono2"
              ></img>
              Especialista en:
            </h5>
            <p>
              - Retina Quirúrgica - Retina Médica - Cirugía Refractiva -
              Catarata
            </p>
            <h5>
              <img
                src="https://cdn-icons-png.flaticon.com/512/2464/2464568.png"
                className="icono2"
              ></img>
              Enfermemades tratadas
            </h5>
            <p>
              - Miopía - Cataratas - Astigmatismo - Presbicia - Hipermetropía -
              Glaucoma - Conjuntivitis - Infecciones de los ojos - Enfermedades
              de los ojos - Errores de refracción - Enfermedades de la retina
            </p>
            <h5>
              <img
                src="https://cdn-icons-png.flaticon.com/512/943/943398.png"
                className="icono2"
              ></img>
              Formación
            </h5>
            <p>Medico Cirujano Oftalmologo, Universidad Valparaiso, 1996</p>
          </div>
        </div>
      </div>
    </div>
  );
};
