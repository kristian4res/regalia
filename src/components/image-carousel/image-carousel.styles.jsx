import styled from 'styled-components';

export const TextOverlay = styled.div`
    position: absolute;
    top: 25%;
    left: 20%;
    width: 20%;
    font-size: 90px;
    z-index: 9;
    color: white;
`;

export const SliderWrapper = styled.div`
    transform: translateX(-${props => props.translate}px);
    transition: transform ease-out ${props => props.transition}s;
    height: 100%;
    width: ${props => props.width}px;
    display: flex;
    justify-content: space-evenly;
    padding: 70px;
`;