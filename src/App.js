import { useState } from 'react';
import './App.css';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import freeCodeCampLogo from './imagenes/freeCodeCamp-logo.png'

function App() {

  const [numClics, setNumclics] = useState(0);

  const manejarClic = ()=>{
    setNumclics(numClics + 1);
    //console.log("Clic");
  };
  
  const reiniciarContador = () =>{
    setNumclics(0);
    //console.log("Reiniciar");
  };

  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>
      <img className='freecodecamp-logo' src={freeCodeCampLogo} alt="Logo de freeCodeCamp" />
      <div className='contenedor-pricipal'>
        <Contador numClics={numClics} />
        <Boton 
          texto='Clic'
          esBotonDeClic={true}
          manejarClic={manejarClic}
        />
        <Boton
          texto='reiniciar'
          esBotonDeClic={false}
          manejarClic={reiniciarContador}
        />
      </div>
      </div>
      
    </div>
  );
}

export default App;
