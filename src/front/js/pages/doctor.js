import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "../../styles/doctor.css";

import EvaluationModal from "../component/evaluationModal";
import Start from "../component/start";

export const Doctor = () => {
  const [rating, setRating] = useState([]);

  const saveRating = (start, mail, experience) => {
    console.log(rating, "STARTTT");
    const saveExperience = [
      ...(rating || []),
      { valoracion: start, correo: mail, experiencia: experience },
    ];
    console.log("");
    localStorage.setItem("experiencias", JSON.stringify(saveExperience));
    setRating(saveExperience);
  };
  const traerExperiencia = () => {
    const getExperience = JSON.parse(localStorage.getItem("experiencias"));
    setRating(getExperience);
  };

  useEffect(() => {
    traerExperiencia();
  }, []);

  return (
    <div>
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
                <div className="listExperience">
                  {rating?.map((e, i) => {
                    let star = [];
                    for (i = 1; i <= e.valoracion; i++) {
                      star.push(
                        <svg
                          className="iconstar"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 576 512"
                        >
                          <path d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z" />
                        </svg>
                      );
                    }

                    return (
                      <div className="usuario">
                        <p>{e.experiencia}</p>
                        <h4>{e.correo}</h4>
                        <h5>{star}</h5>
                      </div>
                    );
                  })}
                </div>
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
