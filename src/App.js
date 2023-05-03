import React from "react";
import VideoPlayer from "./componets/VideoPlayer";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GreetUser from "./componets/GreetUser";
import MainHeader from "./componets/MainHeader/MainHeader"
import Header from "./componets/Header";
import Comments from "./componets/Comments";
import ScoreBoard from "./componets/ScoreBoard";
import BmiCalculator from "./componets/BmiCalculator";
import HeaderAPI from "./componets/HeaderAPI";
import LeaderBoard from "./componets/LeaderBoard";
import Footer from "./componets/Footer/Footer";
import Food from "./componets/Food/Foodapp";
import ImageApp from "./componets/ImageApp/ImageApp";
import EmojiApp from "./componets/EmojiApp/EmojiApp";
import Views from "./componets/LeaderBoard/Views";
import "./App.css"
import { MainContainer,MainContaineryoutube, Title, Description } from "./styledComponents.js";


function App() {
  return (
    <>
    {/* <Router>
    <MainHeader/> */}
      {/* <GreetUser />
       <MainContainer>
      <Header />
      <VideoPlayer />
      <Comments />
      </MainContainer>
      <ScoreBoard />
      <BmiCalculator />
      
      <MainContainer>
        <HeaderAPI />
        <Title>CALLING API </Title>
        <Description>Showing Different Views Like Failure ,Inprogress,Success</Description>
        <LeaderBoard />
     <Views/>
      </MainContainer>
      <Food/> */}
      {/* <Routes>
      <Route path='/image' component={ImageApp} />
      
      </Routes>
      </Router> */}
      {/* <ImageApp/> */}
     {/* <EmojiApp/> */}
    {/* //  <Footer/> */}

     <Router>
      <MainHeader />
      <Routes>
        <Route path='/' exact element={<GreetUser/>} />
        <Route path="/youtube" element={   <MainContaineryoutube>
      <Header />
      <VideoPlayer />
      <Comments />
      </MainContaineryoutube>} />
        <Route path="/emoji" element={<EmojiApp />} />
        <Route path='/image' element={<ImageApp/>} />
        <Route path='/bmi' element={<BmiCalculator/>} />
        <Route path='/counter' element={<ScoreBoard/>} />
        <Route path='/api' element={  <MainContainer>
        <HeaderAPI />
        <Title>CALLING API </Title>
        <Description>Showing Different Views Like Failure ,Inprogress,Success</Description>
        <LeaderBoard />
     <Views/>
      </MainContainer>} />
        <Route path='/food' element={<Food/>} />
      </Routes>
      <Footer/>
    </Router>
  
    </>

  );
}

export default App;


