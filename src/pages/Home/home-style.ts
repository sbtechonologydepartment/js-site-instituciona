import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 13rem;

    div#box-row {
        width: 80%;

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