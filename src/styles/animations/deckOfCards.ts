import { keyframes } from "styled-components";

export const deckOfCards = keyframes`
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
`

export const deckOfCardsMobile = keyframes`
    0% {
        opacity: 0;
        transform: translateY(var(--animation-cards-distance));
    }

    25% {
        opacity: 1;
    }

    100%{
        transform: translateY(0);
    }
`