import React from 'react'
import Header from '../Header/Header';
import './hero.css';

const Hero = () => {
    return (
        <div className='hero'>
            <div className="leftH">
                <Header />
            </div>
            <div className="rightH">
                rightSide
            </div>
        </div>
    )
}

export default Hero
