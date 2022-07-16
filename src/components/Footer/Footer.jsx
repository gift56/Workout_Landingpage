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
                    <a href="#Home"><img src={Github} alt="" /></a>
                    <a href="https://twitter.com/AsiughuE"><img src={Instagram} alt="" /></a>
                    <a href="#home"><img src={Linkedin} alt="" /></a>
                </div>
                <div className="logoF">
                    <img src={Logo} alt="" />
                </div>
            </div>
            <div className="blur blurF1"></div>
            <div className="blur blurF2"></div>
        </div>
    )
}

export default Footer
