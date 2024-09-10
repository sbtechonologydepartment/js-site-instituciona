import styled from "styled-components";
import { IPropsTheme } from "../../styles/theme";

export const Container = styled.div<IPropsTheme>`
    height: 45rem;
    width: 30rem;
    padding: 5rem 3rem;

    background-color: ${(props) => props.theme.COLORS.STRONG_GRAY};

    border-radius: 5rem;
    border: 1px solid rgba(10,27,35,0.09);

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    gap: 2rem;
    align-items: center;

    > div:first-child {
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
        font-size: 8rem;
        height: 8rem;
        color: ${(props) => props.theme.COLORS.ORANGE_MAIN};
    }
`