import React from "react";
// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';

//modo en una sola linea
import {Form, Button} from 'react-bootstrap';
import ListaTareas from "./ListaTareas";




const FormTareas = () => {
  return (
    <div className="container">
      <Form>
        <Form.Group className="mb-3 d-flex">
          <Form.Control type="text" placeholder="Ingrese una tarea" />
          <Button variant="dark" type="submit" className="mx-2">
          Agregar
        </Button>
        </Form.Group>        
      </Form>
      <ListaTareas></ListaTareas>
    </div>
  );
};

export default FormTareas;
