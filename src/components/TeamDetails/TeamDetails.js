import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import maleImg from '../../images/malePlayer.png'
import femaleImg from '../../images/femalePlayer.png'
import DetailBanner from '../DetailBanner/DetailBanner'
import './TeamDetails.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faFlag, faFutbol, faMapMarkerAlt, faMars } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faYoutube, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const TeamDetails = () => {
    const [team, setTeam] = useState([])
    const { idTeam } = useParams();

    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${idTeam}`
        fetch(url)
            .then(res => res.json())
            .then(data => setTeam(data.teams[0]))
    }, [idTeam])
    console.log(team)
    const { strGender, strTeamBanner, strSport, strTeam, strDescriptionEN, intFormedYear, strTeamBadge, strStadiumThumb, strStadiumDescription, strTwitter, strYoutube, strFacebook, strInstagram, strCountry } = team;
    const buttonStyle = {
        backgroundColor: '#003B46',
        border: 'none',
        padding: '0.8rem 2rem',
        fontWeight: '900',
        fontSize: '1.5rem'
    }

    return (
        <>
            <DetailBanner strStadiumThumb={strStadiumThumb} strTeam={strTeam} strTeamBadge={strTeamBadge}></DetailBanner>

            <div className='detailContent'>
                <img className='img-fluid w-100' src={strTeamBanner} alt="" />
                <div className="container">
                    <div style={{ padding: '1.2rem 0px' }}>
                        <Link to='/home'>
                            <Button style={buttonStyle}><FontAwesomeIcon style={{ color: 'red' }} icon={faArrowLeft} />&nbsp; Home</Button>
                        </Link>
                    </div>
                    <div className='teamDetail'>
                        <div className="textBox">
                            <h3 style={{ color: 'red', fontWeight: '900', letterSpacing: '2px', fontSize: '2rem' }}>{strTeam}</h3>
                            <br />
                            <p><strong><FontAwesomeIcon style={{ color: 'red' }} icon={faMapMarkerAlt} /> &nbsp;Founded: {intFormedYear}</strong></p>
                            <p> <strong><FontAwesomeIcon style={{ color: 'red' }} icon={faFlag} /> &nbsp;Country: {strCountry}</strong></p>
                            <p><strong><FontAwesomeIcon style={{ color: 'red' }} icon={faFutbol} /> &nbsp;Sport Type: {strSport}</strong></p>
                            <p><strong><FontAwesomeIcon style={{ color: 'red' }} icon={faMars} /> &nbsp;Gender: {strGender}</strong></p>
                        </div>
                        <div className="d-flex justify-content-center flex-wrap">
                            {
                                strGender === 'Male' ? <img src={maleImg} alt="" /> : <img src={femaleImg} alt="" />
                            }
                        </div>
                    </div>
                    <div className='mt-3 description'>
                        <p>{strDescriptionEN}</p>
                        <br />
                        <p><strong>About Stadium : {strStadiumDescription}</strong></p>

                        <div className="socialIcons d-flex justify-content-center">
                            <a className="twitter" href={`https://${strTwitter}`} rel='noreferrer' target='_blank'><FontAwesomeIcon icon={faTwitter} /></a>
                            <a className="youtube" href={`https://${strYoutube}`} rel='noreferrer' target='_blank'><FontAwesomeIcon icon={faYoutube} /></a>
                            <a className="instagram" href={`https://${strInstagram}`} rel='noreferrer' target='_blank'><FontAwesomeIcon icon={faInstagram} /></a>
                            <a className="website" href={`https://${strFacebook}`} rel='noreferrer' target='_blank'><FontAwesomeIcon icon={faFacebook} /></a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TeamDetails;