import styled from 'styled-components'

export const MainContainer=styled.div`
display:flex;
flex-direction:column;
align-items:center;
background-color:#f2f2f2;
height:83.5vh;
padding-top:80px;
@media (min-width:127px) and (max-width: 468px) {
  height:100%;
}
`
export const NameInput=styled.input`
color: #1e293b;
font-size:16px;
width:80%;
height:45px;
border:1px solid white;
border-radius:4px;
padding-left: 16px;
max-width: 450px;
outline: none;
`

export const MsgContent = styled.p`
  text-align: center;
  color: #3a3d42;
  font-size: 30px;
  font-weight: 600;
  margin-top: 10px;
`

export const NameText = styled.span`
  color: #FF671F;
  font-weight: 700;
`
