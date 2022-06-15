import { Link } from "react-router-dom";
import "../../styles/list.css";
import { Card, Button, Spinner } from "react-bootstrap";
import React, { useEffect, useState } from "react";

export const Cardoctor = (props) => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      `https://api.unsplash.com/photos/${props.obj?.id}?client_id=hoZ2vmRiPx_2Q9APlaD0Ck9Z9d1Z8eSo8AUSVsn0eqs`
    )
      .then((response) => response.json())
      .then((json) => {
        setPhotos(json.urls.raw);
        setLoading(false);
      });
  }, []);

  return (
    <Card className="cardoctor1">
      {loading === true ? (
        <Spinner animation="border" variant="success" />
      ) : (
        <Card.Img className="imgcard" variant="top" src={photos} />
      )}
      <Card.Body>
        <Card.Title>
          <h1 className="title"></h1>
        </Card.Title>

        <Card.Text>Medico Especialista en {props.obj?.especialidad} </Card.Text>

        <Card.Text>
          {props.obj?.namefirst} {props.obj?.namelast}
        </Card.Text>
        <div className="doctor1">
          <Link to={"/doctor/" + props.obj?.id}>
            <button
              className="book btn btn-success
            "
            >
              Leer más
            </button>
          </Link>
        </div>
      </Card.Body>
    </Card>
  );
};
