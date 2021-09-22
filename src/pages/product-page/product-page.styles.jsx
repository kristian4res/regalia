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
    flex-direction: horizontal;
    gap: 10px;
    min-width: 100%;
    // background-image: url(${props => props.imageUrl});
    // background-repeat: no-repeat;
    // background-position: center;
`;

export const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;