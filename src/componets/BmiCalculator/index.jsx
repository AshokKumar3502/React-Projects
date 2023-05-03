import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import "./index.css"

import {
    MainContainer,
    Title,
    BmiLevelsImage,
    CardContainer,
    MeasurementsContainer,
    MeasurementCard,
    Measurement,
    MeasurementValue,
    Unit,
    ButtonsContainer,
    Button,
    ResultContent,
    ResultText,

}
from "./styledComponents"

const getBmi = (height, weight) => {
    const heightInMeters = height / 100
    const bmi = weight / heightInMeters ** 2
    return bmi.toFixed(2)
  }
  
  const BmiCalculator = () => {
    const storedHeight=JSON.parse(localStorage.getItem('height'))
    const storedWeight=JSON.parse(localStorage.getItem('weight'))
    const [height, setHeight] = useState(storedHeight!==null ? storedHeight:170 )
    const [weight, setWeight] = useState(storedWeight!==null ? storedWeight:60)
  
    useEffect(() => {
      // document.title = `Your BMI: ${getBmi(height, weight)}`
     console.log("tittle is updated")
    },[height,weight])
  
    useEffect(() => {
    
      localStorage.setItem('height',JSON.stringify(height))
      console.log("height is stored")
   
    },[height])
    useEffect(() => {
   
      localStorage.setItem('weight',JSON.stringify(weight))
      console.log("weight is stored")
    },[weight])
    
    const onIncrementWeight = () => {
      setWeight(prevWeight => prevWeight + 1)
    }
  
    const onDecrementWeight = () => {
      setWeight(prevWeight => prevWeight - 1)
    }
  
    const onIncrementHeight = () => {
      setHeight(prevHeight => prevHeight + 1)
    }
  
    const onDecrementHeight = () => {
      setHeight(prevHeight => prevHeight - 1)
    }


  return (
    <>
    <MainContainer>
        <Title>CHECK YOUR BMI STATUS
        </Title>
        <BmiLevelsImage
          // src="https://assets.ccbp.in/frontend/hooks/bmi-levels-img.png"
          // src='https://img.freepik.com/free-vector/gradient-bmi-infographic_23-2150143471.jpg'
          src={require("../BmiCalculator/images/bmiImage.jpg")}
          alt="bmi levels"/>
           <CardContainer>
        <MeasurementsContainer>
          <MeasurementCard>
            <Measurement>Height</Measurement>
            <MeasurementValue>
              {height}
              <Unit>cms</Unit>
            </MeasurementValue>
            <ButtonsContainer>
              <Button onClick={onDecrementHeight}>-</Button>
              <Button onClick={onIncrementHeight}>+</Button>
            </ButtonsContainer>
          </MeasurementCard>
          <MeasurementCard>
            <Measurement>Weight</Measurement>
            <MeasurementValue>
              {weight}
              <Unit>kgs</Unit>
            </MeasurementValue>
            <ButtonsContainer>
              <Button onClick={onDecrementWeight}>-</Button>
              <Button onClick={onIncrementWeight}>+</Button>
            </ButtonsContainer>
          </MeasurementCard>
        </MeasurementsContainer>
        <ResultContent>
          YOUR BMI : <ResultText>{getBmi(height, weight)}</ResultText>
        </ResultContent>
      </CardContainer>
    </MainContainer>
    </>
  )
}



export default BmiCalculator