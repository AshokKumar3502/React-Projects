
import React from 'react'
import {
    HeaderContainer,
    HeaderElementsContainer,
    Logo,
  } from "./styledComponents"
  
  const Header = () =>{

    return(
    <HeaderContainer>
      <HeaderElementsContainer>
    
        <Logo
          src= {require("./Images/pngwing.com.png")}
          alt="api logo"
        />
      </HeaderElementsContainer>
    </HeaderContainer>
  )}
  
  export default Header
  