import styled from 'styled-components'
import DefaultImage from '../images/room-10.jpeg'

const CustomJumbotron = styled.header`
    min-height: 60vh;
    background: url(${props => props.img ? props.img : DefaultImage}) center/cover no-repeat;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export default CustomJumbotron;