import styled from "styled-components";
import { IPropsTheme } from "../../styles/theme";

export const Container = styled.textarea<IPropsTheme>`
    resize: none;

    border: 1px solid ${(props) => props.theme.COLORS.STRONG_GRAY};
    border-radius: 1rem;

    padding: 1.5rem 1.2rem;
    width: 100%;
    height: 100%;

    font-size: 1.3rem;

    background: transparent;
    box-shadow: 1px 17px 25px -10px rgba(10,27,35,0.17);

    transition: all 500ms ease-in-out;

    &:focus {
        outline: none;

        border: 1px solid ${(props) => props.theme.COLORS.ORANGE_MAIN};
    }
`