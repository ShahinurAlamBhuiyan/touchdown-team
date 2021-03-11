import React from 'react';
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const Teams = (props) => {
    const { idTeam, strTeam, strTeamBadge, strSport } = props.team;
    const cardStyle = {
        backgroundColor: '#003B46'
    }
    return (
        <div className="col-md-3 my-3">
            <Card style={cardStyle}>
                <Card.Img style={{padding:'10px'}} src={strTeamBadge} />
                <Card.Body>
                    <div className="text-center">
                        <Card.Title style={{color:'red', fontWeight:'800',letterSpacing:'1px'}}>{strTeam}</Card.Title>
                        <Card.Subtitle style={{color:'white'}} className="mb-2">{strSport}</Card.Subtitle>

                        <Link to={`/team/${idTeam}`}>
                            <Button variant="warning">Explore <FontAwesomeIcon icon={faArrowRight}/></Button>
                        </Link>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Teams;