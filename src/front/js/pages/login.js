import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import { Button } from "react-bootstrap";

export const Login = () => {
  const { store, actions } = useContext(Context);
  const responseGoogle = (response) => {
    console.log(response, "kim");
  };
  const logout = (response) => {
    console.log(response);
  };
  return (
    <form
      method="GET"
      action="{{ url_for('search') }}"
      className="mx-auto mt-5 d-flex flex-column w-25"
    >
      <h1 className="text-center ">Iniciar Sesión</h1>
      <p className="m-0">Correo Electronico</p>

      <input name="useremail" placeholder="" className=""></input>
      <p className="m-0">Contraseña</p>
      <input name="userpassword" placeholder="" className="mb-4"></input>
      <Button className="btn-success m-1">Ingresar</Button>
      <GoogleLogin
        clientId="168338559656-ic0itsdjcsmq4ltaiu302ueeqal6ulth.apps.googleusercontent.com"
        buttonText="Iniciar con Google"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
      />
      <GoogleLogout
        clientId="168338559656-ic0itsdjcsmq4ltaiu302ueeqal6ulth.apps.googleusercontent.com"
        buttonText="Logout"
        onLogoutSuccess={true}
      ></GoogleLogout>
    </form>
  );
};
