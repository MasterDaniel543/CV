// App.js
import React, { useEffect } from 'react';
import './styles/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Perfil from './components/Perfil';
import Experiencia from './components/Experiencia';
import Educacion from './components/Educacion';
import Herramientas from './components/Herramientas';
import Idiomas from './components/Idiomas';
import Contacto from './components/Contacto';
import Objetivo from './components/Objetivo';

function App(){
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      mirror: false
    });
  }, []);

  return (
    <div className='cv-container'>
      <div className='columna-izquierda' data-aos="fade-right">
        <h1 className='nombre'>
          Daniel Esparza
        </h1>
        <Perfil />
        <Contacto />
        <Objetivo />
      </div>
      <div className='columna-derecha' data-aos="fade-left">
        <Experiencia />
        <Educacion />
        <Herramientas />
        <Idiomas />
      </div>
    </div> 
  );
}

export default App;