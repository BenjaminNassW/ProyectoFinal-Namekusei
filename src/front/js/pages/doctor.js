import { Button } from "bootstrap";
import React from "react";
import "../../styles/doctor.css";

export const Doctor = () => {
  return (
    <div>
      <div className="text-center m-5">
        <input placeholder="Especialista" className="me-1"></input>
        <input placeholder="Region" className="me-1"></input>
        <input placeholder="Comuna" className="me-1"></input>
        <button className="btn-primary">Buscar</button>
      </div>
      <div className="profile container">
        <div className="description d-flex col-6">
          <img
            className="img d-flex"
            src="https://i.pinimg.com/474x/9a/c3/73/9ac3737b869483f4e682712dc5d3c313--hospitals-doctors.jpg"
          ></img>

          <div className="ui-review-view__rating__summary__rating">
            <h2>Maria Silva</h2>
            <h4>Especialista Veterinaria</h4>
            <div>Valor consulta</div>
            <div>Atención presencial en Comuna, Region</div>
            <svg
              className="ui-review-view__rating__summary__rating__star"
              aria-hidden="true"
              width="16.8"
              height="16"
              viewBox="0 0 10 10"
            >
              <path
                fill="#3483FA"
                fill-rule="evenodd"
                d="M5.056 8L1.931 9.648l.597-3.49L0 3.684l3.494-.509L5.056 0l1.562 3.176 3.494.51-2.528 2.471.597 3.491z"
              ></path>
            </svg>
            <svg
              className="ui-review-view__rating__summary__rating__star"
              aria-hidden="true"
              width="16.8"
              height="16"
              viewBox="0 0 10 10"
            >
              <path
                fill="#3483FA"
                fill-rule="evenodd"
                d="M5.056 8L1.931 9.648l.597-3.49L0 3.684l3.494-.509L5.056 0l1.562 3.176 3.494.51-2.528 2.471.597 3.491z"
              ></path>
            </svg>
            <svg
              className="ui-review-view__rating__summary__rating__star"
              aria-hidden="true"
              width="16.8"
              height="16"
              viewBox="0 0 10 10"
            >
              <path
                fill="#3483FA"
                fill-rule="evenodd"
                d="M5.056 8L1.931 9.648l.597-3.49L0 3.684l3.494-.509L5.056 0l1.562 3.176 3.494.51-2.528 2.471.597 3.491z"
              ></path>
            </svg>
            <svg
              className="ui-review-view__rating__summary__rating__star"
              aria-hidden="true"
              width="16.8"
              height="16"
              viewBox="0 0 10 10"
            >
              <path
                fill="#3483FA"
                fill-rule="evenodd"
                d="M5.056 8L1.931 9.648l.597-3.49L0 3.684l3.494-.509L5.056 0l1.562 3.176 3.494.51-2.528 2.471.597 3.491z"
              ></path>
            </svg>
            <svg
              aria-hidden="true"
              className="ui-review-view__rating__summary__rating__star"
              width="16.8"
              height="16"
              viewBox="0 0 10 10"
            >
              <g fill="none" fill-rule="evenodd">
                <path
                  fill="#EFEFEF"
                  d="M5.256 8L2.131 9.648l.597-3.49L.2 3.684l3.494-.509L5.256 0l1.562 3.176 3.494.51-2.528 2.471.597 3.491z"
                ></path>
                <path
                  fill="#3483FA"
                  d="M5.272 8.026L2.137 9.679l.6-3.502L.2 3.697l3.505-.51L5.272 0z"
                ></path>
              </g>
            </svg>
            <label className="andes-visually-hidden">4.5</label>
            <br></br>
            <button className="btn btn-primary me-1 m-2">
              Reserva tu hora
            </button>

            <button className="btn btn-primary me-1 m-2 ">
              Evalua tu atención
            </button>
          </div>
        </div>

        <div className="col-6 experiencia">
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
            - Retina Quirúrgica - Retina Médica - Cirugía Refractiva - Catarata
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
            Glaucoma - Conjuntivitis - Infecciones de los ojos - Enfermedades de
            los ojos - Errores de refracción - Enfermedades de la retina
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
  );
};
