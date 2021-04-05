import React, { Component } from 'react';

class Titulo extends Component {
    // render() va SIEMPRE porque renderiza los cambios en pantalla. Dice retornar la porcion de codigo dentro del return
    render() {
        return (
            <div>
                <h1 className="display-4 text-center text-light my-5">Lista de Tareas</h1>  
            </div>
        );
    }
}

export default Titulo