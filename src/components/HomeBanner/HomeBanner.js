import React from 'react';
import './HomeBanner.css'
import football from '../../images/football.ico'

const HomeBanner = () => {

    return (
        <div className="headerDiv container-fluid">
            <img className='footballLogo' src={football} alt="" />
            <div className='d-flex justify-content-center flex-wrap'>
                <p className='text-white' style={{ fontSize: '2.5rem', fontWeight: '900' }}><span style={{ color: 'red' }}>T</span>ouchdown</p>
                
                <p className='text-white' style={{ fontSize: '2.5rem', fontWeight: '900' }}><span style={{ color: 'red' }}>T</span>eam</p>
            </div>
        </div>
    );
};

export default HomeBanner;