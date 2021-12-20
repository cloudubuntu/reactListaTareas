// functional components

import React from 'react';

const Subtitulo = (props) => {
    //aqui se agrega la logica deseada
    return (

        //aqui va todo el maquetado y algo de logica
        <div>
            <h3 className='text-center'>Tareas de la comision {props.comision}</h3>
        </div>
    );
};

export default Subtitulo;