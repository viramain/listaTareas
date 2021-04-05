
import { Fragment } from 'react';
import './App.css';
import Subtitulo from './components/Subtitulo';
import Titulo from './components/Titulo';
import "bootstrap/dist/css/bootstrap.min.css";
import FormTareas from "./components/FormTareas";

function App() {
    return (
        <Fragment>
            <Titulo prueba={false}></Titulo>
            <Subtitulo comision="1A" estado={true}/>
            <FormTareas></FormTareas>
        </Fragment>
    );
}

export default App;