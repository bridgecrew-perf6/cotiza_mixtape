import styled from "@emotion/styled";
import PropTypes from 'prop-types'


const ContenedorHeader = styled.header`
    background-color: #000000;
    color: #ffffff;
    padding: 10px;
    font-weight: bold;
    
`;

const TextoHeader = styled.h1`
    font-size: 2rem;
    margin: 0;
    font-family: Arial, Helvetica, sans-serif;
    text-align: center;
`

const Header = ({titulo}) => {
  
  return (
    <ContenedorHeader>
        <TextoHeader>{titulo}</TextoHeader>
    </ContenedorHeader>
  )
}

Header.propTypes = {
  titulo: PropTypes.string.isRequired
}

export default Header