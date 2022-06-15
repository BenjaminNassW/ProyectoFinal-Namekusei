import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import DatePicker from "react-datepicker";
import "../../styles/home.css";
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";
import "react-datepicker/dist/react-datepicker.css";
import "react-datepicker/dist/react-datepicker-cssmodules.css";
import { send } from "emailjs-com";

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
    console.log(toSend);
  }, [toSend]);

  const [toSend, setToSend] = useState({
    from_name: "",
    to_name: "",
    message: "",
    reply_to: "",
  });

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <div className="container">
      <h1>Datos Personales</h1>

      <form
        className="row g-3"
        onSubmit={(e) => {
          e.preventDefault();
          console.log(toSend.message);
          actions.saveUser(dataForm);
          setPrueba(!prueba);
          send(
            "service_2orrfoo",
            "template_wk7phvr",
            toSend,
            "hpQzpSnB31E6JQvrA"
          )
            .then((response) => {
              console.log("SUCCESS!", response.status, response.text);
            })
            .catch((err) => {
              console.log("FAILED...", err);
            });
        }}
      >
        <div className="col-md-6">
          <label htmlFor="inputEmail4" className="form-label">
            Nombre
          </label>
          <input
            onChange={(e) => {
              onChange(e);
              setToSend({ ...toSend, [e.target.name]: e.target.value });
            }}
            name="from_name"
            type="text"
            value={toSend.from_name}
            className="form-control"
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
              setToSend({ ...toSend, [e.target.name]: e.target.value });
            }}
            name="to_name"
            type="text"
            className="form-control"
            id="inputPassword4"
            placeholder="Rojas"
            value={toSend.to_name}
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
            name="Telefono"
            type="text"
            className="form-control"
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
              setToSend({ ...toSend, [e.target.name]: e.target.value });
            }}
            name="reply_to"
            type="text"
            value={toSend.reply_to}
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
            name="Ciudad"
            type="text"
            className="form-control"
            id="inputCity"
            placeholder="Santiago"
          />
        </div>
        <div className="col-md-3">
          <label htmlFor="inputCity" className="form-label">
            Comuna
          </label>
          <input
            onChange={(e) => {
              onChange(e);
            }}
            name="Comuna"
            type="text"
            className="form-control"
            id="inputCity"
            placeholder="Macul"
          />
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
              setToSend({ ...toSend, ["message"]: JSON.stringify(dataForm) });
            }}
            name="Direccion"
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
