import React, { useEffect, useState } from 'react';
import { MatchDetailCard } from '../components/MatchDetailCard';
import { MatchSmallCard } from '../components/MatchSmallCard';

export const TeamPage= () => {
    const [team,setTeam] = useState();

    useEffect(
()=>{
    const fetchMatches = async () =>{
        const reponse = await fetch('http://localhost:8080/team/Kings XI Punjab');
        const data = await reponse.json();
        setTeam(data);
    }
    fetchMatches();
},[]
    );
if(!team) return null;
  return (
    <div className="TeamPage">
       <h1>{team.teamName} </h1>
       <MatchDetailCard match={team.matches[0]}/>
        {team.matches.slice(1).map(match=>
            <MatchSmallCard match={match}/>
        )} 
    </div>
  );
}
