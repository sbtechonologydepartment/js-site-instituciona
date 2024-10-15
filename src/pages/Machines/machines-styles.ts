import styled from "styled-components";
import { IPropsTheme } from "../../styles/theme";

export const Container = styled.div<IPropsTheme>`
    position: relative;

    display: flex;
    flex-direction: column;
    align-items: center;

    height: 100vh;
    overflow: hidden;

    > #machine {
        display: flex;
        flex-direction: row;
        gap: 5rem;
        align-items: center;
        justify-content: center;

        padding: 10% 10% 20%;
        height: 90%;
        width: 100%;

        > :first-child {
            align-self: center;
            
            height: 35rem;
            width: 33%;

            overflow: hidden;

            img {
                height: 100%;
                width: 100%;

                object-fit: cover;
            }
        }

        > :last-child {
            align-self: flex-start;

            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 1.2rem;

            > #title-machine {
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                gap: .7rem;

                > p {
                    font-size: 1.6rem;
                    color: ${({theme}) => theme.COLORS.DARK_BLUE};
                    letter-spacing: 2px;
                }

                > strong {
                    font-size: 2rem;
                    color: ${({theme}) => theme.COLORS.ORANGE_MAIN};
                    letter-spacing: 5px;
                }
            }

            > p {
                font-size: 1.5rem;
                color: ${({theme}) => theme.COLORS.DARK_BLUE};
                text-align: justify;
                line-height: 1.4;

                width: 54rem;
            }

            > #machine-variants {
                margin-top: 1rem;

                > strong {
                    font-size: 1.6rem;
                    font-weight: 500;
                    color: ${({theme}) => theme.COLORS.LIGHT_BLUE};
                    letter-spacing: 1.8px;
                }

                > #variants-row {
                    margin-top: 1rem;

                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    gap: 2rem;

                    > .variant {
                        padding: .6rem 2.5rem;

                        background-color: ${({theme}) => theme.COLORS.STRONG_GRAY};

                        border-radius: 2rem;

                        > span {
                            font-size: 1.1rem;
                            color: ${({theme}) => theme.COLORS.DARK_BLUE};
                        }
                    }
                }
            }

        }
    }
`