import styled from "styled-components";
import { IPropsTheme } from "../../styles/theme";

export const Container = styled.button<IPropsTheme>`
    position: relative;

    width: 100%;
    height: 100%;
    padding: 1rem;

    background-color: ${(props) => props.theme.COLORS.STRONG_GRAY};

    border: 1px solid rgba(10,27,35,0.09);
    border-radius: .8rem;

    color: ${(props) => props.theme.COLORS.DARK_BLUE};
    font-size: 1.3rem;

    transition: color ease-in-out 250ms;

    &::after {
        content: '';
        bottom: 0;
        left: 0;
        position: absolute;
        width: 0;
        height: 100%;
        border-radius: .8rem;
        background-color: ${(props) => props.theme.COLORS.ORANGE_MAIN};
        transition: width 350ms ease-in-out 251ms;
    }

    &:hover::after {
        width: 100%;
    }

    &:hover {
        color: ${(props) => props.theme.COLORS.WHITE};
    }
`