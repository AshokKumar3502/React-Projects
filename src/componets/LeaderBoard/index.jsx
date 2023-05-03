import React, { useEffect } from "react";
import { useState } from "react";
import { Audio } from "react-loader-spinner";
import LeaderBoardTable from "../LeaderBoardTable"
import { LeaderboardContainer, LoadingViewContainer,ErrorMessage} from "./styledComponents";

const LeaderBoard = () => {
  // Your code goes here...
  const apiStatusConstants = {
    initial: "INITIAL",
    inProgress: "IN_PROGRESS",
    success: "SUCCESS",
    failure: "FAILURE",
  };
  const [apiResponse, setapiResponse] = useState({
    status: apiStatusConstants.initial,
    data: null,
    errorMsg: null,
  });
  //we should not not use "async" here in useeffect
  useEffect(() => {

    const url = "https://apis.ccbp.in/leaderboard";
    const getLeaderBoardData = async () => {
      setapiResponse({
        status: apiStatusConstants.inProgress,
        data: null,
        errorMsg: null,
      });
     
    
      const options = {
        method: "GET",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJhaHVsIiwicm9sZSI6IlBSSU1FX1VTRVIiLCJpYXQiOjE2MjMwNjU1MzJ9.D13s5wN3Oh59aa_qtXMo3Ec4wojOx0EZh8Xr5C5sRkU",
        },
      };
      const response = await fetch(url, options);
      const responseData = await response.json();

      if(response.ok){
        setapiResponse((prevApiResponse)=>({
          ...prevApiResponse,
          status:apiStatusConstants.success,
          data:responseData,
        }))
      }
      else{  
        setapiResponse((prevApiResponse)=>({
        ...prevApiResponse,
        status:apiStatusConstants.failure,
        errorMsg:responseData.error_msg,

      }))
    }};
    getLeaderBoardData();
  },[apiStatusConstants.failure, apiStatusConstants.inProgress, apiStatusConstants.success]);
  const renderLoadingView = () => (
    <LoadingViewContainer>
      <Audio
        height="80"
        width="80"
        radius="9" 
        color="red"
        ariaLabel="three-dots-loading"
        wrapperStyle
        wrapperClass
      />
    </LoadingViewContainer>
  );
  const renderSuccessView = () => {
    const {data} = apiResponse
const formattedLeaderboardData = data.leaderboard_data.map(eachUser => ({
  id: eachUser.id,
  rank: eachUser.rank,
  name: eachUser.name,
  profileImgUrl: eachUser.profile_image_url,
  score: eachUser.score,
  language: eachUser.language,
  timeSpent: eachUser.time_spent,
}))

   return <LeaderBoardTable  leaderboardData={formattedLeaderboardData}/>
  };
  const renderFailureView = () => {
const {errorMsg} = apiResponse
return <ErrorMessage>{errorMsg}</ErrorMessage>
  };
  const renderLeaderboard = () => {
    // Your code goes here...

    const { status } = apiResponse;
    switch (status) {
      case apiStatusConstants.inProgress:
        return renderLoadingView();
      case apiStatusConstants.success:
        return renderSuccessView();
      case apiStatusConstants.failure:
        return renderFailureView();
      default:
        return null;
    }
  };

  return <LeaderboardContainer>{renderLeaderboard()}</LeaderboardContainer>;
};

export default LeaderBoard;
