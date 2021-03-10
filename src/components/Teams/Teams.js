
import React from 'react';
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const Teams = (props) => {
    const { idTeam, strTeam, strTeamBadge, strSport } = props.team;
    return (
        <div className="col-md-3 my-3">
            <Card>
                <Card.Img style={{marginTop:'10px'}} src={strTeamBadge} />
                <Card.Body>
                    <div className="text-center">
                        <Card.Title>{strTeam}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{strSport}</Card.Subtitle>

                        <Link to={`/team/${idTeam}`}>
                            <Button variant="danger">Explore <FontAwesomeIcon icon={faArrowRight}/></Button>
                        </Link>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Teams;