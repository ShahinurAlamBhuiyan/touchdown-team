import React, { useEffect, useState } from 'react';
import Teams from '../Teams/Teams';
import Header from '../Header/Header';

const Home = () => {
    const [teams, setTeams] = useState([])

    useEffect(() => {
        const url = 'https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League'
        fetch(url)
            .then(res => res.json())
            .then(data => setTeams(data.teams));
    }, [])

    return (
        <>
            <Header />
            <div className="container">
                <div className='row'>
                    {
                        teams.map(team => <Teams team={team}></Teams>)
                    }
                </div>
            </div>
        </>
    );
};

export default Home;