import React from 'react';
import { Link } from 'react-router-dom';
import './MatchDetailCard.scss'

export const MatchDetailCard = ({ match, teamName }) => {
  var otherTeam;
  { match.team1 === teamName ? otherTeam = match.team2 : otherTeam = match.team1 }
  const otherTeamRoute = '/teams/' + otherTeam
  const isMatchWon = teamName === match.matchWinner;
  return (
    <div className={isMatchWon? 'MatchDetailsCard won-card':'MatchDetailsCard lost-card'}>
      <div className=''>
        <h3>Latest matches</h3>
        <div className='vs'>
          <span>VS</span>
        </div>
        <h3><Link to={otherTeamRoute} >
          {otherTeam}
        </Link></h3>
        <h3 className='matchVenue' >at : {match.venue}</h3>
        <h3 className='matchDate' >Date : {match.date}</h3>
        <h3 className='matchResult' >{match.matchWinner} won by {match.resultMargin}
          {match.result}
        </h3>
      </div>
      <div className='additionDetails'>
        <h3> First Innings</h3>
        <p> {match.team1}</p>
        <h3>Second Innings</h3>
        <p> {match.team2}</p>
        <h3>Man of the Match</h3>
        <p> {match.playerOfMatch}</p>

      </div>
    </div >
  );
}
