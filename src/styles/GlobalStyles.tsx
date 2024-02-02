import { createGlobalStyle } from "styled-components";
import { MyTheme } from "./Themes.styled";

export const GlobalStyles = createGlobalStyle`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        background-color: ${MyTheme.colors.grey.dark};
    }
`