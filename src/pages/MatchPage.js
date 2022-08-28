import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { MatchDetailCard } from '../components/MatchDetailCard';
import { MatchSmallCard } from '../components/MatchSmallCard';
import './MatchPage.scss'
import { YearSelector } from './YearSelector';

export const MatchPage= () => {
    const [match,setMatch] = useState();
    const {teamName,year} = useParams();
    useEffect(
()=>{
    const fetchMatches = async () =>{
        const reponse = await fetch('http://localhost:8080/team/'+teamName+'/matches?year='+year);
        const data = await reponse.json();
        setMatch(data);
    }
    fetchMatches();
},[teamName,year]
    );

if(!match|| !year) return <h1>Team Not found</h1>;
  return (
    <div className="MatchPage">
       <div className='yearSelector'>
            <h3>Select Year</h3>
            <YearSelector teamName={teamName}/>
       </div>
       <div>
       {/* <MatchDetailCard match={match[0]} teamName={teamName}/> */}
       <h1>Match Page</h1>
        {match.slice(1).map(match=>
            <MatchSmallCard match={match} teamName={teamName}/>
        )} 
                
       </div>
    </div>
  );
}
