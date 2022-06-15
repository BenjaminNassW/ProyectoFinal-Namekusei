import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import ReactDOM from "react-dom";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import { Button } from "react-bootstrap";

export const Signup = () => {
  const { store, actions } = useContext(Context);
  const responseGoogle = (response) => {};

  return (
    <div className="container col-4">
      <form method="post" action="{{ url_for('signup') }}">
        <h1 className="mt-2 text-center">Crear Cuenta</h1>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Correo Electronico
          </label>
          <input
            name="email"
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Contraseña
          </label>
          <input
            name="password"
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div class="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" for="exampleCheck1">
            Guardar
          </label>
        </div>
        <Button className="btn-success m-1 text-center">Crear Cuenta</Button>

        <GoogleLogin
          className="m-1"
          clientId="168338559656-ic0itsdjcsmq4ltaiu302ueeqal6ulth.apps.googleusercontent.com"
          buttonText="Crear cuenta con Google"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={"single_host_origin"}
        />
      </form>
    </div>
  );
};
