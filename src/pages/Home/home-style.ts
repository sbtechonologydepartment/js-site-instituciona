import styled from "styled-components";
import { IPropsTheme } from "../../styles/theme";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";
import { deckOfCards, deckOfCardsMobile } from "../../styles/animations/deckOfCards";

interface IProps extends IPropsTheme {
    divalreadyvisible?: 'true' | 'false'
}

export const Container = styled.div<IProps>`
    display: flex;
    flex-direction: column;
    gap: 13rem;

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
        gap: 10rem;
    }

    div#box-row {
        width: 85%;

        margin-bottom: 10rem;

        display: flex;
        align-self: center;
        flex-direction: row;
        justify-content: space-around;

        @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
            width: 100%;
            flex-direction: column;
            align-items: center;
            gap: 3rem;
            margin-block: 5rem;
        }

        > div {
            animation: ${deckOfCards} 850ms ease-in-out backwards;

            animation-delay: var(--animation-cards-delay);
            --animation-cards-delay: 0s;
            --animation-cards-distance: -30rem;

            @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
                animation: ${deckOfCardsMobile} 850ms ease-in-out backwards;
                animation-delay: var(--animation-cards-delay);
            }
        }
    }

    > div:nth-child(4) {

        height: fit-content;
        width: 100%;
        padding: 3rem 14% 0rem 13%;

        display: flex;
        flex-direction: column;
        gap: 10.5rem;
        align-items: center;
        justify-content: start;


        @media (max-width: ${DEVICE_BREAKPOINTS.MDD}) {
            padding: 3rem 8% 0rem ;
        }
        

        div.textRow {
            display: flex;
            flex-direction: row;
            gap: 2.5rem;
            align-items: center;
            justify-content: start;

            @media (max-width: ${DEVICE_BREAKPOINTS.MDD}) {
                flex-direction: column;
            }
        }
    }

    > div#solutions {
        height: fit-content;
        width: 100%;
        padding: 8% 10% 0%;

        background-color: ${(props) => props.theme.COLORS.DARK_BLUE};

        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 9rem;

        > div:first-child {
            display: flex;
            flex-direction: column;
            gap: 2.2rem;
            align-items: center;

            width: 68%;

            @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
                width: 85%;
            }

            strong {
                font-size: 4rem;
                color: ${(props) => props.theme.COLORS.GRAY};
                text-align: center;

                @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
                    font-size: 3rem;
                }
            }

            p {
                font-size: 1.8rem;
                color: ${(props) => props.theme.COLORS.STRONG_GRAY};
                text-align: center;

                @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
                    font-size: 1.6rem;
                }
            }
        }

        > div:last-child {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-template-rows: repeat(2, 1fr);
            column-gap: 10rem;

            @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 2rem;
            }

            @media (min-width: ${DEVICE_BREAKPOINTS.MD}) and (max-width: ${DEVICE_BREAKPOINTS.LG}) {
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                grid-template-rows: repeat(3, 1fr);
                column-gap: 10rem;
            }
        }
    }
`