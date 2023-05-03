import LeaderBoardRow from '../LeaderBoardRow'

import {
  LeaderboardTableContainer,
  LeaderboardHeader,
  Rank,
  Name,
  Score,
  Language,
  TimeSpent,
} from './styledComponents'

const LeaderBoardTable = props => {
  const {leaderboardData} = props

  const renderLeaderboardHeader = () => (
    <LeaderboardHeader>
      <Rank>Rank</Rank>
      <Name>Name</Name>
      <Score>Score</Score>
      <Language>Language</Language>
      <TimeSpent>Time Spent</TimeSpent>
    </LeaderboardHeader>
  )

  return (
      <LeaderboardTableContainer>
        {renderLeaderboardHeader()}
        {leaderboardData.map(eachUser => (
          <LeaderBoardRow key={eachUser.id} userDetails={eachUser}></LeaderBoardRow>
        ))}
      </LeaderboardTableContainer>
  );
}

export default LeaderBoardTable

