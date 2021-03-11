import React from 'react';

const DetailBanner = (props) => {
    
    const detailBannerStyle = {
        fontWeight: '800',
        color: 'black',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '25rem',
        backgroundRepeat: 'no-repeat',
        backgroundImage: `linear-gradient(0deg, rgba(195, 184, 184, 0.4), rgba(224, 212, 212, 0.4)), url(${props.strStadiumThumb})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center '
    }
    return (
        <div className='detailDiv container-fluid' style={detailBannerStyle}>
            <img style={{ width: '14rem' }} src={props.strTeamBadge} alt="" />
            <h2 className='text-gray' style={{ fontSize: '2.5rem', fontWeight: '600' }}>&nbsp;{props.strTeam}</h2>
        </div>
    );
};

export default DetailBanner;