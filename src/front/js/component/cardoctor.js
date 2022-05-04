import React from "react";
import { Link } from "react-router-dom";
import "../../styles/home.css";

export const Cardoctor = () => {
  return (
    <Card className="cardoctor">
      <Card.Img
        className="imgcard"
        variant="top"
        src="https://i.pinimg.com/736x/d7/64/18/d76418f406971b8b0c02d158e159d920.jpg"
      />
      <Card.Body>
        <Card.Title>
          <h1>ESPECIALIDAD</h1>
        </Card.Title>
        <Card.Text>Medico Especialista en kkkkkk </Card.Text>
        <div className="d-flex align-items-center">
          <Link>
            <Button className="boton">Learn more!</Button>
          </Link>
          <Button className="showmore">x</Button>
        </div>
      </Card.Body>
    </Card>
  );
};
