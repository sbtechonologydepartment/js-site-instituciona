import { createGlobalStyle } from "styled-components";
import { IPropsTheme } from "./theme";

export const GlobalStyles = createGlobalStyle<IPropsTheme>`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    :root {
        font-size: 62.5%;
        font-family: "Sora", sans-serif;
    }

    body {
        background-color: ${(props) => props.theme.COLORS.GRAY};
    }

    a {
        text-decoration: none;
        cursor: pointer;
    }

    button {
        cursor: pointer;
    }
`