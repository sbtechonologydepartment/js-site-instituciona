import styled from "styled-components";
import { IPropsTheme } from "../../styles/theme";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div<IPropsTheme>`
    width: 100%;
    height: 8.5rem;
    padding: 4rem 8rem;

    border-radius: 0 0 8rem 8rem;

    box-shadow: 2px 17px 45px -3px rgba(10,27,35,0.23);

    border: 1px solid rgba(10,27,35,0.09);

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;

    background-color: ${(props) => props.theme.COLORS.STRONG_GRAY};

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
        
        display: none;
    }

    > div#logo {
        height: 7rem;
        width: 7rem;
        margin-bottom: -5px;

        @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
            height: 4rem;
            width: 4rem;
        }

        img {
            height: 100%;
            width: 100%;
            object-fit: cover;
        }
    }

    > div#navigation {
        display: flex;
        flex-direction: row;
        gap: 4rem;
        align-items: center;

        @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
            gap: 2.5rem;
        }

        div.link-nav {
            a {
                position: relative;

                color: ${(props) => props.theme.COLORS.DARK_BLUE};
                font-size: 1.4rem;

                transition: color 250ms ease-in-out;
            }
    
            a::after {
                content: '';
                position: absolute;
                left: 0;
                bottom: -5px;
                width: 0;
                height: 1.5px;
                background-color: ${(props) => props.theme.COLORS.ORANGE_MAIN};
                transition: width 350ms ease-in-out 251ms;
            }

            a:hover {
                color: ${(props) => props.theme.COLORS.ORANGE_MAIN};
            }

            a:hover::after {
                width: 100%;
            }

        }

        
    }

    div#social-media-navigation {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 1rem;

        @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
            gap: .7rem;
        }

        div.social-nav-link {
            a {
                color: ${(props) => props.theme.COLORS.DARK_BLUE};
                transition: all 250ms ease-in-out;
                font-size: 2rem;

                @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
                    font-size: 1.5rem;
                }
            }

            a:hover {
                color: ${(props) => props.theme.COLORS.ORANGE_MAIN};
            }
        }
    }
`