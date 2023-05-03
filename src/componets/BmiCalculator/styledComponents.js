import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color:lightblue;
  padding-top: 60px;
  padding-bottom: 80px;
  min-height: 100vh;
`

export const Title = styled.h1`
  text-align: center;
  color: #f54b2a;
  
  font-family: 'Roboto';
  font-size: 32px;
  font-weight: 600;
  margin: 0px;
  @media (min-width: 768px) {
    font-size: 40px;
  }
`

export const BmiLevelsImage = styled.img`
  width: 90%;
  height:400px;
  margin-top: 5px;
  margin-bottom: 5px;
  @media (min-width: 768px) {
    width: 80%;
    margin-top: 40px;
    margin-bottom: 45px;
    max-width: 700px;
  }
`

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #697de0;
  width: 90%;
  border-radius: 8px;
  padding: 30px 35px;
  max-width: 500px;
`

export const MeasurementsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

export const MeasurementCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color:#f54b2a;
  width: 46.5%;
  border-radius: 10px;
  margin:2px;
  padding: 30px;
  @media (min-width:127px) and (max-width: 468px) {
    width: 48%;
  border-radius: 5px;
  margin:1px;
  padding: 10px;}
`

export const Measurement = styled.p`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 24px;
  font-weight: 500;
  margin: 0px;
  margin-bottom: 15px;
`

export const MeasurementValue = styled.p`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 52px;
  font-weight: 600;
  margin-top: 0px;
  margin-bottom: 0px;
`

export const Unit = styled.span`
  font-size: 20px;
`

export const ButtonsContainer = styled.div`
  display: flex;
  margin-top: 5px;
  margin-bottom: 10px;
  padding-left: 20px;
  padding-right: 20px;
`

export const Button = styled.button`
  text-align: center;
  color: #0ee9ed;
  background-color: black;
  font-size: 25px;
  width: 40px;
  height: 40px;
  border: 2px solid white;
  border-radius: 20px;
  margin-right: 20px;
  cursor: pointer;
  outline: none;
  

`

export const ResultContent = styled.p`
  color: black;
  font-family: 'Roboto';
  font-size: 36px;
  font-weight: 400;
  margin-bottom: 10px;
  @media (min-width:127px) and (max-width: 468px) {
    text-align:center;
  }
`

export const ResultText = styled.span`
  font-size: 56px;
  font-weight: 700;
  color:	#ffff00;
`
