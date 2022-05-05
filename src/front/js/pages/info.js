import React, { useContext } from "react";
import { Context } from "../store/appContext";

import "../../styles/home.css";

export const Info = () => {
  const { store, actions } = useContext(Context);

  return (
    <>
      <div className="container d-flex">
        <div className="col-6 mt-1">
          <h1>Que Hacemos</h1>
          <p className="pe-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Porttitor lacus luctus accumsan tortor. Arcu dui vivamus arcu felis
            bibendum. Nisl condimentum id venenatis a condimentum vitae sapien
            pellentesque habitant. Aliquam nulla facilisi cras fermentum odio.
            Vel turpis nunc eget lorem dolor sed viverra ipsum nunc. Nunc id
            cursus metus aliquam eleifend mi in nulla. Integer malesuada nunc
            vel risus commodo viverra maecenas. Velit egestas dui id ornare arcu
            odio ut sem nulla. Lorem ipsum dolor sit amet consectetur adipiscing
            elit pellentesque. At tellus at urna condimentum mattis
            pellentesque. Quis viverra nibh cras pulvinar mattis nunc sed
            blandit libero. Nisi vitae suscipit tellus mauris a diam maecenas
            sed. Ut tristique et egestas quis ipsum suspendisse ultrices gravida
            dictum. Nullam vehicula ipsum a arcu.
          </p>
        </div>
        <div className="col-6 mt-3">
          <img
            className="img-fluid"
            src="https://media.gettyimages.com/photos/doctor-consulting-her-patient-picture-id941446382"
          ></img>
        </div>
      </div>
    </>
  );
};
