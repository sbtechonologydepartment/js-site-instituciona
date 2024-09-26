import { createGlobalStyle } from "styled-components";
import { IPropsTheme } from "./theme";

export const GlobalStyles = createGlobalStyle<IPropsTheme>`
    html {
        scroll-behavior: smooth;
    }

    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    [data-sonner-toast] {
        min-height: 50px; /* Ajuste a altura mínima conforme necessário */
        padding: 16px; /* Ajuste o padding */
    }

    :root {
        font-size: 62.5%;
        font-family: "Sora", sans-serif;
    }

    body {
        background-color: ${(props) => props.theme.COLORS.GRAY};
        overflow-x: hidden;
    }

    a {
        text-decoration: none;
        cursor: pointer;
    }

    button {
        cursor: pointer;
    }
`