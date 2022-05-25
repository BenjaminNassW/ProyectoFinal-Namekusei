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
  const [prueba, setPrueba] = useState(true);
  const [dataForm, setdataForm] = useState({
    date: setHours(setMinutes(new Date(), 30), 16),
  });
  const onChange = (e) => {
    setdataForm({
      ...dataForm,
      [e.target.name]: e.target.value,
    });
  };
  useEffect(() => {
    console.log(store.user);
  }, [prueba]);
  return (
    <div className="container">
      <h1>Datos Personales</h1>

      <form
        className="row g-3"
        onSubmit={(e) => {
          e.preventDefault();
          actions.saveUser(dataForm);
          setPrueba(!prueba);
          console.log(store.user);
        }}
      >
        <div className="col-md-6">
          <label htmlFor="inputEmail4" className="form-label">
            Nombre
          </label>
          <input
            onChange={(e) => {
              onChange(e);
            }}
            name="name"
            type="text"
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
            onChange={(e) => {
              onChange(e);
            }}
            name="lastname"
            type="text"
            className="form-control"
            id="inputPassword4"
            placeholder="Rojas"
          />
        </div>
        <div className="col-6">
          <label htmlFor="phone" className="form-label">
            Telefono
          </label>
          <input
            onChange={(e) => {
              onChange(e);
            }}
            name="telefono"
            type="text"
            className="form-control"
            id="phone"
            placeholder="+569 98366xxxx"
          />
        </div>
        <div className="col-6">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            onChange={(e) => {
              onChange(e);
            }}
            name="email"
            type="text"
            className="form-control"
            id="email"
            placeholder="usuario@gmail.com"
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputCity" className="form-label">
            Ciudad
          </label>
          <input
            onChange={(e) => {
              onChange(e);
            }}
            name="city"
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
          <select
            name="Comuna"
            onChange={(e) => {
              onChange(e);
            }}
            id="inputState"
            className="form-select"
          >
            <option name="Comuna" selected>
              Elige...
            </option>
            <option name="prueba1">prueba1</option>
            <option name="prueba2">prueba2</option>
            <option name="prueba3">prueba3</option>
          </select>
        </div>
        <div className="col-md-2">
          <label htmlFor="inputZip" className="form-label">
            Fecha
          </label>
          <DatePicker
            selected={dataForm.date}
            onChange={(date) => setdataForm({ ...dataForm, date: date })}
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
            onChange={(e) => {
              onChange(e);
            }}
            name="Adress"
            type="text"
            className="form-control"
            id="inputAddress"
            placeholder="Irarrazaval 1300, dpto 123"
          />
        </div>

        <div className="col-12">
          <button type="submit" className="btn btn-primary">
            Agendar
          </button>
        </div>
      </form>
    </div>
  );
};
