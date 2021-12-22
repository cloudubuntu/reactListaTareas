import React, {useState} from "react";
// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';

//modo en una sola linea
import {Form, Button} from 'react-bootstrap';
import ListaTareas from "./ListaTareas";




const FormTareas = () => {
    //uso los useState
    //sintaxis especifica, constante, corchetes, primer valor nombre, segundo valor funcion para modificar el state
    const [listaTareas, setListaTareas]=useState([]);
    const [tarea, setTarea]=useState('');
    const handleSubmit=(e)=>{
      e.preventDefault();
      //guardar el contenido stateTarea dentro de listaTareas[]
      //operador spread = ... desarmar un array, copia su contenido y agrega el que le indiquemos
      setListaTareas([...listaTareas, tarea])
      //limpiar el imput
      setTarea('');
    }
    const borrarTarea=(nombreTarea)=>{
      //filtramos el state quitando el elemento que queremos borrar
      let arrayMod=listaTareas.filter((valor)=>valor !== nombreTarea);
      //modificamos el state
      setListaTareas(arrayMod);
    }
  return (
    <div className="container">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3 d-flex">
          {/* agrego el evento con onChange, e.target=obtengo el input del html */}
          <Form.Control type="text" placeholder="Ingrese una tarea" onChange={(e)=>{console.log(setTarea(e.target.value.trimStart()))}} /*aqui enlazo el value con el state tarea*/value={tarea}/>
          <Button variant="dark" type="submit" className="ms-2">
          Agregar
        </Button>
        </Form.Group>        
      </Form>
      {/* envio el array listaTareas mediante un props (arrayTareas) al componente ListaTareas */}
      <ListaTareas arrayTareas={listaTareas} borrarTarea={borrarTarea}></ListaTareas>
    </div>
  );
};

export default FormTareas;
