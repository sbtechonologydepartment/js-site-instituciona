import styled from "styled-components";
import { IPropsTheme } from "../../styles/theme";

interface IProps extends IPropsTheme {
    inview?: string
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

        ${({inview}) => {
            if(inview === 'true') {
                return `
                animation: emerge 700ms ease-in-out 1005ms backwards;
                `
            }
        }}
    }

    ${({inview}) => {
        if(inview === 'true') {
            return `
            width: .1%;
            animation: roll 1s ease-in-out forwards;
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
        gap: 5rem;
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

            --t: 65s;
            animation: slide var(--t) infinite linear both;
            animation-delay: calc(var(--t) * -1);
            animation-play-state: paused;

            &:nth-child(2) {
                animation: slide2 var(--t) infinite linear both;
                animation-delay: calc(var(--t) / -2);
            }

            ${({inview}) => {
                if(inview === 'true') {
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
            right: 0;
            transform: rotateZ(180deg);
        }

    }

    @keyframes roll {
        from {
            width: 0%;
        }

        to {
            width: 100%;
        }
    }

    @keyframes emerge {
        from {
            opacity: 0;
            transform: translateY(-10px);
        }

        to { 
            opacity: 1;
            transform: translateY(0);
        }
    }

    @keyframes slide {
        0% {
            transform: translateX(100%);
        }

        100% {
            transform: translateX(-100%);
        }
    }

    @keyframes slide2 {
        0% {
            transform: translateX(0);
        }

        100% {
            transform: translateX(-200%);
        }
    }
`