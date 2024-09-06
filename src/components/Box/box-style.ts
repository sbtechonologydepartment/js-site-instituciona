import styled from "styled-components";
import { IPropsTheme } from "../../styles/theme";

export const Container = styled.div<IPropsTheme>`
    height: 45rem;
    width: 30rem;
    padding: 5rem 3rem;

    background-color: ${(props) => props.theme.COLORS.STRONG_GRAY};

    border-radius: 5rem;
    border: 1px solid rgba(10,27,35,0.09);

    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: center;

    > strong {
        font-size: 1.7rem;
        color: ${(props) => props.theme.COLORS.DARK_BLUE};
    }

    > p:nth-child(2) {
        font-size: 1.3rem;
        text-align: justify;

        margin-bottom: 4rem;
    }

    > :last-child {
        font-size: 8rem;
        color: ${(props) => props.theme.COLORS.ORANGE_MAIN};
    }
`