import styled from '@emotion/styled'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import PropTypes from 'prop-types'

const Mensaje = styled.p`
    background-color: rgb(255, 234, 0);
    margin-top: 2rem;
    padding: 1rem;
    text-align: center;
`

const ResultadoCotizacion = styled.div`
    background-color: white;
    text-align: center;
    padding: .5rem;
    margin-top: 1rem;
    position: relative;
`

const TextoCotizacion = styled.p`
    color: #000000;
    padding: 1rem;
    text-transform: uppercase;
    font-weight: bold;
    text-align: center;
    margin: 0;

`

const Resultado = ({cotizacion}) => {

  return (
    (cotizacion === 0) 
    ? <Mensaje>Elige Estilo, Duración y Plan</Mensaje> 
    : (   
        <ResultadoCotizacion>
            <TransitionGroup
                component='span'
                className='resultado'
            >
                <CSSTransition
                    classNames="resultado"
                    key={cotizacion}
                    timeout={{ enter: 500, exit: 500}}
                >
                    <TextoCotizacion>El total es: $<span> {cotizacion}</span> </TextoCotizacion>
                </CSSTransition>    
            </TransitionGroup>   
            
        </ResultadoCotizacion>
    )
  )
}

Resultado.propTypes = {
    cotizacion: PropTypes.number.isRequired
  }

export default Resultado