import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 83.5vh;
  background-color:rgba(153, 205, 50, 0.07);
`

export const ScoreText = styled.p`
  color: #2e3e4e;
  font-size: 80px;
  font-family: 'Roboto';
  margin-top: 0px;
  margin-bottom: 10px;
  @media screen and (min-width: 576px) {
    font-size: 100px;
  }
`

export const ButtonsContainer = styled.div``

export const Button = styled.button`
  color: #ffffff;
  background-color: #7c69e9;
  font-size: 14px;
  font-weight: 400;
  font-family: 'Roboto';
  border: none;
  border-radius: 4px;
  margin: 6px;
  padding: 8px 12px 8px 12px;
  cursor: pointer;
  outline: none;

  @media screen and (min-width: 576px) {
    font-size: 18px;
    margin: 10px;
    padding: 8px 18px 8px 18px;
  }
`
export const Title = styled.h1`
text-align: center;
color: #7c69e9;
font-family: 'Roboto';
font-weight: 600;
font-size: 36px;
margin: 0px;
margin-top: 10px;
@media screen and (min-width: 768px) {
  font-size: 46px;
}
`

export const Description = styled.p`
text-align: center;
color: black;
font-family: 'Roboto';
font-size: 16px;
margin-bottom: 10px;
@media screen and (min-width: 768px) {
  font-size: 20px;
}
`
