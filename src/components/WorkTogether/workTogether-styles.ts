import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
    width: 100%;
    padding: 0% 20%;
    height: 37rem;
    
    display: flex;
    flex-direction: column;
    gap: 4.5rem;
    align-items: center;
    justify-content: start;

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
        padding: 0% 5%;
    }

    >  div:first-child {
        width: 75rem;
        display: flex;
        flex-direction: column;
        gap: 1.5rem;

        text-align: center;

        @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
            width: 100%;
        }

        strong {
            font-size: 3rem;
            color: ${(props) => props.theme.COLORS.ORANGE_MAIN};
            letter-spacing: 2px;

            @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
                font-size: 2.4rem;
                letter-spacing: 1px;
            }
        }

        p {
            font-size: 1.8rem;
            color: ${(props) => props.theme.COLORS.DARK_BLUE};
            line-height: 1.4;

            @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
                font-size: 1.5rem;
                text-align: center;
            }
        }
    }

    > div:last-child {
        width: 16rem;
        height: 5rem;

        @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
            width: 15rem;
        }
    }
`