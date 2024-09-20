import styled from "styled-components";
import { IPropsTheme } from "../../styles/theme";

export const Container = styled.div<IPropsTheme>`
    width: 100%;
    height: 10rem;
    padding: 0 5%;

    background-color: ${(props) => props.theme.COLORS.DARK_BLUE};

    display: flex;
    flex-direction: row;
    align-items: center;

    p {
        font-size: 1.6rem;
        color: ${(props) => props.theme.COLORS.STRONG_GRAY};
    }

    span {
        color: ${(props) => props.theme.COLORS.ORANGE_MAIN};
    }
`