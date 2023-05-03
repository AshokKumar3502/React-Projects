
import React from 'react'
import { useState } from "react";
import { useEffect } from "react";
import {
    MainContainer,
    ScoreText,
    ButtonsContainer,
    Button,
    Title,
    Description
} from './styledComponents'



const ScoreBoard = () => {
   const[score,setScore]=useState(0);
   useEffect(()=>{
    // document.title=`score:${score}`
    console.log("useeffect")
   })
  
   const onIncrement=()=>{
    setScore(prevScore=>prevScore+1)
    console.log("increment")
   }
   const onDecrement=()=>{
    setScore(prevScore=>prevScore-1)
   }


  return (
    <>
     <MainContainer>
      <Title>COUNTER APP </Title>
        <Description>From using useState Hook</Description>
     
  
<ScoreText>{score}</ScoreText>
< ButtonsContainer>
<Button type="button" onClick={onDecrement}>Decrease</Button>
<Button type="button" onClick={onIncrement}>Increase</Button>
</ButtonsContainer>
        
    </MainContainer>
    
    </>
  )
}

export default ScoreBoard

