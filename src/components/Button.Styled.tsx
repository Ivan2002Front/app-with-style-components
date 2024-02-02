import styled from "styled-components"
import { css } from "styled-components"

type StyledBtnPropsType = {
  color?: string
  fontSize?: string
  btnType: "primary" | "outlined"
  active?: boolean
}

export const StyledBtn = styled.button<StyledBtnPropsType>`
  border: none;
  /* background-color: red; */
  /* background-color: ${props => props.color || "#584646"}; */
  padding: 10px 20px;
  border-radius: 5px;
  /* color: snow; */
  /* font-size: 2rem; */
  font-size: ${props => props.fontSize || "2rem"};
  font-weight: bold;


  //outlined
  ${props => props.btnType === "outlined" && css<StyledBtnPropsType>`
  border: 2px solid ${props => props.color || "#584646"};
  color: ${props => props.color || "#584646"};
  background-color: transparent;
  &:hover {
    border-color: #4053cc;
    color: #4053cc
  }
  `}

  //primary
  ${props => props.btnType === "primary" && css<StyledBtnPropsType>`
  background-color: ${props => props.color || "#ff5252"};
  color: snow;
  &:hover {
    background-color: blue;
  }
  `}
  ${props => props.active && css<StyledBtnPropsType>`
  box-shadow: 5px 5px 5px 5px #191a207f;
  `}
  
`