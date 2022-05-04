import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Profile = () => {
  const { store, actions } = useContext(Context);

  return (
    <div>
      <h1>Profile</h1>
      <div>
        <div className="card" style="width: 18rem;">
          <img src="..." className="card-img-top" alt="..." />
          <div className="card-body">
            <a href="#" className="btn btn-primary">
              Upload Photo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
