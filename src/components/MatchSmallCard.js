import React from 'react';
import { Link } from 'react-router-dom';

export const MatchSmallCard= ({match,teamName}) => {
  var otherTeam;
  match.team1===teamName?otherTeam=match.team2:otherTeam=match.team1
  const otherTeamRoute = '/teams/'+otherTeam
  return (
    <div className="MatchSmallCard">
         <p>vs
          <Link to={otherTeamRoute} >
          {otherTeam}
          </Link>
           </p>
    </div>
  );
}
