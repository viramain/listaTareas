import React from 'react';
import ItemTarea from './ItemTarea';

const ListaTarea = (props) => {
    return (
        <ul className="list-group">
            {/* para escribir codigo JS va entre {} */}
            {
                // MAP recorre cada elem del arreglo y llama a la funcion ItemTarea, para armar la lista de tareas
                // key hace que cada componente ItemTarea sea unico
                props.arregloTareas.map((valor,indice)=><ItemTarea key={indice} dato={valor}></ItemTarea>)
            }
        </ul>
    );
};

export default ListaTarea;