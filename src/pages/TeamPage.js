import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { MatchDetailCard } from '../components/MatchDetailCard';
import { MatchSmallCard } from '../components/MatchSmallCard';
import './TeamPage.scss';
import { PieChart } from 'react-minimal-pie-chart';
export const TeamPage = () => {
    const [team, setTeam] = useState();
    const { teamName } = useParams();
    useEffect(
        () => {
            const fetchMatches = async () => {
                const reponse = await fetch('http://localhost:8080/team/' + teamName);
                const data = await reponse.json();
                setTeam(data);
            }
            fetchMatches();
        }, [teamName]
    );
    if (!team || !team.teamName) return <h1>Team Not found</h1>;
    return (
        <div className="TeamPage">
            <div className='teamName'><h1>{team.teamName} </h1>
            </div>
            <div className='winLoss'>
                WIns/Lossess
                <PieChart
                    data={[
                        { title: 'Wins', value:team.totalWins , color: '#6ca76c' },
                        { title: 'Losses', value: team.totalMatches - team.totalWins, color: '#862626' },
                      
                    ]}
                />
            </div>
            <div className='matchDetails'>
                <MatchDetailCard match={team.matches[0]} teamName={teamName} />
            </div>

            {team.matches.slice(1).map(match =>
                <MatchSmallCard match={match} teamName={teamName} />
            )}
            <div>
               <Link to={"/teams/"+teamName+"/matches/"+process.env.REACT_APP_DATA_END_YEAR} >More</Link>
            </div>
        </div>
    );
}
