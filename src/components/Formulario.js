import { useState } from 'react'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'
import { calcularEstilo, obtenerPlan } from '../helper'


const Campo = styled.div`
    display: flex;
    margin-bottom: 1rem;
    align-items: center;
`
const Label = styled.label`
    flex: 0 0 100px;
`

const Select = styled.select`
    display: block;
    width: 100%;
    padding: 1rem;
    border: 1px solid #e1e1e1;
    -webkit-appearence: none;
`

const InputRadio = styled.input`
    margin: 0 1rem;
`

const Boton = styled.button`
    background-color: #000000;
    color:#ffffff;
    font-size: 16px;
    width: 100%;
    padding: 1rem;
    text-transform: uppercase;
    font-weight: bold;
    border: none;
    transition: background-color .3s ease;
    margin-top: 2rem;

    &:hover{
        background-color: #3e3e3e;
        color: #fff;
        cursor: pointer;
    }
`

const Error = styled.div`
    background-color: red;
    color: white;
    padding: 1rem;
    text-align: center;
    width: 100%;
    margin-bottom: 2rem;
    font-weight: bold;
    text-transform: uppercase;

`

const Formulario = ({guardarResumen, guardarCargando}) => {

    const [datos, guardarDatos] = useState({
        estilo: '',
        duracion: 0,
        plan: ''
    })

    const [error, guardarError] = useState(false)

    //extraer los valores del state

    const { estilo, duracion, plan } = datos;

    //leer los datos del formulario y colocarlos en el state
    const obtenerInformacion = e => {
        guardarDatos({
            ...datos,
            [e.target.name] : e.target.value
        })
    }

    const cotizarMixtape = e => {
        e.preventDefault();

        if(estilo.trim() === '' || duracion.trim() === '' || plan.trim() === ''){
            guardarError(true)
            return;
        }

        guardarError(false)


        let resultado = duracion * 1000

        resultado = calcularEstilo(estilo) * resultado

        const incrementoPlan = obtenerPlan(plan)

        resultado = incrementoPlan * resultado;

        guardarCargando(true);

        setTimeout(() => {

            guardarCargando(false)

            guardarResumen({
                cotizacion: Number(resultado),
                datos
            })

        }, 1000)

        



    }

  return (
    <form
        onSubmit={cotizarMixtape}
    >

        { error ? <Error>Todos los campos son Obligatorios</Error> : null }
        <Campo>
            <Label>Estilo Musical</Label>
            <Select
                name="estilo"
                value={estilo}
                onChange={obtenerInformacion}
            >
                <option value="">-- Seleccione --</option>
                <option value="reggaeton">Reggaeton</option>
                <option value="house">House</option>
                <option value="hiphop">Hiphop</option>
                <option value="reggae">Reggae</option>
                <option value="dubstep">Dupstep</option>
                <option value="rock">Rock</option>
                <option value="party">Party-Mix</option>
                <option value="street">Street-Mix</option>
            </Select>
        </Campo>
        <Campo>
            <Label>Duración</Label>
            <Select
                name="duracion"
                value={duracion}
                onChange={obtenerInformacion}
            >
                <option value="">-- Seleccione --</option>
                <option value={15}>15 Minutos</option>
                <option value={30}>30 Minutos</option>
                <option value={60}>60 Minutos</option>
            </Select>
        </Campo>
        <Campo>
            <Label>Plan</Label>
            <InputRadio 
                type="radio"
                name="plan"
                value="basico"
                checked={plan === "basico"}
                onChange={obtenerInformacion}
            /> Básico
            <InputRadio 
                type="radio"
                name="plan"
                value="completo"
                checked={plan === "completo"}
                onChange={obtenerInformacion}
            /> Completo
        </Campo>
        <Boton type="submit">Cotizar</Boton>

    </form>
  )
}

Formulario.propTypes = {
    guardarResumen: PropTypes.func.isRequired,
    guardarCargando: PropTypes.func.isRequired
}


export default Formulario