import { useState } from 'react'
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import Resumen from "./components/Resumen";
import Resultado from "./components/Resultado";
import Spinner from "./components/Spinner";

import styled from '@emotion/styled'

const Contenedor = styled.div`
  max-width: 600px;
  margin: 0 auto;
`

const ContenedorFormulario = styled.div`
    background-color: #89fc06; 
    padding: 3rem;
    color: #000000;
`

function App() {

  const [resumen, guardarResumen] = useState({

    cotizacion: 0,
    datos: {
      estilo: '',
      duracion: '',
      plan: ''
    }
  })

  const [cargando, guardarCargando] = useState(false)

  //extraer datos
  const { cotizacion, datos } = resumen;

  

  return (
    <>
      
      <Contenedor>
        <Header 
          titulo={'Cotizador de Mixtapes'}
        />
        <ContenedorFormulario>
          <Formulario 
            guardarResumen={guardarResumen}
            guardarCargando={guardarCargando}
          />

          {cargando ? <Spinner /> : null}
          
          <Resumen
            datos={datos}
          />

          {!cargando 
          ? 
          <Resultado 
            cotizacion={cotizacion}
          />
          : null    
          }

          
        
        </ContenedorFormulario>
      </Contenedor>
      
    
    </>

  );
}

export default App;
