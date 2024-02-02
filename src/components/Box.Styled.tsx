import styled from "styled-components";
import { MyTheme } from "../styles/Themes.styled";
export const Box = styled.div`
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
gap: 20px;
button {
  cursor: pointer;
}

@media ${MyTheme.media.tablet} {
    flex-direction: column;
}
`