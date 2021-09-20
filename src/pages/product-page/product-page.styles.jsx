import styled from "styled-components";

export const ProductPageContainer = styled.div`
    display: grid;
    gap: 20px;
    grid-template-columns: 60% 40%;
    grid-template-rows: repeat(1, 1fr);
    min-height: 100vh;
`;

export const ImageContainer = styled.div`
    display: flex;
    min-height: 100%;
    min-width: 100%;
    background-image: url(${props => props.imageUrl});
    background-repeat: no-repeat;
    background-position: center;
    transform: scale(2.5); 
`;