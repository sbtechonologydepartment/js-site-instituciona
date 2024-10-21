import styled from "styled-components";
import { IPropsTheme } from "../../styles/theme";
import { emerge } from "../../styles/animations/emerge";

export const Container = styled.div<IPropsTheme>`
    width: 100%;
    height: 100vh;

    display: flex;
    flex-direction: column;
    gap: 17%;

    > div:last-child {
        width: 100%;
        height: 100%;

        display: flex;
        flex-direction: row;
        justify-content: center;
        gap: 2rem;

        > hr {
            height: 70%;
            border: .1px solid ${({theme}) => theme.COLORS.ORANGE_MAIN};
        }

        .service {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            align-items: center;

            text-align: center;

            padding-inline: 3%;
            width: 60rem;

            animation: ${emerge} 1.4s ease-in-out backwards;

            > strong {
                font-size: 2rem;
                letter-spacing: 3.5px;
                color: ${({theme}) => theme.COLORS.LIGHT_BLUE};
            }

            > p {
                font-size: 1.5rem;
                line-height: 1.5;
                color: ${({theme}) => theme.COLORS.DARK_BLUE};
            }
        }
    }
`