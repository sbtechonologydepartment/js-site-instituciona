import styled from "styled-components";
import { IPropsTheme } from "../../styles/theme";

export const Container = styled.div<IPropsTheme>`
    position: relative;

    display: flex;
    flex-direction: column;
    align-items: center;

    height: 100vh;
    overflow: hidden;
`