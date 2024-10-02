import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    padding: 0% 20%;
    height: 37rem;
    
    display: flex;
    flex-direction: column;
    gap: 4.5rem;
    align-items: center;
    justify-content: start;

    >  div:first-child {
        width: 75rem;
        display: flex;
        flex-direction: column;
        gap: 1.5rem;

        text-align: center;

        strong {
            font-size: 3rem;
            color: ${(props) => props.theme.COLORS.ORANGE_MAIN};
            letter-spacing: 1px;
        }

        p {
            font-size: 1.8rem;
            color: ${(props) => props.theme.COLORS.DARK_BLUE};
        }
    }

    > div:last-child {
        width: 16rem;
        height: 5rem;
    }
`