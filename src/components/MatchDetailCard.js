import React from 'react';

export const MatchDetailCard= ({match,teamName}) => {
  var otherTeam;
  {match.team1===teamName?otherTeam=match.team2:otherTeam=match.team1}
  return (
    <div className="MatchDetailCard">
     <h3>Latest matches</h3>
     <h4>Match Details </h4>
     <h4> vs {otherTeam}</h4>  
    </div>
  );
}
