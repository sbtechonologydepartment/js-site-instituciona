import styled from "styled-components";
import { IPropsTheme } from "../../styles/theme";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

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

        @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
            font-size: 1.45rem;
        }
    }

    span {
        color: ${(props) => props.theme.COLORS.ORANGE_MAIN};
    }
`