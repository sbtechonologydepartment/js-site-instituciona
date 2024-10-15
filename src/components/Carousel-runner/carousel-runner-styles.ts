import styled, { css } from "styled-components";
import { IPropsTheme } from "../../styles/theme";
import { roll } from "../../styles/animations/roll";
import { emerge } from "../../styles/animations/emerge";

interface IProps extends IPropsTheme {
    $carouselRunnerInView?: string
}

export const Container = styled.div<IProps>`
    width: 100%;
    height: fit-content;
    padding: 4rem 0rem 3rem ;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2.5rem;

    background-color: ${(props => props.theme.COLORS.DARK_BLUE)};

    > strong {
        font-size: 2rem;
        text-align: center;
        color: ${(props) => props.theme.COLORS.GRAY};

        ${({$carouselRunnerInView}) => {
            if($carouselRunnerInView === 'true') {
                return css`
                animation: ${emerge} 700ms ease-in-out 1005ms backwards;
                `
            }
        }}
    }

    ${({$carouselRunnerInView}) => {
        if($carouselRunnerInView === 'true') {
            return css`
            width: .1%;
            animation: ${roll} 1s ease-in-out forwards;
            `
        }
    }
    }

    > div#logo-runner {
        position: relative;
        z-index: 1;

        width: 90%;

        display: flex;
        flex-direction: row;
        gap: 4rem;
        align-items: center;

        white-space: nowrap;
        overflow: hidden;

        > div.logo-wrap {
            display: flex;
            flex-direction: row;
            gap: 5rem;
            align-items: center;
            flex-shrink: 0;

            width: fit-content;
            white-space: nowrap;

            animation: scroll 30s linear infinite both;
            animation-play-state: paused;

            ${({$carouselRunnerInView}) => {
                if($carouselRunnerInView === 'true') {
                    return `
                    animation-play-state: running;
                    `
                }
                }
            }

            > img {
                height: 9rem;
                margin-inline: 5rem;
            }
        }

        &::after,
        &::before {
            content: '';
            width: 20%;
            height: 100%;
            position: absolute;
            right: 0;
            bottom: 0;
            z-index: 10;
            background: linear-gradient(90deg, rgba(10,27,35,1) 0%, rgba(10,27,35,0) 100%)
        }

        &::before{
            left: 0;
        }

        &::after {
            right: -1px;
            transform: rotateZ(180deg);
        }

    }

    @keyframes scroll {
        from {
            transform: translateX(0%);
        }

        to {
            transform: translateX(-100%);
        }
    }
`