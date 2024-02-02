import React from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import { StyledBtn } from './components/Button.Styled';
import { Box } from './components/Box.Styled';
import { Menu } from './components/Menu.Styled';
import { MyTheme } from './styles/Themes.styled';



function App() {
  return (
    <div className="App">
      <Menu>
    <ul>
      <li><a href="">menu item 1</a></li>
      <li><a href="">menu item 2</a></li>
      <li><a href="">menu item 3</a></li>
    </ul>
      </Menu>
      <Box>
        {/* <StyledBtn color="red" fontSize="20px">Hello</StyledBtn>
        <StyledBtn>Button</StyledBtn> */}
        <StyledBtn color={MyTheme.colors.primary} btnType={"primary"} active>Hello</StyledBtn>
        <StyledBtn color={MyTheme.colors.secondary} btnType={"outlined"}>Hello2</StyledBtn>
      </Box>
    </div>
  );
}

export default App;






