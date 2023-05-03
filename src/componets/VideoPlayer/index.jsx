import React from "react";
import ReactPlayer from 'react-player'
import {
  VideoPlayerContainer,
  VideoTitle,
  HorizontalLine,
  VideoStats,
  Title,
  Description
} from "./styledComponents";

const videoUrl = 'https://www.youtube.com/watch?v=w7ejDZ8SWv8'


const VideoPlayer = () => {
  return (
    <>

      <VideoPlayerContainer>
      <Title>ADDING COMMENTS TO  <Description> TO YOUTUBE VIDEO </Description> </Title>
      
        <ReactPlayer
          url={videoUrl}
          controls
          width="100%"
          height="70vh"
          className="video-player"
        />
        <VideoTitle>Big Buck Bunny</VideoTitle>
        <VideoStats>8,100,195 views - May 29, 200</VideoStats>
        <HorizontalLine />
      </VideoPlayerContainer>
    </>
  );
};

export default VideoPlayer;

