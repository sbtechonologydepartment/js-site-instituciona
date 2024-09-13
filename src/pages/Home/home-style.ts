import styled from "styled-components";
import { IPropsTheme } from "../../styles/theme";

export const Container = styled.div<IPropsTheme>`
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

    > div:last-child {
        height: 50rem;
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