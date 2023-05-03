import React from 'react'
import {
    HeaderContainer,
    HeaderElementsContainer,
    Logo,
} from './styledComponents'

const HeaderAPI = () => {
  return (
    <>
    <HeaderContainer>
    <HeaderElementsContainer>
      <Logo
        src={require("./Images/pngegg.png")}
        alt="nxt code logo"
      />
    </HeaderElementsContainer>
  </HeaderContainer>




    </>   
  )
}

export default HeaderAPI