import styled from "styled-components";
import { IPropsTheme } from "../../styles/theme";

export const Container = styled.div<IPropsTheme>`
    height: 45rem;
    width: 30rem;
    padding: 5rem 3rem;

    background-color: ${(props) => props.theme.COLORS.STRONG_GRAY};
    box-shadow: 1px 1px 28px 1px rgba(10,27,35,0.23);

    border-radius: 5rem;
    border: 1px solid rgba(10,27,35,0.09);

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    gap: 2rem;
    align-items: center;

    position: relative;

    transition: all 500ms ease-in-out;
    transition-delay: 450ms;

    &::before {
        content: '';

        height: 0%;
        width: 100%;

        border-radius: 5rem;

        position: absolute;
        z-index: 1;
        bottom: 0;
        left: 0;

        background-color: black;
        filter: opacity(5%) brightness(1);

        transition: all 500ms ease-in;
    }

    &:hover {
        &::before {
            height: 100%;
        }

        border: 0.8px solid ${(props) => props.theme.COLORS.ORANGE_MAIN};

        > :last-child {
            opacity: 1;
            transform: translateY(0);
        }
    }

    > div:first-child {
        position: relative;

        display: flex;
        flex-direction: column;
        gap: 1.4rem;
        align-items: center;

        > strong {
            height: fit-content;
            width: fit-content;

            font-size: 1.7rem;
            color: ${(props) => props.theme.COLORS.DARK_BLUE};
        }
    
        > p:nth-child(2),
        > ul:nth-child(2)
        {
            height: 13.8rem;

            font-size: 1.4rem;
            text-align: justify;
    
            > li {
                list-style: none;
            }
            > li:nth-child(odd) {
                margin-block: .3rem;
            }
        }
    }


    > :last-child {
        position: relative;
        z-index: 10;

        font-size: 8rem;
        height: 8rem;
        color: ${(props) => props.theme.COLORS.ORANGE_MAIN};

        opacity: 0;
        transform: translateY(-100px);

        transition: all 500ms 250ms ease-in-out;
    }
`