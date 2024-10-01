import styled from "styled-components";
import { IPropsTheme } from "../../styles/theme";

interface IProps extends IPropsTheme {
    $leftOrRight: 'right' | 'left'
    $alreadySeen?: 'true' | 'false'
}

export const Container = styled.div<IProps>`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 4rem;

    width: 100%;

    --side: ${(props) => props.$leftOrRight === 'left' ? '-100px' : '100px'};
    ${(props) => props.$alreadySeen === 'true' ? 'animation: emergeFromSide 3s ease-in-out both;' : ''}

    > div.about-founder {
        ${(props) => props.$leftOrRight === 'left' ? 'order: 2;' : 'order: 1;'}

        width: 50rem;
        display: flex;
        flex-direction: column;
        gap: 1.5rem;

        strong {
            font-size: 2rem;
            color: ${(props) => props.theme.COLORS.LIGHT_BLUE};
            letter-spacing: 8px;
        }

        p {
            font-size: 1.7rem;
            text-align: justify;
            color: ${(props) => props.theme.COLORS.DARK_BLUE};
        }
    }

    @keyframes emergeFromSide {
        0% {
            opacity: 0;
            transform: translateX(var(--side));
        }

        50% {
            opacity: 1;
        }

        100% {
            opacity: 1;
            transform: translateX(0);
        }
    }
`

export const PictureFrame = styled.div<IProps>`
    ${(props) => props.$leftOrRight === 'left' ? 'order: 1;' : 'order: 2;'}

    height: 50rem;
    width: 45rem;

    border: 2.5px solid ${(props) => props.theme.COLORS.ORANGE_MAIN};
    border-radius: 2rem;

    overflow: hidden;

    > img {
        width: 100%;
        height: 100%;

        object-fit: cover;
    }
`