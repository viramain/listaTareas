import React from 'react';

const Subtitulo = (props) => {
    return (
        <div>
            <h3 className="text-center text-light">Tareas de la Comisión {props.comision}</h3>
        </div>
    );
};

export default Subtitulo;