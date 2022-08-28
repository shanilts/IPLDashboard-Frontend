import React, { useEffect, useState } from 'react'
import TeamTile from '../components/TeamTile';

export default function HomePage() {
    const [teams, setTeams] = useState();

    useEffect(
        () => {
            const fetchTeam = async () => {
                const reponse = await fetch('http://localhost:8080/team/');
                const data = await reponse.json();
                setTeams(data);
            }
            fetchTeam();
        }, []
    );

if(!teams) return <h1>Team Not found</h1>;
  return (
    <div className='HomePAge'>
        <div className='header-section'>
            <h1 className='app-name'>
                IPL DashBoards
            </h1>
        </div>
        <div className='teamGrid'>
            {teams.map(team=> <TeamTile teamName={team.teamName}/>)}
            
        </div>
    </div>
  )
}
