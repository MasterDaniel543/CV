// App.js
import React from 'react';
import './styles/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Perfil from './components/Perfil';
import Experiencia from './components/Experiencia';
import Educacion from './components/Educacion';
import Herramientas from './components/Herramientas';
import Idiomas from './components/Idiomas';
import Contacto from './components/Contacto';
import Objetivo from './components/Objetivo';


function App(){
  return (
    <div className='cv-container'>
      <div className='columna-izquierda'>
        <h1 className='nombre'>
          Diego Daniel Jiménez Esparza
        </h1>
        <Perfil />
        <Contacto />
        <Objetivo />
      </div>
      <div className='columna-derecha'>
        <Experiencia />
        <Educacion />
        <Herramientas />
        <Idiomas />
      </div>
    </div> 
  );
}

export default App;