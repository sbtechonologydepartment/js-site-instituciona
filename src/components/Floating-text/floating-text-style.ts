import styled from "styled-components";
import { IPropsTheme } from "../../styles/theme";

export const Container = styled.div<IPropsTheme>`
    align-self: center;
    display: flex;
    flex-direction: column;
    text-align: center;

    > div.text {
        font-size: 5.5rem;
        color: ${(props) => props.theme.COLORS.DARK_BLUE};

        display: flex;
        flex-direction: row;
        gap: 1rem;

        span {
            /* color: ${(props) => props.theme.COLORS.ORANGE_MAIN}; */
            animation: arriving 5s ease-in-out normal;
            animation-delay: var(--animation-delay);
            --float-distance: -10px;
            --animation-delay: 0s;
        }
    }

    > div#infinity {
        justify-content: center;
    }

    @keyframes arriving {
        from {
            opacity: 0;
            transform: translateY(var(--float-distance));
        }

        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`