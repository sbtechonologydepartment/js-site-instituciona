import styled from "styled-components";
import { IPropsTheme } from "../../styles/theme";

export const Container = styled.div<IPropsTheme>`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 13rem;

    > div:last-child {
        width: 75%;
        height: 100vh;

        display: flex;
        flex-direction: row;
        gap: 9rem;

        #contact-options {
            display: flex;
            flex-direction: column;
            gap: 3rem;

            width: fit-content;
            color: ${(props) => props.theme.COLORS.DARK_BLUE};

            > strong {
                font-size: 2.7rem;
                text-align: center;
            }

            > div {
                display: flex;
                flex-direction: column;
                gap: 1rem;

                .contact-way {
                    display: flex;
                    flex-direction: row;
                    gap: 1rem;
                    align-items: center;

                    font-size: 1.6rem;

                    > :first-child {
                        font-size: 2rem;

                        padding: .9rem;

                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;

                        border-radius: 100%;
                        border: 2px solid ${(props) => props.theme.COLORS.STRONG_GRAY};
                        
                    }
                }
            }
        }
    }
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 3rem;

    height: 40rem;

    > div:first-child {
        display: flex;
        flex-direction: row;
        gap: 2rem;
    }
`

export const Button = styled.a`
    position: relative;

    align-self: flex-end;

    width: 15rem;
    padding: 1.5rem 3rem;

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