import React from "react";
import {ListGroup} from 'react-bootstrap';
import ItemTarea from "./ItemTarea";

const ListaTareas = () => {
  return (
    <div>
      <ListGroup>
        <ListGroup.Item>Cras justo odio</ListGroup.Item>
        <ItemTarea></ItemTarea>
      </ListGroup>
    </div>
  );
};

export default ListaTareas;
