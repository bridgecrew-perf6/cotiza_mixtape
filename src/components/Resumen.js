import styled from '@emotion/styled'
import { primerMayuscula } from '../helper';
import PropTypes from 'prop-types'


const ContenedorResumen = styled.div`
    padding: 1rem;
    text-align: center;
    background-color: #000000;
    color: #ffffff;
    margin-top: 1rem;

`


const Resumen = ({datos}) => {

    //extraer de datos
    const { estilo, duracion, plan } = datos;

    if(estilo==='' || duracion === '' || plan === '') return null;

  return (

    <ContenedorResumen>
        <h2>Resumen de Cotización Mixtape</h2>
        <ul>
            <li>Estilo: {primerMayuscula(estilo)} </li>
            <li>Duracion: {primerMayuscula(duracion)} </li>
            <li>Plan: {primerMayuscula(plan)} </li>
        </ul>
    </ContenedorResumen>
    
  )
}

Resumen.propTypes = {
  datos: PropTypes.object.isRequired
}

export default Resumen