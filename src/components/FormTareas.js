import React, { Fragment, useState } from "react";
import ListaTarea from "./ListaTarea";

const FormTareas = () => {
  //========= ZONA de logica de JS, antes del return()============

    // ...... creamos los STATE ........
    // creo state "Tareas" que es un arreglo, y setTareas es la funcion que actualizara las tareas
    // useState([]) inicializa el array vacio
    const [tareas, setTareas] = useState([]);
    // defino otro state que se llamará "tareaIndividual" que vaya tipeando, inicializo vacia
    const [tareaIndividual, setTareaIndividual] = useState("");
    
    //..... fin creación states ......

    // toma en e el objeto event. Hace funcion anonima para guardar la tarea que se ingresa. 
  // const guardarTarea = (e) => {
  //     // para ver el valor del input uso e.target.value
  //     console.log(e.target.value);
  //     // guardo dato en state tareaindividual
  //     setTareaIndividual(e.target.value);
  // }

    // cada vez que presiona agregar, detiene el evento e y ejecuta setTareas
    const handleSubmit = (e) => {
        e.preventDefault();
        // guardar una tarea en el arrelo de tareas
        // ... significa spread operator: toma el arreglo tareas, conserva lo qye tiene y le agrega la tarea individual al final
        setTareas([...tareas, tareaIndividual]);
        // limpiar input
        setTareaIndividual('');
    };

    return (
    <Fragment>
    //=========== aqui puedo escribir logia JS pero NO SE USA NORMALMENTE===========
    <div className="container d-flex justify-content-center">
        {/*======== codigo HTML (dentro de la primera etiqueta HTML: div) ===========*/}
        <form className="w-75 my-5" onSubmit={handleSubmit}>
            <div className="mb-3 d-flex">
                <input
                    type="text"
                    placeholder="Ingrese una tarea"
                    className="form-control"
                    // onChange={guardarTarea}
                    onChange={(e) => setTareaIndividual(e.target.value)}
                    value={tareaIndividual}
                />
                <button className="btn btn-outline-light" type="submit">
                    Agregar
                </button>
            </div>
        </form>
        {/* ========== fin codigo HTML ================================= */}
    </div>
    <section className='container w-75 my-5'>
        <ListaTarea></ListaTarea>
    </section>
    </Fragment>
    );
};

export default FormTareas;
