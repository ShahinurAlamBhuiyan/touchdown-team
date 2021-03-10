import React from 'react';

const Footer = () => {
    const footerStyle = {
        color : 'lightgray',
        textAlign : 'center',
        paddingBottom: '1.2rem'
    }
    return (
        <div style={footerStyle}>
            <p style={{margin:'0'}}>&copy; All rights reserved by Shahin Bhuiyan, 2021</p>
        </div>
    );
};

export default Footer;