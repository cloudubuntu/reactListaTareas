import React from "react";
import {ListGroup} from 'react-bootstrap';
import ItemTarea from "./ItemTarea";

const ListaTareas = (props) => {
  return (
    <div>
      <ListGroup>  
        {/* el meto map */}
        {
         
          props.arrayTareas.map((valor, posicion)=><ItemTarea key={posicion} itemTarea={valor} borrarTarea={props.borrarTarea}></ItemTarea>)

        }      
        
      </ListGroup>
    </div>
  );
};

export default ListaTareas;
