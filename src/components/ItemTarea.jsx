import React from "react";
import { ListGroup, Button } from "react-bootstrap";


const ItemTarea = (props) => {
  return (
    <div>
      <ListGroup.Item className="d-flex justify-content-between">{props.itemTarea} <Button type="button" variant="dark" onClick={()=>{props.borrarTarea(props.itemTarea)}}>Borrar</Button></ListGroup.Item>      
    </div>
  );
};

export default ItemTarea;
