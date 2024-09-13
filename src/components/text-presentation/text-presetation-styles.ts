import styled from "styled-components";
import { IPropsTheme } from "../../styles/theme";

interface IProps extends IPropsTheme {
    $textPresentationInView?: string
}

export const Container = styled.div<IProps>`
    position: relative;
    z-index: 0;

    overflow: hidden;
    width: 50%;

    :first-child{
        position: relative;
        z-index: 10;

        width: 100%;

        transform: translateX(-100%);
    }

    &::before {
        content: '';
        position: absolute;
        z-index: 5;
        background-color: ${(props) => props.theme.COLORS.STRONG_GRAY};
        top: 0;
        width: 0%;
        height: 100%;

        ${({$textPresentationInView}) => {
            if($textPresentationInView === 'true') {
                return `
                animation: greyCarpetLeft 2s ease-in-out forwards;
                `
            }
        }}
    }

    p {
        font-size: 1.6rem;
        color: ${(props) => props.theme.COLORS.DARK_BLUE};
    }

    @keyframes greyCarpetLeft {
        0% {
            width: 0;
            left: 0;
        }

        50% {
            width: 100%;
            right: 0;
        }
        
        100% {
            width: 0;
            right: 0;
        }
    }
    
`