import React, { useState } from 'react';
import './header.css';
import { Link } from 'react-scroll';
import Logo from '../../assets/logo.png';
import Bars from '../../assets/bars.png';

const Header = () => {
    const mobile = window.innerWidth <= 768 ? true : false;

    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <div className='header'>
            <img src={Logo} alt="" className='logo' />
            {(menuOpen === false && mobile === true) ? (
                <div
                    style={{
                        background: 'var(--appColor)',
                        padding: '0.5rem',
                        borderRadius: '5px'
                    }}
                    onClick={() => setMenuOpen(true)}
                >
                    <img src={Bars} alt="" style={{
                        width: '1.5rem',
                        height: '1.5rem',
                        cursor: 'pointer'
                    }} />
                </div>
            ) : (
                <ul className='header-menu'>
                    <li onClick={() => setMenuOpen(false)}><Link>Home</Link></li>
                    <li onClick={() => setMenuOpen(false)}><Link>Programs</Link></li>
                    <li onClick={() => setMenuOpen(false)}><Link>Why us</Link></li>
                    <li onClick={() => setMenuOpen(false)}><Link>Plans</Link></li>
                    <li>
                        <Link
                            onClick={() => setMenuOpen(false)}
                            to='testimonial'
                            span={true}
                            smooth={true}
                        >Testimonials
                        </Link>
                    </li>
                </ul>
            )}

        </div>
    )
}

export default Header
