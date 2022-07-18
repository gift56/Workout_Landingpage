import React, { useEffect, useState } from 'react';
import './header.css';
import { Link } from 'react-scroll';
import Logo from '../../assets/logo.png';
import Bars from '../../assets/bars.png';
import Times from '../../assets/times.png'


const Header = () => {
    const mobile = window.innerWidth <= 914 ? true : false;

    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const resetMenu = (e) => {
            console.log(e)
            if (e.path[0].tagName !== 'IMG') {
                setMenuOpen(false)
            }
        };

        document.body.addEventListener('click', resetMenu)
        return () => document.body.removeEventListener('click', resetMenu)
    }, []);

    return (
        <div className='header'>
            <img src={Logo} alt="" className='logo' />
            {(menuOpen === false && mobile === true) ? (
                <button
                    style={{
                        background: 'var(--appColor)',
                        padding: '0.5rem',
                        borderRadius: '5px',
                        border: 'none'
                    }}
                    onClick={() => setMenuOpen(true)}
                >
                    <img src={Bars} alt="" style={{
                        width: '1.5rem',
                        height: '1.5rem',
                        cursor: 'pointer'
                    }} className='Bar' />
                </button>
            ) : (
                <ul className='header-menu' id='navMenu'>
                    <li>
                        <Link
                            onClick={() => setMenuOpen(false)}
                            activeClass='active'
                            to='home'
                            spy={true}
                            smooth={true}
                        >Home</Link>
                    </li>
                    <li>
                        <Link
                            onClick={() => setMenuOpen(false)}
                            to='programs'
                            spy={true}
                            smooth={true}
                        >Programs</Link></li>
                    <li>
                        <Link
                            to='Reasons'
                            onClick={() => setMenuOpen(false)}
                            spy={true}
                            smooth={true}
                        >Why us</Link></li>
                    <li>
                        <Link
                            to='plans'
                            onClick={() => setMenuOpen(false)}
                            spy={true}
                            smooth={true}
                        >Plans</Link></li>
                    <li>
                        <Link
                            onClick={() => setMenuOpen(false)}
                            to='testimonial'
                            spy={true}
                            smooth={true}
                        >Testimonials
                        </Link>
                    </li>
                    <div className='closeIcon' onClick={() => setMenuOpen(false)}>
                        <img src={Times} alt="" style={{
                            width: '2rem',
                            height: '1.5rem',
                            cursor: 'pointer',
                        }} />
                    </div>
                </ul>
            )}

        </div>
    )
}

export default Header
