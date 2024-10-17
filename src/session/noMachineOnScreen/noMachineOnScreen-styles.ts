import styled from "styled-components";
import { IPropsTheme } from "../../styles/theme";
import { emerge } from "../../styles/animations/emerge";

export const Container = styled.div<IPropsTheme>`
    padding: 10% 10% 20%;
    height: 90%;
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;

    animation: ${emerge} 1s ease-in backwards;

    strong {
        font-size: 2.6rem;
        letter-spacing: 4px;
        color: ${({theme}) => theme.COLORS.DARK_BLUE};
        text-align: center;
        width: 50%;
    }

    :last-child {
        font-size: 2.6rem;
        color: ${({theme}) => theme.COLORS.ORANGE_MAIN};
        animation: ${emerge} 1.5s ease-in 400ms backwards ;
    }
`