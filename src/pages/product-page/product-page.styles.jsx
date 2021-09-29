import styled from "styled-components";

export const ProductPageContainer = styled.div`
    display: grid;
    gap: 20px;
    grid-template-columns: 60% 40%;
    grid-template-rows: repeat(1, 1fr);
    min-height: 100vh;
    position: relative;
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

export const ProductInformation = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 0 30px 0;
`;

export const ProductTitle = styled.div`
    margin: 0 0 1.4em;
    letter-spacing: 1px;

    h1 {
        margin-top: 25px;
    }
    h2 {
        font-weight: 300;
    }
`;

export const ProductForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
`;

export const SwatchFieldset = styled.fieldset`
    display: flex;
    justify-content: flex-start;
    flex-direction: horizontal;
    gap: 0.7em;
    min-height: 75px;
    margin: 1em 0 2em;

        legend {
            margin-bottom: 10px;
        }
        
        label {
            display: flex;
            position: relative;
            user-select: none; 
            height: 35px;
            width: 35px;

            input {
                opacity: 0;
                cursor: pointer;
                position: absolute;
                bottom: 0%;
                left: -15%;
                height: 100%;
                width: 100%;
                z-index: 11;
            }

            input:checked + span {
                border: 2px solid #000000; 
            }

            span {
                position: absolute;
                overflow: hidden;
                border-radius: 50%;
                height: 35px;
                width: 35px;
                left: 0;
            } 
        }
`;

export const FormSelect = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    gap: 20px;
`;