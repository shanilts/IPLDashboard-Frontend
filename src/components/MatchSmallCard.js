import React from 'react';
import { Link } from 'react-router-dom';
import './MatchSmallCard.scss'

export const MatchSmallCard= ({match,teamName}) => {
  var otherTeam;
  match.team1===teamName?otherTeam=match.team2:otherTeam=match.team1
  const otherTeamRoute = '/teams/'+otherTeam
  const isMatchWon = teamName === match.matchWinner;
  return (
    <div className={isMatchWon? 'MatchSmallCard won-card':'MatchSmallCard lost-card'}>
       <span className='vs'>VS</span>
         <h1><Link to={otherTeamRoute} > {otherTeam}
          </Link>
        </h1>
           <h4>Date : {match.date}</h4>
    </div>
  );
}
