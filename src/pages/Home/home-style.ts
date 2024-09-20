import styled from "styled-components";
import { IPropsTheme } from "../../styles/theme";

interface IProps extends IPropsTheme {
    divalreadyvisible?: 'true' | 'false'
}

export const Container = styled.div<IProps>`
    display: flex;
    flex-direction: column;
    gap: 13rem;

    div#box-row {
        width: 80%;

        margin-bottom: 10rem;

        align-self: center;
        display: flex;
        flex-direction: row;
        justify-content: space-around;

        > div {
            animation: deckOfCards 850ms ease-in-out backwards;

            animation-delay: var(--animation-cards-delay);
            --animation-cards-delay: 0s;
            --animation-cards-distance: -30rem;
        }
    }

    > div:nth-child(4) {

        div.textRow {
            display: flex;
            flex-direction: row;
            gap: 2.5rem;
            align-items: center;
            justify-content: start;
        }

        height: fit-content;
        width: 100%;
        padding: 3rem 14% 0rem 13%;

        display: flex;
        flex-direction: column;
        gap: 10.5rem;
        align-items: center;
        justify-content: start;
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

            strong {
                font-size: 4rem;
                color: ${(props) => props.theme.COLORS.GRAY};
                text-align: center;
            }

            p {
                font-size: 1.8rem;
                color: ${(props) => props.theme.COLORS.STRONG_GRAY};
                text-align: center;
            }
        }

        > div:last-child {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-template-rows: repeat(2, 1fr);
            column-gap: 10rem;
        }
    }

    > div:last-child {
        width: 100%;
        padding: 0% 20%;
        height: 37rem;
        
        display: flex;
        flex-direction: column;
        gap: 4.5rem;
        align-items: center;
        justify-content: start;

        >  div:first-child {
            width: 95%;
            display: flex;
            flex-direction: column;
            gap: 1.5rem;

            text-align: center;

            strong {
                font-size: 3rem;
                color: ${(props) => props.theme.COLORS.ORANGE_MAIN};
            }

            p {
                font-size: 1.8rem;
                color: ${(props) => props.theme.COLORS.DARK_BLUE};
            }
        }

        > div:last-child {
            width: 16rem;
            height: 5rem;
        }
    }

    @keyframes deckOfCards {
        0% {
            opacity: 0;
            transform: translateX(var(--animation-cards-distance));
        }

        25% {
            opacity: 1;
        }

        100%{
            transform: translateX(0);
        }

    }
`