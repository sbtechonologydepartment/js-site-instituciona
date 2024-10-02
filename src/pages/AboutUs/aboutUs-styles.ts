import styled from "styled-components";
import { IPropsTheme } from "../../styles/theme";

export const Container = styled.div<IPropsTheme>`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 11rem;

    > strong {
        font-size: 4rem;
        letter-spacing: 4px;
        color: ${(props) => props.theme.COLORS.DARK_BLUE};
    }

    > #div-start {
        background-color: ${(props) => props.theme.COLORS.STRONG_GRAY};

        width: 100%;
        

        padding: 10rem ;

        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10rem;

        border-radius: 11% 11% 0 0;

        animation: divRollUp 1.5s ease-in-out backwards;

        > div#company-numbers {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            gap: 10rem;

            width: 100%;

            > div.numbers {
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: .4rem;

                strong {
                    font-size: 4rem;
                    color: ${(props) => props.theme.COLORS.ORANGE_MAIN};
                    text-align: center;
                }

                p {
                    font-size: 2.4rem;
                    text-align: center;
                }
            }
        }

        > hr:first-of-type {
            width: 100%;
            border: 1px solid ${(props) => props.theme.COLORS.ORANGE_MAIN};

            margin-bottom: 8.5rem;
        }

        > div:nth-child(3) {
            display: flex;
            flex-direction: column;
            gap: 3rem;
            width: 100%;

            > div {
                width: 53rem;

                &:last-child {
                    align-self: flex-end;

                    p, span {
                        text-align: end;
                    }
                }

                span {
                    font-size: 2rem;
                    font-weight: 600;
                    color: ${(props) => props.theme.COLORS.LIGHT_BLUE};
                    letter-spacing: 3px;

                    display: block;
                    margin-bottom: .5rem;
                }

                p {
                    font-size: 1.8rem;
                }
            }
        }

        > div#founders {
            display: flex;
            flex-direction: column;
            justify-content: center;
            gap: 10rem;

            margin-top: 3rem;

            width: 100%;

            > strong {
                font-size: 2.4rem;
                color: ${(props) => props.theme.COLORS.LIGHT_BLUE};
                text-align: center;
                letter-spacing: 3px;
            }
        }

        > div#our-history {
            display: flex;
            flex-direction: column;
            gap: 2rem;
            align-items: center;

            margin-top: 5rem;

            > strong {
                font-size: 2.4rem;
                color: ${(props) => props.theme.COLORS.LIGHT_BLUE};
                text-align: center;
                letter-spacing: 5px;
            }

            > p {
                font-size: 1.8rem;
                color: ${(props) => props.theme.COLORS.DARK_BLUE};
                text-align: center;

                width: 100rem;
            }
        }
    }

    @keyframes divRollUp {
        from {
            transform: translateY(90vh);
        }

        to {
            transform: translateY(0);
        }
    }
`