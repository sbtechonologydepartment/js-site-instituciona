import styled from "styled-components";
import { IPropsTheme } from "../../styles/theme";

interface IProps extends IPropsTheme {
    $textPresentationInView?: string
    direction: 'right' | 'left'
}

export const Container = styled.div<IProps>`
    position: relative;
    z-index: 0;

    overflow: hidden;
    width: 50%;

    :first-child{
        position: relative;
        z-index: 1;

        opacity: 0;

        ${({$textPresentationInView}) => {
            if($textPresentationInView === 'true') {
                return `
                animation: presentedText 1.5s ease-in-out 800ms forwards;
                `
            }
        }}
    }

    &::before {
        content: '';
        position: absolute;
        z-index: 10;
        background-color: ${(props) => props.theme.COLORS.STRONG_GRAY};
        top: 0;
        width: 0%;
        height: 100%;

        ${({$textPresentationInView, direction}) => {
            if($textPresentationInView === 'true') {

                if(direction === 'left') {
                    return `
                    animation: greyCarpetLeft 2s ease-in-out forwards;
                    `
                } else {
                    return `
                    animation: greyCarpetRight 2s ease-in-out forwards;
                    `
                }
            }}
        }
    }

    p {
        font-size: 1.8rem;
        color: ${(props) => props.theme.COLORS.DARK_BLUE};
    }

    strong {
        font-size: 4rem;
        text-align: justify;
        color: ${(props) => props.theme.COLORS.DARK_BLUE};

        span {
            color: ${(props) => props.theme.COLORS.ORANGE_MAIN};
        }
    }

    @keyframes greyCarpetLeft {
        0% {
            width: 0;
            left: 0;
        }

        50% {
            width: 100%;
        }
        
        100% {
            width: 0;
            right: 0;
        }
    }
    @keyframes greyCarpetRight {
        0% {
            width: 0;
            right: 0;
        }

        50% {
            width: 100%;
        }
        
        100% {
            width: 0;
            left: 0;
        }
    }

    @keyframes presentedText {

        100% {
            opacity: 1;
        }
    }
    
`