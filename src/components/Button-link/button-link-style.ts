import styled from "styled-components";
import { IPropsTheme } from "../../styles/theme";
import { Link } from "react-router-dom";

export const Container = styled(Link)<IPropsTheme>`
    position: relative;

    width: 100%;
    height: 100%;
    padding: 10%;

    background-color: ${(props) => props.theme.COLORS.STRONG_GRAY};

    border: 1px solid rgba(10,27,35,0.09);
    border-radius: .8rem;

    display: flex;
    flex-direction: row;
    gap: 1rem;
    align-items: center;
    justify-content: center;

    animation: appear 1s ease-in-out var(--button-animation-delay) backwards;
    
    > span,
    :last-child {
        position: relative;
        z-index: 2;
        
        transition: color ease-in-out 250ms;
        
        color: ${(props) => props.theme.COLORS.DARK_BLUE};
        font-size: 1.3rem;
        white-space: nowrap;
    }

    &:hover span, 
    &:hover :last-child{
        color: ${(props) => props.theme.COLORS.WHITE};
        z-index: 2;
    }

    &::after {
        content: '';
        bottom: 0;
        left: 0;
        position: absolute;
        width: 0;
        height: 100%;
        border-radius: .8rem;
        background-color: ${(props) => props.theme.COLORS.ORANGE_MAIN};
        transition: width 350ms ease-in-out 251ms;
        z-index: 1;
    }

    &:hover::after {
        width: 100%;
    }

    @keyframes appear {
        from {
            opacity: 0;
            transform: translateY(8px);
        }

        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

`