import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import DatePicker from "react-datepicker";
import "../../styles/home.css";
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";
import "react-datepicker/dist/react-datepicker.css";
import "react-datepicker/dist/react-datepicker-cssmodules.css";
export const Booking = () => {
  const { store, actions } = useContext(Context);

  const [startDate, setStartDate] = useState(
    setHours(setMinutes(new Date(), 30), 16)
  );
  return (
    <div className="container">
      <h1>Datos Personales</h1>

      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        showTimeSelect
        excludeTimes={[
          setHours(setMinutes(new Date(), 0), 17),
          setHours(setMinutes(new Date(), 30), 18),
          setHours(setMinutes(new Date(), 30), 19),
          setHours(setMinutes(new Date(), 30), 17),
        ]}
        dateFormat="MMMM d, yyyy h:mm aa"
      />
      <form className="row g-3">
        <div className="col-md-6">
          <label htmlFor="inputEmail4" className="form-label">
            Nombre
          </label>
          <input
            type="email"
            className="form-control"
            id="inputEmail4"
            placeholder="Benjamin"
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputPassword4" className="form-label">
            Apellido
          </label>
          <input
            type="name"
            className="form-control"
            id="inputPassword4"
            placeholder="Rojas"
          />
        </div>
        <div className="col-12">
          <label htmlFor="inputAddress2" className="form-label">
            Telefono
          </label>
          <input
            type="text"
            className="form-control"
            id="phone"
            placeholder="+569 98366xxxx"
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputCity" className="form-label">
            Ciudad
          </label>
          <input
            type="text"
            className="form-control"
            id="inputCity"
            placeholder="Santiago"
          />
        </div>
        <div className="col-md-4">
          <label htmlFor="inputState" className="form-label">
            Comuna
          </label>
          <select id="inputState" className="form-select">
            <option selected>Elige...</option>
            <option>...</option>
          </select>
        </div>
        <div className="col-md-2">
          <label htmlFor="inputZip" className="form-label">
            Fecha
          </label>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            showTimeSelect
            excludeTimes={[
              setHours(setMinutes(new Date(), 0), 17),
              setHours(setMinutes(new Date(), 30), 18),
              setHours(setMinutes(new Date(), 30), 19),
              setHours(setMinutes(new Date(), 30), 17),
            ]}
            dateFormat="MMMM d, yyyy h:mm aa"
          />
        </div>
        <div className="col-12">
          <label htmlFor="inputAddress" className="form-label">
            Direccion
          </label>
          <input
            type="text"
            className="form-control"
            id="inputAddress"
            placeholder="Irarrazaval 1300, dpto 123"
          />
        </div>
        <div className="col-12">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="gridCheck"
            />
            <label className="form-check-label" htmlFor="gridCheck">
              Check me out
            </label>
          </div>
        </div>
        <div className="col-12">
          <button
            type="submit"
            className="btn btn-primary"
            onClick={() => {
              alert("Tu hora ha sido agendada correctamente");
            }}
          >
            Agendar
          </button>
        </div>
      </form>
    </div>
  );
};
