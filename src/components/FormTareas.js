import React, { Fragment, useState, useEffect} from "react";
import ListaTarea from "./ListaTarea";

const FormTareas = () => {
  //========= ZONA de logica de JS, antes del return()============
  //---- definicion de variables
    let tareasLocalStorage = JSON.parse(localStorage.getItem('arregloTareas'));
    if(!tareasLocalStorage){
        tareasLocalStorage=[];
    }

    // ...... creamos los STATE ........
    // creo state "Tareas" que es un arreglo, y setTareas es la funcion que actualizara las tareas
    const [tareas, setTareas] = useState(tareasLocalStorage);
    // defino otro state que se llamará "tareaIndividual" que vaya tipeando, inicializo vacia
    const [tareaIndividual, setTareaIndividual] = useState("");

    //---- CICLO DE VIDA otro hock: useEfect ----
    useEffect(()=>{
        // aqui va la logica que quiero ejecutar en montaje y actualizacion
        console.log("ejecutando el ciclo del vida")
        localStorage.setItem('arregloTareas',JSON.stringify(tareas));
    },[tareas]);

    
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

    const borrarTarea = (nombre) =>{
        // nombre tiene la tarea que quiero borrar
        let arregloModificado = tareas.filter((dato)=>dato!==nombre);
        setTareas(arregloModificado);
    }

    return (
        /* =========== aqui puedo escribir logia JS pero NO SE USA NORMALMENTE=========== */
    <Fragment>
    
    <section className="container d-flex justify-content-center">
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
    </section>
    <section className='container w-75 my-5'>
        {/* arregloTareas es el props */}
        <ListaTarea arregloTareas={tareas} borrarTarea={borrarTarea}></ListaTarea>
    </section>
    </Fragment>
    );
};

export default FormTareas;
