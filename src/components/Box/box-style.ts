import styled from "styled-components";
import { IPropsTheme } from "../../styles/theme";

export const Container = styled.div<IPropsTheme>`
    height: 45rem;
    width: 30rem;
    padding: 5rem 3rem;

    background-color: ${(props) => props.theme.COLORS.STRONG_GRAY};

    position: relative;
    z-index: 10;

    border-radius: 5rem;
    border: 1px solid rgba(10,27,35,0.09);

    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    align-items: center;

    > strong {
        font-size: 1.7rem;
        color: ${(props) => props.theme.COLORS.DARK_BLUE};
    }

    > p:nth-child(2) {
        text-align: justify;
    }
`