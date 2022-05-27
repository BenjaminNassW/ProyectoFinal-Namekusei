import React from "react";
import { Link } from "react-router-dom";
import "../../styles/list.css";
import { Card, Button } from "react-bootstrap";

export const Cardoctor = (props) => {
  return (
    <Card className="cardoctor1">
      <Card.Img
        className="imgcard"
        variant="top"
        src="https://st.depositphotos.com/1518767/4293/i/950/depositphotos_42930187-stock-photo-smiling-male-doctor-with-arms.jpg"
      />
      <Card.Body>
        <Card.Title>
          <h1 className="title"></h1>
        </Card.Title>

        <Card.Text>Medico Especialista en {props.obj?.especialidad} </Card.Text>

        <Card.Text>
          {props.obj?.namefirst} {props.obj?.namelast}
        </Card.Text>
        <div className="d-flex">
          <Link to={"/doctor/" + props.obj?.id}>
            <Button className="book">Booking</Button>
          </Link>
        </div>
      </Card.Body>
    </Card>
  );
};
