import React from 'react';
import './footer.css';
import Github from '../../assets/github.png';
import Twitter from '../../assets/twitter.png';
import Linkedin from '../../assets/linkedin.png';
import Logo from '../../assets/logo.png';
import { Link } from 'react-scroll';

const Footer = () => {
    return (
        <div className='footerContainer'>
            <hr />
            <div className="footer">
                <div className="socialLinks">
                    <a
                        href="https://github.com/gift56"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src={Github} alt="" />
                    </a>
                    <a
                        href="https://twitter.com/AsiughuE"
                        target="_blank"
                        rel="noopener noreferrer">
                        <img src={Twitter} alt="" />
                    </a>
                    <a href="https://www.linkedin.com/mwlite/in/efe-gift-109120241"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src={Linkedin} alt="" />
                    </a>
                </div>
                <div className="logoF">
                    <Link
                        to='home'
                        spy={true}
                        smooth={true}
                    >
                        <img src={Logo} alt="" />
                    </Link>
                </div>
            </div>
            <div className="blur blurF1"></div>
            <div className="blur blurF2"></div>
        </div>
    )
}

export default Footer
