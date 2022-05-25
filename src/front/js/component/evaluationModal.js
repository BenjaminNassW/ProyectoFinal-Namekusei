import { useState } from "react";
import React from "react";
import { Modal, Button, Form } from "react-bootstrap";
import Start from "../component/start";
import "../../styles/start.css";

export default function EvaluationModal({ saveRating }) {
  const [show, setShow] = useState(false);
  const [ranking, setRank] = useState(0);
  const [mail, setMail] = useState("");
  const [experiense, setExperiense] = useState("");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Evalua tu atención
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Valora al expecialista</Modal.Title>
        </Modal.Header>
        <Start ranking={ranking} setRank={setRank} />
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>
                Ingresa el Correo con el que agendaste la hora
              </Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
                onChange={(e) => {
                  setMail(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>
                Cuentanos sobre tu experiencia con el Medico...
              </Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                onChange={(e) => {
                  setExperiense(e.target.value);
                }}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              saveRating(ranking, mail, experiense);

              handleClose();
            }}
          >
            Guardar Valoración
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}