import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { useForm } from "react-hook-form";

export const Profile = () => {
  const { store, actions } = useContext(Context);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <>
      <h1 className="container">Profile</h1>
      <div className="container d-flex">
        <div className="card me-5" style={{ width: "18rem" }}>
          <img
            src="https://picsum.photos/200"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <a href="#" className="btn btn-primary">
              Upload Photo
            </a>
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            placeholder="Nombre"
            {...register("Nombre", { required: true, maxLength: 80 })}
          />
          <input
            type="text"
            placeholder="Apellido"
            {...register("Apellido", { required: true, maxLength: 100 })}
          />
          <input
            type="text"
            placeholder="Email"
            {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
          />
          <input
            type="tel"
            placeholder="Telefono"
            {...register("Telefono", { required: true, maxLength: 12 })}
          />
          <input
            type="text"
            placeholder="Titulo"
            {...register("Titulo", { required: true })}
          />
          <input
            type="text"
            placeholder="Especialidad"
            {...register("Especialidad", { required: true, maxLength: 101 })}
          />

          <input type="submit" />
        </form>
      </div>
    </>
  );
};
