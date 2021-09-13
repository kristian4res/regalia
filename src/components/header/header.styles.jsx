import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';


const OptionContainerStyles = css`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-top: 1em;
`;

export const HeaderContainer = styled.div`
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 25px;
    padding: 2.5rem;
    background-color: white;
`;

export const LogoContainer = styled(Link)`
    height: 100%;
    width: 70px;
`;

export const OptionsContainer = styled.div`
    ${OptionContainerStyles}
`;