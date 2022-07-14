import React from 'react';
import './footer.css';
import Github from '../../assets/github.png';
import Instagram from '../../assets/instagram.png';
import Linkedin from '../../assets/linkedin.png';
import Logo from '../../assets/logo.png';

const Footer = () => {
    return (
        <div className='footerContainer'>
            <hr />
            <div className="footer">
                <div className="socialLinks">
                    <img src={Github} alt="" />
                    <img src={Instagram} alt="" />
                    <img src={Linkedin} alt="" />
                </div>
                <div className="logoF">
                    <img src={Logo} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Footer
