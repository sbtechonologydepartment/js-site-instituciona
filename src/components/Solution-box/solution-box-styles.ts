import styled from "styled-components";
import { IPropsTheme } from "../../styles/theme";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

interface IProps extends IPropsTheme {
    $isVisible: 'true' | 'false'
}

export const Container = styled.div<IProps>`
    opacity: 0;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2.7rem;

    width: 28rem;
    height: 37rem;

    ${({$isVisible}) => $isVisible === 'true' ? 'animation: solutioBoxAppear 1s ease-in-out var(--solution-box-delay) both;' : ''}
    --solution-box-delay: 0s;

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
        ${({$isVisible}) => $isVisible === 'true' ? 'animation: solutioBoxAppear 1s ease-in-out both;' : ''}
    }

    @media (min-width: ${DEVICE_BREAKPOINTS.MD}) and (max-width: ${DEVICE_BREAKPOINTS.LG}) {
        ${({$isVisible}) => $isVisible === 'true' ? 'animation: solutioBoxAppear 1s ease-in-out var(--solution-box-delay-mobile) both;' : ''}
    }

    > :first-child {
        height: 7rem;
        width: 7rem;
        border-radius: 100%;

        display: flex;
        flex-direction: column;
        align-items: center;

        background-color: ${(props) => props.theme.COLORS.ORANGE_MAIN};

        > :first-child {
            height: 100%;

            font-size: 3.5rem;
        }
    }

    > div:last-child {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;

        strong {
            text-align: center;
            font-size: 2rem;
            color: ${(props) => props.theme.COLORS.WHITE};
        }

        p {
            font-size: 1.6rem;
            width: 100%;
            text-align: center;
            color: ${(props) => props.theme.COLORS.STRONG_GRAY};
        }
    }

    @keyframes solutioBoxAppear {
        from {
            transform: translateY(90px);
        }

        to {
            transform: translateY(0);
            opacity: 1;
        }
    }
`  