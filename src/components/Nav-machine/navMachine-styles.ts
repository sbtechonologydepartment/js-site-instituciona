import styled from "styled-components";
import { IPropsTheme } from "../../styles/theme";
import { roll } from "../../styles/animations/roll";
import { emerge } from "../../styles/animations/emerge";

export const Container = styled.div<IPropsTheme>`
    position: absolute;
    bottom: 0;
    left: 0;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    width: 0%;

    height: 14%;
    padding: 1% 4%;

    background-color: ${({theme}) => theme.COLORS.STRONG_GRAY};

    border: 1px solid rgba(10,27,35,0.09);

    animation: ${roll} 1.2s ease-in-out 100ms both;

    .partner {
        position: relative;

        height: 100%;
        width: 100%;

        display: flex;
        justify-content: center;
        align-items: center;

        cursor: pointer;

        animation: ${emerge} 1s ease-in-out 1.2s both;

        transition: all 500ms ease-in-out;

        &::before {
            content: '';

            position: absolute;
            right: 0;
            bottom: 0;
            left: 0;
            top: 0;
            z-index: 1;

            height: 100%;
            width: 100%;

            background: transparent;
            
            border-radius: 50%;
            border: 1.5px solid transparent;

            transition: all 500ms ease-in-out;

            transform: scale(0);
        }

        &:hover::before {
            border-color: ${({theme}) => theme.COLORS.ORANGE_MAIN};
            transform: scale(1) ;
        }

        > img {
            width: 80%;
            height: 60%;
            
            z-index: 10;
            border-radius: 50%;
        }
    }

`